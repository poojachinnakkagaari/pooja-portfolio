import React from 'react';
import { ArrowUp, FileText, Linkedin, Award, Github, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenInternshipCert: () => void;
  onOpenNptelCert: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenResume,
  onOpenInternshipCert,
  onOpenNptelCert,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E07A5F]/20 bg-[#FFFBF7] py-14 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E07A5F]/15">
          <div className="text-center md:text-left">
            <div className="text-xl font-black text-[#2B1E16] tracking-tight flex items-center justify-center md:justify-start gap-2.5">
              <span>Chinnakkagari Poojasree</span>
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FFEDD5] text-[#C2410C] border border-[#FDBA74]">
                CSE (2024–2028)
              </span>
            </div>
            <p className="text-xs text-[#6B5344] mt-1 font-medium">
              Madanapalle Institute of Technology &amp; Science • Python Full-Stack &amp; Product Engineer
            </p>
          </div>

          {/* Quick links in warm style */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#4A3525]">
            <button
              onClick={onOpenInternshipCert}
              className="hover:text-[#EA580C] transition flex items-center gap-1.5 cursor-pointer"
            >
              <Award className="w-4 h-4 text-[#EA580C]" />
              Internship Certificate
            </button>
            <button
              onClick={onOpenNptelCert}
              className="hover:text-[#52796F] transition flex items-center gap-1.5 cursor-pointer"
            >
              <Award className="w-4 h-4 text-[#52796F]" />
              NPTEL Elite (PEDT)
            </button>
            <button
              onClick={onOpenResume}
              className="hover:text-[#C2410C] transition flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#C2410C]" />
              Resume (PDF)
            </button>
            <a
              href="https://github.com/poojachinnakkagaari"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#EA580C] transition flex items-center gap-1.5"
            >
              <Github className="w-4 h-4 text-[#EA580C]" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/chinnakkagari-poojasree-b4404b32b"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#EA580C] transition flex items-center gap-1.5"
            >
              <Linkedin className="w-4 h-4 text-[#C2410C]" />
              LinkedIn
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="p-3.5 rounded-2xl bg-white hover:bg-[#FFEDD5] text-[#2B1E16] border border-[#E07A5F]/25 transition cursor-pointer shadow-sm"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B5344] gap-2 font-medium">
          <div>
            © {new Date().getFullYear()} Chinnakkagari Poojasree. Designed with warm agency aesthetics.
          </div>
          <div className="flex items-center gap-1.5 text-[#6B5344]">
            <span>Cream White, Terracotta, Warm Orange &amp; Sage Green Palette</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
