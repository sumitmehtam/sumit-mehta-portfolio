"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  Atom,
  Blocks,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Braces,
  Check,
  Code2,
  Download,
  Github,
  Globe2,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  PanelTop,
  PlugZap,
  Rocket,
  Send,
  ShoppingCart,
  Sparkles,
  Workflow,
  Zap
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  personal,
  projects,
  services,
  skills,
  stats,
  testimonials,
  timeline
} from "@/data/portfolio";
import { useCountUp } from "@/hooks/use-count-up";
import { useGsapAnimations } from "@/hooks/use-gsap-animations";
import { useLenis } from "@/hooks/use-lenis";
import { CommandMenu } from "@/components/portfolio/command-menu";
import { CustomCursor } from "@/components/portfolio/custom-cursor";
import { MagneticButton, TiltCard } from "@/components/portfolio/motion-primitives";
import { Navbar } from "@/components/portfolio/navbar";
import { Preloader } from "@/components/portfolio/preloader";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { ThreeField } from "@/components/portfolio/three-field";

const skillIcons = [
  Atom,
  Atom,
  Globe2,
  Braces,
  Code2,
  PanelTop,
  Zap,
  Sparkles,
  Blocks,
  ShoppingCart,
  LayoutDashboard,
  Code2,
  BrainCircuit,
  Bot,
  Workflow,
  PlugZap,
  Sparkles,
  Braces
];

const serviceIcons = [
  MonitorSmartphone,
  Blocks,
  Bot,
  LayoutDashboard,
  Rocket,
  PlugZap
];

function SectionHeader({
  eyebrow,
  title,
  copy,
  align = "left"
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={align === "center" ? "section-heading items-center text-center" : "section-heading"}
      data-reveal
    >
      <div className="section-kicker">
        <span />
        {eyebrow}
      </div>
      <h2 data-text-mask>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function StatCounter({ value, suffix, label }: (typeof stats)[number]) {
  const { ref, value: count } = useCountUp(value);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-value">
        {count}
        {suffix}
      </div>
      <p>{label}</p>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <ThreeField />
      <div aria-hidden="true" className="aurora-field" />
      <div aria-hidden="true" className="noise-layer" />
      <div className="section-shell hero-grid">
        <div className="hero-copy">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="availability-pill"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 2.85, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span />
            {personal.availability}
          </motion.div>
          <h1 className="hero-title" aria-label="Building Digital Experiences">
            {["BUILDING", "DIGITAL", "EXPERIENCES"].map((word, index) => (
              <span className="hero-word" key={word}>
                <motion.span
                  animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                  className="word-inner"
                  initial={{ y: "115%", filter: "blur(22px)", opacity: 0 }}
                  transition={{
                    delay: 2.95 + index * 0.16,
                    duration: 1.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="hero-tagline"
            initial={{ opacity: 0, y: 24 }}
            transition={{ delay: 3.45, duration: 0.75, ease: "easeOut" }}
          >
            {personal.tagline}
          </motion.p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hero-actions"
            initial={{ opacity: 0, y: 22 }}
            transition={{ delay: 3.62, duration: 0.75, ease: "easeOut" }}
          >
            <MagneticButton href="#projects">
              View Projects
              <ArrowDown aria-hidden="true" data-icon="inline-end" />
            </MagneticButton>
            <MagneticButton
              download
              href="/sumit-mehta-resume.txt"
              variant="outline"
            >
              Download Resume
              <Download aria-hidden="true" data-icon="inline-end" />
            </MagneticButton>
          </motion.div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hero-meta"
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: 3.78, duration: 0.75 }}
          >
            <div>
              <span>{personal.experience}</span>
              <p>Experience</p>
            </div>
            <div>
              <span>{personal.location}</span>
              <p>Location</p>
            </div>
            <div>
              <span>Remote</span>
              <p>Work mode</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          className="hero-portrait-wrap"
          data-parallax="42"
          initial={{ opacity: 0, x: 80, rotateY: -16 }}
          transition={{ delay: 3.22, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-orbit">
            <svg aria-hidden="true" className="orbit-text" viewBox="0 0 420 420">
              <defs>
                <path
                  d="M 210 210 m -170 0 a 170 170 0 1 1 340 0 a 170 170 0 1 1 -340 0"
                  id="orbit-path"
                />
              </defs>
              <text>
                <textPath href="#orbit-path" startOffset="0%">
                  FRONTEND ENGINEER AI AUTOMATION WORDPRESS EXPERT
                </textPath>
              </text>
            </svg>
            <div className="portrait-image">
              <Image
                alt="Abstract luminous portrait for Sumit Mehta"
                fill
                priority
                sizes="(max-width: 768px) 82vw, 430px"
                src="/concepts/hero-reference.png"
                style={{ objectFit: "cover", objectPosition: "75% 45%" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="next-section-cue" aria-hidden="true">
        <span>About</span>
        <ArrowDown />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="section-pad about-section" id="about">
      <div className="section-shell about-grid">
        <div className="about-statement" data-reveal>
          <div className="section-kicker">
            <span />
            About
          </div>
          <h2>
            I craft interfaces that feel{" "}
            <span>fast, fluid, and intelligently automated.</span>
          </h2>
          <div className="signature-panel">
            <div className="signature-mark">SM</div>
            <div>
              <p>Sumit Mehta</p>
              <span>{personal.title}</span>
            </div>
          </div>
        </div>
        <div className="about-content">
          <div className="about-copy" data-reveal>
            <p>
              Frontend Engineer, AI Automation Developer, and WordPress Expert based in India,
              open for remote opportunities.
            </p>
            <p>
              I help startups, agencies, and businesses build high-performance digital
              experiences that are scalable, automated, and built for impact.
            </p>
          </div>
          <div className="stats-panel" data-reveal>
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
          <div className="code-slab" data-parallax="30">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <pre>
              <code>{`const experience = {
  craft: "interfaces",
  focus: ["speed", "fluidity", "automation"],
  impact: "measurable results",
};`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="section-pad skills-section" id="skills">
      <div className="section-shell">
        <SectionHeader
          copy="A carefully curated stack for building fast, scalable, and future-ready digital experiences."
          eyebrow="Skills"
          title="Tools I Use. Excellence I Build."
        />
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skillIcons[index] || Code2;

            return (
              <TiltCard className="skill-card" data-reveal intensity={7} key={skill}>
                <Icon aria-hidden="true" />
                <span>{skill}</span>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section-pad services-section" id="services">
      <div className="section-shell">
        <SectionHeader
          copy="High-impact solutions that turn ideas into scalable digital products."
          eyebrow="Services"
          title="What I Build For You."
        />
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] || Sparkles;

            return (
              <TiltCard className="service-card liquid-card" data-reveal intensity={9} key={service.title}>
                <div className="service-index">0{index + 1}</div>
                <Icon aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="projects-section" data-projects-section id="projects">
      <div className="section-shell projects-heading">
        <SectionHeader
          copy="A selection of high-impact digital products crafted with precision, performance, and purpose."
          eyebrow="Projects"
          title="Work That Moves Brands Forward."
        />
      </div>
      <div className="projects-viewport">
        <div className="projects-track" data-projects-track>
          {projects.map((project) => (
            <TiltCard className="project-card" intensity={5} key={project.title}>
              <div className="project-media" data-cursor>
                <Image
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 900px) 90vw, 720px"
                  src="/concepts/projects-reference.png"
                  style={{ objectFit: "cover", objectPosition: project.imagePosition }}
                />
                <div className="project-media-scan" />
              </div>
              <div className="project-body">
                <span>{project.index}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.map((item) => (
                    <small key={item}>{item}</small>
                  ))}
                </div>
                <div className="project-links">
                  <a href="#contact">
                    Live Demo
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                  <a href="https://github.com/" rel="noreferrer" target="_blank">
                    Github
                    <Github aria-hidden="true" />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
      <div className="section-shell project-rail" aria-hidden="true">
        <div />
        <span>01</span>
        <span>02</span>
        <span>03</span>
        <span>04</span>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="section-pad experience-section" id="experience">
      <div className="section-shell experience-grid">
        <SectionHeader
          copy="A growth path shaped around product quality, automation, and measurable frontend performance."
          eyebrow="Experience"
          title="Timeline Of Delivery."
        />
        <div className="timeline-wrap" data-reveal>
          <div className="timeline-line">
            <span data-timeline-line />
          </div>
          {timeline.map((item) => (
            <div className="timeline-item" data-reveal key={item.title}>
              <div className="timeline-dot" />
              <div>
                <span>{item.range}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <section className="section-pad testimonials-section" id="testimonials">
      <div className="section-shell">
        <SectionHeader eyebrow="Testimonials" title="Trusted By Founders, Teams & Brands." />
      </div>
      <div className="marquee-wrap" data-reveal>
        <div className="marquee-track">
          {marqueeItems.map((item, index) => (
            <article className="testimonial-card" key={`${item.name}-${index}`}>
              <Sparkles aria-hidden="true" />
              <blockquote>{item.quote}</blockquote>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section-pad contact-section" id="contact">
      <div className="section-shell contact-grid">
        <div className="contact-copy" data-reveal>
          <div className="section-kicker">
            <span />
            Contact
          </div>
          <h2>
            Let&apos;s Build <span>Something Amazing.</span>
          </h2>
          <p>Have a project in mind or just want to say hi? I&apos;d love to hear about it.</p>
          <div className="social-row">
            <a href="https://github.com/" rel="noreferrer" target="_blank">
              <Github aria-hidden="true" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
              <Linkedin aria-hidden="true" />
              LinkedIn
            </a>
            <a href="mailto:hello@sumitmehta.dev">
              <Mail aria-hidden="true" />
              Mail
            </a>
          </div>
        </div>
        <form className="contact-form" data-reveal onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              <span>Name</span>
              <Input name="name" placeholder="Your name" required />
            </label>
            <label>
              <span>Email</span>
              <Input name="email" placeholder="you@example.com" required type="email" />
            </label>
          </div>
          <label>
            <span>Project Type</span>
            <select className="select-field" defaultValue="" name="projectType" required>
              <option disabled value="">
                Select project type
              </option>
              <option>Frontend Development</option>
              <option>WordPress Development</option>
              <option>AI Automation</option>
              <option>Dashboard Development</option>
              <option>API Integration</option>
            </select>
          </label>
          <label>
            <span>Message</span>
            <Textarea name="message" placeholder="Tell me about your project..." required />
          </label>
          <MagneticButton className="w-full" type="submit">
            {submitted ? (
              <>
                Request Sent
                <Check aria-hidden="true" data-icon="inline-end" />
              </>
            ) : (
              <>
                Start a Project
                <Send aria-hidden="true" data-icon="inline-end" />
              </>
            )}
          </MagneticButton>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer-shell">
      <div className="section-shell footer-inner">
        <a className="flex items-center gap-3" href="#top">
          <span className="brand-mark">S</span>
          <span>Sumit Mehta</span>
        </a>
        <div className="footer-meta">
          <span>
            <MapPin aria-hidden="true" />
            {personal.location}
          </span>
          <span>
            <span className="status-dot" />
            {personal.availability}
          </span>
        </div>
        <MagneticButton href="#top" size="icon" variant="outline">
          <ArrowUp aria-hidden="true" />
        </MagneticButton>
      </div>
    </footer>
  );
}

export function PortfolioExperience() {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [commandOpen, setCommandOpen] = useState(false);
  const [themeFlash, setThemeFlash] = useState(false);

  useLenis(loaded);
  useGsapAnimations(loaded);

  useEffect(() => {
    const stored = window.localStorage.getItem("sumit-theme");
    if (stored === "dark" || stored === "light") setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("sumit-theme", theme);
  }, [theme]);

  const handleComplete = useCallback(() => setLoaded(true), []);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
    setThemeFlash(true);
    window.setTimeout(() => setThemeFlash(false), 720);
  };

  return (
    <main className="site-shell" data-theme={theme}>
      <Preloader onComplete={handleComplete} />
      <ScrollProgress />
      <CustomCursor />
      <Navbar
        onCommandOpen={() => setCommandOpen(true)}
        onThemeToggle={toggleTheme}
        theme={theme}
      />
      <CommandMenu onOpenChange={setCommandOpen} open={commandOpen} />
      {themeFlash ? <motion.div className="theme-flash" layoutId="theme-flash" /> : null}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <Button
        aria-label="Open command menu"
        className="fixed bottom-5 right-5 z-40 sm:hidden"
        onClick={() => setCommandOpen(true)}
        size="icon"
        variant="outline"
      >
        <BriefcaseBusiness aria-hidden="true" />
      </Button>
    </main>
  );
}
