const projects = [
  {
    number: '01',
    type: 'CONTENT SYSTEMS',
    title: 'A clearer path through complex content',
    description:
      'Replace this with a real project: explain the audience, the content challenge, your approach, and the outcome. Keep confidential details out.',
    tags: ['Content design', 'Information architecture', 'Guidelines'],
    mark: 'Aa',
    tone: 'sage',
  },
  {
    number: '02',
    type: 'DEVELOPER EXPERIENCE',
    title: 'Documentation people can actually use',
    description:
      'Add a documentation or developer experience project. Describe what you owned, who you collaborated with, and how you measured success.',
    tags: ['Documentation', 'Taxonomy', 'Governance'],
    mark: '{ }',
    tone: 'peach',
  },
  {
    number: '03',
    type: 'CONTENT ENGINEERING',
    title: 'From scattered pages to a connected system',
    description:
      'Feature a content engineering example here—such as structured content, workflow improvements, or a useful internal tool.',
    tags: ['Structured content', 'Automation', 'Accessibility'],
    mark: '↗',
    tone: 'blue',
  },
]

const skills = [
  'Content strategy',
  'Technical writing',
  'Information architecture',
  'Content design',
  'Documentation systems',
  'Content modeling',
  'Editorial operations',
  'Cross-functional collaboration',
]

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Portfolio home">
          SV<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="https://github.com/SVineetha" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="home">
        <section className="hero page-width">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SENIOR CONTENT ENGINEER</p>
            <h1>Good content<br />is <em>built</em> to work.</h1>
            <p className="hero-intro">
              I bring content, systems, and technology together to make complex
              information clearer—and easier to use.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="#contact">Let’s connect <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract editorial illustration" role="img">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-core"><span>content</span><span>×</span><span>systems</span></div>
            <div className="art-label label-top">MAKE IT CLEAR</div>
            <div className="art-label label-bottom">MAKE IT SCALE</div>
            <span className="art-spark spark-one">✳</span>
            <span className="art-spark spark-two">✳</span>
          </div>
          <div className="hero-note"><span>01 / 03</span><span>WORDS WITH PURPOSE. SYSTEMS WITH SOUL.</span></div>
        </section>

        <section className="intro-band">
          <div className="page-width intro-inner">
            <p className="eyebrow">THE SHORT VERSION</p>
            <p className="intro-statement">I turn <span>complexity</span> into content experiences that feel simple, useful, and human.</p>
            <a href="#about" className="round-link" aria-label="Read about me">↓</a>
          </div>
        </section>

        <section className="about-section page-width" id="about">
          <div className="section-heading">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <span className="section-index">01 — ABOUT</span>
          </div>
          <div className="about-grid">
            <h2>Structure matters.<br /><em>So does the story.</em></h2>
            <div className="about-copy">
              <p>
                Hi, I’m <strong>[Your name]</strong>—a Senior Content Engineer who cares about
                the details behind a great content experience. I work across strategy,
                language, and technology to help teams create information that is coherent,
                accessible, and ready to grow.
              </p>
              <p>
                This is your space to share what you believe about the craft, the kinds of
                challenges you love, and the perspective you bring to a team. Make it sound
                like you; a specific, honest story is more memorable than a list of buzzwords.
              </p>
              <a className="text-link underlined" href="https://github.com/SVineetha" target="_blank" rel="noreferrer">More about my work on GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="principles">
            <article><span>01</span><h3>Clarity first</h3><p>Make the useful thing easy to find, understand, and act on.</p></article>
            <article><span>02</span><h3>Systems thinking</h3><p>Design content that works beyond a single page or moment.</p></article>
            <article><span>03</span><h3>People always</h3><p>Build with empathy for readers and the teams serving them.</p></article>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="page-width">
            <div className="section-heading">
              <div><p className="eyebrow">THOUGHTFUL WORK, REAL IMPACT</p><h2>Selected work<span className="accent">.</span></h2></div>
              <span className="section-index">02 — PROJECTS</span>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className={`project-art ${project.tone}`} aria-hidden="true"><span>{project.mark}</span><i /><i /><i /></div>
                  <div className="project-content">
                    <div className="project-meta"><span>{project.number} / {project.type}</span><span className="project-arrow">↗</span></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
            <p className="placeholder-note">Project descriptions above are starter prompts—replace them with your own work and outcomes.</p>
          </div>
        </section>

        <section className="skills-section page-width">
          <div className="section-heading">
            <div><p className="eyebrow">WHAT I BRING</p><h2>Tools for the<br /><em>whole picture.</em></h2></div>
            <span className="section-index">03 — CAPABILITIES</span>
          </div>
          <div className="skills-content">
            <p>My work moves between the big picture and the details: shaping the experience, making the system sustainable, and helping teams deliver with confidence.</p>
            <ul className="skills-list">{skills.map((skill) => <li key={skill}><span>{skill}</span><span aria-hidden="true">↗</span></li>)}</ul>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-width contact-inner">
            <p className="eyebrow">HAVE A GOOD QUESTION?</p>
            <h2>Let’s make<br /><em>something clearer.</em></h2>
            <p className="contact-copy">Have a project, a tricky content challenge, or just want to say hello? I’d love to hear from you.</p>
            <a className="button button-light" href="mailto:your.email@example.com">Say hello <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="wordmark" href="#home">SV<span>.</span></a>
        <p>Made with intention. © {new Date().getFullYear()} [Your name]</p>
        <div className="footer-links"><a href="https://github.com/SVineetha" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#home">Back to top ↑</a></div>
      </footer>
    </>
  )
}

export default App
