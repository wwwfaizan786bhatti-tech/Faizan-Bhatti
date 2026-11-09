import React, { useState, useEffect } from 'react';
import {
  Lock,
  Unlock,
  Save,
  RotateCcw,
  X,
  Phone,
  Mail,
  Linkedin,
  DollarSign,
  Briefcase,
  Layers,
  Inbox,
  CheckCircle2,
  AlertCircle,
  Eye,
  Plus,
  Trash2,
  Image as ImageIcon,
  Upload,
  RefreshCw,
  Tag
} from 'lucide-react';
import { PricingPackage, ServiceItem, GalleryItem } from '../config/siteConfig';
import { optimizeAndUploadImage } from '../utils/imageOptimizer';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  siteData: {
    brand: any;
    contact: any;
    pricingPackages: PricingPackage[];
    services: ServiceItem[];
    adGallery: GalleryItem[];
  };
  onSaveSiteData: (updatedData: any) => void;
  onResetSiteData: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  siteData,
  onSaveSiteData,
  onResetSiteData,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'gallery' | 'pricing' | 'brand' | 'services' | 'inbox'>('gallery');

  // Form states initialized from siteData
  const [brandForm, setBrandForm] = useState(siteData.brand);
  const [contactForm, setContactForm] = useState(siteData.contact);
  const [pricingForm, setPricingForm] = useState<PricingPackage[]>(siteData.pricingPackages);
  const [servicesForm, setServicesForm] = useState<ServiceItem[]>(siteData.services);
  const [galleryForm, setGalleryForm] = useState<GalleryItem[]>(siteData.adGallery || []);

  // New gallery item state
  const [newTitle, setNewTitle] = useState('');
  const [newPlatform, setNewPlatform] = useState<'Google Ads' | 'Meta Ads' | 'TikTok Ads' | 'Instagram Ads'>('Google Ads');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newMetric, setNewMetric] = useState('');
  const [newCaption, setNewCaption] = useState('');
  const [isProcessingUpload, setIsProcessingUpload] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState('');

  // Inquiries & Consultations from backend
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [consultations, setConsultations] = useState<any[]>([]);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  useEffect(() => {
    setBrandForm(siteData.brand);
    setContactForm(siteData.contact);
    setPricingForm(siteData.pricingPackages);
    setServicesForm(siteData.services);
    setGalleryForm(siteData.adGallery || []);
  }, [siteData]);

  // Load backend inquiries when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetch('/api/inquiries')
        .then((res) => res.json())
        .then((data) => {
          if (data.inquiries) setInquiries(data.inquiries);
        })
        .catch(() => {});

      fetch('/api/consultations')
        .then((res) => res.json())
        .then((data) => {
          if (data.consultations) setConsultations(data.consultations);
        })
        .catch(() => {});
    }
  }, [isAuthenticated]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = passwordInput.trim().replace(/\s+/g, '');
    // Exact password requested by user: 03084476211
    if (clean === '03084476211' || clean === '3084476211' || clean === '+923084476211') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect Password. Please enter the assigned password: 03084476211');
    }
  };

  // Upload handler for new screenshot
  const handleNewImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadError('');
    setUploadSuccess('');
    setIsProcessingUpload(true);

    try {
      const url = await optimizeAndUploadImage(file, `${newPlatform}_proof`);
      setNewImageUrl(url);
      setUploadSuccess('Image processed and ready to add!');
      if (!newTitle.trim()) {
        setNewTitle(`${newPlatform} Campaign Proof Screenshot`);
      }
      if (!newMetric.trim()) {
        setNewMetric('Verified ROAS & Lead Metrics');
      }
    } catch (err: any) {
      setUploadError(err.message || 'Failed to process image. Please try another screenshot.');
    } finally {
      setIsProcessingUpload(false);
    }
  };

  // Direct replace handler for an existing gallery item
  const handleReplaceCardImage = async (itemId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const url = await optimizeAndUploadImage(file, 'ad_replacement');
      setGalleryForm((prev) =>
        prev.map((item) => (item.id === itemId ? { ...item, imageUrl: url } : item))
      );
      setSaveSuccessMsg('Picture replaced successfully! Click "Save Changes Live" below to publish to the site.');
      setTimeout(() => setSaveSuccessMsg(''), 4000);
    } catch (err: any) {
      alert('Could not replace picture: ' + err.message);
    }
  };

  // Add new item to gallery list
  const handleAddGalleryItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newImageUrl.trim()) {
      setUploadError('Please select or upload a picture first.');
      return;
    }

    const newItem: GalleryItem = {
      id: `gal-${Date.now().toString(36)}`,
      title: newTitle.trim() || `${newPlatform} Campaign Proof`,
      platform: newPlatform,
      imageUrl: newImageUrl.trim(),
      resultsMetric: newMetric.trim() || 'Verified Campaign Results',
      caption: newCaption.trim() || 'Live client ad creative & performance metrics.',
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    };

    setGalleryForm([newItem, ...galleryForm]);
    setNewTitle('');
    setNewImageUrl('');
    setNewMetric('');
    setNewCaption('');
    setUploadError('');
    setUploadSuccess('');
    setSaveSuccessMsg('New picture added to gallery! Click "Save Changes Live" below to publish.');
  };

  // Update existing card fields
  const handleCardFieldChange = (id: string, field: keyof GalleryItem, value: any) => {
    setGalleryForm((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  // Delete an item from gallery
  const handleDeleteGalleryItem = (id: string) => {
    if (confirm('Are you sure you want to remove this screenshot?')) {
      setGalleryForm(galleryForm.filter((item) => item.id !== id));
      setSaveSuccessMsg('Picture removed. Remember to click "Save Changes Live" to apply.');
    }
  };

  // Price change handler
  const handlePriceChange = (pkgId: string, newPrice: string) => {
    setPricingForm((prev) =>
      prev.map((pkg) => (pkg.id === pkgId ? { ...pkg, pricePKR: newPrice } : pkg))
    );
  };

  const handlePackageFieldChange = (pkgId: string, field: keyof PricingPackage, value: any) => {
    setPricingForm((prev) =>
      prev.map((pkg) => (pkg.id === pkgId ? { ...pkg, [field]: value } : pkg))
    );
  };

  const handleAddFeatureToPackage = (pkgId: string) => {
    setPricingForm((prev) =>
      prev.map((pkg) =>
        pkg.id === pkgId
          ? { ...pkg, features: [...pkg.features, 'New Service Deliverable'] }
          : pkg
      )
    );
  };

  const handleUpdateFeature = (pkgId: string, index: number, value: string) => {
    setPricingForm((prev) =>
      prev.map((pkg) => {
        if (pkg.id !== pkgId) return pkg;
        const updated = [...pkg.features];
        updated[index] = value;
        return { ...pkg, features: updated };
      })
    );
  };

  const handleRemoveFeature = (pkgId: string, index: number) => {
    setPricingForm((prev) =>
      prev.map((pkg) => {
        if (pkg.id !== pkgId) return pkg;
        return { ...pkg, features: pkg.features.filter((_, i) => i !== index) };
      })
    );
  };

  // Save all changes
  const handleSaveAll = () => {
    const updatedContact = {
      ...contactForm,
      phoneDisplay: `${contactForm.phone} (Direct / WhatsApp)`,
      whatsappNumber: contactForm.phone.replace(/[^0-9]/g, ''),
      socials: {
        ...contactForm.socials,
        whatsapp: `https://wa.me/${contactForm.phone.replace(/[^0-9]/g, '')}?text=Hello%20Faizan%2C%20I%20would%20like%20to%20discuss%20a%20digital%20marketing%20project.`
      }
    };

    const updatedData = {
      brand: brandForm,
      contact: updatedContact,
      pricingPackages: pricingForm,
      services: servicesForm,
      adGallery: galleryForm,
    };

    onSaveSiteData(updatedData);
    setSaveSuccessMsg('All updates (including Ad Gallery, Pricing in PKR, and Services) have been saved & published live!');
    setTimeout(() => setSaveSuccessMsg(''), 5000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-5xl rounded-3xl bg-[#0B1021] border border-blue-500/40 p-6 sm:p-8 shadow-2xl max-h-[92vh] flex flex-col overflow-hidden">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-white/[0.08] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                  Control Center
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                  Faizan Bhatti Admin
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                Website Content, Pricing (PKR) & Picture Editor
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Gate if not logged in */}
        {!isAuthenticated ? (
          <div className="py-12 px-4 max-w-md mx-auto text-center flex-1 flex flex-col justify-center items-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
              Faizan Bhatti Admin Login
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Enter your master password to upload/edit campaign pictures, update service pricing in PKR, manage contact info, and view client leads.
            </p>

            <form onSubmit={handleLogin} className="w-full space-y-4">
              <div>
                <input
                  type="password"
                  placeholder="Enter Password (03084476211)"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-center text-sm font-mono tracking-wider focus:outline-none focus:border-blue-500 placeholder-slate-600"
                  autoFocus
                />
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <Unlock className="w-4 h-4" />
                <span>Access Admin Panel</span>
              </button>

              <div className="text-[11px] text-slate-400">
                Assigned Password: <strong className="text-blue-400 font-mono">03084476211</strong>
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Top Navigation Tabs */}
            <div className="flex items-center gap-2 py-4 border-b border-white/[0.08] overflow-x-auto shrink-0">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeTab === 'gallery'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Upload & Manage Pictures ({galleryForm.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('pricing')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeTab === 'pricing'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white'
                }`}
              >
                <Tag className="w-4 h-4" />
                <span>Service Pricing in PKR ({pricingForm.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('brand')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeTab === 'brand'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Brand & Contact Info</span>
              </button>

              <button
                onClick={() => setActiveTab('services')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeTab === 'services'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>All 14 Services</span>
              </button>

              <button
                onClick={() => setActiveTab('inbox')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeTab === 'inbox'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white'
                }`}
              >
                <Inbox className="w-4 h-4" />
                <span>Client Leads Inbox ({inquiries.length + consultations.length})</span>
              </button>
            </div>

            {/* Success Banner */}
            {saveSuccessMsg && (
              <div className="mt-3 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 shrink-0">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{saveSuccessMsg}</span>
              </div>
            )}

            {/* Scrollable Content Body */}
            <div className="flex-1 overflow-y-auto py-5 pr-1 space-y-6">
              {/* TAB 1: PICTURE UPLOADER & AD GALLERY */}
              {activeTab === 'gallery' && (
                <div className="space-y-6">
                  {/* Uploader Box */}
                  <div className="p-6 rounded-3xl bg-gradient-to-b from-[#0D152D] to-[#0A1024] border-2 border-blue-500/50 shadow-2xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                          <Upload className="w-5 h-5 text-blue-400" />
                          <span>Upload New Picture (Google Ads, Meta Ads, TikTok Ads)</span>
                        </h3>
                        <p className="text-xs text-slate-300 mt-0.5">
                          Select any screenshot from your phone or PC. It will be automatically optimized and added to the website.
                        </p>
                      </div>
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 self-start sm:self-auto">
                        High Speed Upload
                      </span>
                    </div>

                    <form onSubmit={handleAddGalleryItem} className="space-y-4">
                      {/* Big Drag/Click Upload Area */}
                      <label className="block cursor-pointer p-6 rounded-2xl border-2 border-dashed border-blue-500/40 hover:border-blue-400 bg-blue-950/20 hover:bg-blue-950/40 transition-all text-center">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleNewImageUpload}
                          disabled={isProcessingUpload}
                          className="hidden"
                        />
                        <div className="flex flex-col items-center justify-center">
                          <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-2">
                            {isProcessingUpload ? (
                              <RefreshCw className="w-6 h-6 animate-spin" />
                            ) : (
                              <Upload className="w-6 h-6" />
                            )}
                          </div>
                          <span className="text-sm font-bold text-white">
                            {isProcessingUpload ? 'Optimizing & Uploading...' : 'Click to Upload Picture from Phone / Computer'}
                          </span>
                          <span className="text-xs text-slate-400 mt-1">
                            Supports PNG, JPG, WebP screenshots (Google Ads, Meta Ads, TikTok dashboards)
                          </span>
                        </div>
                      </label>

                      {/* Image Preview if selected */}
                      {newImageUrl && (
                        <div className="p-3.5 rounded-2xl bg-black/50 border border-emerald-500/40 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={newImageUrl}
                              alt="Preview"
                              className="w-20 h-14 rounded-xl object-cover border border-white/20"
                            />
                            <div>
                              <span className="text-xs font-bold text-emerald-400 block flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Picture Ready!
                              </span>
                              <span className="text-[11px] text-slate-300">
                                Click the button below to add it to your gallery.
                              </span>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => setNewImageUrl('')}
                            className="p-1.5 rounded-lg bg-white/[0.05] text-slate-400 hover:text-red-400"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      )}

                      {/* Details for the picture */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Platform Category *
                          </label>
                          <select
                            value={newPlatform}
                            onChange={(e) => setNewPlatform(e.target.value as any)}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-[#090E1F] border border-white/[0.15] text-white text-xs font-semibold focus:outline-none focus:border-blue-500"
                          >
                            <option value="Google Ads">Google Ads</option>
                            <option value="Meta Ads">Meta Ads (Facebook & Instagram)</option>
                            <option value="TikTok Ads">TikTok Ads</option>
                            <option value="Instagram Ads">Instagram Ads</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Title / Campaign Name
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Google Search Ads 5.2x ROAS E-commerce Scale"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="w-full px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-emerald-400 mb-1">
                            Results Metric / KPI (e.g. 5.4x ROAS, 2,400+ Leads)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. ROAS: 4.8x · PKR 450,000 Revenue"
                            value={newMetric}
                            onChange={(e) => setNewMetric(e.target.value)}
                            className="w-full px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-emerald-400 placeholder-slate-600"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Brief Caption / Strategy Note
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Target ROAS bidding with negative keywords sculpting."
                            value={newCaption}
                            onChange={(e) => setNewCaption(e.target.value)}
                            className="w-full px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-600"
                          />
                        </div>
                      </div>

                      {uploadError && (
                        <div className="text-xs text-red-400 flex items-center gap-1.5 p-2 rounded-lg bg-red-500/10 border border-red-500/20">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{uploadError}</span>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={!newImageUrl || isProcessingUpload}
                        className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                          newImageUrl && !isProcessingUpload
                            ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30'
                            : 'bg-white/[0.05] text-slate-500 cursor-not-allowed'
                        }`}
                      >
                        <Plus className="w-4 h-4" />
                        <span>Add Picture to Website Gallery</span>
                      </button>
                    </form>
                  </div>

                  {/* Existing Pictures List with Direct Replace & Delete */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>Current Gallery Pictures ({galleryForm.length})</span>
                      </h4>
                      <span className="text-xs text-slate-400">
                        You can replace any picture or remove it anytime.
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {galleryForm.map((item) => (
                        <div
                          key={item.id}
                          className="p-4 rounded-2xl bg-[#0E152B] border border-white/[0.1] flex flex-col justify-between space-y-4"
                        >
                          {/* Image preview with direct Replace button */}
                          <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-white/[0.08] group">
                            <img
                              src={item.imageUrl}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                            
                            {/* Platform badge */}
                            <span className="absolute top-2 left-2 px-2.5 py-1 rounded-md text-[11px] font-bold bg-black/80 text-blue-300 border border-white/10 backdrop-blur-sm">
                              {item.platform}
                            </span>

                            {/* Direct Replace Picture Button on Card */}
                            <label className="absolute bottom-2 right-2 cursor-pointer px-3 py-1.5 rounded-lg bg-blue-600/90 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-lg backdrop-blur-sm transition-all">
                              <Upload className="w-3.5 h-3.5" />
                              <span>Change Picture</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleReplaceCardImage(item.id, e)}
                                className="hidden"
                              />
                            </label>
                          </div>

                          {/* Editable fields on card */}
                          <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                                  Platform
                                </label>
                                <select
                                  value={item.platform}
                                  onChange={(e) =>
                                    handleCardFieldChange(item.id, 'platform', e.target.value)
                                  }
                                  className="w-full px-2.5 py-1.5 rounded-lg bg-[#070B16] border border-white/[0.1] text-white text-xs font-semibold focus:outline-none focus:border-blue-500"
                                >
                                  <option value="Google Ads">Google Ads</option>
                                  <option value="Meta Ads">Meta Ads</option>
                                  <option value="TikTok Ads">TikTok Ads</option>
                                  <option value="Instagram Ads">Instagram Ads</option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-[10px] font-semibold uppercase tracking-wider text-emerald-400 mb-0.5">
                                  Metric / KPI
                                </label>
                                <input
                                  type="text"
                                  value={item.resultsMetric}
                                  onChange={(e) =>
                                    handleCardFieldChange(item.id, 'resultsMetric', e.target.value)
                                  }
                                  className="w-full px-2.5 py-1.5 rounded-lg bg-[#070B16] border border-white/[0.1] text-emerald-300 text-xs font-bold focus:outline-none focus:border-emerald-400"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                                Title
                              </label>
                              <input
                                type="text"
                                value={item.title}
                                onChange={(e) =>
                                  handleCardFieldChange(item.id, 'title', e.target.value)
                                }
                                className="w-full px-2.5 py-1.5 rounded-lg bg-[#070B16] border border-white/[0.1] text-white text-xs font-bold focus:outline-none focus:border-blue-500"
                              />
                            </div>

                            <div>
                              <label className="block text-[10px] font-semibold uppercase tracking-wider text-slate-400 mb-0.5">
                                Caption
                              </label>
                              <input
                                type="text"
                                value={item.caption}
                                onChange={(e) =>
                                  handleCardFieldChange(item.id, 'caption', e.target.value)
                                }
                                className="w-full px-2.5 py-1.5 rounded-lg bg-[#070B16] border border-white/[0.1] text-slate-300 text-xs focus:outline-none focus:border-blue-500"
                              />
                            </div>
                          </div>

                          {/* Footer with Delete and Change */}
                          <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                            <span className="text-[10px] text-slate-500 font-mono">
                              Date: {item.date}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleDeleteGalleryItem(item.id)}
                              className="px-3 py-1.5 rounded-lg bg-red-500/15 hover:bg-red-500/25 text-red-400 hover:text-red-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                              <span>Remove Picture</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: PRICING PACKAGES (PKR) */}
              {activeTab === 'pricing' && (
                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-[#0D152D] border border-blue-500/40">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 mb-1">
                      <Tag className="w-4 h-4" />
                      <span>Service Pricing in Pakistani Rupees (PKR)</span>
                    </div>
                    <h3 className="text-base font-bold text-white">
                      Edit Service Charges & Pricing Rates
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      You can change any service price (e.g., Google Ads 50,000, Meta Ads 40,000, TikTok 45,000, Website 75,000). The updated rates will instantly show on the website in bold PKR format.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pricingForm.map((pkg) => (
                      <div
                        key={pkg.id}
                        className="p-5 rounded-3xl bg-[#0E152B] border-2 border-white/[0.1] hover:border-blue-500/40 space-y-4 shadow-xl"
                      >
                        <div className="flex items-center justify-between">
                          <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-blue-950 text-blue-300 border border-blue-800">
                            {pkg.platform}
                          </span>
                          <span className="text-[11px] text-slate-400 font-mono">
                            {pkg.id}
                          </span>
                        </div>

                        {/* Package Title */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Service / Package Title
                          </label>
                          <input
                            type="text"
                            value={pkg.name}
                            onChange={(e) =>
                              handlePackageFieldChange(pkg.id, 'name', e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-xl bg-white/[0.04] border border-white/[0.1] text-white font-bold text-sm focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        {/* Price Input in PKR */}
                        <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/40">
                          <label className="block text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                            Service Price (PKR) *
                          </label>
                          <div className="flex items-center gap-2">
                            <span className="px-3 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 font-extrabold text-sm border border-emerald-500/30">
                              PKR
                            </span>
                            <input
                              type="text"
                              value={pkg.pricePKR}
                              onChange={(e) => handlePriceChange(pkg.id, e.target.value)}
                              placeholder="e.g. 50,000"
                              className="flex-1 px-3.5 py-2 rounded-xl bg-white/[0.06] border border-emerald-500/60 text-white font-extrabold text-lg focus:outline-none focus:border-emerald-400 tabular-nums"
                            />
                            <span className="text-xs text-slate-400 font-semibold">
                              / {pkg.billingPeriod}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-400 mt-2 block">
                            Displayed on website as: <strong className="text-white">PKR {pkg.pricePKR} / {pkg.billingPeriod}</strong>
                          </span>
                        </div>

                        {/* Billing period and badge */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1">
                              Billing Period
                            </label>
                            <input
                              type="text"
                              value={pkg.billingPeriod}
                              onChange={(e) =>
                                handlePackageFieldChange(pkg.id, 'billingPeriod', e.target.value)
                              }
                              placeholder="month or project"
                              className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-300 mb-1">
                              Badge (Optional)
                            </label>
                            <input
                              type="text"
                              value={pkg.popularBadge || ''}
                              onChange={(e) =>
                                handlePackageFieldChange(pkg.id, 'popularBadge', e.target.value)
                              }
                              placeholder="e.g. Best Seller"
                              className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500"
                            />
                          </div>
                        </div>

                        {/* Tagline */}
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1">
                            Tagline / Description
                          </label>
                          <textarea
                            rows={2}
                            value={pkg.tagline}
                            onChange={(e) =>
                              handlePackageFieldChange(pkg.id, 'tagline', e.target.value)
                            }
                            className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        {/* Features Editor */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-xs font-semibold text-slate-300">
                              Deliverable Features ({pkg.features.length})
                            </label>
                            <button
                              type="button"
                              onClick={() => handleAddFeatureToPackage(pkg.id)}
                              className="text-[11px] text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1"
                            >
                              <Plus className="w-3 h-3" />
                              <span>Add Bullet</span>
                            </button>
                          </div>
                          <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1">
                            {pkg.features.map((feat, fIndex) => (
                              <div key={fIndex} className="flex items-center gap-2">
                                <input
                                  type="text"
                                  value={feat}
                                  onChange={(e) =>
                                    handleUpdateFeature(pkg.id, fIndex, e.target.value)
                                  }
                                  className="flex-1 px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/[0.08] text-slate-200 text-xs focus:outline-none focus:border-blue-500"
                                />
                                <button
                                  type="button"
                                  onClick={() => handleRemoveFeature(pkg.id, fIndex)}
                                  className="p-1 rounded text-slate-500 hover:text-red-400"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: BRAND & CONTACT INFO */}
              {activeTab === 'brand' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-800/30">
                    <h3 className="text-sm font-bold text-white mb-1">
                      Faizan Bhatti Brand & Contact Details
                    </h3>
                    <p className="text-xs text-slate-400">
                      Changes here update the headers, hero, contact forms, schema SEO, and direct WhatsApp links across the site.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Professional Name
                      </label>
                      <input
                        type="text"
                        value={brandForm.name}
                        onChange={(e) => setBrandForm({ ...brandForm, name: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Years of Professional Experience
                      </label>
                      <input
                        type="number"
                        value={brandForm.experienceYears}
                        onChange={(e) =>
                          setBrandForm({
                            ...brandForm,
                            experienceYears: Number(e.target.value) || 20,
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Professional Title
                    </label>
                    <input
                      type="text"
                      value={brandForm.title}
                      onChange={(e) => setBrandForm({ ...brandForm, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number (WhatsApp & Calling)
                      </label>
                      <input
                        type="text"
                        value={contactForm.phone}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, phone: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Official Business Email
                      </label>
                      <input
                        type="email"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, email: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Official LinkedIn Profile Link
                    </label>
                    <input
                      type="url"
                      value={contactForm.socials.linkedin}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          socials: { ...contactForm.socials, linkedin: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>
              )}

              {/* TAB 4: ALL 14 SERVICES */}
              {activeTab === 'services' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-800/30">
                    <h3 className="text-sm font-bold text-white mb-1">
                      All 14 Professional Services Editor
                    </h3>
                    <p className="text-xs text-slate-400">
                      Edit the descriptions, deliverables, and category tags for each of Faizan Bhatti's core services.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {servicesForm.map((serv, sIdx) => (
                      <div
                        key={serv.id}
                        className="p-4 rounded-2xl bg-[#0E152B] border border-white/[0.08] space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-blue-400">
                            Service #{sIdx + 1}: {serv.title}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono">
                            {serv.id}
                          </span>
                        </div>

                        <div>
                          <input
                            type="text"
                            value={serv.title}
                            onChange={(e) => {
                              const updated = [...servicesForm];
                              updated[sIdx].title = e.target.value;
                              setServicesForm(updated);
                            }}
                            className="w-full px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-white text-xs font-bold focus:outline-none focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <textarea
                            rows={2}
                            value={serv.shortDesc}
                            onChange={(e) => {
                              const updated = [...servicesForm];
                              updated[sIdx].shortDesc = e.target.value;
                              setServicesForm(updated);
                            }}
                            className="w-full px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.1] text-slate-300 text-xs focus:outline-none focus:border-blue-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 5: LEADS INBOX */}
              {activeTab === 'inbox' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-800/30">
                    <h3 className="text-sm font-bold text-white mb-1">
                      Live Customer Inquiries & Consultations
                    </h3>
                    <p className="text-xs text-slate-400">
                      Messages submitted by prospective clients through the website contact forms.
                    </p>
                  </div>

                  {/* Inquiries */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Project Inquiries ({inquiries.length})
                    </h4>
                    {inquiries.length === 0 ? (
                      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center text-xs text-slate-500">
                        No inquiries received yet. They will appear here immediately when submitted.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {inquiries.map((inq) => (
                          <div
                            key={inq.id}
                            className="p-4 rounded-2xl bg-[#0E152B] border border-white/[0.08] space-y-2"
                          >
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-bold text-white">{inq.fullName}</span>
                              <span className="text-[10px] text-slate-500 font-mono">
                                {new Date(inq.createdAt).toLocaleString()}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                              <span>Email: <strong className="text-slate-300">{inq.email}</strong></span>
                              {inq.phone && <span>Phone: <strong className="text-slate-300">{inq.phone}</strong></span>}
                              {inq.company && <span>Company: <strong className="text-slate-300">{inq.company}</strong></span>}
                            </div>
                            <div className="text-slate-300 text-xs font-semibold">
                              Service: <span className="text-blue-400">{inq.service}</span>
                            </div>
                            <p className="text-slate-300 text-xs bg-black/40 p-2.5 rounded-lg border border-white/[0.04]">
                              {inq.details}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Consultations */}
                  <div className="pt-4 border-t border-white/[0.08]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Consultation Bookings ({consultations.length})
                    </h4>
                    {consultations.length === 0 ? (
                      <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center text-xs text-slate-500">
                        No consultation bookings yet.
                      </div>
                    ) : (
                      <div className="space-y-3">
                        {consultations.map((cons) => (
                          <div
                            key={cons.id}
                            className="p-4 rounded-2xl bg-[#0E152B] border border-white/[0.08] space-y-2 text-xs"
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-white">{cons.name}</span>
                              <span className="text-emerald-400 font-semibold">{cons.preferredDate} at {cons.preferredTime}</span>
                            </div>
                            <div className="text-slate-300">
                              Email: {cons.email} {cons.phone && `| Phone: ${cons.phone}`}
                            </div>
                            <div className="text-blue-300">
                              Meeting: {cons.meetingType}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions Bar */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={onResetSiteData}
                className="py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-red-500/20 text-slate-400 hover:text-red-300 text-xs font-semibold flex items-center gap-2 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset to Factory Defaults</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="py-2.5 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 text-xs font-semibold"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleSaveAll}
                  className="py-2.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-600/30 flex items-center gap-2 transition-all hover:scale-[1.02]"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Changes Live</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
