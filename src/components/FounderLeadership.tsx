import React from 'react';
import { Linkedin, User, ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface LeaderProfile {
  name: string;
  role: string;
  badge: string;
  initials: string;
  bio: string;
  specialties: string[];
  linkedinUrl: string;
}

const FOUNDER_PROFILES: LeaderProfile[] = [
  {
    name: 'Basan Mejban',
    role: 'Founder',
    badge: 'Founder',
    initials: 'BM',
    bio: 'Dedicated to building clean, reliable digital solutions for businesses looking to grow online. Specializes in launching modern websites, web applications, and custom software with an emphasis on code quality, performance, and long-term value.',
    specialties: [
      'Web & Software Development',
      'Business-focused Digital Solutions',
      'Scalable, Modern Technology'
    ],
    linkedinUrl: 'https://www.linkedin.com/in/mejban-basan-26b215262/'
  },
  {
    name: 'Madhiya Ahnaf',
    role: 'Founder',
    badge: 'Founder',
    initials: 'MA',
    bio: 'Dedicated to delivering clean digital solutions with meticulous attention to detail and technical execution. Specializes in WordPress development and modern web technologies, ensuring every project is delivered to high technical standards and brings client visions to life online.',
    specialties: [
      'WordPress Development',
      'Client Project & Delivery Management',
      'Quality-focused Execution'
    ],
    linkedinUrl: 'https://www.linkedin.com/in/ahnaf-madhiya/'
  }
];

export const FounderLeadership: React.FC = () => {
  return (
    <section id="founder-section" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#00976C]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00976C]" />
            <span>FOUNDERS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#022A4E]">
            Meet Our Founders
          </h2>
          
          <p className="text-base text-slate-600 leading-relaxed">
            Direct collaboration with our technical founders. We ensure every project is built with architectural precision, clean code, and long-term reliability.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {FOUNDER_PROFILES.map((profile) => (
            <div 
              key={profile.name}
              className="rounded-3xl border border-slate-200 bg-slate-50/50 hover:bg-white p-7 sm:p-8 hover:border-[#00976C] transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-6">
                {/* Header: Avatar Placeholder + Info + LinkedIn */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    {/* Clean photo placeholder spot with green accent border */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#022A4E] to-[#011D36] text-white flex items-center justify-center font-bold text-xl sm:text-2xl shadow-inner border-2 border-[#00976C] shrink-0">
                      <span>{profile.initials}</span>
                      <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-white border border-slate-200 text-slate-500 shadow-xs" title="Photo placeholder">
                        <User className="w-3 h-3 text-[#00976C]" />
                      </div>
                    </div>

                    <div>
                      <div className="inline-block px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-[11px] font-semibold text-[#00976C] mb-1">
                        {profile.badge}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#022A4E]">
                        {profile.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#00976C]">
                        {profile.role}
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn Icon Link */}
                  <a
                    href={profile.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${profile.name}'s LinkedIn Profile`}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white text-[#022A4E] hover:text-white hover:bg-[#0077B5] hover:border-[#0077B5] transition-all duration-200 shrink-0 shadow-xs group-hover:scale-105 cursor-pointer"
                    title={`Connect with ${profile.name} on LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5 fill-current" />
                  </a>
                </div>

                {/* Bio text */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  "{profile.bio}"
                </p>

                {/* Core Focus Bullet Points */}
                <div className="space-y-2 pt-2 border-t border-slate-200/80">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Core Focus &amp; Expertise:
                  </span>
                  <ul className="space-y-1.5">
                    {profile.specialties.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#00976C] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium text-slate-600">Direct Founder Involvement</span>
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#022A4E] hover:text-[#00976C] transition-colors"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00976C]" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
