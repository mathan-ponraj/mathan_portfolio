import React from 'react';
import './App.css';
import './ResumeButton.css';

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

const whatsappLink = `https://wa.me/91${profile.phone}?text=${encodeURIComponent('Hi Mathan, I saw your portfolio.')}`;

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
    tags: ["Python", "FastAPI", "LangChain", "React.js", "Vite", "Gemini API", "Render"],
    highlights: [
      "GenAI career-prep app analyzing resume fit against target roles using Gemini API",
      "LangChain RAG pipeline with semantic chunking for contextual skill matching",
      "Multi-level AI-simulated mock interview suite with automated feedback scoring"
    ],
    github: "https://github.com/mathan-ponraj/talentiqai",
    live: 'https://talentiq-ai-two.vercel.app/',
    theme: 'resume',
  },
  {
    number: "02",
    title: "TrendTube",
    image: '/images/youtube-trendtube-thumbnail.jpg',
    imageAlt: "TrendTube YouTube trending data pipeline",
    tags: ["Python", "PostgreSQL", "ETL", "YouTube Data API v3", "Pandas", "Star Schema"],
    highlights: [
      "Automated ETL pipeline aggregating video trends across 9 global regions via YouTube API",
      "Pandas-driven data cleaning loading into PostgreSQL Star Schema data model",
      "Custom SQL engagement metrics for real-time cross-regional trend diagnosis"
    ],
    github: "https://github.com/mathan-ponraj/Trendtube",
    theme: 'trendtube',
  },
  {
    number: "03",
    title: "EduHelpDesk",
    image: '/images/eduhelpdesk-thumbnail.jpg',
    imageAlt: "EduHelpDesk academic support ticketing system",
    tags: ["Python", "Flask", "SQLite", "REST APIs", "RBAC", "Render"],
    highlights: [
      "Role-Based Access Control (RBAC) support portal for student/staff ticket management",
      "Automated SLA tracking engine calculating aging and flagging overdue escalations",
      "Full audit trail logging status change histories with administrative analytics"
    ],
    github: "https://github.com/mathan-ponraj/EduHelpDesk",
    live: 'https://eduhelpdesk.onrender.com/',
    theme: 'helpdesk',
  },
  {
    number: "04",
    title: "LapPick",
    image: '/images/lappick-thumbnail.svg',
    imageAlt: 'LapPick laptop price and recommendation system banner',
    tags: ['Python', 'XGBoost', 'Scikit-Learn', 'Streamlit', 'Feature Engineering'],
    highlights: [
      "Hardware price predictor & recommendation engine achieving R² ≈ 0.91 accuracy",
      "Scikit-learn pipeline handling outlier cleaning and multi-category feature encoding",
      "Interactive Streamlit app filtering recommendations by budget, RAM, CPU, and storage"
    ],
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
  if (type === 'whatsapp') {
    return <svg viewBox="0 0 24 24" aria-hidden="true" style={{ fill: '#25d366' }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>;
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

      <ul className="project-bullets">
        {project.highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <div className="project-card-footer">
        <div className="tag-list" aria-label="Technologies">
          {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
        
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="link-btn secondary">
            GitHub <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M3.75 2h8.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0V4.31L4.03 11.78a.75.75 0 0 1-1.06-1.06L10.44 3.25H3.75a.75.75 0 0 1 0-1.5Z"/></svg>
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="link-btn primary">
              Live Demo <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true"><path fill="currentColor" d="M3.75 2h8.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0V4.31L4.03 11.78a.75.75 0 0 1-1.06-1.06L10.44 3.25H3.75a.75.75 0 0 1 0-1.5Z"/></svg>
            </a>
          )}
        </div>
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

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div className="social-links">
          {profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a> : <span className="social-placeholder" aria-label="LinkedIn link to add"><SocialIcon type="linkedin" /></span>}
          {profile.github ? <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon type="github" /></a> : <span className="social-placeholder" aria-label="GitHub link to add"><SocialIcon type="github" /></span>}
          {profile.email ? <a href={`mailto:${profile.email}`} aria-label="Email me"><SocialIcon type="mail" /></a> : <span className="social-placeholder" aria-label="Email link to add"><SocialIcon type="mail" /></span>}
          <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Catch me on WhatsApp" title="Catch me on WhatsApp"><SocialIcon type="whatsapp" /></a>
        </div>
        <a href={whatsappLink} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#128c7e', textDecoration: 'none' }}>Catch me</a>
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
         <p style={{ textAlign: 'left', wordSpacing: 'normal', textJustify: 'inter-word' }}>
           I am an AI Full-Stack Developer who loves turning messy data into working, intelligent software. 
           My background spans database design, ETL pipelines, and handling datasets over 100K records, alongside building modern web applications. 
           Currently, I am zeroing in on scaling AI workflows with Python, AWS, and Docker. 
           Based in Bengaluru, I am looking for a full-time Python AI Developer role where I can build reliable systems with a solid engineering team.
         </p>
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

function ResumeButton() {
  return (
    <a
      className="resume-btn"
      href="/Mathan_Ponraj_Resume.pdf"
      download="Mathan_Ponraj_Resume.pdf"
      aria-label="Get my resume (PDF download)"
    >
      <span className="resume-dots" aria-hidden="true"><i /><i /><i /></span>
      <span>Get my resume</span>
      <svg className="resume-arrow" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v12m0 0-5-5m5 5 5-5M5 20h14" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <main className="portfolio-shell">
      <ResumeButton />
      <Sidebar />
      <div className="main-content">
        <div className="projects-header">
          <p className="section-kicker">Projects</p>
        </div>
        <section className="projects-grid" aria-label="Selected projects">
          {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
        </section>
        <AchievementsAndEducation />
      </div>
    </main>
  );
}
