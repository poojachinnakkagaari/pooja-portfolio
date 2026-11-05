import React, { useEffect } from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2, Award, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, resumeUrl }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2B1E16]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white border-2 border-[#E07A5F]/40 rounded-3xl shadow-2xl overflow-hidden text-[#2B1E16]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-[#E07A5F]/20 bg-[#FFF8F3]">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#EA580C] shadow-sm shrink-0 bg-[#FFEDD5]">
              <img
                src="/assets/aistudio/me1_5d652e39.jpeg"
                alt="Chinnakkagari Poojasree"
                className="w-full h-full object-cover object-top rounded-full"
              />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#2B1E16]">Chinnakkagari Poojasree — Curriculum Vitae</h3>
              <p className="text-xs text-[#6B5344] font-medium">B.Tech Computer Science &amp; Engineering | Madanapalle Institute of Technology &amp; Science</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              download="Chinnakkagari_Poojasree_Resume.pdf"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-full shadow-sm transition"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#4A3525] hover:text-[#EA580C] bg-[#FFEDD5] rounded-full transition"
              title="Open full view in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#6B5344] hover:text-[#2B1E16] hover:bg-[#FFEDD5] transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="flex-1 overflow-hidden bg-[#FAF7F2] p-2 sm:p-4">
          <div className="w-full h-[65vh] rounded-2xl overflow-hidden border-2 border-[#E07A5F]/25 bg-white relative">
            <object
              data={`${resumeUrl}#toolbar=1&navpanes=0`}
              type="application/pdf"
              className="w-full h-full"
            >
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                <FileText className="w-14 h-14 text-[#EA580C] mb-3" />
                <h4 className="text-base font-black text-[#2B1E16] mb-2">Resume PDF Document</h4>
                <p className="text-xs text-[#6B5344] max-w-sm mb-4">
                  View or download the official curriculum vitae document directly.
                </p>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-xs transition shadow-md"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open Full PDF Document
                </a>
              </div>
            </object>
          </div>
        </div>

        {/* Footer info pills */}
        <div className="px-6 py-3.5 border-t border-[#E07A5F]/20 bg-[#FFF8F3] flex flex-wrap items-center justify-between text-xs text-[#6B5344] gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-bold text-[#4A3525]">
              <GraduationCap className="w-3.5 h-3.5 text-[#EA580C]" />
              MITS (2024–2028)
            </span>
            <span className="flex items-center gap-1.5 font-bold text-[#C2410C]">
              <Award className="w-3.5 h-3.5 text-[#EA580C]" />
              8.5 CGPA
            </span>
            <span className="flex items-center gap-1.5 font-bold text-[#2F4F3E]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#84A98C]" />
              Averixis Full Stack Certified
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-1.5 rounded-full bg-white hover:bg-[#FFEDD5] text-[#2B1E16] font-bold border border-[#E07A5F]/20 transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
