import React, { useState, useEffect } from 'react';
import {
  X,
  Download,
  ExternalLink,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Award,
  CheckCircle2,
  Calendar,
  Building,
  Hash,
  ShieldCheck,
  FileText,
  Briefcase
} from 'lucide-react';
import { Certification } from '../types.ts';

interface CertificateModalProps {
  cert: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, onClose }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'preview' | 'details'>('preview');

  useEffect(() => {
    setZoomLevel(1);
    setActiveTab('preview');

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [cert, onClose]);

  if (!cert) return null;

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoomLevel(1);

  const isImage = cert.type === 'image';
  const isPdf = cert.type === 'pdf';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#2B1E16]/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-white border-2 border-[#E07A5F]/40 rounded-3xl shadow-2xl overflow-hidden text-[#2B1E16]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Warm Cream Accent */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E07A5F]/20 bg-[#FFF8F3]">
          <div className="flex items-center gap-3.5 min-w-0">
            <div className={`p-2.5 rounded-2xl ${cert.id === 'internship' ? 'bg-[#FFEDD5] text-[#EA580C] border border-[#FDBA74]' : 'bg-[#D8E2DC] text-[#2F4F3E] border border-[#84A98C]'}`}>
              {cert.id === 'internship' ? <Briefcase className="w-5 h-5" /> : <Award className="w-5 h-5" />}
            </div>
            <div className="truncate">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFEDD5] text-[#9A3412] border border-[#FDBA74]">
                  {cert.badge}
                </span>
                <span className="text-xs text-[#6B5344] font-mono font-bold hidden sm:inline">ID: {cert.credentialId}</span>
              </div>
              <h3 className="text-lg font-black text-[#2B1E16] truncate mt-0.5">{cert.title}</h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cert.mediaUrl && (
              <a
                href={cert.mediaUrl}
                download
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-[#4A3525] bg-white hover:bg-[#FFEDD5] rounded-xl border border-[#E07A5F]/30 transition"
              >
                <Download className="w-3.5 h-3.5 text-[#EA580C]" />
                <span className="hidden sm:inline">Download</span>
              </a>
            )}
            {cert.mediaUrl && (
              <a
                href={cert.mediaUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-[#EA580C] hover:bg-[#C2410C] rounded-xl shadow-sm transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open Full</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-[#6B5344] hover:text-[#2B1E16] hover:bg-[#FFEDD5] transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex border-b border-[#E07A5F]/15 bg-[#FAF7F2] px-6 pt-2 text-xs">
          <button
            onClick={() => setActiveTab('preview')}
            className={`pb-2.5 px-4 font-bold transition border-b-2 flex items-center gap-2 cursor-pointer ${activeTab === 'preview' ? 'border-[#EA580C] text-[#EA580C]' : 'border-transparent text-[#6B5344] hover:text-[#2B1E16]'}`}
          >
            <FileText className="w-3.5 h-3.5" />
            Certificate View
          </button>
          <button
            onClick={() => setActiveTab('details')}
            className={`pb-2.5 px-4 font-bold transition border-b-2 flex items-center gap-2 cursor-pointer ${activeTab === 'details' ? 'border-[#EA580C] text-[#EA580C]' : 'border-transparent text-[#6B5344] hover:text-[#2B1E16]'}`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Verification &amp; Details
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto bg-[#FAF7F2]">
          {activeTab === 'preview' ? (
            <div className="p-4 sm:p-6 flex flex-col items-center">
              
              {/* Internship Certificate View (Averixis) */}
              {isImage && (
                <div className="w-full flex flex-col items-center">
                  <div className="flex items-center gap-2 mb-3 bg-white px-4 py-2 rounded-2xl border border-[#E07A5F]/20 shadow-sm">
                    <span className="text-xs font-bold text-[#6B5344] mr-2">Zoom: {Math.round(zoomLevel * 100)}%</span>
                    <button
                      onClick={handleZoomOut}
                      disabled={zoomLevel <= 0.75}
                      className="p-1.5 text-[#4A3525] hover:text-[#EA580C] disabled:opacity-40 transition rounded hover:bg-[#FFEDD5]"
                      title="Zoom Out"
                    >
                      <ZoomOut className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleResetZoom}
                      className="p-1.5 text-[#4A3525] hover:text-[#EA580C] transition rounded hover:bg-[#FFEDD5]"
                      title="Reset Zoom"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleZoomIn}
                      disabled={zoomLevel >= 2.5}
                      className="p-1.5 text-[#4A3525] hover:text-[#EA580C] disabled:opacity-40 transition rounded hover:bg-[#FFEDD5]"
                      title="Zoom In"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="w-full max-h-[60vh] overflow-auto rounded-2xl border-2 border-[#E07A5F]/25 bg-white p-2 sm:p-4 flex items-center justify-center shadow-inner">
                    <img
                      src={cert.mediaUrl}
                      alt={cert.title}
                      style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                      className="max-h-[55vh] w-auto object-contain rounded-xl transition-transform duration-200 shadow-md"
                    />
                  </div>

                  <p className="mt-3.5 text-xs text-[#6B5344] text-center font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#EA580C]" />
                    Official Internship Certificate issued to <strong>CHINNAKKAGARI POOJASREE</strong> by Averixis Solutions Pvt. Ltd (AVX-2026-1838)
                  </p>
                </div>
              )}

              {/* NPTEL IIT Kharagpur PDF View */}
              {isPdf && (
                <div className="w-full flex flex-col items-center">
                  <div className="w-full rounded-2xl overflow-hidden border-2 border-[#84A98C]/30 bg-white shadow-xl">
                    <div className="bg-[#F6F9F7] px-4 py-3 border-b border-[#84A98C]/20 flex items-center justify-between text-xs">
                      <span className="font-extrabold text-[#2F4F3E]">NPTEL Elite Certificate (PEDT) — IIT Kharagpur</span>
                      <span className="text-[#52796F] font-black">Score: 76% (Elite Tier)</span>
                    </div>

                    <div className="w-full h-[58vh] bg-white relative">
                      <object
                        data={`${cert.mediaUrl}#toolbar=1&navpanes=0`}
                        type="application/pdf"
                        className="w-full h-full"
                      >
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                          <FileText className="w-12 h-12 text-[#52796F] mb-3" />
                          <h4 className="text-base font-bold text-[#2B1E16] mb-1">NPTEL Online Certification PDF</h4>
                          <p className="text-xs text-[#6B5344] max-w-md mb-4">
                            Product Engineering and Design Thinking by IIT Kharagpur.
                          </p>
                          <a
                            href={cert.mediaUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#52796F] hover:bg-[#354F52] text-white font-bold text-xs shadow-sm transition"
                          >
                            <ExternalLink className="w-4 h-4" />
                            View Full PDF in New Tab
                          </a>
                        </div>
                      </object>
                    </div>
                  </div>

                  <div className="w-full mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center text-xs">
                    <div className="bg-white border border-[#84A98C]/25 rounded-2xl p-3">
                      <div className="text-[#6B5344] font-bold">Award Tier</div>
                      <div className="text-[#2F4F3E] font-black mt-0.5">Elite Certification</div>
                    </div>
                    <div className="bg-white border border-[#84A98C]/25 rounded-2xl p-3">
                      <div className="text-[#6B5344] font-bold">Total Score</div>
                      <div className="text-[#EA580C] font-black mt-0.5">76%</div>
                    </div>
                    <div className="bg-white border border-[#84A98C]/25 rounded-2xl p-3">
                      <div className="text-[#6B5344] font-bold">Assignments</div>
                      <div className="text-[#2B1E16] font-black mt-0.5">24.58 / 25</div>
                    </div>
                    <div className="bg-white border border-[#84A98C]/25 rounded-2xl p-3">
                      <div className="text-[#6B5344] font-bold">Proctored Exam</div>
                      <div className="text-[#2B1E16] font-black mt-0.5">51 / 75</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-6 space-y-6">
              <div className="bg-white p-5 rounded-2xl border border-[#E07A5F]/20">
                <h4 className="text-xs uppercase font-extrabold text-[#C2410C] tracking-wider mb-2">Scope &amp; Description</h4>
                <p className="text-sm text-[#4A3525] leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-[#E07A5F]/20 space-y-2">
                  <h4 className="text-xs uppercase font-extrabold text-[#C2410C] tracking-wider flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#EA580C]" />
                    Issuing Authority
                  </h4>
                  <div className="text-sm font-extrabold text-[#2B1E16]">{cert.issuer}</div>
                  <div className="text-xs text-[#6B5344]">{cert.subtitle}</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#E07A5F]/20 space-y-2">
                  <h4 className="text-xs uppercase font-extrabold text-[#C2410C] tracking-wider flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5 text-[#EA580C]" />
                    Registration Identifiers
                  </h4>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#6B5344] font-medium">Credential ID:</span>
                    <span className="font-mono font-bold text-[#EA580C] bg-[#FFEDD5] px-2 py-0.5 rounded">{cert.credentialId}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#6B5344] font-medium">Issue Date:</span>
                    <span className="font-bold text-[#2B1E16]">{cert.issueDate}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="px-6 py-3.5 border-t border-[#E07A5F]/20 bg-[#FFF8F3] flex items-center justify-between text-xs text-[#6B5344]">
          <span className="flex items-center gap-1.5 font-bold text-[#2F4F3E]">
            <CheckCircle2 className="w-4 h-4 text-[#84A98C]" />
            Official Verified Asset
          </span>
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
