import React from 'react';
import './App.css';

const profile = {
  name: "Mathan Ponraj",
  title: "Python AI Fullstack Developer",
  tagline: "Seeking Python AI Developer roles in Bengaluru",
  location: "HSR Layout, Bengaluru, Karnataka 560102",
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
    items: ["Pandas", "NumPy", "Scikit-learn", "XGBoost", "Feature Engineering", "ETL", "Star Schema", "Power BI", "Excel"],
  },
];

const projects = [
  {
    number: "01",
    title: "TalentIQ AI",
    image: '/images/resume-interview-thumbnail.jpg',
    imageAlt: "TalentIQ AI resume analysis and mock interview app",
    tags: ["Python", "FastAPI", "LangChain", "React.js", "Vite", "Gemini API", "Vercel", "Render"],
    description: "A GenAI career-prep app that closes the gap between a resume and a target job role. Upload your resume, pick a role, and it runs NLP-driven data analysis to surface skill gaps, suggest sharper resume improvements, and host mock interviews at different difficulty levels. Built on FastAPI and a LangChain RAG pipeline, with semantic chunking so related skills stay together in the embeddings.",
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
    description: "A data engineering project that tracks what is trending on YouTube across 9 regions. A Python ETL pipeline pulls videos from the YouTube Data API, cleans and validates them with Pandas, and loads them into PostgreSQL as a star schema (dim_video, dim_region, dim_date, fact_trending). An engagement metric makes regional trends easy to compare with plain SQL for data analysis.",
    github: "https://github.com/mathan-ponraj/Trendtube",
  },
  {
    number: "03",
    title: "EduHelpDesk",
    image: '/images/eduhelpdesk-thumbnail.jpg',
    imageAlt: "EduHelpDesk academic support ticketing system",
    tags: ["Python", "Flask", "SQLite", "REST APIs", "RBAC", "Render"],
    description: "A role-based ticketing platform that helps a college resolve student issues on time. Students raise tickets, staff resolve them, and managers track progress on their own dashboards. It measures ticket age against SLA deadlines, flags overdue cases, and keeps a full history of every status change, turning ticket data into clear SLA insights. Built with Flask and SQLite, deployed on Render.",
    github: "https://github.com/mathan-ponraj/EduHelpDesk",
    live: 'https://eduhelpdesk.onrender.com/',
    theme: 'helpdesk',
  },
  {
    number: "04",
    title: "LapPick",
    tags: ['Python', 'XGBoost', 'Scikit-Learn', 'Streamlit', 'Joblib', 'Feature Engineering'],
    description: "A data science project that predicts laptop prices and recommends the best fit for your budget. An XGBoost model trained on about 1,300 listings predicts price from specifications (R² ≈ 0.91), after outlier cleaning and category encoding in a Scikit-learn pipeline. In the Streamlit app, you filter by budget, RAM, CPU and storage to get smart recommendations.",
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
        <img className="profile-photo" src={profile.photo} alt="Mathan Ponraj, Python AI Developer in Bengaluru" onError={(event) => { event.currentTarget.style.display = 'none'; const fallback = event.currentTarget.parentElement.querySelector('.profile-fallback'); if (fallback) fallback.style.display = 'grid'; }} />
        <div className="profile-fallback" aria-hidden="true">MP</div>
        <h1>{profile.name}</h1>
        <p className="profile-title">{profile.title}</p>
        <p className="profile-tagline">{profile.tagline}</p>
        <p className="profile-location"><span aria-hidden="true">●</span> {profile.location}</p>

        <div className="social-links">
          {profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a> : <span className="social-placeholder" aria-label="LinkedIn link to add"><SocialIcon type="linkedin" /></span>}
          {profile.github ? <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon type="github" /></a> : <span className="social-placeholder" aria-label="GitHub link to add"><SocialIcon type="github" /></span>}
          {profile.email ? <a href={`mailto:${profile.email}`} aria-label="Email me"><SocialIcon type="mail" /></a> : <span className="social-placeholder" aria-label="Email link to add"><SocialIcon type="mail" /></span>}
        </div>

        {profile.phone && (
          <p className="profile-phone">
            📞 <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </p>
        )}
      </div>

      <section className="sidebar-section about-section">
        <p className="section-kicker">About</p>
        <div className="about-copy">
          <p>I'm a Python AI Developer who turns ideas into production-ready intelligent products. I build high-performance REST APIs with FastAPI, engineer clean data pipelines, and ship GenAI and RAG applications on LangChain and modern LLM APIs.</p>
          <p>I enjoy turning complex operational challenges into simple, dependable software, taking an idea from raw data all the way to a fast, deployed product.</p>
          <p>Based in Bengaluru and actively seeking full-time opportunities. 🤝</p>
        </div>
      </section>

      <section className="sidebar-section philosophy-section">
        <p className="section-kicker">Vision & Mission</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', marginTop: '6px' }}>
          <div style={{ padding: '10px 12px', background: 'rgba(217, 119, 6, 0.04)', border: '1px solid rgba(217, 119, 6, 0.2)', borderRadius: '8px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Omnicompetent</span>
            <p style={{ fontSize: '0.82rem', color: '#0f172a', marginTop: '4px', fontWeight: 500 }}>Limitless capacity.</p>
          </div>
          <div style={{ padding: '10px 12px', background: 'rgba(217, 119, 6, 0.04)', border: '1px solid rgba(217, 119, 6, 0.2)', borderRadius: '8px' }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Mission</span>
            <p style={{ fontSize: '0.82rem', color: '#0f172a', marginTop: '4px', lineHeight: 1.6 }}>To build intelligent products that deliver an exceptional, high-satisfaction user experience.</p>
            <p className="beyond-line">Beyond Innovation</p>
          </div>
        </div>
      </section>

      <section className="sidebar-section skills-section">
        <p className="section-kicker">Skills</p>
        {skillGroups.map((group) => (
          <div key={group.label} style={{ marginBottom: '8px' }}>
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
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', marginBottom: '2px' }}>🚀 Live Product Deployments</h3>
            <p className="background-description">Successfully completed and hosted 3+ live production web applications combining scalable backend engineering and AI components.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', marginBottom: '2px' }}>💼 Freelance Leadership</h3>
            <p className="background-description">Successfully ran 1 year of freelance operations, leading a 3-member technical team (ongoing).</p>
          </div>
          <div>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', marginBottom: '2px' }}>🎨 Full-Stack &amp; Content Execution</h3>
            <p className="background-description">Developed and deployed static and dynamic web pages while managing end-to-end Instagram content creation, including professional video editing and Photoshop design.</p>
          </div>
        </div>
      </div>
      <div className="background-column education-column">
        <p className="section-kicker" style={{ marginBottom: '12px' }}>Education</p>
        <div className="education-entry">
          <p className="muted-line">2024 – 2026</p>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>M.E. in Computer Science &amp; Engineering</h3>
          <p className="background-description">Karpagam Academy of Higher Education, Coimbatore</p>
          <p className="background-description" style={{ marginTop: '2px', fontWeight: 500, color: '#d97706' }}>First Class</p>
        </div>
        <div className="education-entry" style={{ marginTop: '16px' }}>
          <p className="muted-line">2020 – 2024</p>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>B.E. in Computer Science &amp; Engineering</h3>
          <p className="background-description">Government College of Engineering, Bodinayakanur</p>
          <p className="background-description" style={{ marginTop: '2px', fontWeight: 500, color: '#d97706' }}>First Class</p>
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
        <footer className="footer">Designed and built by Mathan Ponraj</footer>
      </div>
    </main>
  );
}
