import React from 'react';
import {
  Award,
  CheckCircle2,
  Download,
  Building,
  Briefcase,
  Eye,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Certification } from '../types.ts';

interface CertificationsProps {
  certifications: Certification[];
  onSelectCert: (cert: Certification) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({
  certifications,
  onSelectCert,
}) => {
  return (
    <section id="certifications" className="py-20 relative bg-white/60 border-y border-[#E07A5F]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEDD5] border border-[#FDBA74] text-xs font-bold text-[#C2410C] uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-[#EA580C]" />
            Accreditations &amp; Verifications
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1E16] tracking-tight">
            Official <span className="text-[#EA580C]">Credentials</span>
          </h2>
          <p className="mt-3 text-[#4A3525] text-base leading-relaxed">
            Click any credential card below to inspect the original signed certificate documents, examination grades, and official registration IDs.
          </p>
        </div>

        {/* Clean Credential Cards with Warm Palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => {
            const isInternship = cert.id === 'internship';
            const isPedt = cert.id === 'pedt';

            return (
              <div
                key={cert.id}
                onClick={() => onSelectCert(cert)}
                className={`group rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer border-2 ${
                  isInternship
                    ? 'bg-[#FFF9F2] border-[#F97316]/30 hover:border-[#EA580C] shadow-[0_12px_30px_rgba(234,88,12,0.1)] hover:shadow-[0_20px_40px_rgba(234,88,12,0.18)]'
                    : isPedt
                    ? 'bg-[#F6F9F7] border-[#84A98C]/40 hover:border-[#52796F] shadow-[0_12px_30px_rgba(82,121,111,0.1)] hover:shadow-[0_20px_40px_rgba(82,121,111,0.18)]'
                    : 'bg-[#FFF8F3] border-[#E07A5F]/25 hover:border-[#C2410C] shadow-[0_12px_30px_rgba(194,65,12,0.08)]'
                }`}
              >
                <div>
                  {/* Badge & ID */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${
                        isInternship
                          ? 'bg-[#FFEDD5] text-[#9A3412] border-[#FDBA74]'
                          : isPedt
                          ? 'bg-[#D8E2DC] text-[#2F4F3E] border-[#84A98C]'
                          : 'bg-[#FED7AA]/40 text-[#7C2D12] border-[#FDBA74]'
                      }`}
                    >
                      {cert.badge}
                    </span>

                    <span className="font-mono text-xs font-bold text-[#6B5344] bg-white px-2.5 py-1 rounded-xl border border-[#E07A5F]/20">
                      {cert.credentialId}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 rounded-2xl shrink-0 mt-0.5 ${
                        isInternship
                          ? 'bg-[#EA580C] text-white shadow-sm'
                          : isPedt
                          ? 'bg-[#52796F] text-white shadow-sm'
                          : 'bg-[#C2410C] text-white shadow-sm'
                      }`}
                    >
                      {isInternship ? (
                        <Briefcase className="w-5 h-5" />
                      ) : (
                        <Award className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-[#2B1E16] group-hover:text-[#EA580C] transition-colors leading-snug">
                        {cert.title}
                      </h3>
                      <div className="text-xs text-[#6B5344] mt-1 font-bold flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-[#EA580C]" />
                        <span>{cert.issuer}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#7C2D12]/70 italic mb-4">
                    {cert.subtitle}
                  </p>

                  <p className="text-sm text-[#4A3525] leading-relaxed mb-4 font-normal">
                    {cert.description}
                  </p>

                  {/* Score pill */}
                  {cert.score && (
                    <div className="mb-4 p-3 rounded-2xl bg-[#D8E2DC]/60 border border-[#84A98C]/40 flex items-center justify-between text-xs">
                      <span className="text-[#2F4F3E] font-bold">Proctored Exam Score:</span>
                      <span className="font-black text-[#1E3A2B] text-sm">{cert.score} (Elite Grade)</span>
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-5">
                    {cert.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#4A3525]">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 shrink-0 ${
                            isInternship ? 'text-[#EA580C]' : isPedt ? 'text-[#52796F]' : 'text-[#C2410C]'
                          }`}
                        />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skillsLearned.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white text-[#4A3525] border border-[#E07A5F]/20 shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 border-t border-[#E07A5F]/20 flex items-center justify-between gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCert(cert);
                    }}
                    className={`flex-1 py-2.5 px-4 rounded-2xl text-xs sm:text-sm font-extrabold text-white transition flex items-center justify-center gap-2 shadow-sm cursor-pointer ${
                      isInternship
                        ? 'bg-[#EA580C] hover:bg-[#C2410C]'
                        : isPedt
                        ? 'bg-[#52796F] hover:bg-[#354F52]'
                        : 'bg-[#C2410C] hover:bg-[#9A3412]'
                    }`}
                  >
                    <Eye className="w-4 h-4" />
                    <span>
                      {isInternship
                        ? 'View Internship Certificate'
                        : isPedt
                        ? 'View PEDT Certificate'
                        : 'View Certificate'}
                    </span>
                  </button>

                  {cert.mediaUrl && (
                    <a
                      href={cert.mediaUrl}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-2xl bg-white hover:bg-[#FFEDD5] text-[#4A3525] hover:text-[#EA580C] border border-[#E07A5F]/20 transition cursor-pointer"
                      title="Download file"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification banner */}
        <div className="mt-12 p-4 rounded-2xl bg-[#FFEDD5]/60 border border-[#FDBA74] text-center text-xs text-[#7C2D12] flex items-center justify-center gap-2 max-w-2xl mx-auto font-medium">
          <ShieldCheck className="w-4 h-4 text-[#EA580C] shrink-0" />
          <span>All certificates are genuine, validated by government bodies and educational authorities.</span>
        </div>

      </div>
    </section>
  );
};
