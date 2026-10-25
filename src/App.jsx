
import "./App.css";

function App() {
  return (
    <main className="portfolio" id="home">
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          NOOR<span>.DEV</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#home">PDF</a>
        </div>

        <a className="nav-cta" href="#contact">
          Let's Talk ↗
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            BUILDING MY DIGITAL FUTURE
          </div>

          <p className="eyebrow">HELLO, WORLD! I'M</p>

          <h1>
            MD NOOR
            <span className="name-line">
              ASHRAF<span className="accent">.</span>
            </span>
          </h1>

          <h2>
            Developer <span>×</span> Creator <span>×</span> Learner
          </h2>

          <p className="intro">
            I turn creative ideas into digital experiences through code,
            modern web design and emerging technology.
          </p>

          <div className="hero-actions">
            <a className="btn-primary" href="#projects">
              Explore My Work ↗
            </a>
            <a className="btn-secondary" href="#contact">
              Get In Touch
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <strong>01</strong>
              <span>Curious mind</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Ideas to build</span>
            </div>
            <div>
              <strong>24/7</strong>
              <span>Always learning</span>
            </div>
          </div>
        </div>

        {/* 3D CODING ILLUSTRATION */}
        <div
          className="hero-art"
          aria-label="Decorative 3D coding illustration"
        >
          <div className="scene-grid" />
          <div className="ring ring-one" />
          <div className="ring ring-two" />
          <div className="ring ring-three" />

          <div className="core">
            <div className="core-shine" />
            <span>&lt;/&gt;</span>
          </div>

          <div className="floating-chip chip-top">
            ✦ CREATIVE CODE
          </div>

          <div className="floating-chip chip-bottom">
            {"{ }"} THINK · BUILD · GROW
          </div>

          <div className="code-window">
            <div className="window-header">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>noor.js</span>
              <span className="window-symbol">⌘</span>
            </div>

            <div className="code-lines">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">noor</span> = {"{"}
              </p>
              <p>
                &nbsp; passion: <span className="code-green">"code"</span>,
              </p>
              <p>
                &nbsp; mindset: <span className="code-green">"create"</span>,
              </p>
              <p>
                &nbsp; future: <span className="code-green">"limitless"</span>
              </p>
              <p>{"};"}</p>
              <p className="code-comment">
                // The journey starts here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STRIP */}
      <div className="tech-strip">
        <span>CREATIVE DEVELOPMENT</span>
        <i />
        <span>WEB EXPERIENCES</span>
        <i />
        <span>PYTHON & AI</span>
        <i />
        <span>ALWAYS LEARNING</span>
      </div>

      {/* ABOUT SECTION */}
      <section className="content-section" id="about">
        <p className="eyebrow">01 / ABOUT ME</p>

        <h2>
          Curiosity creates <span>possibility.</span>
        </h2>

        <p>
          I'm MD Noor Ashraf, a developer, creator and lifelong learner.
          I'm building my skills in web development, Python and AI.
          My goal is to create useful, beautiful digital products while
          learning something new every day.
        </p>
      </section>

      {/* SKILLS SECTION */}
      <section className="content-section" id="skills">
        <p className="eyebrow">02 / MY SKILLS</p>

        <h2>
          Tools I use to <span>create.</span>
        </h2>

        <p>
          Technologies I'm learning and using to turn ideas into
          real digital experiences.
        </p>

        <div className="project-grid">
          <article className="project-card">
            <span className="project-number">01</span>
            <p className="project-type">FRONTEND DEVELOPMENT</p>
            <h3>HTML · CSS · React</h3>
            <p>
              Building responsive websites with modern layouts,
              animations and interactive interfaces.
            </p>
          </article>

          <article className="project-card">
            <span className="project-number">02</span>
            <p className="project-type">PROGRAMMING</p>
            <h3>Python · JavaScript</h3>
            <p>
              Practising programming, logical thinking and
              problem-solving through small projects.
            </p>
          </article>

          <article className="project-card">
            <span className="project-number">03</span>
            <p className="project-type">FUTURE TECHNOLOGY</p>
            <h3>AI · 3D Web</h3>
            <p>
              Exploring AI-powered tools and creative web
              experiences to build useful digital products.
            </p>
          </article>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        className="content-section projects-section"
        id="projects"
      >
        <p className="eyebrow">03 / SELECTED WORK</p>

        <h2>
          Ideas becoming <span>reality.</span>
        </h2>

        <div className="project-grid">
          <article className="project-card">
            <span className="project-number">01</span>
            <p className="project-type">WEB DEVELOPMENT</p>
            <h3>Digital Experiences</h3>
            <p>
              Responsive websites with thoughtful design,
              modern styling and smooth interactions.
            </p>
            <span className="project-arrow">↗</span>
          </article>

          <article className="project-card">
            <span className="project-number">02</span>
            <p className="project-type">PYTHON</p>
            <h3>Smart Tools</h3>
            <p>
              Exploring automation and practical solutions
              with Python programming.
            </p>
            <span className="project-arrow">↗</span>
          </article>

          <article className="project-card">
            <span className="project-number">03</span>
            <p className="project-type">AI & INNOVATION</p>
            <h3>Future Projects</h3>
            <p>
              Experimenting with AI and new ideas to make
              technology more useful.
            </p>
            <span className="project-arrow">↗</span>
          </article>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <p className="eyebrow">04 / LET'S CONNECT</p>

        <h2>
          Have an idea?
          <br />
          <span>Let's build it.</span>
        </h2>

        <p>
          Have a project idea, collaboration opportunity or just
          want to connect? Send me an email.
        </p>

        <a
          className="btn-primary"
          href="mailto:mdnoorashraf81@gmail.com"
        >
          Say Hello ↗
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          NOOR<span>.DEV</span>
        </a>

        <p>Designed with curiosity. © {new Date().getFullYear()}</p>

        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}

export default App;
