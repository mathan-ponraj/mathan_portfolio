import React from 'react';
import './App.css';

const profile = {
  name: "Mathan Ponraj",
  title: "Python AI Developer",
  tagline: "Beyond Innovation — Looking for Python AI Developer roles in Bengaluru.",
  location: "Bengaluru, India",
  phone: "7339404085",
  photo: "/images/portfolio photo.png",
  email: "mathanponraj03@gmail.com",
  linkedin: "https://www.linkedin.com/in/mathan03/",
  github: "https://github.com/mathan-ponraj",
};

const skillGroups = [
  {
    label: "AI & LLM",
    items: ["LangChain", "RAG", "OpenAI API", "Gemini API", "Prompt Engineering", "Hugging Face"],
  },
  {
    label: "Backend",
    items: ["Python", "FastAPI", "Flask", "REST APIs", "SQL", "PostgreSQL", "SQLite", "Git & GitHub", "Postman"],
  },
  {
    label: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    label: "Data & ML",
    items: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "Feature Engineering", "ETL", "Star Schema", "Power BI"],
  },
];

const projects = [
  {
    number: "01",
    title: "TalentIQ AI",
    image: '/images/resume-interview-thumbnail.jpg',
    imageAlt: "TalentIQ AI resume analysis and mock interview app",
    tags: ["Python", "FastAPI", "LangChain", "React.js", "Vite", "Gemini API", "Vercel", "Render"],
    description: "An app that helps job seekers prepare for a specific role. You upload a resume and choose job role the algorithm shows the skill gaps, suggests resume improvements, and runs a mock interview at different difficulty levels. The backend is FastAPI with a LangChain RAG pipeline, and it uses semantic chunking so related skills stay together when the resume is split for embeddings.",
    github: "https://github.com/mathan-ponraj/talentiqai",
    live: 'https://talentiq-ai-two.vercel.app/',
    theme: 'resume',
  },
  {
    number: "02",
    title: "TrendTube",
    image: '/images/youtube-trendtube-thumbnail.jpg',
    imageAlt: "TrendTube YouTube trending data pipeline",
    tags: ["Python", "PostgreSQL", "ETL", "YouTube Data API v3", "Pandas", "Psycopg", "Star Schema"],
    description: "A Python ETL pipeline that pulls trending YouTube videos from 9 regions through the YouTube Data API, cleans and validates them with Pandas, and loads them into PostgreSQL. The data is stored as a star schema (dim_video, dim_region, dim_date, fact_trending) with an engagement metric, so trends can be compared across regions with plain SQL.",
    github: "https://github.com/mathan-ponraj/Trendtube",
  },
  {
    number: "03",
    title: "EduHelpDesk",
    image: '/images/eduhelpdesk-thumbnail.jpg',
    imageAlt: "EduHelpDesk academic support ticketing system",
    tags: ["Python", "Flask", "SQLite", "REST APIs", "RBAC", "Render"],
    description: "A support ticket system for a college. Students raise tickets, staff resolve them, and managers monitor progress, each with their own role-based dashboard. It tracks ticket age against SLA deadlines, flags overdue tickets, and keeps a full history of every status change. Built with Flask and SQLite and deployed on Render.",
    github: "https://github.com/mathan-ponraj/EduHelpDesk",
    live: 'https://eduhelpdesk.onrender.com/',
    theme: 'helpdesk',
  },
  {
    number: "04",
    title: "LapPick",
    tags: ['Python', 'XGBoost', 'Scikit-Learn', 'Streamlit', 'Joblib', 'Feature Engineering'],
    description: "A laptop price predictor and recommender. An XGBoost model trained on about 1,300 laptop listings predicts price from specifications (R² ≈ 0.91), after cleaning outliers and encoding categories in a Scikit-learn pipeline. In the Streamlit app you filter by budget, RAM, CPU and storage to get recommendations.",
    image: '/images/lappick-thumbnail.svg',
    imageAlt: 'LapPick laptop price and recommendation system banner',
    github: 'https://github.com/mathan-ponraj/lappick',
    live: 'https://laptop-price-and-recommendation-system-icvhjjspmfrmmy2rfmtuaq.streamlit.app/',
    theme: 'lappick',
  },
];

function SocialIcon({ type }) {
  if (type === 'linkedin') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.4h3.8v11.3H3.3V9.4Zm6.1 0H13v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7v6h-3.8v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.4H9.4V9.4Z"/></svg>;
  }
  if (type === 'github') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z"/></svg>;
  }
  if (type === 'mail') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.2 5.5h17.6c.9 0 1.7.8 1.7 1.7v9.6c0 .9-.8 1.7-1.7 1.7H3.2c-.9 0-1.7-.8-1.7-1.7V7.2c0-.9.8-1.7 1.7-1.7Zm.1 2 8.7 6.1 8.7-6.1H3.3Zm17.4 9V9.5L12 15.4 3.3 9.5v7h17.4Z"/></svg>;
  }
  return null;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a className={`project-image ${project.theme}`} href={project.live || project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="image-shade" />
      </a>
      <div className="project-heading">
        <h2>{project.title}</h2>
        <span className="project-number">{project.number}</span>
      </div>
      <div className="tag-list" aria-label="Technologies">
        {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
      <p className="project-description">{project.description}</p>
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
        <img className="profile-photo" src={profile.photo} alt="Mathan Ponraj" onError={(event) => { event.currentTarget.style.display = 'none'; const fallback = event.currentTarget.parentElement.querySelector('.profile-fallback'); if (fallback) fallback.style.display = 'grid'; }} />
        <div className="profile-fallback" aria-hidden="true">MP</div>
        <h1>{profile.name}</h1>
        <p className="profile-title">{profile.title}</p>
        <p style={{ fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.4, margin: '4px 0 8px' }}>{profile.tagline}</p>
        <p className="profile-location"><span aria-hidden="true">●</span> {profile.location}</p>

        <div className="social-links">
          {profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a> : <span className="social-placeholder" aria-label="LinkedIn link to add"><SocialIcon type="linkedin" /></span>}
          {profile.github ? <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon type="github" /></a> : <span className="social-placeholder" aria-label="GitHub link to add"><SocialIcon type="github" /></span>}
          {profile.email ? <a href={`mailto:${profile.email}`} aria-label="Email"><SocialIcon type="mail" /></a> : <span className="social-placeholder" aria-label="Email link to add"><SocialIcon type="mail" /></span>}
          {profile.email ? <a className="email-pill" href={`mailto:${profile.email}`}>email me</a> : <span className="email-pill">email me</span>}
        </div>

        {profile.phone && (
          <p style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: '8px', fontWeight: 500 }}>
            📞 <a href={`tel:${profile.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>{profile.phone}</a>
          </p>
        )}
      </div>

      <section className="sidebar-section about-section">
        <p className="section-kicker">About</p>
        <div className="about-copy">
          <p>I am a Python AI Developer building intelligent applications, from high-performance REST APIs and databases to advanced GenAI and RAG solutions using Python, FastAPI, and LangChain. Passionate about solving complex operational challenges, I transform raw ideas into production-ready software with a commitment to excellence. Based in Bengaluru and actively seeking full-time opportunities. 🤝</p>
        </div>
      </section>

      <section className="sidebar-section philosophy-section">
        <p className="section-kicker">Vision & Mission</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '6px', marginTop: '6px' }}>
          <div style={{ padding: '8px 10px', background: 'rgba(245, 158, 11, 0.03)', border: '1px solid rgba(245, 158, 11, 0.15)', borderRadius: '8px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Omnicompetent</span>
            <p style={{ fontSize: '0.82rem', color: '#e2e8f0', marginTop: '2px', fontWeight: 500 }}>Limitless capacity.</p>
          </div>
          <div style={{ padding: '8px 10px', background: 'rgba(245, 158, 11, 0.03)', border: '1px solid rgba(245, 158, 11, 0.15)', borderRadius: '8px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#fbbf24', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Objective</span>
            <p style={{ fontSize: '0.82rem', color: '#e2e8f0', marginTop: '2px' }}>Give the best experience for intelligent products with high satisfaction.</p>
          </div>
        </div>
      </section>

      <section className="sidebar-section skills-section">
        <p className="section-kicker">Skills</p>
        {skillGroups.map((group) => (
          <div key={group.label} style={{ marginBottom: '6px' }}>
            <p className="muted-line">{group.label}</p>
            <div className="tag-list skills-list">
              {group.items.map((skill) => <span className="tag" key={skill}>{skill}</span>)}
            </div>
          </div>
        ))}
      </section>

      <div className="availability-card" aria-label="Current job availability">
        <span className="availability-dot" aria-hidden="true" />
        <div>
          <p className="availability-label">Open to work · Immediate joiner</p>
          <p className="availability-role">Python AI Developer</p>
        </div>
      </div>
    </aside>
  );
}

function AchievementsAndEducation() {
  return (
    <section className="background-sections">
      <div className="background-column">
        <p className="section-kicker" style={{ marginBottom: '12px' }}>Achievements</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc', marginBottom: '2px' }}>🚀 Live Product Deployments</h3>
            <p className="background-description">Successfully completed and hosted 3+ live production web applications combining scalable backend engineering and AI components.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc', marginBottom: '2px' }}>💼 Freelance Leadership</h3>
            <p className="background-description">Successfully ran 1 year of freelance operations, leading a 3-member technical team (ongoing).</p>
          </div>
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f8fafc', marginBottom: '2px' }}>🎨 Full-Stack &amp; Content Execution</h3>
            <p className="background-description">Developed and deployed static and dynamic web pages while managing end-to-end Instagram content creation, including professional video editing and Photoshop design.</p>
          </div>
        </div>
      </div>
      <div className="background-column education-column">
        <p className="section-kicker" style={{ marginBottom: '12px' }}>Education</p>
        <div className="education-entry">
          <p className="muted-line">2024 – 2026</p>
          <h3>M.E. in Computer Science &amp; Engineering</h3>
          <p className="background-description">Karpagam Academy of Higher Education, Coimbatore | CGPA: 8.85/10</p>
          <p className="background-description" style={{ marginTop: '3px' }}>Coursework: Database Systems, Data Warehousing, Data Mining, Machine Learning, AI and LLMs.</p>
        </div>
        <div className="education-entry" style={{ marginTop: '16px' }}>
          <p className="muted-line">2020 – 2024</p>
          <h3>B.E. in Computer Science &amp; Engineering</h3>
          <p className="background-description">Government College of Engineering, Bodinayakanur</p>
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
          <p className="section-kicker">Projects</p>
        </div>
        <section className="projects-grid" aria-label="Selected projects">
          {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
        </section>
        <AchievementsAndEducation />
        <footer className="footer">Designed and built by Mathan Ponraj.</footer>
      </div>
    </main>
  );
}
