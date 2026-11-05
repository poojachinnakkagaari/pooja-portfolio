import React, { useState } from 'react';
import {
  Code2,
  Database,
  Cpu,
  Terminal,
  ThumbsUp,
  Sparkles,
  CheckCircle2,
  Palette,
  Loader2
} from 'lucide-react';
import { EndorsementItem } from '../types.ts';

interface SkillsProps {
  endorsements: EndorsementItem[];
  onEndorse: (skill: string) => Promise<void>;
}

export const Skills: React.FC<SkillsProps> = ({ endorsements, onEndorse }) => {
  const [endorsingSkill, setEndorsingSkill] = useState<string | null>(null);
  const [endorsedLocal, setEndorsedLocal] = useState<Record<string, boolean>>({});

  const handleEndorseClick = async (skill: string) => {
    if (endorsedLocal[skill]) return;
    setEndorsingSkill(skill);
    try {
      await onEndorse(skill);
      setEndorsedLocal(prev => ({ ...prev, [skill]: true }));
    } finally {
      setEndorsingSkill(null);
    }
  };

  const skillCategories = [
    {
      name: 'Programming & Languages',
      icon: Code2,
      accent: 'border-[#F97316]/30 bg-[#FFF9F2]',
      skills: [
        { name: 'Python', level: 'Advanced / Core', desc: 'Django backend, scripts, data processing, OOP' },
        { name: 'HTML5 & CSS3', level: 'Proficient', desc: 'Semantic layouts, Flexbox, Grid, responsiveness' },
        { name: 'JavaScript', level: 'Intermediate', desc: 'DOM manipulation, async fetch, client interactions' },
      ],
    },
    {
      name: 'Backend & Frameworks',
      icon: Terminal,
      accent: 'border-[#E07A5F]/30 bg-[#FFF8F3]',
      skills: [
        { name: 'Django', level: 'Proficient', desc: 'MVC/MTV architecture, ORM, authentication, routing' },
        { name: 'Bootstrap & Tailwind', level: 'Proficient', desc: 'Modern responsive systems and utility-first UI' },
        { name: 'REST APIs', level: 'Intermediate', desc: 'JSON endpoints, client-server communication' },
      ],
    },
    {
      name: 'Databases & Architecture',
      icon: Database,
      accent: 'border-[#84A98C]/40 bg-[#F6F9F7]',
      skills: [
        { name: 'MySQL', level: 'Proficient', desc: 'Relational schema design, normalization, joins, indexing' },
        { name: 'Product Engineering (PEDT)', level: 'Certified Elite', desc: 'Design thinking, user empathy, rapid prototyping' },
      ],
    },
    {
      name: 'Creative & Interpersonal',
      icon: Palette,
      accent: 'border-[#FED7AA] bg-[#FFFBF7]',
      skills: [
        { name: 'Creative Design & Prototyping', level: 'Passionate', desc: 'UI aesthetics, painting, drawing, video editing' },
        { name: 'Collaboration & Adaptability', level: 'High', desc: 'Active listening, time management, fast learner' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFEDD5] border border-[#FDBA74] text-xs font-bold text-[#C2410C] uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#EA580C]" />
            Technical Toolkit &amp; Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2B1E16] tracking-tight">
            Engineering &amp; Creative <span className="text-[#EA580C]">Toolkit</span>
          </h2>
          <p className="mt-3 text-[#4A3525] text-base leading-relaxed">
            A balanced foundation of full stack Python engineering, relational database design, and certified human-centered product thinking.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.name}
                className={`rounded-3xl p-7 sm:p-8 space-y-5 border-2 shadow-[0_10px_25px_-5px_rgba(74,53,37,0.06)] hover:shadow-lg transition-all duration-300 ${category.accent}`}
              >
                <div className="flex items-center gap-3.5 border-b border-[#E07A5F]/15 pb-4">
                  <div className="p-3 rounded-2xl bg-white text-[#EA580C] shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-black text-[#2B1E16] text-lg sm:text-xl">{category.name}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((s) => (
                    <div
                      key={s.name}
                      className="p-4 rounded-2xl bg-white/90 border border-[#E07A5F]/15 flex items-start justify-between gap-3 shadow-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-[#2B1E16] text-sm">{s.name}</span>
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FFEDD5] text-[#9A3412] font-bold border border-[#FDBA74]">
                            {s.level}
                          </span>
                        </div>
                        <p className="text-xs text-[#6B5344] mt-1">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Endorsement Card */}
        <div className="mt-12 rounded-3xl bg-white border-2 border-[#E07A5F]/30 p-7 sm:p-9 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-[#EA580C] uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#EA580C]" />
                Live Recruiter &amp; Peer Endorsements
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#2B1E16] mt-1">
                Endorse Poojasree&apos;s Engineering Skills
              </h3>
              <p className="text-xs text-[#6B5344] mt-0.5">
                Connected directly to the Express backend API. Click to endorse a skill in real-time.
              </p>
            </div>
            <span className="text-xs font-extrabold text-[#2F4F3E] bg-[#D8E2DC] border border-[#84A98C] px-4 py-1.5 rounded-full self-start sm:self-auto flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#52796F] animate-pulse"></span>
              Live Backend Store
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {endorsements.map((item) => {
              const isEndorsed = endorsedLocal[item.skill];
              const isLoading = endorsingSkill === item.skill;

              return (
                <button
                  key={item.skill}
                  onClick={() => handleEndorseClick(item.skill)}
                  disabled={isEndorsed || isLoading}
                  className={`p-3.5 rounded-2xl border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
                    isEndorsed
                      ? 'bg-[#D8E2DC]/80 border-[#84A98C] text-[#2F4F3E] cursor-default'
                      : 'bg-[#FAF7F2] border-[#E07A5F]/20 hover:border-[#EA580C] text-[#2B1E16] hover:bg-[#FFEDD5]'
                  }`}
                >
                  <div className="text-xs font-bold leading-snug">{item.skill}</div>
                  <div className="flex items-center justify-between mt-3 text-xs">
                    <span className="font-mono font-extrabold text-[#EA580C]">+{item.count}</span>
                    <span className="text-[#6B5344]">
                      {isLoading ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#EA580C]" />
                      ) : isEndorsed ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#52796F]" />
                      ) : (
                        <ThumbsUp className="w-3.5 h-3.5 hover:text-[#EA580C] transition" />
                      )}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
