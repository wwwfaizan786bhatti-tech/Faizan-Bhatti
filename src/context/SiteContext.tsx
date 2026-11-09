import React, { createContext, useContext, useState, useEffect } from 'react';
import { SITE_CONFIG, PricingPackage, ServiceItem, GalleryItem } from '../config/siteConfig';

export interface SiteData {
  brand: typeof SITE_CONFIG.brand;
  contact: typeof SITE_CONFIG.contact;
  pricingPackages: PricingPackage[];
  services: ServiceItem[];
  adGallery: GalleryItem[];
  coreExpertise: typeof SITE_CONFIG.coreExpertise;
  portfolio: typeof SITE_CONFIG.portfolio;
  caseStudies: typeof SITE_CONFIG.caseStudies;
  whyChoose: typeof SITE_CONFIG.whyChoose;
  testimonials: typeof SITE_CONFIG.testimonials;
  partnerBrands: typeof SITE_CONFIG.partnerBrands;
  blogPosts: typeof SITE_CONFIG.blogPosts;
  faqs: typeof SITE_CONFIG.faqs;
}

interface SiteContextType {
  siteData: SiteData;
  adminOpen: boolean;
  openAdmin: () => void;
  closeAdmin: () => void;
  saveSiteData: (updated: Partial<SiteData>) => void;
  resetSiteData: () => void;
}

const STORAGE_KEY = 'faizan_bhatti_site_content_v1';

const defaultSiteData: SiteData = {
  brand: SITE_CONFIG.brand,
  contact: SITE_CONFIG.contact,
  pricingPackages: SITE_CONFIG.pricingPackages,
  services: SITE_CONFIG.services,
  adGallery: SITE_CONFIG.adGallery,
  coreExpertise: SITE_CONFIG.coreExpertise,
  portfolio: SITE_CONFIG.portfolio,
  caseStudies: SITE_CONFIG.caseStudies,
  whyChoose: SITE_CONFIG.whyChoose,
  testimonials: SITE_CONFIG.testimonials,
  partnerBrands: SITE_CONFIG.partnerBrands,
  blogPosts: SITE_CONFIG.blogPosts,
  faqs: SITE_CONFIG.faqs,
};

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteData, setSiteData] = useState<SiteData>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...defaultSiteData, ...parsed };
      }
    } catch {
      // Fallback
    }
    return defaultSiteData;
  });

  const [adminOpen, setAdminOpen] = useState(false);

  // Sync with server-side /api/site-content if available
  useEffect(() => {
    fetch('/api/site-content')
      .then((res) => res.json())
      .then((data) => {
        if (data.hasCustomContent && data.content) {
          setSiteData((prev) => ({ ...prev, ...data.content }));
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data.content));
          } catch {}
        }
      })
      .catch(() => {});
  }, []);

  const openAdmin = () => setAdminOpen(true);
  const closeAdmin = () => setAdminOpen(false);

  const saveSiteData = (updated: Partial<SiteData>) => {
    const merged = { ...siteData, ...updated };
    setSiteData(merged);

    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch {}

    // Save to server
    fetch('/api/site-content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(merged),
    }).catch(() => {});
  };

  const resetSiteData = () => {
    setSiteData(defaultSiteData);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}

    fetch('/api/reset-site-content', { method: 'POST' }).catch(() => {});
  };

  return (
    <SiteContext.Provider
      value={{
        siteData,
        adminOpen,
        openAdmin,
        closeAdmin,
        saveSiteData,
        resetSiteData,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
