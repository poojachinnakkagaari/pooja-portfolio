export interface ProfileData {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  collegeEmail: string;
  phone: string;
  altPhone: string;
  linkedin: string;
  github: string;
  photoUrl: string;
  college: string;
  degree: string;
  session: string;
  cgpa: string;
  resumeUrl: string;
  stats: {
    views: number;
    cgpa: number;
    certificationsCount: number;
    projectsCount: number;
    graduationYear: number;
    nptelScore: string;
  };
  competencies: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    operatingSystems: string[];
    tools: string[];
    specialties: string[];
    interpersonal: string[];
    interests: string[];
    languagesSpoken: string[];
  };
}

export interface Certification {
  id: 'internship' | 'pedt' | 'yoga' | string;
  title: string;
  issuer: string;
  subtitle: string;
  credentialId: string;
  issueDate: string;
  type: 'image' | 'pdf' | 'badge';
  mediaUrl: string;
  thumbnail: string;
  badge: string;
  badgeColor: 'emerald' | 'amber' | 'sky' | 'indigo' | 'purple';
  score?: string;
  credits?: string;
  featured: boolean;
  description: string;
  skillsLearned: string[];
  authority: string;
  highlights: string[];
}

export interface EndorsementItem {
  skill: string;
  count: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
