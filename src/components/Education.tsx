import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const educationHistory = [
    {
      degree: 'Bachelors of Technology in Computer Science Engineering',
      institution: 'Madanapalle Institute of Technology & Science (MITS)',
      location: 'Kadiri Road, Andhra Pradesh',
      period: '2024 – 2028',
      score: '8.5 CGPA',
      scoreBadge: 'Current CGPA',
      badgeColor: 'amber',
      status: 'In Progress (Undergraduate)',
      details: [
        'Pursuing core Computer Science foundation, Data Structures, OOP, and Modern Web Systems',
        'Active participant in technical symposiums, coding hackathons, and software engineering workshops',
        'Coordinated academic presentations and technical team development projects'
      ],
    },
    {
      degree: 'Intermediate (MPC — Mathematics, Physics, Chemistry)',
      institution: 'Agasthi Junior College',
      location: 'Baireddipalle, Chittoor District, Andhra Pradesh',
      period: '2022 – 2024',
      score: '9.6%',
      scoreBadge: 'Board Distinction',
      badgeColor: 'emerald',
      status: 'Completed with High Honors',
      details: [
        'Achieved outstanding 9.6% academic distinction across advanced mathematics and physical sciences',
        'Solid quantitative aptitude, analytical reasoning, and rigorous problem-solving foundation'
      ],
    },
    {
      degree: 'Secondary School Certificate (SSC Board)',
      institution: 'ZDPHS PCgunta High School',
      location: 'Baireddipalle, Chittoor, Andhra Pradesh',
      period: '2021 – 2022',
      score: '9.2%',
      scoreBadge: 'Top Tier Percentage',
      badgeColor: 'indigo',
      status: 'Completed with Distinction',
      details: [
        'Demonstrated early academic excellence with 9.2% overall aggregate',
        'Participated actively in creative drawing, painting, and school leadership activities'
      ],
    },
  ];

  return (
    <section id="education" className="py-20 relative bg-[#FFFBF7] border-y border-[#E07A5F]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEDD5] border border-[#FDBA74] text-xs font-bold text-[#C2410C] uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#EA580C]" />
            Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1E16] tracking-tight">
            Academic <span className="text-[#EA580C]">Journey</span>
          </h2>
          <p className="mt-3 text-[#4A3525] text-base leading-relaxed">
            Consistently recognized for stellar academic performance, quantitative discipline, and technical curiosity.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {educationHistory.map((item) => (
            <div
              key={item.degree}
              className="rounded-3xl bg-white border-2 border-[#E07A5F]/20 p-7 sm:p-8 shadow-[0_8px_25px_-5px_rgba(74,53,37,0.06)] hover:border-[#EA580C]/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFEDD5] text-[#9A3412] border border-[#FDBA74]">
                      {item.status}
                    </span>
                    <span className="text-xs text-[#6B5344] font-bold flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-[#EA580C]" />
                      {item.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-[#2B1E16] pt-1">{item.degree}</h3>
                  <div className="text-sm font-bold text-[#C2410C]">{item.institution}</div>
                  <div className="text-xs text-[#6B5344] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Score Pill */}
                <div className="sm:text-right shrink-0">
                  <div className="inline-block p-4 rounded-2xl bg-[#FFF8F3] border border-[#E07A5F]/25 text-center min-w-[110px]">
                    <div className="text-[10px] uppercase font-bold text-[#9A3412]">{item.scoreBadge}</div>
                    <div className="text-2xl font-black text-[#EA580C] mt-0.5">{item.score}</div>
                  </div>
                </div>
              </div>

              {/* Bullet details */}
              <div className="mt-6 pt-5 border-t border-[#E07A5F]/15 space-y-2.5">
                {item.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4A3525]">
                    <CheckCircle2 className="w-4 h-4 text-[#84A98C] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
