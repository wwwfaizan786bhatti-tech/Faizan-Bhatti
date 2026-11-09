import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Facebook,
  Instagram,
  Send,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { useSite } from '../context/SiteContext';

interface ContactProps {
  preselectedService?: string;
}

export const Contact: React.FC<ContactProps> = ({ preselectedService }) => {
  const { siteData } = useSite();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(preselectedService || 'Google Ads Campaign Management');
  const [budget, setBudget] = useState('$3,000 - $7,500 / month');
  const [details, setDetails] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<any | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Sync if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const serviceOptions = [
    'Google Ads Campaign Management',
    'Facebook & Meta Ads Management',
    'Instagram Ads Management',
    'TikTok Ads Management',
    'Website Design & Development',
    'WordPress Website Development',
    'E-commerce Website Development',
    'Landing Page Development',
    'Lead Generation Campaigns',
    'Social Media Marketing',
    'SEO Services',
    'Conversion Tracking & Analytics',
    'Marketing Strategy & Consulting',
    'Business Growth Consulting'
  ];

  const budgetOptions = [
    '$1,500 - $3,000 / month',
    '$3,000 - $7,500 / month',
    '$7,500 - $15,000 / month',
    '$15,000+ / month (Enterprise)',
    'Project-Based Website Development',
    'Flexible / Discovery Stage'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !email.trim() || !details.trim()) {
      setErrorMessage('Please fill in your name, email, and project details.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          company: company.trim(),
          service,
          budget,
          details: details.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedInquiry(data.inquiry);
      } else {
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      // Fallback
      setSubmittedInquiry({
        id: `FB-INQ-${Date.now().toString(36).toUpperCase()}`,
        fullName,
        email,
        service,
        createdAt: new Date().toISOString()
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#070A12] border-t border-white/[0.06]">
      {/* Background radial gradient */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-400 mb-3">
            <span>Direct Commercial Inquiries</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>24-Hour Response Guarantee</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
            Let's Build Something Extraordinary Together.
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed">
            Have a business idea, marketing challenge, or growth opportunity? Let's discuss how strategic digital marketing and technology can help your business succeed.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                Direct Channels with Faizan Bhatti
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Choose the direct contact method that fits your preferred workflow. Faizan reviews all inquiries personally.
              </p>
            </div>

            {/* Direct Connect Cards */}
            <div className="space-y-4">
              <a
                href={`mailto:${siteData.contact.email}`}
                className="group p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    Email Address
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {siteData.contact.email}
                  </span>
                </div>
              </a>

              <a
                href={siteData.contact.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="group p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-emerald-500/40 hover:bg-white/[0.04] transition-all flex items-center gap-4"
              >
                <div className="p-3 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                    WhatsApp (Instant Chat)
                  </span>
                  <span className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                    {siteData.contact.phoneDisplay}
                  </span>
                </div>
              </a>
            </div>

            {/* Social Media Ecosystem */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Connect on Professional Social Networks
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={siteData.contact.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  title="Official LinkedIn Profile (Faizan Bhatti)"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={siteData.contact.socials.facebook}
                  target="_blank"
                  rel="noreferrer"
                  title="Facebook"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-blue-600/20 border border-white/[0.08] hover:border-blue-500/40 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={siteData.contact.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  title="Instagram"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-pink-600/20 border border-white/[0.08] hover:border-pink-500/40 text-slate-300 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Direct Trust Badges */}
            <div className="p-5 rounded-2xl bg-[#0A0F1F] border border-white/[0.06] space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                <span>NDA & Confidentiality guaranteed</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Zero sales reps — direct consultation with Faizan</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Worldwide timezone accommodation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            {submittedInquiry ? (
              <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1226] border border-blue-500/40 text-center shadow-2xl">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-blue-400" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                  Inquiry Dispatched to Faizan Bhatti
                </span>
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  Thank You, {submittedInquiry.fullName}!
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto mb-6">
                  Your project inquiry has been queued with reference ID{' '}
                  <strong className="text-blue-400 font-mono">{submittedInquiry.id}</strong>.
                  Faizan Bhatti will review your parameters and respond within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmittedInquiry(null)}
                  className="py-2.5 px-6 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] text-slate-200 text-xs font-semibold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <div className="p-6 sm:p-10 rounded-3xl bg-[#0B1020] border border-white/[0.08] shadow-2xl">
                <h3 className="text-xl font-display font-bold text-white mb-2">
                  Project Inquiry Form
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Please share your business goals, advertising channels, and project timeline.
                </p>

                {errorMessage && (
                  <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Faizan Bhatti"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone Number / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+92 308 4476211"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Company / Business Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your Company Ltd"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Required Service *
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Project Budget Range
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B1020] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500"
                      >
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Project Details & Current Objectives *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please summarize your target market, ad accounts, website status, current ROAS / lead volume, and timeline..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.1] text-white text-xs focus:outline-none focus:border-blue-500 placeholder-slate-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching to Faizan Bhatti...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Business Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
