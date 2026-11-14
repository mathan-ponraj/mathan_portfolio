import React, { useEffect, useState } from 'react';
import './App.css';
import './ResumeButton.css';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const profile = {
  name: "Mathan Ponraj",
  title: "Data Scientist (AI/ML)",
  location: "Marathahalli, Bengaluru, Karnataka 560037",
  phone: "7339404085",
  photo: "/images/portfolio photo.png",
  email: "mathanponraj03@gmail.com",
  linkedin: "https://www.linkedin.com/in/mathan03/",
  github: "https://github.com/mathan-ponraj",
};

const whatsappLink = `https://wa.me/91${profile.phone}?text=${encodeURIComponent('I came across your portfolio and would like to connect to explore how we could collaborate.')}`;

const navItems = [
  { id: 'work', num: '01', label: 'Selected Work' },
  { id: 'about', num: '02', label: 'About Me' },
  { id: 'skills', num: '03', label: 'What I Do' },
  { id: 'contact', num: '04', label: 'Start a Project' },
];

const skillGroups = [
  {
    label: "Data & ML",
    items: ["Pandas", "NumPy", "Exploratory Data Analysis", "Statistics", "Feature Engineering", "Scikit-learn", "Model Evaluation", "ETL", "Power BI", "Excel"],
  },
  {
    label: "AI",
    items: ["Generative AI", "LLMs", "Prompt Engineering", "OpenAI API", "Gemini API", "RAG", "LangChain", "Hugging Face"],
  },
  {
    label: "FullStack Development",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Python", "FastAPI", "REST APIs", "SQL", "PostgreSQL", "Git & GitHub"],
  },
];

const projects = [
  {
    number: "01",
    title: "TalentIQ AI",
    kind: "GenAI / Career Prep",
    tagline: "Know your fit. Ace the interview.",
    image: '/images/resume-interview-thumbnail.jpg',
    imageAlt: "TalentIQ AI resume analysis and mock interview app",
    tags: ["React.js", "Vite", "Python", "FastAPI", "LangChain", "RAG", "Gemini API", "Vercel", "Render"],
    description: "Job seekers rarely know how well their resume fits a role until they are rejected. In this project, I built a GenAI app that uses the Gemini API and a LangChain RAG pipeline with semantic chunking to score resume fit against a target role. It also runs mock interviews at multiple levels and gives automated feedback scores.",
    github: "https://github.com/mathan-ponraj/talentiqai",
    live: 'https://talentiq-ai-two.vercel.app/',
    size: 'wide',
  },
  {
    number: "02",
    title: "TrendTube",
    kind: "Data Engineering / Analytics SaaS",
    tagline: "Find what’s trending. Create what’s next.",
    image: '/images/youtube-trendtube-thumbnail.jpg',
    imageAlt: "TrendTube global YouTube trending analytics dashboard",
    tags: [
      "React.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "ETL",
      "Pandas",
      "YouTube Data API v3",
      "Vercel",
      "Render"
    ],
    description: "YouTube creators need to know what is trending around the world before they decide what to make. In this project, I built an automated Python ETL pipeline that collects trending videos from 9 regions through the YouTube Data API and stores them in a PostgreSQL star schema. I then built a React and FastAPI dashboard that shows regional trends, video insights and engagement metrics.",
    github: "https://github.com/mathan-ponraj/Trendtube",
    live: "https://trendtube-five.vercel.app/",
    size: 'tall',
  },
  {
    number: "03",
    title: "LapPick",
    kind: "Data Intelligence / Analytical Decision Support",
    tagline: "Live laptop data. Smarter decisions.",
    image: '/images/lappick-thumbnail.svg',
    imageAlt: 'LapPick live laptop data intelligence application',
    tags: [
      'Python',
      'Streamlit',
      'REST API',
      'Pandas',
      'NumPy',
      'Feature Engineering',
      'Weighted Scoring',
      'Cosine Similarity'
    ],
    description: "Laptop prices and specs change constantly, which makes buying the right one hard. In this project, I used the API.SH Croma API to pull live listings and extracted CPU, RAM, storage, GPU and display specs from product descriptions. I then ranked laptops with usage-based weighted scoring, constraint filters and cosine similarity.",
    github: 'https://github.com/mathan-ponraj/lappick',
    live: 'https://laptop-price-and-recommendation-system-icvhjjspmfrmmy2rfmtuaq.streamlit.app/',
    size: 'wide',
  },
  {
    number: "04",
    title: "EduHelpDesk",
    kind: "Full-Stack / Support System",
    tagline: "Every ticket, on the clock.",
    image: '/images/eduhelpdesk-thumbnail.jpg',
    imageAlt: "EduHelpDesk academic support ticketing system",
    tags: ["Python", "Flask", "SQLite", "REST APIs", "RBAC", "Render"],
    description: "Academic support requests often get lost or answered late when there is no system tracking them. In this project, I built a ticketing portal in Flask where students and staff manage requests under role-based access control. It tracks SLA deadlines, flags overdue tickets for escalation and keeps an audit trail of every status change.",
    github: "https://github.com/mathan-ponraj/EduHelpDesk",
    live: 'https://eduhelpdesk.onrender.com/',
    size: 'tall',
  },
];

const experience = [
  {
    role: "Freelance Web Developer & Digital Marketer",
    company: "Self-employed",
    period: "Nov 2025 – Present",
    points: [
      "Lead a 3-member team delivering websites, SEO and social media content for small business clients.",
      "Design, build and deploy static and dynamic web pages using HTML, CSS, JavaScript and React.js.",
      "Improve search visibility with on-page SEO: keyword research, page titles, meta descriptions and site structure.",
      "Produce Instagram content, including video editing and Photoshop graphics, and manage client deadlines."
    ],
  },
  {
    role: "Data Science Intern",
    company: "Rinex.ai",
    period: "Mar 2025 – May 2025",
    points: [
      "Cleaned and analysed datasets with Python (Pandas, NumPy) to prepare them for modelling and reporting.",
      "Built and evaluated machine learning models with Scikit-learn, using feature engineering and metrics such as accuracy and F1.",
      "Created visualisations and summaries that turned analysis results into clear findings for non-technical readers.",
      "Worked with SQL and a cloud deployment workflow to move models toward production use."
    ],
  },
  {
    role: "Professional Employability Intern",
    company: "CDAC, Chennai",
    period: "Jun 2023 – Aug 2023",
    points: [
      "Wrote Python programs for data handling and automation tasks as part of structured, industry-aligned training.",
      "Designed and queried relational databases with SQL, including joins, aggregations and subqueries.",
      "Deployed applications to cloud platforms and learned the basics of hosting, environment setup and release workflows.",
      "Built the professional skills expected on a tech team: version control with Git and GitHub, documentation and teamwork."
    ],
  },
];

const education = [
  {
    years: "2024 – 2026",
    degree: "M.E. in Computer Science & Engineering",
    school: "Karpagam Academy of Higher Education, Coimbatore",
    grade: "First Class",
  },
  {
    years: "2020 – 2024",
    degree: "B.E. in Computer Science & Engineering",
    school: "Government College of Engineering, Bodinayakanur",
    grade: "First Class",
  },
];

// Add a credential link in `credential` to show a "View credential" link on the card.
const certifications = [
  { mark: "R", title: "Data Science and Machine Learning", issuer: "Rinex", type: "Certification", credential: "" },
  { mark: "R", title: "Python Programming", issuer: "Rinex", type: "Certification", credential: "" },
  { mark: "D", title: "Deloitte Virtual Data Analytics Internship", issuer: "Deloitte", type: "Virtual Internship", credential: "" },
  { mark: "S", title: "Advanced SQL and Excel for Data Analysis", issuer: "Sitaara Academy", type: "Certification", credential: "" },
];

const Arrow = ({ size = 12 }) => (
  <svg viewBox="0 0 16 16" width={size} height={size} aria-hidden="true">
    <path fill="currentColor" d="M3.75 2h8.5a.75.75 0 0 1 .75.75v8.5a.75.75 0 0 1-1.5 0V4.31L4.03 11.78a.75.75 0 0 1-1.06-1.06L10.44 3.25H3.75a.75.75 0 0 1 0-1.5Z" />
  </svg>
);

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
  if (type === 'whatsapp') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>;
  }
  return null;
}

function ResumeButton({ className = '' }) {
  return (
    <a
      className={`resume-btn ${className}`}
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

function Sidebar({ active }) {
  return (
    <aside className="sidebar">
      <div className="sb-top">
        <a className="logo" href="#top" aria-label="Mathan Ponraj home">
          mathan<span className="logo-dot">.</span>
        </a>
        <p className="mono sb-sub">Portfolio — Bengaluru</p>
      </div>

      <div className="sb-intro mono">
        <p>An AI full-stack</p>
        <p>developer.</p>
      </div>

      <nav className="sb-nav" aria-label="Primary">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`sb-link ${active === item.id ? 'is-active' : ''}`}
            aria-current={active === item.id ? 'true' : undefined}
          >
            <span className="sb-num mono">{item.num}</span>
            <span className="sb-label mono">{item.label}</span>
            <span className="sb-arrow"><Arrow size={11} /></span>
          </a>
        ))}
      </nav>

      <div className="sb-status mono">
        <span className="status-dot" aria-hidden="true" />
        Open to work · Immediate joiner
      </div>

      <div className="sb-bottom">
        <p className="mono sb-place">
          Bengaluru, India<br />Python + AI. Built to ship.
        </p>
        <div className="social-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><SocialIcon type="github" /></a>
          <a href="#contact" aria-label="Send me a message"><SocialIcon type="mail" /></a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Catch me on WhatsApp" title="Catch me on WhatsApp"><SocialIcon type="whatsapp" /></a>
        </div>
        <div className="phone-notice" role="note">
          <span className="phone-notice-title mono">Mobile out of order</span>
          <p>My mobile is out of order. Kindly reach me through WhatsApp, mail or LinkedIn.</p>
        </div>
        <a className="say-hello mono" href="#contact">
          Say hello <Arrow size={11} />
        </a>
      </div>
    </aside>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-top mono">
        <span>Independent builder. Production mindset.</span>
        <a href="#contact" className="hero-top-link">Have a project? <Arrow size={11} /></a>
      </div>

      <div className="hero-body">
        <p className="eyebrow mono"><i className="eyebrow-dot" />AI Full-Stack Developer / Bengaluru &amp; beyond</p>
        <h1 className="display">
          Messy data.<br />
          Working <em>software.</em>
        </h1>
        <p className="hero-sub">
          I build AI-powered products that move people.<br />
          And data pipelines that move businesses forward.
        </p>
        <div className="hero-cta">
          <a className="btn-red mono" href="#work">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z" /></svg>
            View selected work
            <span className="btn-sep" aria-hidden="true" />
            01–04
          </a>
          <a className="link-ul" href="#contact">Start a project <Arrow size={12} /></a>
        </div>
      </div>

      <p className="hero-vertical mono" aria-hidden="true">A different kind of developer</p>

      <div className="hero-bottom mono">
        <a href="#about" className="scroll-cue">
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M12 4v15m0 0-6-6m6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Scroll to discover
        </a>
        <span className="hero-bottom-mid">Mathan Ponraj / Portfolio 2026</span>
        <span>[ Python · React · AI ]</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="block about" id="about" aria-label="About">
      <p className="eyebrow mono"><i className="eyebrow-dot" />This is Mathan.</p>
      <div className="about-grid">
        <div className="about-left">
          <h2 className="display h2">
            Not just data.<br />
            <em className="muted">Deployed.</em>
          </h2>
          <div className="rings" aria-hidden="true"><i /><i /><i /><i /></div>
        </div>
        <div className="about-right">
          <div className="photo-ring">
            <div className="photo-inner">
              <img className="about-photo" src={profile.photo} alt="Mathan Ponraj, Python and React.js Developer in Bengaluru" loading="lazy" />
            </div>
          </div>
          <p className="about-lead">
            AI Developer who loves turning messy data into working, intelligent software.
          </p>
          <p className="about-copy">
            I specialise in building responsive, user-friendly interfaces and integrating AI/ML models and AI-powered features into applications.
            My background spans database design, ETL pipelines, and handling datasets of over 100K records, alongside building modern web applications with Generative AI.
            Right now I&apos;m zeroing in on scaling AI workflows with Python, AWS, and Docker.
            Based in Bengaluru, I&apos;m looking for a full-time Python AI Developer role where I can build reliable systems with a solid engineering team.
          </p>
          <div className="about-actions">
            <ResumeButton />
            <a className="link-ul" href="#contact">Get to know me <Arrow size={12} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const primary = project.live || project.github;
  return (
    <article className={`work-card ${project.size}`}>
      <a className="work-media" href={primary} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
        <img src={project.image} alt={project.imageAlt} loading="lazy" />
        <span className="work-shade" aria-hidden="true" />
        <span className="corner corner-tl" aria-hidden="true" />
        <span className="corner corner-br" aria-hidden="true" />
        <span className="work-label mono">{project.title}</span>
        <span className="work-concept mono">Project {project.number}</span>
        <span className="work-play" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="18" height="18"><path fill="currentColor" d="M8 5v14l11-7z" /></svg>
        </span>
      </a>

      <div className="work-meta">
        <p className="work-kind mono">{project.kind}</p>
        <div className="work-title-row">
          <h3 className="work-title">{project.tagline}</h3>
          <a className="work-arrow" href={primary} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}><Arrow size={16} /></a>
        </div>
        <p className="work-desc">{project.description}</p>
        <div className="tag-list" aria-label="Technologies">
          {project.tags.map((tag) => <span className="tag mono" key={tag}>{tag}</span>)}
        </div>
        <div className="work-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="link-btn ghost mono">GitHub <Arrow /></a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="link-btn solid mono">Live demo <Arrow /></a>
          )}
        </div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section className="block work" id="work" aria-label="Selected work">
      <div className="section-head">
        <span className="section-num display" aria-hidden="true">01</span>
        <div>
          <p className="eyebrow mono"><i className="eyebrow-dot" />Selected work / Project portfolio</p>
          <h2 className="display h2">
            Different problems.<br />
            <em className="muted">Same obsession.</em>
          </h2>
        </div>
        <p className="section-note">
          A taste of what I build. Real ideas, shipped and hosted, one commit at a time.
        </p>
      </div>
      <div className="work-grid">
        {projects.map((p) => <ProjectCard project={p} key={p.number} />)}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="block skills" id="skills" aria-label="What I do">
      <div className="section-head">
        <span className="section-num display" aria-hidden="true">03</span>
        <div>
          <p className="eyebrow mono"><i className="eyebrow-dot" />What I do</p>
          <h2 className="display h2">
            From raw data<br />
            <em className="muted">to real product.</em>
          </h2>
        </div>
      </div>

      <div className="skill-grid">
        {skillGroups.map((group, i) => (
          <div className="skill-col" key={group.label}>
            <p className="skill-index mono">0{i + 1}</p>
            <h3 className="skill-title">{group.label}</h3>
            <div className="tag-list">
              {group.items.map((s) => <span className="tag mono" key={s}>{s}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="split">
        <div>
          <p className="eyebrow mono"><i className="eyebrow-dot" />Experience</p>
          <div className="achievement-list">
            {experience.map((e) => (
              <div className="achievement" key={e.role + e.company}>
                <p className="mono achievement-years">{e.period}</p>
                <h3>{e.role}</h3>
                <p>{e.company}</p>
                <ul className="exp-points">
                  {e.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mono"><i className="eyebrow-dot" />Education</p>
          <div className="achievement-list">
            {education.map((e) => (
              <div className="achievement" key={e.degree}>
                <p className="mono achievement-years">{e.years}</p>
                <h3>{e.degree}</h3>
                <p>{e.school}</p>
                <p className="grade mono">{e.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="certs">
        <p className="eyebrow mono"><i className="eyebrow-dot" />Certifications</p>
        <div className="cert-grid">
          {certifications.map((c) => (
            <article className="cert-card" key={c.title}>
              <span className="cert-mark display" aria-hidden="true">{c.mark}</span>
              <div>
                <p className="cert-type mono">{c.type}</p>
                <h3 className="cert-title">{c.title}</h3>
                <p className="cert-issuer">{c.issuer}</p>
                {c.credential && (
                  <a className="link-ul small" href={c.credential} target="_blank" rel="noreferrer">View credential <Arrow size={10} /></a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const emptyForm = { name: '', email: '', company: '', type: '', message: '' };

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [agree, setAgree] = useState(false);
  const [trap, setTrap] = useState(''); // honeypot: real visitors never fill this
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (trap) { setStatus('sent'); return; } // bot: pretend success, send nothing
    if (!WEB3FORMS_KEY) { setStatus('error'); return; }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio enquiry from ${form.name}`,
          from_name: 'Portfolio contact form',
          name: form.name,
          email: form.email, // reply goes straight to the visitor
          company: form.company || '-',
          looking_for: form.type,
          message: form.message,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus('sent');
        setForm(emptyForm);
        setAgree(false);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="block contact" id="contact" aria-label="Contact">
      <div className="contact-grid">
        <div className="contact-left">
          <span className="section-num display" aria-hidden="true">04</span>
          <p className="eyebrow mono"><i className="eyebrow-dot" />The next great build could be yours</p>
          <h2 className="display h2">
            Let&apos;s make<br />
            <em className="muted">something work.</em>
          </h2>
          <p className="contact-copy">
            An idea on a napkin. A fully formed brief.<br />
            Or a role you think I&apos;d be right for. I&apos;d love to hear it.
          </p>
          <p className="contact-copy contact-note">
            Send the form and it lands straight in my inbox. I reply by email.
          </p>

          <div className="contact-meta">
            <div>
              <p className="meta-label mono">Based in</p>
              <p>Bengaluru, Karnataka<br />Open to rotational shifts. Immediate joiner.</p>
            </div>
            <div>
              <p className="meta-label mono">Reach me</p>
              <p>
                <a href={`tel:${profile.phone}`}>{profile.phone}</a><br />
                <a href={whatsappLink} target="_blank" rel="noreferrer">Catch me on WhatsApp</a><br />
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><br />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
              <p className="meta-note">
                My mobile is out of order. Kindly reach me through WhatsApp, mail or LinkedIn.
              </p>
            </div>
          </div>
        </div>

        <form className="brief" onSubmit={submit}>
          <div className="brief-head">
            <h3>A little about what you need.</h3>
            <span className="mono brief-tag">01 / The brief</span>
          </div>

          <div className="row two">
            <label>
              <span className="mono">Your name <b>*</b></span>
              <input required value={form.name} onChange={update('name')} placeholder="First and last name" autoComplete="name" />
            </label>
            <label>
              <span className="mono">Email address <b>*</b></span>
              <input required type="email" value={form.email} onChange={update('email')} placeholder="you@company.com" autoComplete="email" />
            </label>
          </div>

          <label className="row">
            <span className="mono">Company or team</span>
            <input value={form.company} onChange={update('company')} placeholder="Who is this for?" autoComplete="organization" />
          </label>

          <label className="row">
            <span className="mono">What are you thinking? <b>*</b></span>
            <select required value={form.type} onChange={update('type')}>
              <option value="" disabled>Select an option</option>
              <option>Full-time role</option>
              <option>AI / GenAI application</option>
              <option>Data pipeline / ETL</option>
              <option>Web app (React + Python)</option>
              <option>Something else</option>
            </select>
          </label>

          <label className="row">
            <span className="mono">Tell me the story <b>*</b></span>
            <textarea required minLength={20} rows={5} value={form.message} onChange={update('message')} placeholder="The idea, the team, the problem you're solving..." />
            <small>At least 20 characters. A rough idea is absolutely fine.</small>
          </label>

          <input
            type="text"
            className="hp-field"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={trap}
            onChange={(e) => setTrap(e.target.value)}
          />

          <label className="check">
            <input type="checkbox" required checked={agree} onChange={(e) => setAgree(e.target.checked)} />
            <span>I agree to be contacted using these details about my enquiry.</span>
          </label>

          <button type="submit" className="submit mono" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : <>Let&apos;s start the conversation <Arrow size={13} /></>}
          </button>

          <p className={`form-status mono ${status}`} role="status" aria-live="polite">
            {status === 'sent' && 'Message sent. It is in my inbox and I will reply by email soon.'}
            {status === 'error' && 'Could not send. Please message me on WhatsApp or LinkedIn instead.'}
          </p>

          <p className="fine mono">No pressure. No pitch deck required.</p>
        </form>
      </div>

      <footer className="footer mono">
        <span>© 2026 Mathan Ponraj</span>
        <span>Built with React + Vite</span>
      </footer>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState('work');

  useEffect(() => {
    const ids = navItems.map((n) => n.id);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length || !('IntersectionObserver' in window)) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      <Sidebar active={active} />
      <main className="content">
        <Hero />
        <Work />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
