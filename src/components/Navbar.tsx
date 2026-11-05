import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, Send, Github, Linkedin, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  isBackendConnected: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, isBackendConnected }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('keydown', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects & Work', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-full bg-white/85 backdrop-blur-md border border-[#E07A5F]/20 px-5 sm:px-7 py-3 shadow-[0_10px_30px_-5px_rgba(234,88,12,0.08)] flex items-center justify-between">
          
          {/* Logo on Left */}
          <a href="#about" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#EA580C] shadow-sm p-0.5 bg-[#FFEDD5]">
                <img
                  src="/assets/aistudio/me1_5d652e39.jpeg"
                  alt="Chinnakkagari Poojasree"
                  className="w-full h-full object-cover object-top rounded-full"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#84A98C] border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="font-extrabold text-[#2B1E16] text-base tracking-tight flex items-center gap-2">
                Poojasree C.
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FFEDD5] text-[#C2410C] font-bold border border-[#FED7AA]">
                  CSE &apos;28
                </span>
              </div>
              <div className="text-[11px] text-[#6B5344] font-medium hidden sm:block">
                Full-Stack Python &amp; Product Engineer
              </div>
            </div>
          </a>

          {/* Menu on Right - Clean airy pills */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#E07A5F]/15">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[#4A3525] hover:text-[#EA580C] hover:bg-white transition duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Socials */}
          <div className="hidden lg:flex items-center gap-2.5">
            {/* Backend status pill */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border ${
                isBackendConnected
                  ? 'bg-[#D8E2DC]/80 text-[#2F4F3E] border-[#84A98C]/40'
                  : 'bg-[#FFEDD5] text-[#C2410C] border-[#FDBA74]'
              }`}
              title={isBackendConnected ? 'Backend API connected' : 'Connecting to API...'}
            >
              <span className={`w-2 h-2 rounded-full ${isBackendConnected ? 'bg-[#52796F] animate-pulse' : 'bg-[#EA580C]'}`}></span>
              <span>{isBackendConnected ? 'API Connected' : 'Connecting'}</span>
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/poojachinnakkagaari"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-[#4A3525] hover:text-[#EA580C] hover:bg-[#FFEDD5]/60 border border-[#E07A5F]/20 transition"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/chinnakkagari-poojasree-b4404b32b"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-full text-[#C2410C] hover:bg-[#FFEDD5]/60 border border-[#E07A5F]/20 transition"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-[#2B1E16] bg-[#FED7AA]/60 hover:bg-[#FED7AA] border border-[#FDBA74] transition cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#EA580C]" />
              <span>Resume</span>
            </button>

            {/* Contact CTA in Warm Terracotta / Orange */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#EA580C] to-[#E07A5F] hover:opacity-95 shadow-[0_4px_14px_rgba(234,88,12,0.25)] transition"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Say Hello</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="p-2 rounded-full bg-[#FFEDD5] text-[#C2410C] border border-[#FED7AA]"
              title="Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white text-[#2B1E16] border border-[#E07A5F]/20"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-3xl bg-white/95 backdrop-blur-xl border border-[#E07A5F]/20 p-5 shadow-2xl space-y-3 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#2B1E16] hover:bg-[#FFEDD5] hover:text-[#EA580C] transition"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E07A5F]/15 flex items-center justify-between gap-2">
              <a
                href="https://github.com/poojachinnakkagaari"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full text-xs font-bold bg-[#FAF7F2] text-[#2B1E16] border border-[#E07A5F]/20"
              >
                <Github className="w-4 h-4 text-[#EA580C]" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/chinnakkagari-poojasree-b4404b32b"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-full text-xs font-bold bg-[#FFEDD5] text-[#C2410C] border border-[#FED7AA]"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
