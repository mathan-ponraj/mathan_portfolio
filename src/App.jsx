import React from 'react';
import './App.css';

const profile = {
  name: 'Mathan Ponraj',
  title: 'Backend & AI Engineer',
  subtitle: 'Building practical AI applications, reliable backend services, and data-driven systems.',
  location: 'Bengaluru, India',
  phone: '+91 7339404085',
  photo: '/images/portfolio photo.png',
  email: 'mathanponraj03@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mathan03/',
  github: 'https://github.com/mathan-ponraj/mathan_portfolio',
};

const skillGroups = [
  {
    title: 'AI & Intelligent Applications',
    skills: ['Generative AI', 'LLM APIs', 'RAG Concepts', 'Prompt Engineering', 'Gemini API', 'Machine Learning'],
  },
  {
    title: 'Backend & Databases',
    skills: ['Python', 'OOP', 'FastAPI', 'Flask', 'REST APIs', 'PostgreSQL', 'SQLite', 'SQL'],
  },
  {
    title: 'Data & Machine Learning',
    skills: ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Feature Engineering', 'ETL Pipelines', 'Model Evaluation'],
  },
  {
    title: 'Tools & Frontend',
    skills: ['Git', 'GitHub', 'Postman', 'React', 'Vite', 'Streamlit', 'Vercel', 'Render'],
  },
];

const projects = [
  {
    number: '01',
    title: 'TalentIQ.ai',
    category: 'AI-powered recruitment platform',
    image: '/images/resume-interview-thumbnail.jpg',
    imageAlt: 'Resume documents and laptop representing an AI recruitment platform',
    tags: ['Python', 'FastAPI', 'Gemini API', 'React', 'Vite'],
    description:
      'An AI-assisted recruitment platform that reviews resumes against target roles, provides tailored improvement feedback, and offers an interactive assistant for technical interview practice.',
    github: 'https://github.com/mathan-ponraj/talentiqai',
    live: 'https://talentiq-ai-two.vercel.app/',
  },
  {
    number: '02',
    title: 'TrendTube',
    category: 'YouTube trend analytics pipeline',
    image: '/images/youtube-trendtube-thumbnail.jpg',
    imageAlt: 'YouTube trending video analytics dashboard concept',
    tags: ['Python', 'PostgreSQL', 'ETL', 'YouTube API', 'Pandas'],
    description:
      'A regional trend analytics pipeline that collects trending YouTube video data across nine regions through the YouTube Data API, transforms records with Python, and stores them in PostgreSQL for SQL-based analysis.',
    github: 'https://github.com/mathan-ponraj/Trendtube',
  },
  {
    number: '03',
    title: 'EduHelpDesk',
    category: 'Role-based support ticketing system',
    image: '/images/eduhelpdesk-thumbnail.jpg',
    imageAlt: 'Student support and ticket management concept',
    tags: ['Python', 'Flask', 'SQLite', 'REST APIs', 'SLA Tracking'],
    description:
      'A web-based support ticketing application for managing student queries. Role-based views help students, support staff, and administrators track tickets, priorities, ageing, and resolution timelines.',
    github: 'https://github.com/mathan-ponraj/EduHelpDesk',
    live: 'https://eduhelpdesk.onrender.com/',
  },
  {
    number: '04',
    title: 'LapPick',
    category: 'Machine learning recommendation app',
    image: '/images/lappick-thumbnail.svg',
    imageAlt: 'LapPick laptop price prediction and recommendation system banner',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'Streamlit'],
    description:
      'A machine learning application that helps users compare laptops and explore data-driven recommendations. The project includes a preprocessing pipeline, model comparison, price prediction, and an interactive Streamlit interface.',
    github: 'https://github.com/mathan-ponraj/lappick',
    live: 'https://laptop-price-and-recommendation-system-icvhjjspmfrmmy2rfmtuaq.streamlit.app/',
    metric: 'XGBoost model · R² ≈ 0.96',
  },
];

function SocialIcon({ type }) {
  if (type === 'linkedin') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.4h3.8v11.3H3.3V9.4Zm6.1 0H13v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7v6h-3.8v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.4H9.4V9.4Z" /></svg>;
  }
  if (type === 'github') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" /></svg>;
  }
  if (type === 'mail') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.2 5.5h17.6c.9 0 1.7.8 1.7 1.7v9.6c0 .9-.8 1.7-1.7 1.7H3.2c-.9 0-1.7-.8-1.7-1.7V7.2c0-.9.8-1.7 1.7-1.7Zm.1 2 8.7 6.1 8.7-6.1H3.3Zm17.4 9V9.5L12 15.4 3.3 9.5v7h17.4Z" /></svg>;
  }
  return null;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a className="project-image" href={project.live || project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="image-shade" />
      </a>
      <div className="project-heading">
        <div>
          <p className="project-category">{project.category}</p>
          <h2>{project.title}</h2>
        </div>
        <span className="project-number">{project.number}</span>
      </div>
      <div className="tag-list" aria-label="Technologies">
        {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <p className="project-description">{project.description}</p>
      {project.metric && <p className="project-metric">{project.metric}</p>}
      <div className="project-links">
        <a href={project.github} target="_blank" rel="noreferrer">GitHub Repository <span aria-hidden="true">↗</span></a>
        {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live Demo <span aria-hidden="true">↗</span></a>}
      </div>
    </article>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="profile-top">
        <img
          className="profile-photo"
          src={profile.photo}
          alt="Mathan Ponraj"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
            const fallback = event.currentTarget.parentElement.querySelector('.profile-fallback');
            if (fallback) fallback.style.display = 'grid';
          }}
        />
        <div className="profile-fallback" aria-hidden="true">MP</div>
        <p className="profile-eyebrow">PORTFOLIO / 2026</p>
        <h1>{profile.name}</h1>
        <p className="profile-title">{profile.title}</p>
        <p className="profile-subtitle">{profile.subtitle}</p>
        <p className="profile-location"><span aria-hidden="true">●</span>{profile.location}</p>

        <div className="social-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon type="github" /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><SocialIcon type="mail" /></a>
          <a className="email-pill" href={`mailto:${profile.email}`}>email me ↗</a>
        </div>
        {profile.phone && <p className="phone-line">↗ <a href={`tel:${profile.phone}`}>{profile.phone}</a></p>}
      </div>

      <section className="sidebar-section about-section">
        <p className="section-kicker">About</p>
        <div className="about-copy">
          <p>I build practical backend applications, data workflows, and AI-powered tools using Python and modern development technologies.</p>
          <p>My project work spans machine learning, automated ETL pipelines, SQL-based data systems, and Generative AI applications — with a focus on turning technical ideas into usable products.</p>
        </div>
      </section>

      <section className="sidebar-section skills-section">
        <p className="section-kicker">Technical toolkit</p>
        <div className="skill-groups">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list skills-list">
                {group.skills.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="availability-card" aria-label="Current job availability">
        <span className="availability-dot" aria-hidden="true" />
        <div>
          <p className="availability-label">Open to opportunities</p>
          <p className="availability-role">Backend · AI · Data</p>
        </div>
      </div>
    </aside>
  );
}

function BackgroundSections() {
  return (
    <section className="background-sections">
      <div className="background-column">
        <p className="section-kicker">Practical experience</p>
        <p className="muted-line">Project-based engineering work</p>
        <h3>Backend, AI & Data Projects</h3>
        <p className="background-description">
          Designed and deployed portfolio projects involving Python backend development, REST APIs, relational databases, machine learning workflows, and AI-assisted applications.
        </p>
        <div className="tag-list">
          {['Python', 'FastAPI', 'SQL', 'Machine Learning', 'Generative AI'].map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>
      <div className="background-column education-column">
        <p className="section-kicker">Education</p>
        <div className="education-entry">
          <p className="muted-line">Aug 2024 – Jul 2026</p>
          <h3>M.E. in Computer Science & Engineering</h3>
          <p className="background-description">Karpagam Academy of Higher Education, Coimbatore · CGPA: 8.85/10</p>
        </div>
        <div className="education-entry">
          <p className="muted-line">2020 – 2024</p>
          <h3>B.E. in Computer Science & Engineering</h3>
          <p className="background-description">Government College of Engineering, Bodinayakanur · First Class / Distinction</p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main className="portfolio-shell">
      <Sidebar />
      <div className="main-content">
        <div className="projects-header">
          <div>
            <p className="section-kicker">Selected projects</p>
            <h2 className="main-heading">Building useful things with data, AI & code.</h2>
          </div>
          <div className="header-decoration" aria-label="Portfolio accent colors">
            <span /><span /><span /><span /><span />
          </div>
        </div>
        <section className="projects-grid" aria-label="Selected projects">
          {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
        </section>
        <BackgroundSections />
        <footer className="footer">
          <span>Designed & built by Mathan Ponraj</span>
          <span>Python · Data · AI</span>
        </footer>
      </div>
    </main>
  );
}
