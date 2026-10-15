import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Cpu,
  Workflow,
  Layers,
  Plus,
  Activity,
  CalendarDays,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import "./styles.css";
import AnimatedName from "./components/AnimatedName.jsx";
const Rays = lazy(() => import("./components/Rays.jsx"));
const EMAIL = "hassanirtaza173@gmail.com";
const projects = [
  {
    id: "fitness",
    number: "01",
    name: "AI Smart Fitness Coach",
    category: "ADAPTIVE MACHINE LEARNING",
    intro: "Training that learns\nwith you.",
    description:
      "A mobile fitness experience that turns workout history into personalized recommendations and a clearer picture of progress.",
    stack: ["React Native", "Python", "Scikit-learn", "Node.js", "MongoDB"],
    problem:
      "A static workout plan cannot account for changing fatigue, recovery, and performance. The challenge was to make training recommendations respond to the person behind the data.",
    approach: [
      "Connected a React Native application to a Python ML service through a Node.js and Express API.",
      "Combined rule-based decisions with machine learning outputs to adapt training intensity and recovery.",
      "Used regression models to estimate strength progression and identify performance plateaus.",
      "Built dashboards for workout volume, consistency, and goal tracking.",
    ],
    result:
      "An integrated mobile application connecting workout logging, performance analytics, and adaptive recommendations.",
    scope: "Mobile application · ML recommendation engine · REST APIs",
  },
  {
    id: "scheduler",
    number: "02",
    name: "AI Smart Scheduler",
    category: "NLP & WORKFLOW AUTOMATION",
    intro: "Less planning.\nMore doing.",
    description:
      "An intelligent productivity application that transforms tasks and documents into an adaptive daily plan.",
    stack: ["React Native", "Python", "NLP", "Node.js", "Express"],
    problem:
      "Task lists quickly become outdated when priorities shift or a task takes longer than expected. The challenge was to connect unstructured input to a schedule that can adapt.",
    approach: [
      "Built an NLP pipeline to extract structured tasks from PDF documents and text.",
      "Combined deadlines, importance, and behavioral patterns into a priority scoring system.",
      "Implemented task duration prediction using historical user behavior.",
      "Designed adaptive rescheduling for missed tasks and changing priorities, with synchronization between mobile and backend services.",
    ],
    result:
      "A mobile scheduling system with automated task extraction, priority scoring, and adaptive rescheduling.",
    scope: "Mobile application · NLP pipeline · Scheduling algorithms",
  },
];
class VisualBoundary extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
function App() {
  const [menu, setMenu] = useState(false),
    [selected, setSelected] = useState(null),
    [copied, setCopied] = useState(false);
  const dialog = useRef(null),
    previousFocus = useRef(null);
  useEffect(() => {
    if (selected) {
      previousFocus.current = document.activeElement;
      dialog.current?.showModal();
    } else if (dialog.current?.open) {
      dialog.current.close();
      previousFocus.current?.focus();
    }
  }, [selected]);
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="header">
        <a className="brand" href="#" aria-label="Hassan Irtaza home">


            <span>
              Syed Hassan Irtaza
              <span className="brand-sub">AI & Automation Engineer</span>
            </span>

        </a>
        <nav
          className={menu ? "navigation open" : "navigation"}
          aria-label="Main navigation"
        >
          {[
            ["Work", "work"],
            ["Expertise", "expertise"],
            ["About", "about"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenu(false)}
          >
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="menu-button icon-button"
          aria-label={menu ? "Close navigation" : "Open navigation"}
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="rays" aria-hidden="true">
            <VisualBoundary>
              <Suspense fallback={null}>
                <Rays
                  raysColor={{ mode: "multi", colors: ["#dbe6ac", "#e3cca0"] }}
                  backgroundColor="#10110f"
                  animation={{ animate: true, speed: 8 }}
                  intensity={26}
                  rays={35}
                  reach={65}
                  position={67}
                  radius="0px"
                  style={{ width: "100%", height: "100%" }}
                />
              </Suspense>
            </VisualBoundary>
          </div>
          <div className="hero-shade" />
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot" /> AI ENGINEERING × INTELLIGENT
              AUTOMATION
            </div>
            <h1 id="hero-title">
              Intelligence,
              <br />
              put to <em>work.</em>
            </h1>
            <p>
              I’m Hassan. I build intelligent applications and
              <br className="desktop-break" /> automate the work that gets in
              your way.
            </p>
            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                Explore my work <ArrowDownRight />
              </a>
              <a href="#contact" className="text-link">
                Let’s build something <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
          <div className="hero-bottom">
            <span>BASED IN LAHORE, PAKISTAN</span>
            <a href="#work">
              SCROLL TO EXPLORE <ChevronDown size={14} />
            </a>
            <span className="hero-note">
              <span /> BUILT WITH PURPOSE
            </span>
          </div>
        </section>
        <div className="capability-strip" aria-label="Areas of focus">
          <span>Machine learning</span>
          <i>✳</i>
          <span>Natural language processing</span>
          <i>✳</i>
          <span>Workflow automation</span>
          <i>✳</i>
          <span>Intelligent applications</span>
        </div>
        <section className="section work" id="work">
          <div className="section-top">
            <span className="section-label">01 / SELECTED WORK</span>
            <span className="small-note">Ideas made useful.</span>
          </div>
          <div className="section-heading">
            <h2>
              Built to solve.
              <br />
              <em>Designed to matter.</em>
            </h2>
            <p>
              Intelligent systems at the intersection of
              <br className="desktop-break" /> real-world problems and practical
              engineering.
            </p>
          </div>
          <div className="project-list">
            {projects.map((p) => (
              <article key={p.id} className={`project ${p.id}`}>
                <button
                  className="project-visual"
                  aria-label={`Read ${p.name} case study`}
                  onClick={() => setSelected(p)}
                >
                  <span className="visual-label">{p.category}</span>
                  {p.id === "fitness" ? <FitnessVisual /> : <SchedulerVisual />}
                  <span className="project-open">
                    <ArrowUpRight size={23} />
                  </span>
                </button>
                <div className="project-description">
                  <div className="project-meta">
                    <span>PROJECT {p.number}</span>
                    <span>DEVELOPMENT PROJECT</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.stack.slice(0, 4).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <button className="case-link" onClick={() => setSelected(p)}>
                    Explore the project <ArrowUpRight size={17} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section expertise" id="expertise">
          <div className="section-top">
            <span className="section-label">02 / WHAT I DO</span>
            <span className="small-note">Engineering beyond the demo.</span>
          </div>
          <div className="section-heading">
            <h2>
              From complexity
              <br />
              to <em>clarity.</em>
            </h2>
            <p>
              Thoughtful engineering that connects
              <br className="desktop-break" /> data, decisions, and the people
              using them.
            </p>
          </div>
          <div className="services">
            {[
              {
                icon: Cpu,
                title: "Applied AI & ML",
                text: "Recommendation engines, predictive models, and adaptive decision systems built around the problem at hand.",
                tags: "Scikit-learn / Neural networks / Predictive modeling",
              },
              {
                icon: Workflow,
                title: "Intelligent automation",
                text: "Python pipelines and API integrations that turn repetitive processes into connected, reliable workflows.",
                tags: "Python / REST APIs / Scheduling algorithms",
              },
              {
                icon: Layers,
                title: "End-to-end applications",
                text: "Mobile and web experiences that put intelligent backend services into people’s hands.",
                tags: "React Native / React / Node.js / MongoDB",
              },
            ].map((s, i) => (
              <article className="service" key={s.title}>
                <div className="service-top">
                  <s.icon size={25} strokeWidth={1.2} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="service-tags">{s.tags}</div>
              </article>
            ))}
          </div>
          <div className="process">
            <span className="section-label">THE WAY I WORK</span>
            <div>
              {[
                "Understand the problem",
                "Design the system",
                "Build & connect",
                "Evaluate & improve",
              ].map((x, i) => (
                <span key={x}>
                  <b>0{i + 1}</b>
                  {x}
                  {i < 3 && <ArrowRight size={16} />}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="section about" id="about">
          <div className="section-top">
            <span className="section-label">
              03 / THE PERSON BEHIND THE CODE
            </span>
          </div>
          <div className="about-grid">
            <div className="about-title">
              <span className="about-star">✳</span>
              <h2>
                Curious by nature.
                <br />
                <em>Engineer by choice.</em>
              </h2>
              <div className="location">
                <span className="status-dot" /> Lahore, Pakistan <span>·</span>{" "}
                Open to conversations
              </div>
            </div>
            <div className="about-content">
              <p className="about-lead">
                I’m Syed Hassan Irtaza, an AI & automation engineer and Computer
                Science student at The University of Lahore.
              </p>
              <p>
                I’m interested in the moment an intelligent idea becomes
                something useful: a fitness plan that adapts, a schedule that
                reorganizes itself, or a process that no longer needs a manual
                handoff.
              </p>
              <p>
                My work brings together machine learning, natural language
                processing, and application development. I care about how a
                system works—and how it feels to use.
              </p>
              <div className="education">
                <div>
                  <span className="section-label">EDUCATION</span>
                  <h3>BS Computer Science</h3>
                  <p>The University of Lahore · 2023–Present</p>
                </div>
                <div className="gpa">
                  <strong>
                    3.83<span>/4.00</span>
                  </strong>
                  <span>Dean’s Honor List</span>
                </div>
              </div>
              <details className="certifications">
                <summary>
                  Learning, always. <Plus size={17} />
                </summary>
                <ul>
                  <li>
                    <span>Machine Learning Specialization</span>
                    <small>DeepLearning.AI / Coursera</small>
                  </li>
                  <li>
                    <span>Natural Language Processing Specialization</span>
                    <small>DeepLearning.AI / Coursera</small>
                  </li>
                  <li>
                    <span>Meta React Native Specialization</span>
                    <small>Meta / Coursera</small>
                  </li>
                  <li>
                    <span>Google Project Management Certificate</span>
                    <small>Google / Coursera</small>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </section>
        <section className="section contact" id="contact">
          <div className="contact-glow" />
          <div className="section-top">
            <span className="section-label">04 / WHAT’S NEXT?</span>
            <span className="contact-availability">
              <span className="status-dot" /> LET’S FIND OUT
            </span>
          </div>
          <h2>
            Have a problem
            <br />
            worth <em>solving?</em>
          </h2>
          <div className="contact-bottom">
            <p>
              Let’s turn your next idea into
              <br />
              something that works.
            </p>
            <a className="contact-email" href={`mailto:${EMAIL}`}>
              Let’s talk <ArrowUpRight />
            </a>
          </div>
          <div className="contact-links">
            <a href={`mailto:${EMAIL}`}>
              <Mail size={16} />
              {EMAIL}
            </a>
            <button
              onClick={copyEmail}
              className="copy-email"
              aria-label="Copy email address"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
              <span aria-live="polite">
                {copied ? "Copied!" : "Copy email"}
              </span>
            </button>
            <div>
              <a
                href="https://github.com/Hassan-Irtaza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={17} /> GitHub <ArrowUpRight size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/syed-hassan-irtaza/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a className="footer-name" href="#">
          Syed Hassan Irtaza<span>✳</span>
        </a>
        <span>Thoughtfully engineered. © {new Date().getFullYear()}</span>
        <a href="#">
          BACK TO TOP <ArrowUpRight size={14} />
        </a>
      </footer>
      <dialog
        ref={dialog}
        className="project-dialog"
        onCancel={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === dialog.current) setSelected(null);
        }}
        onClose={() => setSelected(null)}
        aria-labelledby="dialog-title"
      >
        {selected && (
          <div className="dialog-inner">
            <button
              className="dialog-close icon-button"
              aria-label="Close project"
              onClick={() => setSelected(null)}
            >
              <X />
            </button>
            <span className="section-label">
              PROJECT {selected.number} / CASE STUDY
            </span>
            <h2 id="dialog-title">{selected.name}</h2>
            <p className="dialog-scope">{selected.scope}</p>
            <div className="tags">
              {selected.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <h3>The challenge</h3>
            <p>{selected.problem}</p>
            <h3>The approach</h3>
            <ul>
              {selected.approach.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <h3>What it brings together</h3>
            <p>{selected.result}</p>
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Let's talk about ${selected.name}`)}`}
              className="button button-primary"
            >
              Discuss this project <ArrowUpRight size={17} />
            </a>
          </div>
        )}
      </dialog>
    </>
  );
}
function ArrowDownRight() {
  return <ArrowRight size={18} style={{ transform: "rotate(45deg)" }} />;
}
function FitnessVisual() {
  return (
    <div className="fitness-mock">
      <div className="mock-orbit orbit-one" />
      <div className="mock-orbit orbit-two" />
      <div className="fitness-title">
        <span>
          <Activity size={14} /> MACROFIT
        </span>
        <small>YOUR PERSONAL TRAINING INTELLIGENCE</small>
      </div>
      <div className="fitness-panel">
        <div className="mock-top">
          <span>Performance overview</span>
          <span>
            THIS WEEK <ChevronDown size={10} />
          </span>
        </div>
        <div className="fitness-stats">
          <div>
            <small>TRAINING CONSISTENCY</small>
            <strong>
              Keep showing up<span> ↗</span>
            </strong>
          </div>
          <div className="mini-bars">
            {[30, 45, 38, 60, 53, 72, 88].map((h, i) => (
              <i key={i} style={{ height: h + "%" }} />
            ))}
          </div>
        </div>
        <svg
          className="chart"
          viewBox="0 0 340 100"
          role="img"
          aria-label="Illustrative upward training progression chart"
        >
          <defs>
            <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d0e49e" stopOpacity=".2" />
              <stop offset="100%" stopColor="#d0e49e" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[20, 50, 80].map((y) => (
            <line key={y} x1="0" y1={y} x2="340" y2={y} stroke="#ffffff0a" />
          ))}
          <path
            d="M0 85C25 84 35 50 60 57S100 78 125 50S155 60 180 38S210 49 240 28S290 38 340 8V100H0Z"
            fill="url(#chart-fill)"
          />
          <path
            d="M0 85C25 84 35 50 60 57S100 78 125 50S155 60 180 38S210 49 240 28S290 38 340 8"
            fill="none"
            stroke="#d0e49e"
            strokeWidth="2"
          />
        </svg>
        <div className="mock-days">
          <span>MON</span>
          <span>TUE</span>
          <span>WED</span>
          <span>THU</span>
          <span>FRI</span>
          <span>SAT</span>
          <span>SUN</span>
        </div>
      </div>
      <div className="coach-toast">
        <span className="toast-icon">
          <Sparkles size={16} />
        </span>
        <div>
          <strong>Built around your progress</strong>
          <small>Adaptive plans. More informed training.</small>
        </div>
        <Check size={15} />
      </div>
      <span className="illustration-label">ILLUSTRATIVE INTERFACE</span>
    </div>
  );
}
function SchedulerVisual() {
  return (
    <div className="scheduler-mock">
      <div className="scheduler-bg-ring" />
      <div className="task-chip">
        <div>
          <Layers size={14} />
          <span>From scattered tasks</span>
        </div>
        <ArrowRight size={18} />
      </div>
      <div className="scheduler-panel">
        <div className="calendar-top">
          <span>
            <CalendarDays size={15} /> Your day, organized.
          </span>
          <span className="tiny-pill">AI ASSISTED</span>
        </div>
        <div className="schedule-date">
          <strong>A little more focus.</strong>
          <small>A little less friction.</small>
        </div>
        <div className="schedule-task">
          <span>09:00</span>
          <div className="task-purple">
            <i />
            <span>
              Deep work session<small>Project development</small>
            </span>
            <span>90 min</span>
          </div>
        </div>
        <div className="schedule-task">
          <span>11:00</span>
          <div className="task-green">
            <i />
            <span>
              Review & refine<small>Model evaluation</small>
            </span>
            <span>45 min</span>
          </div>
        </div>
        <div className="schedule-task">
          <span>13:00</span>
          <div className="task-neutral">
            <i />
            <span>
              Make room for learning<small>Research & reading</small>
            </span>
            <span>60 min</span>
          </div>
        </div>
        <div className="schedule-foot">
          <Sparkles size={12} /> Priorities change. Your plan adapts.
        </div>
      </div>
      <span className="illustration-label">ILLUSTRATIVE INTERFACE</span>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
