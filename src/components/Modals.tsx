import React from 'react';
import { X, Download, FileText, CheckCircle2, Shield } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const BaseModal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0B1021] border border-blue-500/30 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.05] text-slate-400 hover:text-white transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-6 pr-8">
          {title}
        </h3>

        <div className="text-sm text-slate-300 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export const CvModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrintDownload = () => {
    window.print();
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Curriculum Vitae — Faizan Bhatti">
      <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/30 flex items-center justify-between">
        <div>
          <span className="text-xs font-bold text-blue-300 uppercase tracking-wider block">
            Executive Summary Document
          </span>
          <span className="text-sm text-white font-semibold">
            20 Years of Digital Marketing & Web Development Leadership
          </span>
        </div>
        <button
          onClick={handlePrintDownload}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow transition-all"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Save / Print PDF</span>
        </button>
      </div>

      <div className="space-y-4 pt-2">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            Professional Overview
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            Faizan Bhatti is an internationally recognized Digital Marketing Strategist, Paid Advertising Expert, and Full-Stack Website Specialist with two continuous decades of commercial track record across North American, European, Middle Eastern, and Asian markets.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            Core Advertising Competencies
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Google Search & PMax</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>YouTube Video Action Ads</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Meta Ads & Dynamic Creatives</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>TikTok Spark Video Campaigns</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            Technical & Analytics Stack
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            React, TypeScript, Tailwind CSS, WordPress Enterprise architecture, Google Tag Manager (Server-Side), Google Analytics 4 Data-Driven Attribution, Meta Conversions API (CAPI).
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
            Verified Contact & Reference
          </h4>
          <p className="text-xs text-slate-300">
            Email: <strong className="text-white">{SITE_CONFIG.contact.email}</strong><br />
            WhatsApp: <strong className="text-white">{SITE_CONFIG.contact.phoneDisplay}</strong>
          </p>
        </div>
      </div>
    </BaseModal>
  );
};

export const PrivacyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Privacy Policy">
      <p className="text-xs text-slate-400">Effective Date: November 2026</p>
      <p className="text-xs text-slate-300 leading-relaxed">
        This Privacy Policy outlines how Faizan Bhatti collects, uses, and safeguards information submitted through business inquiries and consultation bookings.
      </p>
      <h4 className="text-xs font-bold text-white uppercase tracking-wider">1. Information Collection</h4>
      <p className="text-xs text-slate-300 leading-relaxed">
        We collect only the business contact details voluntarily submitted via our inquiry form (such as your name, corporate email address, phone number, and project scope) for the sole purpose of assessing project fit.
      </p>
      <h4 className="text-xs font-bold text-white uppercase tracking-wider">2. Data Confidentiality & Non-Disclosure</h4>
      <p className="text-xs text-slate-300 leading-relaxed">
        We do not sell, rent, or trade your personal or business data to third parties. All client advertising metrics, campaign budgets, and strategic materials are handled under strict confidentiality.
      </p>
      <h4 className="text-xs font-bold text-white uppercase tracking-wider">3. Inquiries</h4>
      <p className="text-xs text-slate-300 leading-relaxed">
        For inquiries regarding your submitted data, reach out directly to Faizan Bhatti at {SITE_CONFIG.contact.email}.
      </p>
    </BaseModal>
  );
};

export const TermsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Terms & Conditions">
      <p className="text-xs text-slate-400">Last Updated: November 2026</p>
      <p className="text-xs text-slate-300 leading-relaxed">
        Welcome to the official personal brand and consulting website of Faizan Bhatti. By accessing this website or scheduling a consultation, you agree to these Terms.
      </p>
      <h4 className="text-xs font-bold text-white uppercase tracking-wider">1. Advisory Scope</h4>
      <p className="text-xs text-slate-300 leading-relaxed">
        Strategic consulting and marketing audits provided through this website are professional advisory services based on 20 years of industry experience. Specific return on ad spend and revenue outcomes are dependent on market conditions, product economics, and execution consistency.
      </p>
      <h4 className="text-xs font-bold text-white uppercase tracking-wider">2. Intellectual Property</h4>
      <p className="text-xs text-slate-300 leading-relaxed">
        All brand assets, custom typography, code architectures, and written articles on this site belong to Faizan Bhatti and may not be reproduced without explicit written consent.
      </p>
    </BaseModal>
  );
};
