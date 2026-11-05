import React from 'react';
import {
  Award,
  Download,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Briefcase,
  Github,
  Linkedin,
  Heart
} from 'lucide-react';
import { ProfileData } from '../types.ts';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
  onOpenInternshipCert: () => void;
  onOpenNptelCert: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onOpenResume,
  onOpenInternshipCert,
  onOpenNptelCert,
}) => {
  return (
    <section id="about" className="relative pt-32 pb-16 overflow-hidden">
      {/* Playful warm background blobs & soft gradients */}
      <div className="absolute top-12 left-10 w-96 h-96 bg-[#FED7AA]/45 rounded-full blur-3xl pointer-events-none warm-float-1"></div>
      <div className="absolute top-36 right-10 w-[420px] h-[420px] bg-[#FFEDD5]/60 rounded-full blur-3xl pointer-events-none warm-float-2"></div>
      <div className="absolute bottom-4 left-1/3 w-80 h-80 bg-[#D8E2DC]/40 rounded-full blur-3xl pointer-events-none warm-float-3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Big bold headline & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Friendly Warm Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FFEDD5] border border-[#FDBA74] text-xs font-bold text-[#C2410C] shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84A98C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#6B9080]"></span>
              </span>
              <span>Available for Software &amp; Full-Stack Opportunities</span>
              <span className="text-[#C2410C]/40">•</span>
              <span className="font-mono text-[#9A3412]">B.Tech CSE &apos;28</span>
            </div>

            {/* Large Bold Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#2B1E16] leading-[1.12]">
                Designing thoughtful software with{' '}
                <span className="text-[#EA580C]">Python</span>,{' '}
                <span className="text-[#C2410C]">Django</span> &amp;{' '}
                <span className="text-[#84A98C]">Product Engineering.</span>
              </h1>
              <p className="text-lg sm:text-xl font-bold text-[#6B5344] pt-1">
                Hi! I&apos;m <span className="text-[#EA580C]">Chinnakkagari Poojasree</span> — Computer Science Engineer @ MITS.
              </p>
            </div>

            {/* Clean, spacious bio */}
            <p className="text-[#4A3525] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Passionate about bridging robust backend engineering with user-centric product design. 
              Maintaining an <strong className="text-[#C2410C] font-extrabold">8.5 CGPA</strong> at Madanapalle Institute of Technology &amp; Science (MITS), with hands-on industrial full-stack experience from <strong className="text-[#EA580C] font-extrabold">Averixis Solutions</strong> and national <strong className="text-[#2F4F3E] font-extrabold bg-[#D8E2DC] px-2 py-0.5 rounded-md">NPTEL Elite Certification</strong> from IIT Kharagpur (76%).
            </p>

            {/* Location & Key Competencies */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#5C4033]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E07A5F]/25 shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                Muraripalle, Chittoor District, AP - 517415
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#E07A5F]/25 shadow-xs">
                <Code2 className="w-3.5 h-3.5 text-[#84A98C]" />
                Python • Django • MySQL • Modern UI
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-[#EA580C] to-[#E07A5F] hover:opacity-95 shadow-[0_8px_20px_rgba(234,88,12,0.28)] transition flex items-center gap-2 group cursor-pointer"
              >
                <span>View 3 Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-full text-sm font-bold text-[#2B1E16] bg-white hover:bg-[#FFEDD5] border border-[#FDBA74] shadow-sm transition flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#EA580C]" />
                <span>Resume (PDF)</span>
              </button>

              {/* GitHub Link */}
              <a
                href="https://github.com/poojachinnakkagaari"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-full text-sm font-bold text-[#4A3525] bg-white hover:bg-[#FAF7F2] border border-[#E07A5F]/25 shadow-sm transition flex items-center gap-2"
                title="View GitHub Repositories"
              >
                <Github className="w-4 h-4 text-[#EA580C]" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/chinnakkagari-poojasree-b4404b32b"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3 rounded-full text-sm font-bold text-[#C2410C] bg-[#FFEDD5]/60 hover:bg-[#FFEDD5] border border-[#FDBA74] shadow-sm transition flex items-center gap-2"
                title="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Stat Highlights */}
            <div className="pt-4 border-t border-[#E07A5F]/20 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-[#6B5344]">Key Milestones:</span>
              <button
                onClick={onOpenInternshipCert}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFEDD5] hover:bg-[#FED7AA] border border-[#FDBA74] text-[#9A3412] text-xs font-bold transition cursor-pointer"
              >
                <Briefcase className="w-3.5 h-3.5 text-[#EA580C]" />
                <span>Averixis Internship Cert</span>
              </button>
              <button
                onClick={onOpenNptelCert}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#D8E2DC] hover:bg-[#84A98C]/30 border border-[#84A98C] text-[#2F4F3E] text-xs font-bold transition cursor-pointer"
              >
                <Award className="w-3.5 h-3.5 text-[#52796F]" />
                <span>NPTEL PEDT Elite (76%)</span>
              </button>
            </div>

          </div>

          {/* Right Column: Smiling student photo in a rounded circle with orange border on right */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative">
              
              {/* Playful decorative circles & soft peach glow behind photo */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#FED7AA] via-[#FFEDD5] to-[#D8E2DC] opacity-70 blur-xl"></div>
              
              {/* Decorative playful floating shape - Sage Green Tag */}
              <div className="absolute -top-3 -left-4 z-20 px-3.5 py-2 rounded-2xl bg-white border border-[#84A98C]/40 shadow-lg flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6B9080]"></span>
                <span className="text-xs font-extrabold text-[#2F4F3E]">MITS CSE (2024–2028)</span>
              </div>

              {/* Decorative playful floating shape - Warm Orange Stat */}
              <div className="absolute -bottom-4 -right-4 z-20 px-4 py-2.5 rounded-2xl bg-white border border-[#EA580C]/30 shadow-xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FFEDD5] flex items-center justify-center text-[#EA580C] font-black">
                  ★
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#6B5344]">Academic Score</div>
                  <div className="text-base font-black text-[#EA580C]">8.5 CGPA</div>
                </div>
              </div>

              {/* The Smiling Student Photo in a Rounded Circle with Orange Border */}
              <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-92 md:h-92 rounded-full overflow-hidden border-[6px] border-[#EA580C] shadow-2xl bg-[#FFEDD5] group">
                <img
                  src="/assets/aistudio/me1_5d652e39.jpeg"
                  alt="Chinnakkagari Poojasree smiling"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
