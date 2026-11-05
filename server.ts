import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

interface Endorsement {
  skill: string;
  count: number;
}

// In-memory persistent data store during server lifecycle
const contactMessages: ContactMessage[] = [
  {
    id: 'msg-seed-1',
    name: 'Tech Talent Acquisition',
    email: 'recruiter@techventures.io',
    subject: 'Full Stack Python Developer Opportunity',
    message: 'Impressive portfolio and solid credentials in Python, Django, and Design Thinking. We would love to discuss graduate engineering roles.',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  }
];

const endorsements: Record<string, number> = {
  'Python & Django': 28,
  'Product Design Thinking': 24,
  'Full Stack Engineering': 22,
  'Database & MySQL': 19,
  'Clean UI/UX Design': 25,
  'Rapid Learner': 31,
};

let profileViews = 142;

async function startServer() {
  const app = express();
  const PORT = parseInt(process.env.PORT || '3000', 10);

  app.use(express.json());

  // Log requests in dev
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
      console.log(`[API] ${req.method} ${req.path}`);
    }
    next();
  });

  // Profile data endpoint
  app.get('/api/profile', (req, res) => {
    profileViews += 1;
    res.json({
      success: true,
      data: {
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
          views: profileViews,
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
          specialties: ['Full Stack Web Development', 'Artificial Intelligence Fundamentals', 'Product Engineering & Design Thinking', 'Software Architecture', 'System Design Basics'],
          interpersonal: ['Active Listening', 'Adaptability', 'Time Management', 'Continuous Learning', 'Collaborative Teamwork', 'Design Presentation'],
          interests: ['Writing', 'Drawing', 'Painting', 'Creative UI Prototyping', 'Mindfulness & Yoga'],
          languagesSpoken: ['English (Professional)', 'Telugu (Native)'],
        },
      },
    });
  });

  // Certifications endpoint
  app.get('/api/certifications', (req, res) => {
    res.json({
      success: true,
      certifications: [
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
      ]
    });
  });

  // Endorsements endpoint
  app.get('/api/endorsements', (req, res) => {
    const list = Object.entries(endorsements).map(([skill, count]) => ({
      skill,
      count,
    }));
    res.json({ success: true, endorsements: list });
  });

  app.post('/api/endorsements', (req, res) => {
    const { skill } = req.body;
    if (!skill || typeof skill !== 'string') {
      res.status(400).json({ success: false, error: 'Skill is required' });
      return;
    }
    endorsements[skill] = (endorsements[skill] || 0) + 1;
    const list = Object.entries(endorsements).map(([s, c]) => ({
      skill: s,
      count: c,
    }));
    res.json({ success: true, endorsements: list });
  });

  // Contact form submission
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).json({
        success: false,
        error: 'Please provide name, email, and message.',
      });
      return;
    }

    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      name: String(name).trim(),
      email: String(email).trim(),
      subject: String(subject || 'Portfolio Inquiry').trim(),
      message: String(message).trim(),
      createdAt: new Date().toISOString(),
    };

    contactMessages.unshift(newMessage);

    res.json({
      success: true,
      message: `Thank you, ${newMessage.name}! Your message has been received. Poojasree will get back to you at ${newMessage.email} soon.`,
      submissionId: newMessage.id,
      timestamp: newMessage.createdAt,
    });
  });

  // Contact messages retrieval (for interactive recruiter/admin review)
  app.get('/api/contact/messages', (req, res) => {
    res.json({
      success: true,
      count: contactMessages.length,
      messages: contactMessages,
    });
  });

  // Static files or Vite dev middleware
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Chinnakkagari Poojasree Portfolio Server active at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Server failed to start:', err);
  process.exit(1);
});
