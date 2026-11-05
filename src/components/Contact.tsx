import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  CheckCircle2,
  Copy,
  AlertCircle,
  Loader2,
  MessageSquare,
  Sparkles,
  Github
} from 'lucide-react';
import { ContactFormData } from '../types.ts';

interface ContactProps {
  onSendMessage: (data: ContactFormData) => Promise<{ success: boolean; message: string; submissionId?: string }>;
}

export const Contact: React.FC<ContactProps> = ({ onSendMessage }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successInfo, setSuccessInfo] = useState<{ message: string; id?: string } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setSuccessInfo(null);

    try {
      const res = await onSendMessage(formData);
      if (res.success) {
        setSuccessInfo({ message: res.message, id: res.submissionId });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMsg(res.message || 'Failed to submit. Please try again.');
      }
    } catch (err: any) {
      setErrorMsg(err?.message || 'Network error connecting to backend.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEDD5] border border-[#FDBA74] text-xs font-bold text-[#C2410C] uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-[#EA580C]" />
            Connect &amp; Collaborate
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1E16] tracking-tight">
            Get In <span className="text-[#EA580C]">Touch</span>
          </h2>
          <p className="mt-3 text-[#4A3525] text-base leading-relaxed">
            Interested in discussing full-stack roles, internship opportunities, or engineering collaborations? Reach out directly or send a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Warm Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white border-2 border-[#E07A5F]/20 p-7 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-black text-[#2B1E16] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#EA580C]" />
                Direct Communication
              </h3>

              {/* Email 1 */}
              <div className="flex items-start justify-between gap-3 p-4 rounded-2xl bg-[#FFF8F3] border border-[#E07A5F]/20">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FFEDD5] text-[#EA580C] mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#9A3412] uppercase">Primary Email</div>
                    <a
                      href="mailto:Poojachinnakkagaari2007@gmail.com"
                      className="text-xs sm:text-sm font-bold text-[#2B1E16] hover:text-[#EA580C] transition break-all"
                    >
                      Poojachinnakkagaari2007@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('Poojachinnakkagaari2007@gmail.com', 'email')}
                  className="p-2 text-[#6B5344] hover:text-[#EA580C] rounded-xl hover:bg-[#FFEDD5] transition cursor-pointer"
                  title="Copy email"
                >
                  {copiedItem === 'email' ? (
                    <CheckCircle2 className="w-4 h-4 text-[#84A98C]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* College Email */}
              <div className="flex items-start justify-between gap-3 p-4 rounded-2xl bg-[#FFF8F3] border border-[#E07A5F]/20">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FFEDD5] text-[#EA580C] mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#9A3412] uppercase">College Email</div>
                    <a
                      href="mailto:24691A05BR@mits.ac.in"
                      className="text-xs sm:text-sm font-bold text-[#2B1E16] hover:text-[#EA580C] transition break-all"
                    >
                      24691A05BR@mits.ac.in
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('24691A05BR@mits.ac.in', 'collegeEmail')}
                  className="p-2 text-[#6B5344] hover:text-[#EA580C] rounded-xl hover:bg-[#FFEDD5] transition cursor-pointer"
                  title="Copy college email"
                >
                  {copiedItem === 'collegeEmail' ? (
                    <CheckCircle2 className="w-4 h-4 text-[#84A98C]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone numbers */}
              <div className="flex items-start justify-between gap-3 p-4 rounded-2xl bg-[#F6F9F7] border border-[#84A98C]/30">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#D8E2DC] text-[#2F4F3E] mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#2F4F3E] uppercase">Mobile &amp; Direct Phone</div>
                    <div className="text-xs sm:text-sm font-bold text-[#2B1E16]">
                      <a href="tel:+919182577842" className="hover:text-[#EA580C] transition">
                        +91 9182577842
                      </a>
                      <span className="text-[#6B5344] mx-1.5">•</span>
                      <a href="tel:+919640919131" className="hover:text-[#EA580C] transition">
                        +91 9640919131
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+919182577842', 'phone')}
                  className="p-2 text-[#6B5344] hover:text-[#EA580C] rounded-xl hover:bg-[#D8E2DC] transition cursor-pointer"
                  title="Copy primary phone"
                >
                  {copiedItem === 'phone' ? (
                    <CheckCircle2 className="w-4 h-4 text-[#52796F]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#FFF9F2] border border-[#F97316]/20">
                <div className="p-2.5 rounded-xl bg-[#FFEDD5] text-[#C2410C] mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#9A3412] uppercase">Home Location</div>
                  <div className="text-xs sm:text-sm font-bold text-[#2B1E16]">
                    H:NO 3-17, Muraripalle, Baireddipalli Mandal, Chittoor District, Andhra Pradesh - 517415
                  </div>
                </div>
              </div>

              {/* Social Channels: GitHub & LinkedIn */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="https://github.com/poojachinnakkagaari"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#FAF7F2] hover:bg-[#FFEDD5] border border-[#E07A5F]/20 text-[#2B1E16] text-xs font-bold transition shadow-xs"
                >
                  <Github className="w-4 h-4 text-[#EA580C]" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/chinnakkagari-poojasree-b4404b32b"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#FFEDD5] hover:bg-[#FED7AA] border border-[#FDBA74] text-[#C2410C] text-xs font-bold transition shadow-xs"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Warm Palette */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border-2 border-[#E07A5F]/20 p-7 sm:p-9 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#E07A5F]/15 pb-5 mb-6">
                <div>
                  <h3 className="text-xl font-black text-[#2B1E16] flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#EA580C]" />
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-[#6B5344] mt-1 font-medium">
                    Processed and transmitted via the Express backend service.
                  </p>
                </div>
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-[#FFEDD5] text-[#9A3412] font-bold border border-[#FDBA74]">
                  POST /api/contact
                </span>
              </div>

              {/* Success Alert */}
              {successInfo && (
                <div className="mb-6 p-4 rounded-2xl bg-[#D8E2DC] border border-[#84A98C] text-[#2F4F3E] text-xs sm:text-sm flex items-start gap-3 animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-[#52796F] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-extrabold text-[#1E3A2B]">Message Delivered Successfully!</div>
                    <div className="mt-0.5">{successInfo.message}</div>
                    {successInfo.id && (
                      <div className="mt-1 font-mono text-[11px] text-[#52796F] font-bold">
                        Reference Ticket: {successInfo.id}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Error Alert */}
              {errorMsg && (
                <div className="mb-6 p-4 rounded-2xl bg-[#FED7AA]/60 border border-[#EA580C] text-[#9A3412] text-xs sm:text-sm flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#EA580C] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-[#7C2D12]">Submission Error</div>
                    <div className="mt-0.5">{errorMsg}</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold text-[#2B1E16] uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-[#EA580C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Aditi Sharma"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#E07A5F]/25 text-[#2B1E16] placeholder-[#A08875] text-xs sm:text-sm focus:outline-none focus:border-[#EA580C] focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold text-[#2B1E16] uppercase tracking-wider mb-1.5">
                      Your Email <span className="text-[#EA580C]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. aditi@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#E07A5F]/25 text-[#2B1E16] placeholder-[#A08875] text-xs sm:text-sm focus:outline-none focus:border-[#EA580C] focus:bg-white transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#2B1E16] uppercase tracking-wider mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full-Stack Developer Opening / Technical Discussion"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#E07A5F]/25 text-[#2B1E16] placeholder-[#A08875] text-xs sm:text-sm focus:outline-none focus:border-[#EA580C] focus:bg-white transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-[#2B1E16] uppercase tracking-wider mb-1.5">
                    Your Message <span className="text-[#EA580C]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message, project brief, or interview invitation here..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#E07A5F]/25 text-[#2B1E16] placeholder-[#A08875] text-xs sm:text-sm focus:outline-none focus:border-[#EA580C] focus:bg-white transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#E07A5F] hover:opacity-95 text-white font-extrabold text-sm shadow-[0_8px_20px_rgba(234,88,12,0.25)] transition flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message to Backend...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
