import React from 'react';
import { PageView } from '../types';
import { FileCheck, ArrowLeft, Shield, Scale, Code, AlertTriangle, Mail } from 'lucide-react';

interface TermsOfServiceProps {
  onNavigate: (page: PageView) => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onNavigate }) => {
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
          <Scale className="w-3.5 h-3.5 text-emerald-600" />
          <span>TERMS OF ENGAGEMENT</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#022A4E]">
          Terms of Service
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
            Welcome to <strong>BasanTech</strong> ("Company," "we," "our," or "us"). By accessing or utilizing our website{' '}
            (<a href="https://basantech.online" className="text-[#00976C] font-semibold hover:underline">https://basantech.online</a>) 
            or contracting our software engineering, web development, mobile development, or consulting services, you agree to be bound by the following Terms of Service.
          </p>
        </div>

        {/* Section 1 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-[#022A4E] flex items-center gap-2">
            <Code className="w-5 h-5 text-[#00976C]" />
            <span>1. Services &amp; Project Engagements</span>
          </h2>
          <p className="text-sm text-slate-600">
            BasanTech provides custom software engineering, full-stack web applications, mobile application development, AI integrations, and digital solutions. Each engagement is governed by a mutually agreed Statement of Work (SOW), detailing project milestones, deliverables, tech specifications, and payment terms.
          </p>
          <p className="text-sm text-slate-600">
            Any scope changes requested during active development will be evaluated and quoted via formal change requests before implementation.
          </p>
        </div>

        {/* Section 2 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-[#022A4E] flex items-center gap-2">
            <Shield className="w-5 h-5 text-[#00976C]" />
            <span>2. Intellectual Property Rights &amp; Code Ownership</span>
          </h2>
          <p className="text-sm text-slate-600">
            We operate under a <strong>100% Client IP Ownership</strong> standard. Upon full settlement of all contractual milestone invoices, all bespoke source code, database architectures, documentation, and design assets authored specifically for the client transfer entirely to the client.
          </p>
          <p className="text-sm text-slate-600">
            Open-source libraries, third-party frameworks (e.g., React, Node.js, WordPress plugins), and foundational tools remain subject to their respective open-source licenses (MIT, Apache, GPL).
          </p>
        </div>

        {/* Section 3 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-[#022A4E] flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-[#00976C]" />
            <span>3. Client Responsibilities &amp; Approvals</span>
          </h2>
          <p className="text-sm text-slate-600">
            To ensure timely delivery, the client agrees to provide necessary access credentials (APIs, third-party accounts), content assets, brand guidelines, and milestone feedback within mutually agreed review windows.
          </p>
        </div>

        {/* Section 4 */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
          <h2 className="text-xl font-bold text-[#022A4E] flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-[#00976C]" />
            <span>4. Warranty &amp; Limitation of Liability</span>
          </h2>
          <p className="text-sm text-slate-600">
            BasanTech warrants that all deliverables will conform substantially to the documented specifications. We include a standard 30-day post-launch warranty period to remediate bugs or defects arising directly from our authored code.
          </p>
          <p className="text-sm text-slate-600">
            In no event shall BasanTech be liable for any indirect, incidental, or consequential damages resulting from third-party hosting outages, third-party API changes, or unauthorized modifications made to the codebase by external developers.
          </p>
        </div>

        {/* Section 5: Contact */}
        <div className="p-6 rounded-2xl bg-[#022A4E] text-white space-y-4">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Mail className="w-5 h-5 text-[#00976C]" />
            <span>5. Inquiries &amp; Legal Notices</span>
          </h2>
          <p className="text-sm text-slate-200">
            For contractual inquiries, master service agreements, or legal notifications regarding these Terms of Service, please contact:
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
