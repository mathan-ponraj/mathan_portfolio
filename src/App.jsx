import React from 'react';
import './App.css';

const profile = {
  name: "Mathan Ponraj",
  title: "Backend & AI Systems Engineer",
  tagline: "Engineering robust backend architectures, distributed data pipelines, and production-grade Generative AI (LLM/RAG) applications.",
  location: "Bengaluru, India",
  phone: "+91 7339404085",
  photo: "/images/portfolio photo.png",
  email: "mathanponraj03@gmail.com",
  linkedin: "https://www.linkedin.com/in/mathan03/",
  github: "https://github.com/mathan-ponraj/mathan-ponraj-portfolio",
};

const skillGroups = [
  {
    label: "Intelligent Systems & AI",
    items: ["Generative AI", "RAG Systems", "LangChain", "Semantic Chunking", "OpenAI API", "Gemini API", "Prompt Engineering", "HuggingFace"],
  },
  {
    label: "Backend & Architecture",
    items: ["Python (Advanced OOP)", "FastAPI", "Flask", "REST APIs", "PostgreSQL", "SQLite", "Star Schema", "RBAC Middleware", "Postman"],
  },
  {
    label: "Data & Machine Learning",
    items: ["XGBoost", "Scikit-learn", "ML Pipelines", "ETL Architectures", "Pandas", "NumPy", "Feature Engineering", "Model Evaluation"],
  },
];

const projects = [
  {
    number: "01",
    title: "TalentIQ AI",
    image: '/images/resume-interview-thumbnail.jpg',
    imageAlt: "Resume documents and laptop on a desk",
    tags: ["Python", "FastAPI", "LangChain", "React.js", "Vite", "Gemini API", "Vercel"],
    description: "Engineered a decoupled full-stack ecosystem orchestrating a high-performance Python FastAPI service layer and an interactive React.js client interface. Implemented a production-grade Retrieval-Augmented Generation (RAG) pipeline utilizing LangChain to parse and compare complex PDF resumes against target JSON job description matrices. Developed a custom semantic text-chunking strategy that prevented technical skill cluster fragmentation across embedding vectors, boosting contextual accuracy by 35%. Hardened the gateway using strict CORS middleware configurations to protect cross-origin API tokens.",
    github: "https://github.com/mathan-ponraj/talentiqai",
    live: 'https://talentiq-ai-two.vercel.app/',
    theme: 'resume',
  },
  {
    number: "02",
    title: "TrendTube",
    image: '/images/youtube-trendtube-thumbnail.jpg',
    imageAlt: "Online video and digital media concept",
    tags: ["Python", "PostgreSQL", "ETL", "YouTube Data API v3", "Pandas", "Psycopg", "Star Schema"],
    description: "Built a modular, automated Python ETL pipeline that ingests high-frequency trending video data concurrently across 9 geographic regions via the RESTful YouTube Data API v3. Modeled a high-performance PostgreSQL database using a Star Schema layout consisting of four highly indexed dimension and fact tables (dim_video, dim_region, dim_date, fact_trending). Utilized Pandas to engineer custom data transformation scripts that calculate normalized engagement velocities (view-to-interaction velocity) to support rapid, low-latency analytical SQL querying.",
    github: "https://github.com/mathan-ponraj/Trendtube",
  },
  {
    number: "03",
    title: "EduHelpDesk",
    image: '/images/eduhelpdesk-thumbnail.jpg',
    imageAlt: "Notebook and paperwork on a desk",
    tags: ["Python", "Flask", "SQLite", "REST APIs", "RBAC", "State Machines", "Render"],
    description: "Developed a centralized support tracking application utilizing a modular Flask microservice architecture. Configured backend Role-Based Access Control (RBAC) to enforce isolated, secure operational dashboards for distinct user states (Students, Staff, and Managers). Programmed a dedicated, timestamp-driven workflow engine that automatically calculates ticket aging, tracks remaining resolution milestones, and triggers system breach flags based on strict Service Level Agreements (SLAs), while maintaining an immutable transactional activity history log.",
    github: "https://github.com/mathan-ponraj/EduHelpDesk",
    live: 'https://eduhelpdesk.onrender.com/',
    theme: 'helpdesk',
  },
  {
    number: "04",
    title: "LapPick",
    tags: ['Python', 'XGBoost', 'Scikit-Learn', 'Streamlit', 'Joblib', 'Feature Engineering'],
    description: "Deployed a production-ready predictive machine learning and multi-attribute recommendation web service. Formed a unified Scikit-learn feature pipeline utilizing ColumnTransformer, OneHotEncoder, and StandardScaler to handle mixed categorical and numerical spec parameters flawlessly. Trained and hyperparameter-tuned an XGBoost regression model that achieved a precise verification metric of R² ≈ 0.96. Integrated 1st and 99th percentile price capping alongside target log transformations to insulate the model from extreme catalog volatility, serving instant predictions via Joblib binaries on an interactive Streamlit UI.",
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
        <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: 1.5, margin: '6px 0 10px' }}>{profile.tagline}</p>
        <p className="profile-location"><span aria-hidden="true">●</span> {profile.location}</p>
        
        <div className="social-links">
          {profile.linkedin ? <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a> : <span className="social-placeholder" aria-label="LinkedIn link to add"><SocialIcon type="linkedin" /></span>}
          {profile.github ? <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon type="github" /></a> : <span className="social-placeholder" aria-label="GitHub link to add"><SocialIcon type="github" /></span>}
          {profile.email ? <a href={`mailto:${profile.email}`} aria-label="Email"><SocialIcon type="mail" /></a> : <span className="social-placeholder" aria-label="Email link to add"><SocialIcon type="mail" /></span>}
          {profile.email ? <a className="email-pill" href={`mailto:${profile.email}`}>email me</a> : <span className="email-pill">email me</span>}
        </div>

        {/* Small, clean phone number text placed right under all icons */}
        {profile.phone && (
          <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '10px', fontWeight: 500 }}>
            📞 <a href={`tel:${profile.phone}`} style={{ color: 'inherit', textDecoration: 'none' }}>{profile.phone}</a>
          </p>
        )}
      </div>
      <section className="sidebar-section about-section">
        <p className="section-kicker">About</p>
        <div className="about-copy">
          <p>I design and scale high-performance backend infrastructures and intelligent software layers. My engineering philosophy balances architectural clean-coding with runtime optimization—whether that means hardening asynchronous API endpoints, structuring normalized relational schemas, or optimizing vector chunking strategies to eliminate LLM retrieval latency. I bridge the gap between predictive modeling and stable production services for modern enterprise stakeholders.</p>
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
          <p className="availability-label">Open to opportunities</p>
          <p className="availability-role">Backend &amp; AI Systems Engineer</p>
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
        <p className="muted-line">Production Systems &amp; Engineering Consultancy · Nov 2025 – Present</p>
        <h3>Generative AI &amp; Backend Developer (Independent Consultant)</h3>
        <p className="background-description">Deployed custom Python backend microservices, real-time database schemas, and stateful RAG applications for independent small-to-mid enterprise clients. Specialized in debugging query runtime performance, hardening cross-platform RESTful API connectivity layers, and configuring custom machine learning models to meet specific operational delivery milestones.</p>
        <div className="tag-list">
          {['Python', 'FastAPI', 'RAG', 'PostgreSQL', 'REST APIs'].map((tag) => <span className="tag" key={tag}>{tag}</span>)}
        </div>
      </div>
      <div className="background-column education-column">
        <p className="section-kicker">Education</p>
        <div className="education-entry">
          <p className="muted-line">2024 – 2026</p>
          <h3>M.E. in Computer Science &amp; Engineering</h3>
          <p className="background-description">Karpagam Academy of Higher Education, Coimbatore | CGPA: 8.85/10</p>
          <p className="background-description">Core Scope: Specialized in high-performance database systems, advanced network protocols, and distributed software design paradigms. (All full-time structural coursework and technical examinations completed).</p>
        </div>
        <div className="education-entry">
          <p className="muted-line">2020 – 2024</p>
          <h3>Bachelor of Engineering (B.E.) in Computer Science &amp; Engineering</h3>
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
          <span>Selected work</span>
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
