import React from 'react';
import { PageView } from '../types';
import { Shield, ArrowLeft, Lock, Eye, FileText, CheckCircle2, Mail, MapPin, Globe } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigate: (page: PageView) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 sm:pt-28 pb-12 sm:pb-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
      
      {/* Back Button */}
      <div>
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-[#022A4E] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#00976C]" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Header */}
      <div className="space-y-4 border-b border-slate-200 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span>LEGAL &amp; COMPLIANCE</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#022A4E]">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 font-mono">
          Last updated: September 16, 2026 • Effective Date: January 1, 2026
        </p>
      </div>

      {/* Content */}
      <div className="space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
        
        {/* Intro */}
        <div className="space-y-3">
          <p>
            At <strong>Basan Tech</strong> ("we," "our," or "us"), accessible via{' '}
            <a href="https://basantech.online" className="text-[#00976C] font-semibold hover:underline">
              https://basantech.online
            </a>, we respect your personal privacy and are committed to protecting the data and confidential information you entrust with us.
          </p>
          <p>
            This Privacy Policy outlines the types of information we collect when you visit our website, submit a project inquiry, or engage our digital software engineering services, and how that information is handled, secured, and retained.
          </p>
        </div>

        {/* Section 1 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-[#022A4E] flex items-center gap-2">
            <Lock className="w-5 h-5 text-[#00976C]" />
            <span>1. Information We Collect</span>
          </h2>
          <p className="text-sm text-slate-600">
            We collect personal and corporate details strictly necessary to provide consultation, scoping, and software engineering services:
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00976C] mt-0.5 shrink-0" />
              <span><strong>Contact Information:</strong> Full name, corporate email address, telephone number, and company name provided through inquiry forms.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00976C] mt-0.5 shrink-0" />
              <span><strong>Project Specifications:</strong> Technical requirements, budget ranges, architecture notes, and wireframes submitted for scoping.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00976C] mt-0.5 shrink-0" />
              <span><strong>Technical Usage Data:</strong> Anonymized server logs, browser type, device information, and interaction metrics used solely to optimize site performance.</span>
            </li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-[#022A4E] flex items-center gap-2">
            <Eye className="w-5 h-5 text-[#00976C]" />
            <span>2. How We Use Your Information</span>
          </h2>
          <p className="text-sm text-slate-600">
            All data gathered is utilized strictly for professional business and engineering delivery purposes:
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00976C] mt-0.5 shrink-0" />
              <span>To respond to your inquiries and deliver detailed technical proposals or milestone estimates.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00976C] mt-0.5 shrink-0" />
              <span>To fulfill contractual service agreements, software development milestones, and client communications.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00976C] mt-0.5 shrink-0" />
              <span>To comply with legal obligations, billing processes, and tax compliance requirements.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#00976C] mt-0.5 shrink-0" />
              <span><strong>Zero Third-Party Data Selling:</strong> We never sell, rent, monetize, or trade your contact or project data to third-party advertisers.</span>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-[#022A4E] flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#00976C]" />
            <span>3. Client Code &amp; Intellectual Property Confidentiality</span>
          </h2>
          <p className="text-sm text-slate-600">
            Basan Tech operates under strict Non-Disclosure Principles. All proprietary client algorithms, repository code, database credentials, design files, and customer lists handled during development remain the exclusive intellectual property of the client.
          </p>
          <p className="text-sm text-slate-600">
            Our developers utilize encrypted git repositories, role-based access tokens, and zero-trust cloud deployment protocols to prevent unauthorized access.
          </p>
        </div>

        {/* Section 4 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-[#022A4E] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#00976C]" />
            <span>4. Cookies and Analytical Tracking</span>
          </h2>
          <p className="text-sm text-slate-600">
            Our website uses minimal, non-invasive cookies necessary to maintain session state, security, and monitor performance. You may configure your browser settings to decline cookies at any time without restricting your ability to navigate the website.
          </p>
        </div>

        {/* Section 5: Contact */}
        <div className="p-6 rounded-2xl bg-[#022A4E] text-white space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#00976C]" />
            <span>5. Contact Our Privacy Officer</span>
          </h2>
          <p className="text-sm text-slate-200">
            If you have questions regarding this Privacy Policy, wish to request data correction, or request data deletion under applicable privacy regulations, please reach out to:
          </p>
          <div className="space-y-1 text-sm font-mono pt-2">
            <div>Email: <a href="mailto:basantech1@gmail.com" className="text-emerald-400 hover:underline">basantech1@gmail.com</a></div>
            <div>Phone: <span className="text-slate-200">+91 9624895641</span></div>
            <div>Website: <span className="text-slate-200">https://basantech.online</span></div>
          </div>
        </div>

      </div>

    </div>
  );
};
