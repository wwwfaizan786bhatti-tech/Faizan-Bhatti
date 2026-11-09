/**
 * Utility to optimize, compress, and upload client screenshots/images
 * Prevents localStorage quota exceeded errors and network 413 payload errors
 */
export async function optimizeAndUploadImage(file: File, label: string = 'ad_screenshot'): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const rawDataUrl = e.target?.result as string;
      if (!rawDataUrl) {
        return reject(new Error('Failed to read image file.'));
      }

      const img = new Image();
      img.onload = async () => {
        try {
          const maxDimension = 1400;
          let width = img.width;
          let height = img.height;

          if (width > maxDimension || height > maxDimension) {
            if (width > height) {
              height = Math.round((height * maxDimension) / width);
              width = maxDimension;
            } else {
              width = Math.round((width * maxDimension) / height);
              height = maxDimension;
            }
          }

          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            // Fallback to raw data url
            return resolve(rawDataUrl);
          }

          // Fill white/dark background in case of transparent png to avoid black artifact
          ctx.fillStyle = '#0B0F1E';
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);

          // Compress to lightweight JPEG/WebP
          const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);

          // Try uploading to server endpoint to get a static URL
          try {
            const res = await fetch('/api/upload-image', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                dataUrl: compressedDataUrl,
                filename: label.replace(/\s+/g, '_').toLowerCase()
              })
            });

            if (res.ok) {
              const data = await res.json();
              if (data.success && data.url) {
                return resolve(data.url);
              }
            }
          } catch {
            // Network fallback
          }

          // Return compressed data URL if server upload endpoint is unavailable
          resolve(compressedDataUrl);
        } catch (err) {
          // If canvas fails, fallback to rawDataUrl
          resolve(rawDataUrl);
        }
      };

      img.onerror = () => {
        reject(new Error('Could not process this image format.'));
      };

      img.src = rawDataUrl;
    };

    reader.onerror = () => {
      reject(new Error('Failed reading file from device.'));
    };

    reader.readAsDataURL(file);
  });
}
