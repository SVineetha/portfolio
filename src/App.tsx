const capabilities = [
  {
    number: '01',
    title: 'Web data extraction',
    description:
      'Editorial crawling, resilient extraction workflows, and structured data from complex web sources.',
  },
  {
    number: '02',
    title: 'Crawler operations',
    description:
      'Configuration maintenance, source reliability, and practical troubleshooting when access gets complicated.',
  },
  {
    number: '03',
    title: 'Data quality',
    description:
      'Careful attention to extraction accuracy, content integrity, and the details that make downstream data useful.',
  },
  {
    number: '04',
    title: 'What’s next',
    description:
      'Exploring data engineering and AI-assisted automation to build smarter, more scalable data solutions.',
  },
]

const focusAreas = [
  'Editorial content crawling',
  'Web data extraction',
  'Crawler configuration',
  'Source reliability',
  'Bot-detection troubleshooting',
  'Data quality & accuracy',
  'Content pipelines',
  'AI-assisted automation',
]

function NetworkArtwork() {
  return (
    <div className="network-art" role="img" aria-label="An animated network of connected data points">
      <div className="network-orbit orbit-outer" />
      <div className="network-orbit orbit-inner" />
      <svg className="network-lines" viewBox="0 0 520 520" fill="none" aria-hidden="true">
        <path className="data-path path-one" d="M63 309 145 215l93 44 86-127 132 53" />
        <path className="data-path path-two" d="m100 107 92 115 46 37 106 106 83-100" />
        <path className="data-path path-three" d="m145 215 47 7 132-90 20 233 112-187" />
        <path className="data-path path-four" d="m63 309 145 104 116-48 83-100 49-80" />
        <circle className="node node-a" cx="63" cy="309" r="5" />
        <circle className="node node-b" cx="100" cy="107" r="4" />
        <circle className="node node-c" cx="145" cy="215" r="6" />
        <circle className="node node-d" cx="192" cy="222" r="4" />
        <circle className="node node-e" cx="208" cy="413" r="4" />
        <circle className="node node-f" cx="238" cy="259" r="7" />
        <circle className="node node-g" cx="324" cy="132" r="5" />
        <circle className="node node-h" cx="324" cy="365" r="6" />
        <circle className="node node-i" cx="407" cy="265" r="5" />
        <circle className="node node-j" cx="456" cy="85" r="4" />
        <circle className="node node-k" cx="456" cy="185" r="5" />
      </svg>
      <div className="network-core">
        <span className="core-kicker">FROM WEB TO</span>
        <span className="core-title">insight<span>.</span></span>
        <span className="core-rule" />
        <span className="core-caption">CONTENT · SYSTEMS · DATA</span>
      </div>
      <span className="network-label label-source">01 / SOURCE</span>
      <span className="network-label label-signal">02 / SIGNAL</span>
      <span className="network-label label-structure">03 / STRUCTURE</span>
      <span className="network-coordinate">11° 00' 00.0&quot; N&nbsp; / &nbsp;76° 57' 00.0&quot; E</span>
    </div>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Vineetha home">
          V<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">What I do</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-link" href="https://github.com/SVineetha" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <main id="home">
        <section className="hero page-width">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> OPEN TO GOOD CONVERSATIONS</p>
            <p className="hero-role">SENIOR CONTENT ENGINEER <span>·</span> WEB DATA &amp; AUTOMATION</p>
            <h1>Making the<br />Complex Web,<br /><em>Work.</em></h1>
            <p className="hero-intro">
              I solve complex web data extraction challenges, build resilient content workflows,
              and explore smarter ways to turn web data into meaningful intelligence.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="text-link" href="#contact">Let’s connect <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <NetworkArtwork />
          <div className="hero-note">
            <span>CONTENT ENGINEERING / 01—04</span>
            <span>MAKING THE UNSTRUCTURED USEFUL.</span>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">SCROLL TO EXPLORE <span>↓</span></a>
        </section>

        <section className="intro-band" aria-label="Introduction">
          <div className="page-width intro-inner">
            <p className="eyebrow">THE THREAD THROUGH IT ALL</p>
            <p className="intro-statement">
              The web is messy. I build the <span>systems</span> that make its content work harder.
            </p>
            <span className="intro-index" aria-hidden="true">V / 01</span>
          </div>
        </section>

        <section className="about-section page-width" id="about">
          <div className="section-heading">
            <p className="eyebrow">01 / A LITTLE ABOUT ME</p>
            <span className="section-index">THE PERSON BEHIND THE PIPELINE</span>
          </div>
          <div className="about-grid">
            <h2>Curiosity for the<br />web. <em>Care for the<br />details.</em></h2>
            <div className="about-copy">
              <p>
                I’m <strong>Vineetha</strong>, a Senior Content Engineer working where web data,
                editorial content, and automation meet. I build and maintain content crawling
                workflows that turn complicated web pages into dependable, usable data.
              </p>
              <p>
                From tricky bot-detection and access issues to crawler configurations and content
                pipelines, I enjoy untangling the hard cases. I care about source reliability and
                extraction accuracy—and take ownership from the first investigation through a
                reliable resolution.
              </p>
              <p>
                I work closely across teams, share context, and look for fixes that hold up beyond
                one source or one day. Lately, I’ve been growing into data engineering and
                exploring how AI-assisted automation can make data solutions more thoughtful and
                scalable.
              </p>
              <a className="text-link underlined" href="https://github.com/SVineetha" target="_blank" rel="noreferrer">
                A little more on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="principles">
            <article>
              <span>01</span>
              <h3>Follow the signal</h3>
              <p>Understand the source before trying to fix the extraction.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Own the hard parts</h3>
              <p>Stay curious, work the problem, and make the resolution stick.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Make data dependable</h3>
              <p>Good pipelines begin with reliable sources and careful details.</p>
            </article>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow">02 / WHERE I MAKE A DIFFERENCE</p>
                <h2>Complex in.<br /><em>Clear out.</em></h2>
              </div>
              <p className="work-intro">
                A closer look at the kinds of challenges I take on—and the engineering thinking
                I bring to each one.
              </p>
            </div>
            <div className="capability-list">
              {capabilities.map((capability) => (
                <article className="capability-card" key={capability.number}>
                  <span className="capability-number">{capability.number}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <span className="capability-mark" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
            <p className="work-note">
              The work is real; the examples are intentionally high-level to respect the details
              of production systems and team confidentiality.
            </p>
          </div>
        </section>

        <section className="skills-section page-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / THE TOOLKIT</p>
              <h2>Grounded in today.<br /><em>Growing toward tomorrow.</em></h2>
            </div>
            <span className="section-index">PRACTICE / CURIOSITY</span>
          </div>
          <div className="skills-content">
            <p>
              Strong systems start with good fundamentals. I bring a practical approach to the
              work I do today—and an engineer’s curiosity about what could make it better next.
            </p>
            <ul className="skills-list">
              {focusAreas.map((area, index) => (
                <li key={area}>
                  <span className="skill-index">0{index + 1}</span>
                  <span>{area}</span>
                  <span className="skill-arrow" aria-hidden="true">↗</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-width contact-inner">
            <p className="eyebrow">04 / HAVE A CHALLENGE IN MIND?</p>
            <h2>Let’s make<br /><em>the web work.</em></h2>
            <p className="contact-copy">
              Interested in content engineering, web data, or building something smarter together?
              I’d love to hear what you’re working on.
            </p>
            <a className="button button-light" href="https://github.com/SVineetha" target="_blank" rel="noreferrer">
              Let’s connect on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="wordmark" href="#home" aria-label="Back to home">V<span>.</span></a>
        <p>Thoughtfully engineered. © {new Date().getFullYear()} Vineetha</p>
        <div className="footer-links">
          <a href="https://github.com/SVineetha" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
