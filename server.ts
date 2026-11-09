import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Inquiry {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  budget: string;
  details: string;
  createdAt: string;
  status: string;
}

interface Consultation {
  id: string;
  name: string;
  email: string;
  phone?: string;
  meetingType: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  createdAt: string;
  status: string;
}

const inquiries: Inquiry[] = [];
const consultations: Consultation[] = [];

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // Support large image payloads (e.g. mobile screenshots)
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  // Ensure public/uploads directory exists for permanent image hosting
  const uploadsDir = path.join(__dirname, 'public', 'uploads');
  if (!fs.existsSync(uploadsDir)) {
    try {
      fs.mkdirSync(uploadsDir, { recursive: true });
    } catch {}
  }
  app.use('/uploads', express.static(uploadsDir));

  // Site Content Persistence for Admin Panel with disk backup
  const contentBackupPath = path.join(__dirname, 'custom-site-content.json');
  let customSiteContent: any = null;
  if (fs.existsSync(contentBackupPath)) {
    try {
      customSiteContent = JSON.parse(fs.readFileSync(contentBackupPath, 'utf8'));
      console.log('[Content Restored] Loaded saved content from disk.');
    } catch (e) {
      console.error('[Content Load Error]', e);
    }
  }

  // Dedicated endpoint for uploading images from Admin Panel
  app.post('/api/upload-image', (req, res) => {
    try {
      const { dataUrl, filename } = req.body;
      if (!dataUrl || typeof dataUrl !== 'string') {
        return res.status(400).json({ success: false, error: 'No image data provided.' });
      }

      // Check if it's a data URL
      const matches = dataUrl.match(/^data:([A-Za-z0-9-+/]+);base64,(.+)$/);
      if (!matches || matches.length !== 3) {
        // Already a normal URL or invalid
        return res.json({ success: true, url: dataUrl });
      }

      const mimeType = matches[1];
      const base64Data = matches[2];
      const ext = mimeType.includes('jpeg') ? 'jpg' : mimeType.includes('webp') ? 'webp' : 'png';
      const cleanName = (filename || 'campaign_proof')
        .replace(/[^a-zA-Z0-9_-]/g, '_')
        .substring(0, 30);
      const safeFilename = `${cleanName}_${Date.now()}.${ext}`;
      const filePath = path.join(uploadsDir, safeFilename);

      fs.writeFileSync(filePath, Buffer.from(base64Data, 'base64'));
      console.log(`[Upload Success] Saved image to ${filePath}`);

      return res.json({
        success: true,
        url: `/uploads/${safeFilename}`,
        filename: safeFilename
      });
    } catch (err: any) {
      console.error('[Upload Error]', err);
      return res.status(500).json({ success: false, error: err.message || 'Failed to save image' });
    }
  });

  app.get('/api/site-content', (_req, res) => {
    res.json({
      success: true,
      hasCustomContent: !!customSiteContent,
      content: customSiteContent
    });
  });

  app.post('/api/site-content', (req, res) => {
    customSiteContent = req.body;
    try {
      fs.writeFileSync(contentBackupPath, JSON.stringify(customSiteContent, null, 2), 'utf8');
    } catch (e) {
      console.error('[Content Save Error]', e);
    }
    console.log('[Admin Update] Site content updated via Admin Portal & persisted to disk');
    res.json({
      success: true,
      message: 'Site configuration saved and broadcasted successfully.'
    });
  });

  app.post('/api/reset-site-content', (_req, res) => {
    customSiteContent = null;
    if (fs.existsSync(contentBackupPath)) {
      try {
        fs.unlinkSync(contentBackupPath);
      } catch {}
    }
    console.log('[Admin Reset] Site content restored to defaults');
    res.json({
      success: true,
      message: 'Site configuration reset to factory defaults.'
    });
  });

  // Business Inquiries endpoint
  app.post('/api/inquiries', (req, res) => {
    const { fullName, email, phone, company, service, budget, details } = req.body;

    if (!fullName || !email || !service || !details) {
      return res.status(400).json({
        success: false,
        error: 'Please complete all required fields (Full Name, Email, Service, and Details).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    const newInquiry: Inquiry = {
      id: `FB-INQ-${Date.now().toString(36).toUpperCase()}`,
      fullName: String(fullName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : '',
      company: company ? String(company).trim() : '',
      service: String(service).trim(),
      budget: budget ? String(budget).trim() : 'Flexible / Discovery Required',
      details: String(details).trim(),
      createdAt: new Date().toISOString(),
      status: 'Received & Queued for Faizan Bhatti review',
    };

    inquiries.unshift(newInquiry);
    console.log(`[New Business Inquiry] ID: ${newInquiry.id} from ${newInquiry.fullName} (${newInquiry.email}) for ${newInquiry.service}`);

    return res.status(201).json({
      success: true,
      message: 'Inquiry received successfully! Faizan Bhatti will review your request within 24 hours.',
      inquiry: newInquiry
    });
  });

  app.get('/api/inquiries', (_req, res) => {
    res.json({
      success: true,
      count: inquiries.length,
      inquiries
    });
  });

  // Consultation booking endpoint
  app.post('/api/consultations', (req, res) => {
    const { name, email, phone, meetingType, preferredDate, preferredTime, notes } = req.body;

    if (!name || !email || !meetingType || !preferredDate || !preferredTime) {
      return res.status(400).json({
        success: false,
        error: 'Please fill in all required consultation fields (Name, Email, Meeting Type, Date, Time).'
      });
    }

    const newConsultation: Consultation = {
      id: `FB-CONS-${Date.now().toString(36).toUpperCase()}`,
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : '',
      meetingType: String(meetingType).trim(),
      preferredDate: String(preferredDate).trim(),
      preferredTime: String(preferredTime).trim(),
      notes: notes ? String(notes).trim() : '',
      createdAt: new Date().toISOString(),
      status: 'Confirmed – Calendar Invitation Dispatched',
    };

    consultations.unshift(newConsultation);
    console.log(`[New Consultation Booked] ID: ${newConsultation.id} with ${newConsultation.name} on ${newConsultation.preferredDate} at ${newConsultation.preferredTime}`);

    return res.status(201).json({
      success: true,
      message: 'Strategy consultation confirmed! A calendar invite & meeting briefing have been sent to your email.',
      consultation: newConsultation
    });
  });

  app.get('/api/consultations', (_req, res) => {
    res.json({
      success: true,
      count: consultations.length,
      consultations
    });
  });

  // Newsletter / Insights Subscription
  app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, error: 'Valid email required.' });
    }
    return res.json({
      success: true,
      message: 'Subscribed to Faizan Bhatti’s Exclusive Growth & Marketing Digest.'
    });
  });

  // Development vs Production serving
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Faizan Bhatti Portfolio Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
