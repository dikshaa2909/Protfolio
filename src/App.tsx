import { motion } from 'framer-motion';

function App() {
  const skillsRow1 = ['Java', 'JavaScript', 'TypeScript', 'Python'];
  const skillsRow2 = ['React.js', 'Next.js', 'Tailwind CSS', 'Redux', 'Framer Motion'];
  const skillsRow3 = ['Node.js', 'Express.js', 'MongoDB', 'Firebase', 'MySQL', 'Git', 'GitHub', 'VS Code', 'Vercel', 'Postman'];

  const projects = [
    {
      title: 'HireBuddy',
      desc: 'Smart hiring and candidate management platform with role-based access and real-time workflows.',
      tags: ['React.js', 'Node.js', 'Express.js', 'Firebase'],
      bg: 'linear-gradient(135deg, rgba(255, 161, 103, 0.45) 0%, rgba(217, 120, 56, 0.32) 100%)',
      github: 'https://github.com/dikshaa2909/HireBuddy',
      demo: 'https://hirebuddy-diksha.vercel.app/',
    },
    {
      title: 'FluxQ',
      desc: 'Intelligent clinical queue optimization system with fairness-aware triage and predictive wait-time insights.',
      tags: ['React', 'TypeScript', 'Node.js', 'Optimization'],
      bg: 'linear-gradient(135deg, rgba(255, 178, 122, 0.42) 0%, rgba(217, 120, 56, 0.28) 100%)',
      github: 'https://github.com/dikshaa2909/FluxQ',
      demo: 'https://flux-q.vercel.app',
    },
    {
      title: 'CampusConnect',
      desc: 'Role-based college management platform for attendance, announcements, academic records, and leave workflows.',
      tags: ['React.js', 'Firebase', 'Tailwind CSS'],
      bg: 'linear-gradient(135deg, rgba(255, 173, 114, 0.38) 0%, rgba(217, 120, 56, 0.24) 100%)',
      github: 'https://github.com/dikshaa2909/campus-connect',
      demo: 'https://github.com/dikshaa2909/campus-connect',
    },
    {
      title: 'CivicFlow',
      desc: 'Multilingual civic-tech reporting app with voice input, geolocation tagging, and real-time notifications.',
      tags: ['React Native', 'Expo', 'NativeWind'],
      bg: 'linear-gradient(135deg, rgba(255, 169, 110, 0.36) 0%, rgba(217, 120, 56, 0.22) 100%)',
      github: 'https://github.com/dikshaa2909',
      demo: null,
    },
  ];

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="card">
          {/* Orange section */}
          <div className="card-orange" />

          {/* Cream accent */}
          <motion.div
            className="card-cream"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />

          {/* Additional decorative shapes */}
          <motion.div
            className="deco-shape deco-shape-1"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />
          <motion.div
            className="deco-shape deco-shape-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          />
          <motion.div
            className="deco-shape deco-shape-3"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          />

          {/* Nav */}
          <motion.nav
            className="nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="nav-brand">Diksha<span>.</span></span>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Work</a>
              <a href="#contact" className="nav-cta">Say Hello</a>
            </div>
          </motion.nav>

          {/* Content */}
          <div className="hero-content">
            <motion.div
              className="hero-tag"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="tag-dot" /> Available for work
            </motion.div>

            <motion.p
              className="hello"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Hello!!
            </motion.p>
            <motion.p
              className="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              My name is
            </motion.p>
            <motion.h1
              className="name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Diksha Deware<span>.</span>
            </motion.h1>
            <motion.p
              className="role"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              I'm a <strong>Frontend Developer</strong> trying to be a <strong>Full Stack Engineer</strong>.
            </motion.p>

            <motion.div
              className="cta-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <a href="#projects" className="btn-primary">
                View My Work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">Let's Talk</a>
              <a href="/Diksha Resume.pdf" target="_blank" rel="noreferrer" className="btn-resume">Resume</a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            className="hero-image"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src="/hero-girl.png" alt="Developer" />
          </motion.div>

          {/* Speech Bubbles */}
          <motion.div
            className="bubble bubble-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
          >
            Learning
          </motion.div>
          <motion.div
            className="bubble bubble-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3 }}
          >
            Creating
          </motion.div>
          <motion.div
            className="bubble bubble-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
          >
            Building
          </motion.div>

          {/* Decorative dots */}
          <motion.div
            className="deco-dot deco-1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="deco-dot deco-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Scroll indicator */}
          <div className="scroll-indicator">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">About Me</span>
            <h2>Passionate about creating <span>digital experiences</span></h2>
          </motion.div>

          <div className="about-modern-layout">
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="about-intro">
                <p className="about-lead">
                  I'm a Computer Science student with a passion for development and curious about all things code. I love learning new technologies
                  and creating intuitive, beautiful user experiences.
                </p>
                <p className="about-description">
                  Currently on my journey to become a full-stack developer, I enjoy
                  turning complex problems into simple, elegant solutions. I believe
                  in clean code, continuous learning, and building applications that
                  make a difference. I'm also a contributer to open-source and love contributing to projects that empower developers and communities.Currently I'm learning , Building and exploring new technologies.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-cream">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Still learning</span>
            <h2>My <span>Skills</span></h2>
          </motion.div>
          <motion.div
            className="skills-float-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="skills-row">
              <span className="skills-label">Languages</span>
              <div className="skills-track">
                {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, i) => (
                  <span key={`r1-${i}`} className="skill-pill skill-pill-primary">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skills-row">
              <span className="skills-label">Frontend</span>
              <div className="skills-track skills-track-reverse">
                {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, i) => (
                  <span key={`r2-${i}`} className="skill-pill skill-pill-secondary">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skills-row">
              <span className="skills-label">Backend & Tools</span>
              <div className="skills-track skills-track-slow">
                {[...skillsRow3, ...skillsRow3, ...skillsRow3].map((skill, i) => (
                  <span key={`r3-${i}`} className="skill-pill skill-pill-tertiary">{skill}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">Still Building</span>
            <h2>Featured <span>Projects</span></h2>
          </motion.div>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="project-content">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <div className="project-links">
                    <a href={p.github} className="project-link" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                    {p.demo && (
                      <a href={p.demo} className="project-link project-link-demo" target="_blank" rel="noreferrer">
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section-orange">
        <div className="container">
          <motion.div
            className="contact-wrapper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag section-tag-light">Get In Touch</span>
            <h2>Let's work <span>together</span>.</h2>
            <p className="contact-desc">I'm currently looking for internship opportunities. If you have a project in mind or an open position, I'd love to hear from you!</p>
            <div className="contact-info">
              <div className="contact-email">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
                    <path d="m22 6-10 7L2 6" />
                  </svg>
                </span>
                <span>dikshadeware@gmail.com</span>
              </div>
              <div className="contact-location">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
                  </svg>
                </span>
                <span>Mumbai, India</span>
              </div>
            </div>
            <div className="contact-socials">
              <a href="https://github.com/dikshaa2909" className="social-link" target="_blank" rel="noreferrer">
                <span className="social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.8-.25.8-.56v-2.06c-3.2.69-3.87-1.54-3.87-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.3-5.22-1.28-5.22-5.7 0-1.26.45-2.3 1.2-3.11-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.19a11.16 11.16 0 0 1 5.83 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.65.23 2.87.12 3.17.74.81 1.19 1.85 1.19 3.11 0 4.43-2.68 5.4-5.24 5.7.41.35.78 1.05.78 2.13v3.15c0 .31.2.67.81.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                </span>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/diksha-deware/" className="social-link" target="_blank" rel="noreferrer">
                <span className="social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.45-2.13 2.94v5.66H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v6.28zM5.33 7.44a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.1 20.45H3.56V9H7.1v11.45z" />
                  </svg>
                </span>
                LinkedIn
              </a>
              <a href="https://x.com/dikshatwt" className="social-link" target="_blank" rel="noreferrer">
                <span className="social-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.24 2h3.32l-7.25 8.29L22.84 22h-6.68l-5.23-6.83L4.95 22H1.62l7.75-8.86L1.2 2h6.85l4.73 6.23L18.24 2zm-1.17 18h1.84L7.05 3.9H5.08L17.07 20z" />
                  </svg>
                </span>
                Twitter
              </a>
            </div>
            <a href="/Diksha Resume.pdf" target="_blank" rel="noreferrer" className="contact-resume-btn">
              <span className="social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M16 13H8" />
                  <path d="M16 17H8" />
                  <path d="M10 9H8" />
                </svg>
              </span>
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <span className="footer-brand">Diksha<span>.</span></span>
            <span className="footer-copy">Available for work</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
