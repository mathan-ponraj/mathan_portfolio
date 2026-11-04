import React from 'react';
import './App.css';

const profile = {
  name: "Mathan Ponraj",
  title: "AI Software Developer",
  tagline: "Python, FastAPI and LLM/RAG applications. Looking for AI Software Engineer role in Bengaluru.",
  location: "Bengaluru, India",
  // Phone removed from the public page to avoid spam calls. Keep it on your resume instead.
  // To show it again, set phone: "+91 7339404085"
  phone: "7339404085",
  photo: "/images/portfolio photo.png",
  email: "mathanponraj03@gmail.com",
  linkedin: "https://www.linkedin.com/in/mathan03/",
  // Fixed: this used to point to the portfolio repo, not your GitHub profile.
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
    // VERIFY the R² below against your notebook. Your site said 0.96, LinkedIn said 0.91, resume said 0.92.
    description: "A laptop price predictor and recommender. An XGBoost model trained on about 1,300 laptop listings predicts price from specifications (R² ≈ 0.91), after cleaning outliers and encoding categories in a Scikit-learn pipeline. In the Streamlit app you filter by budget, RAM, CPU and storage to get recommendations.",
    image: '/images/lappick-thumbnail.svg',
    imageAlt: 'LapPick laptop price and recommendation system banner',
    // VERIFY this repo link opens. Other places use a different repo name (Laptop-Price-And-Recommendation-System).
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
        <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.5, margin: '6px 0 10px' }}>{profile.tagline}</p>
        <p className="profile-location"><span aria-hidden="true">●</span> {profile.location}</p>

        <div className="social-links">
          {profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a> : <span className="social-placeholder" aria-label="LinkedIn link to add"><SocialIcon type="linkedin" /></span>}
          {profile.github ? <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon type="github" /></a> : <span className="social-placeholder" aria-label="GitHub link to add"><SocialIcon type="github" /></span>}
          {profile.email ? <a href={`mailto:${profile.email}`} aria-label="Email"><SocialIcon type="mail" /></a> : <span className="social-placeholder" aria-label="Email link to add"><SocialIcon type="mail" /></span>}
          {profile.email ? <a className="email-pill" href={`mailto:${profile.email}`}>email me</a> : <span className="email-pill">email me</span>}
        </div>

        {profile.phone && (
          <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '10px', fontWeight: 500 }}>
            📞 <a href={`tel:${profile.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>{profile.phone}</a>
          </p>
        )}
      </div>
      <section className="sidebar-section about-section">
        <p className="section-kicker">About</p>
        <div className="about-copy">
          <p>AI & Software Developer</p>
          <p>Software Developer building intelligent applications, from APIs and databases to AI-powered solutions using Python, FastAPI, React, SQL, and LangChain.</p>
          
          <p>vBuilt 7+ end-to-end projects across Generative AI, RAG, Machine Learning, Data Pipelines, and Backend Development.</p>
          
          <p>A little into code, a lot into building things from scratch, and always up for learning something new.</p>
        
          
          <p>Based in Bengaluru | Open to Full-Time Opportunities | Immediate Joiner 🤝</p>
        </div>
      </section>

      <section className="sidebar-section skills-section">
        <p className="section-kicker">Skills</p>
        {skillGroups.map((group) => (
          <div key={group.label}>
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
          <p className="availability-role">AI Software Developer</p>
        </div>
      </div>
    </aside>
  );
}

function BackgroundSections() {
  return (
    <section className="background-sections">
      <div className="background-column">
        <p className="section-kicker">Experience</p>
        {/* TODO: replace the title and dates below with the exact ones on your offer/experience letter. Check the company spelling too. */}
        <p className="muted-line">Nymore Coretex · 1 year, alongside M.E.</p>
        <h3>Associate – Web, Social Media &amp; Data</h3>
        {/* TODO: say which page/site you built and what it does or what changed. Keep the title identical to your offer letter. */}
        <p className="background-description">Worked across several areas at an early-stage startup. Built web pages using HTML, CSS and JavaScript, set up and managed the company's Instagram account and created content for it, collected and cleaned data, and prepared PowerPoint presentations for the team.</p>
        <p className="muted-line" style={{ marginTop: '24px' }}>Rinex.ai · Mar 2024 – May 2024</p>
        <h3>Data Science Intern</h3>
        {/* TODO: replace this line with 1-2 specific things you actually did (dataset, model, tool, result). */}
        <p className="background-description">Three-month internship working on data science tasks.</p>
      </div>
      <div className="background-column education-column">
        <p className="section-kicker">Education</p>
        <div className="education-entry">
          <p className="muted-line">2024 – 2026</p>
          <h3>M.E. in Computer Science &amp; Engineering</h3>
          <p className="background-description">Karpagam Academy of Higher Education, Coimbatore | CGPA: 8.85/10</p>
          <p className="background-description">Coursework: Database Systems, Data Warehousing, Data Mining, Machine Learning, AI and LLMs.</p>
        </div>
        <div className="education-entry">
          <p className="muted-line">2020 – 2024</p>
          <h3>B.E. in Computer Science &amp; Engineering</h3>
          {/* TODO: add your B.E. CGPA or percentage. */}
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
        <BackgroundSections />
        <footer className="footer">Designed and built by Mathan Ponraj.</footer>
      </div>
    </main>
  );
}
