"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
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
import { useCountUp } from "@/hooks/use-count-up";
import { useGsapAnimations } from "@/hooks/use-gsap-animations";
import { useLenis } from "@/hooks/use-lenis";
import { usePortfolio } from "@/hooks/use-portfolio";
import { CommandMenu } from "@/components/portfolio/command-menu";
import { CustomCursor } from "@/components/portfolio/custom-cursor";
import { MagneticButton, TiltCard } from "@/components/portfolio/motion-primitives";
import { Navbar } from "@/components/portfolio/navbar";
import { Preloader } from "@/components/portfolio/preloader";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import type { ProjectCaseStudy, StatItem } from "@/types/portfolio";

const ThreeField = dynamic(
  () => import("@/components/portfolio/three-field").then((mod) => mod.ThreeField),
  { ssr: false }
);

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
      <h2 data-split-reveal data-text-mask>
        {title}
      </h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function StatCounter({ value, suffix, label }: StatItem) {
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
  const { hero, personal } = usePortfolio();
  const shouldReduceMotion = useReducedMotion();
  const headline = hero.headline.join(" ");
  const motionInitial = shouldReduceMotion ? false : { opacity: 0, y: 20 };
  const wordInitial = shouldReduceMotion ? false : { y: "115%", filter: "blur(22px)", opacity: 0 };

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
            initial={motionInitial}
            transition={{
              delay: shouldReduceMotion ? 0 : 2.4,
              duration: shouldReduceMotion ? 0 : 0.7,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <span />
            {personal.title}
          </motion.div>
          <h1 className="hero-title" aria-label={headline}>
            {hero.headline.map((word, index) => (
              <span className="hero-word" key={word}>
                <motion.span
                  animate={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                  className="word-inner"
                  initial={wordInitial}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 2.52 + index * 0.12,
                    duration: shouldReduceMotion ? 0 : 0.9,
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
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 2.96,
              duration: shouldReduceMotion ? 0 : 0.75,
              ease: "easeOut"
            }}
          >
            {personal.tagline}
          </motion.p>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="hero-supporting-copy"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 3.08,
              duration: shouldReduceMotion ? 0 : 0.7,
              ease: "easeOut"
            }}
          >
            {hero.supportingCopy}
          </motion.p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="hero-actions"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            transition={{
              delay: shouldReduceMotion ? 0 : 3.18,
              duration: shouldReduceMotion ? 0 : 0.75,
              ease: "easeOut"
            }}
          >
            <MagneticButton href="#projects">
              View Case Studies
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
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            transition={{ delay: shouldReduceMotion ? 0 : 3.32, duration: shouldReduceMotion ? 0 : 0.75 }}
          >
            {hero.metrics.map((metric) => (
              <div key={metric.label}>
                <span>{metric.value}</span>
                <p>{metric.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          className="hero-portrait-wrap"
          data-parallax="42"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 80, rotateY: -16 }}
          transition={{
            delay: shouldReduceMotion ? 0 : 2.82,
            duration: shouldReduceMotion ? 0 : 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
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
                  {hero.orbitText}
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
          <div className="hero-system-card" data-cursor>
            <div className="system-card-header">
              <span>Automation Console</span>
              <strong>Live</strong>
            </div>
            <div className="system-panel-list">
              {hero.systemPanels.map((panel) => (
                <div className="system-panel" key={panel.label}>
                  <span>{panel.label}</span>
                  <strong>{panel.value}</strong>
                  <p>{panel.detail}</p>
                </div>
              ))}
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
  const { personal, stats } = usePortfolio();

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
              Frontend Engineer and AI Automation Specialist based in India, open for remote
              opportunities.
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
  const { skills } = usePortfolio();

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
  const { services } = usePortfolio();

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

function CaseStudyCard({ project }: { project: ProjectCaseStudy }) {
  return (
    <TiltCard className={`project-card project-accent-${project.accent}`} intensity={5}>
      <div className="project-media" data-cursor>
        <div className="case-study-visual" aria-hidden="true">
          <div className="visual-topbar">
            <span />
            <span />
            <span />
            <strong>{project.category}</strong>
          </div>
          <div className="visual-grid">
            <div className="visual-panel visual-panel-large">
              <span>{project.title}</span>
              <strong>{project.index}</strong>
              <div className="visual-chart">
                {project.impact.map((impact, index) => (
                  <i key={impact} style={{ height: `${42 + index * 18}%` }} />
                ))}
              </div>
            </div>
            <div className="visual-panel">
              <span>Impact</span>
              <strong>{project.impact[0]}</strong>
            </div>
            <div className="visual-panel">
              <span>System</span>
              <strong>{project.stack[0]}</strong>
            </div>
          </div>
          <div className="visual-flow">
            {project.stack.slice(0, 4).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="project-media-scan" />
        <div className="case-study-meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
      </div>
      <div className="project-body">
        <div className="project-heading-row">
          <span>{project.index}</span>
          <small>{project.category}</small>
        </div>
        <h3 data-split-reveal>{project.title}</h3>
        <p>{project.description}</p>
        <div className="case-study-metrics" aria-label={`${project.title} impact`}>
          {project.impact.map((impact) => (
            <span key={impact}>{impact}</span>
          ))}
        </div>
        <div className="stack-list">
          {project.stack.map((item) => (
            <small key={item}>{item}</small>
          ))}
        </div>
        <div className="project-links">
          {project.actions.map((action) => (
            <a
              href={action.href}
              key={action.label}
              rel={action.external ? "noreferrer" : undefined}
              target={action.external ? "_blank" : undefined}
            >
              {action.label}
              <ArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </TiltCard>
  );
}

function ProjectsSection() {
  const { projects } = usePortfolio();

  return (
    <section className="projects-section" data-projects-section id="projects">
      <div className="section-shell projects-heading">
        <SectionHeader
          copy="Premium case studies across cloud migration, AI qualification, operational dashboards, and conversion-focused platforms."
          eyebrow="Case Studies"
          title="Systems Built To Scale."
        />
      </div>
      <div className="projects-viewport">
        <div className="projects-track" data-projects-track>
          {projects.map((project) => (
            <CaseStudyCard key={project.title} project={project} />
          ))}
        </div>
      </div>
      <div className="section-shell project-rail" aria-hidden="true">
        <div />
        {projects.map((project) => (
          <span key={project.index}>{project.index}</span>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  const { timeline } = usePortfolio();

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
  const { testimonials } = usePortfolio();
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
  const { services } = usePortfolio();
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
              {services.map((service) => (
                <option key={service.title}>{service.title}</option>
              ))}
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
  const { personal } = usePortfolio();

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
