import React, { useState } from 'react';
import {
  Heart,
  Database,
  Code2,
  CheckCircle2,
  Server,
  ArrowRight,
  ExternalLink,
  Award,
  Briefcase,
  Layers,
  Sparkles,
  Eye
} from 'lucide-react';

interface ProjectsProps {
  onOpenInternshipCert: () => void;
  onOpenNptelCert: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onOpenInternshipCert,
  onOpenNptelCert,
}) => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>('O+');
  const [showDemoModal, setShowDemoModal] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'simulation' | 'schema'>('simulation');

  const bloodInventory: Record<string, { units: number; donors: number; status: 'Available' | 'Low' | 'Critical' }> = {
    'A+': { units: 14, donors: 8, status: 'Available' },
    'A-': { units: 4, donors: 2, status: 'Low' },
    'B+': { units: 18, donors: 11, status: 'Available' },
    'B-': { units: 3, donors: 2, status: 'Critical' },
    'AB+': { units: 9, donors: 5, status: 'Available' },
    'AB-': { units: 2, donors: 1, status: 'Critical' },
    'O+': { units: 22, donors: 15, status: 'Available' },
    'O-': { units: 5, donors: 3, status: 'Low' },
  };

  const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Clean, airy & modern */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEDD5] border border-[#FDBA74] text-xs font-bold text-[#C2410C] uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
            Featured Work &amp; Engineering Focus
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1E16] tracking-tight">
            Three Key <span className="text-[#EA580C]">Project Cards</span>
          </h2>
          <p className="mt-3 text-[#4A3525] text-base leading-relaxed">
            Spacious, colorful, and interactive cards showcasing full-stack application development, national product engineering, and verified industrial credentials.
          </p>
        </div>

        {/* 3 Colorful Project Cards in a Row with Soft Shadows and Rounded Corners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* Card 1: Blood Donation Management System (Warm Terracotta & Soft Peach) */}
          <div className="rounded-3xl bg-[#FFF8F3] border-2 border-[#E07A5F]/35 p-7 sm:p-8 flex flex-col justify-between shadow-[0_14px_35px_-8px_rgba(194,65,12,0.12)] hover:-translate-y-2 hover:shadow-[0_22px_45px_-10px_rgba(194,65,12,0.2)] transition-all duration-300">
            <div>
              {/* Top tag & badge */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFEDD5] text-[#9A3412] border border-[#FDBA74]">
                  Full-Stack System
                </span>
                <span className="text-xs font-bold text-[#C2410C]">Team of 2</span>
              </div>

              {/* Icon & Title */}
              <div className="w-14 h-14 rounded-2xl bg-[#EA580C] text-white flex items-center justify-center mb-5 shadow-[0_6px_16px_rgba(234,88,12,0.3)]">
                <Heart className="w-7 h-7" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#2B1E16] leading-snug mb-3">
                Blood Donation Management System
              </h3>

              <p className="text-sm text-[#4A3525] leading-relaxed mb-5">
                Engineered a comprehensive web portal connecting blood donors with recipients in real-time. Features automated blood group compatibility calculation, emergency donor dispatch, and a relational MySQL database.
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Python', 'Django', 'MySQL', 'Bootstrap', 'JavaScript'].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white text-[#C2410C] border border-[#E07A5F]/20 shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 border-t border-[#E07A5F]/20">
              <button
                onClick={() => setShowDemoModal(true)}
                className="w-full py-3 px-4 rounded-2xl text-xs sm:text-sm font-extrabold text-white bg-[#EA580C] hover:bg-[#C2410C] shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Launch Interactive Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Product Engineering & Design Thinking (Sage Green Accents) */}
          <div className="rounded-3xl bg-[#F6F9F7] border-2 border-[#84A98C]/40 p-7 sm:p-8 flex flex-col justify-between shadow-[0_14px_35px_-8px_rgba(82,121,111,0.12)] hover:-translate-y-2 hover:shadow-[0_22px_45px_-10px_rgba(82,121,111,0.2)] transition-all duration-300">
            <div>
              {/* Top tag & badge */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#D8E2DC] text-[#2F4F3E] border border-[#84A98C]/60">
                  National Elite Honor
                </span>
                <span className="text-xs font-extrabold text-[#52796F] font-mono">Score: 76%</span>
              </div>

              {/* Icon & Title */}
              <div className="w-14 h-14 rounded-2xl bg-[#52796F] text-white flex items-center justify-center mb-5 shadow-[0_6px_16px_rgba(82,121,111,0.3)]">
                <Award className="w-7 h-7" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#2B1E16] leading-snug mb-3">
                Product Engineering &amp; Design Thinking
              </h3>

              <p className="text-sm text-[#4A3525] leading-relaxed mb-5">
                National Elite certification conducted by <strong>IIT Kharagpur</strong> and Swayam. Mastered human-centered product discovery, empathy mapping, low-fidelity wireframing, ergonomics, and production feasibility.
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Design Thinking', 'User Centric', 'Prototyping', 'Feasibility', 'IIT KGP'].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white text-[#2F4F3E] border border-[#84A98C]/30 shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 border-t border-[#84A98C]/20">
              <button
                onClick={onOpenNptelCert}
                className="w-full py-3 px-4 rounded-2xl text-xs sm:text-sm font-extrabold text-white bg-[#52796F] hover:bg-[#354F52] shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>Open NPTEL Certificate (PDF)</span>
              </button>
            </div>
          </div>

          {/* Card 3: Full-Stack Web Development Internship (Warm Orange & Soft Peach) */}
          <div className="rounded-3xl bg-[#FFF9F2] border-2 border-[#F97316]/35 p-7 sm:p-8 flex flex-col justify-between shadow-[0_14px_35px_-8px_rgba(249,115,22,0.12)] hover:-translate-y-2 hover:shadow-[0_22px_45px_-10px_rgba(249,115,22,0.2)] transition-all duration-300">
            <div>
              {/* Top tag & badge */}
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFEDD5] text-[#9A3412] border border-[#FDBA74]">
                  Industrial Experience
                </span>
                <span className="text-xs font-mono text-[#EA580C] font-extrabold">AVX-2026-1838</span>
              </div>

              {/* Icon & Title */}
              <div className="w-14 h-14 rounded-2xl bg-[#C2410C] text-white flex items-center justify-center mb-5 shadow-[0_6px_16px_rgba(194,65,12,0.3)]">
                <Briefcase className="w-7 h-7" />
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#2B1E16] leading-snug mb-3">
                Web Development &amp; Full-Stack Internship
              </h3>

              <p className="text-sm text-[#4A3525] leading-relaxed mb-5">
                Industrial internship completed at <strong>Averixis Solutions Pvt. Ltd</strong> (ISO 9001:2015, Startup India &amp; MSME). Built robust backend systems, integrated database models, and shipped responsive client views.
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {['Python', 'Django', 'REST APIs', 'Full Stack', 'Averixis'].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-white text-[#9A3412] border border-[#F97316]/20 shadow-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="pt-4 border-t border-[#F97316]/20">
              <button
                onClick={onOpenInternshipCert}
                className="w-full py-3 px-4 rounded-2xl text-xs sm:text-sm font-extrabold text-white bg-[#C2410C] hover:bg-[#9A3412] shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View Internship Certificate</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Blood Donation Demo & Architecture Modal */}
      {showDemoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2B1E16]/70 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowDemoModal(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white border-2 border-[#E07A5F]/30 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E07A5F]/20 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#FFEDD5] text-[#EA580C]">
                  <Heart className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#2B1E16]">Blood Donation System — Interactive Simulator</h3>
                  <p className="text-xs text-[#6B5344]">Designed &amp; Developed by Chinnakkagari Poojasree</p>
                </div>
              </div>

              <button
                onClick={() => setShowDemoModal(false)}
                className="p-2 rounded-full hover:bg-[#FFEDD5] text-[#2B1E16] font-black cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Tab selection */}
            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setActiveTab('simulation')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                  activeTab === 'simulation' ? 'bg-[#EA580C] text-white shadow-sm' : 'bg-[#FAF7F2] text-[#4A3525]'
                }`}
              >
                Blood Compatibility &amp; Donor Matcher
              </button>
              <button
                onClick={() => setActiveTab('schema')}
                className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                  activeTab === 'schema' ? 'bg-[#EA580C] text-white shadow-sm' : 'bg-[#FAF7F2] text-[#4A3525]'
                }`}
              >
                Django models.py &amp; Schema
              </button>
            </div>

            {activeTab === 'simulation' ? (
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold text-[#6B5344] uppercase tracking-wider mb-2">
                    Select Recipient Blood Group:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {bloodGroups.map((bg) => (
                      <button
                        key={bg}
                        onClick={() => setSelectedBloodGroup(bg)}
                        className={`px-4 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                          selectedBloodGroup === bg
                            ? 'bg-[#EA580C] text-white shadow-md'
                            : 'bg-[#FFEDD5] text-[#9A3412] hover:bg-[#FED7AA]'
                        }`}
                      >
                        {bg}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-[#FFF8F3] border border-[#E07A5F]/20">
                    <span className="text-[11px] font-bold uppercase text-[#9A3412]">Current Inventory</span>
                    <div className="text-2xl font-black text-[#EA580C] mt-1">
                      {bloodInventory[selectedBloodGroup]?.units} Units
                    </div>
                    <span className="text-xs font-bold text-[#52796F] mt-1 block">
                      Status: {bloodInventory[selectedBloodGroup]?.status}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F6F9F7] border border-[#84A98C]/30">
                    <span className="text-[11px] font-bold uppercase text-[#2F4F3E]">Available Donors</span>
                    <div className="text-2xl font-black text-[#52796F] mt-1">
                      {bloodInventory[selectedBloodGroup]?.donors} Donors
                    </div>
                    <span className="text-xs text-[#52796F] mt-1 block">
                      Verified radius: Chittoor &amp; Baireddipalli
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FFF9F2] border border-[#F97316]/20">
                    <span className="text-[11px] font-bold uppercase text-[#9A3412]">Transfusion Logic</span>
                    <div className="text-xs font-bold text-[#2B1E16] mt-2 space-y-1">
                      <div>Can receive: <span className="text-[#EA580C]">{selectedBloodGroup === 'O-' ? 'O- only' : selectedBloodGroup === 'AB+' ? 'All Blood Groups' : `${selectedBloodGroup}, O-`}</span></div>
                      <div>Can donate to: <span className="text-[#52796F]">{selectedBloodGroup === 'O-' ? 'Universal Donor' : selectedBloodGroup === 'AB+' ? 'AB+ only' : `${selectedBloodGroup}, AB+`}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#E07A5F]/20 font-mono text-xs text-[#2B1E16] overflow-x-auto">
                <pre>
{`# Developed by Chinnakkagari Poojasree
class Donor(models.Model):
    name = models.CharField(max_length=100)
    blood_group = models.CharField(max_length=5, choices=BLOOD_GROUPS)
    phone = models.CharField(max_length=15)
    location = models.CharField(max_length=150)
    is_available = models.BooleanField(default=True)

class BloodRequest(models.Model):
    recipient_name = models.CharField(max_length=100)
    hospital_name = models.CharField(max_length=150)
    blood_group = models.CharField(max_length=5)
    units_needed = models.PositiveIntegerField(default=1)`}
                </pre>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-[#E07A5F]/20 text-right">
              <button
                onClick={() => setShowDemoModal(false)}
                className="px-5 py-2 rounded-full text-xs font-bold bg-[#FAF7F2] hover:bg-[#FFEDD5] text-[#2B1E16] cursor-pointer"
              >
                Close Simulator
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
