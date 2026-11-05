import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Certifications } from './components/Certifications.tsx';
import { Projects } from './components/Projects.tsx';
import { Skills } from './components/Skills.tsx';
import { Education } from './components/Education.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';
import { CertificateModal } from './components/CertificateModal.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { ProfileData, Certification, EndorsementItem, ContactFormData } from './types.ts';

// Default initial profile state matching Poojasree's background
const initialProfile: ProfileData = {
  name: 'Chinnakkagari Poojasree',
  role: 'Computer Science & Engineering Undergrad | Full-Stack Python Developer',
  tagline: 'Crafting robust full-stack applications with Python, Django, MySQL and human-centered design thinking.',
  location: 'Muraripalle, Baireddipalli, Chittoor District, Andhra Pradesh - 517415',
  email: 'Poojachinnakkagaari2007@gmail.com',
  collegeEmail: '24691A05BR@mits.ac.in',
  phone: '+91 9182577842',
  altPhone: '+91 9640919131',
  linkedin: 'https://www.linkedin.com/in/chinnakkagari-poojasree-b4404b32b',
  github: 'https://github.com/poojachinnakkagaari',
  photoUrl: '/assets/aistudio/me1_5d652e39.jpeg',
  college: 'Madanapalle Institute of Technology & Science (MITS)',
  degree: 'Bachelors of Technology in Computer Science Engineering',
  session: '2024 - 2028',
  cgpa: '8.5 CGPA',
  resumeUrl: '/assets/aistudio/Br-1_ac35af58.pdf',
  stats: {
    views: 142,
    cgpa: 8.5,
    certificationsCount: 3,
    projectsCount: 2,
    graduationYear: 2028,
    nptelScore: '76% (Elite)',
  },
  competencies: {
    languages: ['Python', 'HTML5', 'CSS3', 'JavaScript'],
    frameworks: ['Django', 'Bootstrap', 'Tailwind CSS', 'React (Vite)'],
    databases: ['MySQL', 'PostgreSQL / Relational Data Design'],
    operatingSystems: ['Windows', 'Linux', 'macOS'],
    tools: ['Visual Studio Code', 'Git', 'GitHub', 'Figma', 'Video Editing Tools'],
    specialties: ['Full Stack Web Development', 'Artificial Intelligence Fundamentals', 'Product Engineering & Design Thinking', 'Software Architecture'],
    interpersonal: ['Active Listening', 'Adaptability', 'Time Management', 'Continuous Learning', 'Collaborative Teamwork'],
    interests: ['Writing', 'Drawing', 'Painting', 'Creative UI Prototyping', 'Mindfulness & Yoga'],
    languagesSpoken: ['English (Professional)', 'Telugu (Native)'],
  },
};

const initialCertifications: Certification[] = [
  {
    id: 'internship',
    title: 'Web Development & Python Full Stack Internship',
    issuer: 'Averixis Solutions Pvt. Ltd',
    subtitle: 'ISO 9001:2015 Certified Organization | Startup India & MSME Recognized',
    credentialId: 'AVX-2026-1838',
    issueDate: 'July 31, 2026',
    type: 'image',
    mediaUrl: '/assets/aistudio/WhatsApp_Image_2026-11-05_at_17.55.15_6664591b.jpeg',
    thumbnail: '/assets/aistudio/WhatsApp_Image_2026-11-05_at_17.55.15_6664591b.jpeg',
    badge: 'Verified Industrial Internship',
    badgeColor: 'emerald',
    featured: true,
    description: 'Successfully completed the comprehensive industry internship program on Web Development. Mastered hands-on architecture, backend services, responsive interfaces, and full stack deployment.',
    skillsLearned: ['Python', 'Django', 'Web Development', 'MySQL', 'Frontend Integration', 'Production Standards'],
    authority: 'Averixis Solutions / AICTE & MSME partner',
    highlights: [
      'Hands-on full stack web engineering',
      'ISO 9001:2015 certified assessment',
      'Verified credential AVX-2026-1838',
      'Signed by Managing Director Mr. G. Abhiram'
    ]
  },
  {
    id: 'pedt',
    title: 'Product Engineering and Design Thinking (PEDT)',
    issuer: 'NPTEL — Indian Institute of Technology Kharagpur',
    subtitle: 'Funded by the MoE, Govt. of India | Swayam & Skill India',
    credentialId: 'NPTEL26ME57S661501494',
    issueDate: 'Jan - Mar 2026 (8-week course)',
    type: 'pdf',
    mediaUrl: '/assets/aistudio/nptel_873bfc18.pdf',
    thumbnail: '/assets/aistudio/nptel_873bfc18.pdf',
    badge: 'Elite Certification (Top 5%)',
    badgeColor: 'amber',
    score: '76%',
    credits: '3 Credits Recommended',
    featured: true,
    description: 'Prestigious national Elite certification by IIT Kharagpur and the Ministry of Education. Covers systematic design thinking methodologies, user needs identification, prototyping, ergonomics, and product engineering viability.',
    skillsLearned: ['Design Thinking', 'Product Engineering', 'User Centered Prototyping', 'Feasibility Analysis', 'Systematic Problem Solving'],
    authority: 'Prof. Haimanti Banerji, Coordinator NPTEL, IIT Kharagpur',
    highlights: [
      'Elite Badge awarded (Consolidated score: 76%)',
      'Online Assignments: 24.58 / 25',
      'Proctored National Exam: 51 / 75',
      'Total candidates certified nationwide: 2,269',
      'Roll No: NPTEL26ME57S661501494'
    ]
  },
  {
    id: 'yoga',
    title: 'Certification of Participation — Yoga & Holistic Wellness',
    issuer: 'Madanapalle Institute of Technology & Science',
    subtitle: 'Institutional Wellness & Mental Resilience Initiative',
    credentialId: 'MITS-YOGA-2024',
    issueDate: '2024',
    type: 'badge',
    mediaUrl: '',
    thumbnail: '',
    badge: 'Wellness & Leadership',
    badgeColor: 'sky',
    featured: false,
    description: 'Awarded for active engagement in campus wellness, physical balance, stress regulation, and holistic lifestyle practices supporting intense engineering focus.',
    skillsLearned: ['Mindfulness', 'Stress Management', 'Mental Resilience', 'Self-Discipline'],
    authority: 'MITS Physical Education & Student Welfare Board',
    highlights: [
      'Focus on sustained productivity and mental clarity',
      'Active campus community contribution'
    ]
  }
];

const initialEndorsements: EndorsementItem[] = [
  { skill: 'Python & Django', count: 28 },
  { skill: 'Product Design Thinking', count: 24 },
  { skill: 'Full Stack Engineering', count: 22 },
  { skill: 'Database & MySQL', count: 19 },
  { skill: 'Clean UI/UX Design', count: 25 },
  { skill: 'Rapid Learner', count: 31 },
];

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(initialProfile);
  const [certifications, setCertifications] = useState<Certification[]>(initialCertifications);
  const [endorsements, setEndorsements] = useState<EndorsementItem[]>(initialEndorsements);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isBackendConnected, setIsBackendConnected] = useState(false);

  // Fetch backend data on mount
  useEffect(() => {
    let isMounted = true;

    async function loadBackendData() {
      try {
        const [profileRes, certsRes, endorseRes] = await Promise.all([
          fetch('/api/profile'),
          fetch('/api/certifications'),
          fetch('/api/endorsements'),
        ]);

        if (profileRes.ok && isMounted) {
          const profileData = await profileRes.json();
          if (profileData.success && profileData.data) {
            setProfile(profileData.data);
            setIsBackendConnected(true);
          }
        }

        if (certsRes.ok && isMounted) {
          const certsData = await certsRes.json();
          if (certsData.success && certsData.certifications) {
            setCertifications(certsData.certifications);
          }
        }

        if (endorseRes.ok && isMounted) {
          const endorseData = await endorseRes.json();
          if (endorseData.success && endorseData.endorsements) {
            setEndorsements(endorseData.endorsements);
          }
        }
      } catch (err) {
        console.warn('Backend API warming up or running local client mode:', err);
      }
    }

    loadBackendData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Quick launchers
  const handleOpenInternshipCert = useCallback(() => {
    const cert = certifications.find(c => c.id === 'internship');
    if (cert) setSelectedCert(cert);
  }, [certifications]);

  const handleOpenNptelCert = useCallback(() => {
    const cert = certifications.find(c => c.id === 'pedt');
    if (cert) setSelectedCert(cert);
  }, [certifications]);

  // Handle skill endorsement POST to backend
  const handleEndorseSkill = async (skill: string) => {
    try {
      const res = await fetch('/api/endorsements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skill }),
      });
      const data = await res.json();
      if (data.success && data.endorsements) {
        setEndorsements(data.endorsements);
      } else {
        // Optimistic local fallback
        setEndorsements(prev =>
          prev.map(item => item.skill === skill ? { ...item, count: item.count + 1 } : item)
        );
      }
    } catch {
      // Optimistic local fallback
      setEndorsements(prev =>
        prev.map(item => item.skill === skill ? { ...item, count: item.count + 1 } : item)
      );
    }
  };

  // Handle contact form submission POST to backend
  const handleSendMessage = async (formData: ContactFormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        return {
          success: true,
          message: data.message || 'Message delivered successfully.',
          submissionId: data.submissionId,
        };
      }
      return {
        success: false,
        message: data.error || 'Failed to deliver message.',
      };
    } catch (err: any) {
      return {
        success: false,
        message: err?.message || 'Network error communicating with Express backend.',
      };
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B1E16] flex flex-col relative selection:bg-[#EA580C] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        isBackendConnected={isBackendConnected}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Big Hero Section with Large Bold Headline on Left & Circular Smiling Photo on Right */}
        <Hero
          profile={profile}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenInternshipCert={handleOpenInternshipCert}
          onOpenNptelCert={handleOpenNptelCert}
        />

        {/* Below Hero: 3 Colorful Project Cards in a Row with Soft Shadows and Rounded Corners */}
        <Projects
          onOpenInternshipCert={handleOpenInternshipCert}
          onOpenNptelCert={handleOpenNptelCert}
        />

        {/* Accreditations & Certifications Section */}
        <Certifications
          certifications={certifications}
          onSelectCert={(cert) => setSelectedCert(cert)}
        />

        {/* Skills Matrix & Live Backend Endorsements */}
        <Skills
          endorsements={endorsements}
          onEndorse={handleEndorseSkill}
        />

        {/* Education Timeline */}
        <Education />

        {/* Contact Form connected to Express Backend */}
        <Contact onSendMessage={handleSendMessage} />
      </main>

      {/* Footer */}
      <Footer
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenInternshipCert={handleOpenInternshipCert}
        onOpenNptelCert={handleOpenNptelCert}
      />

      {/* High-Resolution Certificate Lightbox / Viewer */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      {/* Full Resume PDF Viewer */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        resumeUrl={profile.resumeUrl}
      />
    </div>
  );
}
