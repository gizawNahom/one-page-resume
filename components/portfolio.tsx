"use client";

import { useEffect, useState } from "react";

type Experience = {
  dates: string;
  role: string;
  company: string;
  highlights: string[];
  tags: string[];
};

type System = {
  title: string;
  context: string;
  contribution: string;
  result: string;
  tags: string[];
};

const navItems = [
  ["about", "About"],
  ["experience", "Experience"],
  ["systems", "Selected Systems"],
  ["skills", "Skills"],
  ["education", "Education"],
  ["contact", "Contact"],
] as const;

const experiences: Experience[] = [
  {
    dates: "May 2026 - Jun 2026",
    role: "Senior Software Engineer",
    company: "InnoSphere Technologies",
    highlights: [
      "Built a reusable Go idempotency SDK adopted by 5-6 microservices during the engagement, with atomic Redis/Lua state transitions, replay and conflict handling, and payload-hash validation.",
      "Designed the SDK for a <=5 ms P95 overhead budget through in-process execution, a single Redis round trip, strict timeouts, and asynchronous observability paths.",
      "Completed an event-driven identity-resolution service for identity creation, merge, and split using Go, Kafka, PostgreSQL, Debezium, transactional outbox, DDD, and hexagonal architecture.",
      "Facilitated daily coordination for a four-engineer team and helped introduce executable Gherkin specifications, mutation testing, and continuous-delivery practices.",
    ],
    tags: ["Go", "Kafka", "PostgreSQL", "Redis", "Debezium"],
  },
  {
    dates: "Feb 2025 - May 2026",
    role: "Senior Software Engineer (Backend)",
    company: "Eagle Lion System Technology",
    highlights: [
      "Owned TypeScript/Express transaction and ledger capabilities for a multi-tenant digital wallet, enforcing idempotent settlement, concurrency safety, balance integrity, and deterministic recovery across retries and partial failures.",
      "Built production backend capabilities for Dashen SuperApp digital onboarding on a platform serving more than 1.5 million users.",
      "Built a reusable TypeScript SDK for Fayda integration directly and through EthSwitch; it supported Dashen onboarding and harmonization channels, then Ethiopay onboarding in QA.",
      "Implemented sender and receiver microservices with Temporal Saga orchestration for cross-tenant Send-to-Ethiopay transfers through EthSwitch, taking the feature into QA.",
    ],
    tags: ["TypeScript", "Express", "Temporal", "Jest", "EthSwitch"],
  },
  {
    dates: "Apr 2022 - Jan 2025",
    role: "Career Break & Independent Engineering",
    company: "Independent",
    highlights: [
      "Took a planned personal and family career break while developing depth in C#, TDD, clean architecture, contract testing, and full-stack delivery.",
      "Built an open-source URL Shortener with click analytics using TypeScript, Next.js, Express, MongoDB, ports/adapters, Jest, Cypress, Artillery, and OWASP ZAP through CircleCI.",
      "Built a Twitter Clone with TypeScript, Next.js, Apollo GraphQL, Express, Socket.IO, Prisma/PostgreSQL, Nx, Jest, Pact, and browser end-to-end testing.",
    ],
    tags: ["Next.js", "Express", "MongoDB", "PostgreSQL", "Pact"],
  },
  {
    dates: "May 2021 - Mar 2022",
    role: "Programmer",
    company: "CNET Software Technologies",
    highlights: [
      "Created a reusable C#/.NET payment-integration framework with a Template Method extension model for desktop and web ERP/POS applications.",
      "Integrated Amole and Telebirr payment options into production ERP/POS deployments used across thousands of businesses.",
      "Delivered loyalty-card and device integrations, a provider-agnostic movie-search module, and a local-network API for hospital billing-data exchange.",
    ],
    tags: ["C#", ".NET Core", "SQL Server", "nopCommerce"],
  },
  {
    dates: "Feb 2021 - Apr 2021",
    role: "Tech Lead",
    company: "Zeraf Tech",
    highlights: [
      "Led a 5-6 person team during early product discovery for Giraffe Notes, a blockchain-enabled services marketplace with credit-instrument and secondary-market concepts.",
      "Built the landing page, mapped user stories, researched stacks and workflows, interviewed developers, and contributed to architecture discussions.",
    ],
    tags: ["Product Discovery", "Architecture", "Team Leadership"],
  },
  {
    dates: "Mar 2019 - Sep 2019",
    role: "Software Engineering Intern",
    company: "Minab",
    highlights: [
      "Developed and unit-tested Vue.js web applications while collaborating on implementation, debugging, and delivery across the software lifecycle.",
    ],
    tags: ["Vue.js", "JavaScript", "Unit Testing"],
  },
];

const systems: System[] = [
  {
    title: "Go Idempotency SDK",
    context: "Reusable protection for request replay and conflict handling across distributed services.",
    contribution: "Built atomic Redis/Lua state transitions, payload-hash validation, configurable fail-open/fail-closed circuit-breaker behavior, and asynchronous observability paths.",
    result: "Adopted by 5-6 microservices during the engagement; designed for <=5 ms P95 overhead, typically targeting below 4 ms.",
    tags: ["Go", "Redis", "Lua", "Observability"],
  },
  {
    title: "Identity Resolution Service",
    context: "Event-driven identity lifecycle management for creation, merge, and split operations.",
    contribution: "Completed the service using domain-driven and hexagonal architecture, a transactional outbox, Kafka, PostgreSQL, and Debezium.",
    result: "A completed service implementation for the supported identity workflows.",
    tags: ["Go", "Kafka", "PostgreSQL", "Debezium"],
  },
  {
    title: "Cross-Tenant Send-to-Ethiopay Transfer",
    context: "A cross-tenant transfer flow through EthSwitch.",
    contribution: "Implemented sender and receiver microservices with Temporal Saga orchestration.",
    result: "Reached QA. It is not presented as a production system.",
    tags: ["TypeScript", "Temporal", "Microservices", "EthSwitch"],
  },
  {
    title: "Dashen Digital Onboarding",
    context: "Digital onboarding capabilities for the Dashen SuperApp platform.",
    contribution: "Built production backend capabilities supporting account creation.",
    result: "Supported a platform serving more than 1.5 million users.",
    tags: ["TypeScript", "Express", "Digital Identity"],
  },
  {
    title: "Fayda Integration and Harmonization SDK",
    context: "Reusable digital-identity integration across onboarding and harmonization channels.",
    contribution: "Built a TypeScript SDK supporting Fayda integration directly and through EthSwitch.",
    result: "Used by Dashen onboarding and mobile app, web-link, and in-branch harmonization channels; reused for Ethiopay onboarding in QA.",
    tags: ["TypeScript", "SDK Design", "Fayda", "EthSwitch"],
  },
  {
    title: "ERP/POS Payment Integration Framework",
    context: "Reusable payment-provider integration for desktop and web ERP/POS applications.",
    contribution: "Built a C#/.NET framework using a Template Method extension model, then integrated Amole and Telebirr payment options.",
    result: "Used in production ERP/POS deployments across a customer base of thousands of businesses.",
    tags: ["C#", ".NET Core", "SQL Server", "ERP/POS"],
  },
];

const skillGroups = [
  ["Languages", "TypeScript, JavaScript, Go, C#, Python, Java"],
  ["Backend and messaging", "Express, .NET/.NET Core, Kafka, Temporal, gRPC, REST, Debezium"],
  ["Architecture and design", "Microservices, event-driven architecture, domain-driven design, hexagonal architecture, transactional outbox"],
  ["Data and infrastructure", "PostgreSQL, MongoDB, Microsoft SQL Server, Redis, Docker, Kubernetes"],
  ["Testing and quality", "Jest, Go testing, Cucumber, Godog, Pact, Testcontainers, Stryker, Playwright, Cypress, Artillery, OWASP ZAP, TDD, ATDD, mutation testing"],
  ["CI/CD", "GitLab CI/CD, GitHub Actions, CircleCI"],
  ["Frontend", "React, Next.js, Vue.js, Nuxt, Angular, Flutter"],
  ["Observability", "Grafana, Winston"],
  ["AI-assisted development", "Cursor, Claude Code, Kiro, Codex"],
] as const;

const links = [
  ["GitHub", "https://github.com/gizawNahom"],
  ["LinkedIn", "https://www.linkedin.com/in/nahom-gizaw-7ab824311/"],
  ["Stack Overflow", "https://stackoverflow.com/users/23258247/nahom"],
] as const;

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const updateSpotlight = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--spotlight-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--spotlight-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", updateSpotlight, { passive: true });
    return () => window.removeEventListener("pointermove", updateSpotlight);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    let animationFrame = 0;

    const updateActiveSection = () => {
      const isAtDocumentEnd =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (isAtDocumentEnd) {
        setActiveSection("contact");
        return;
      }

      const activationPoint = window.scrollY + window.innerHeight * 0.3;
      const currentSection = sections.reduce<HTMLElement | undefined>(
        (latest, section) =>
          section.getBoundingClientRect().top + window.scrollY <= activationPoint
            ? section
            : latest,
        undefined,
      );

      if (currentSection) setActiveSection(currentSection.id);
    };

    const requestUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <main className="site-shell">
      <a className="skip-link" href="#about">Skip to content</a>
      <aside className="identity-column" aria-label="Portfolio introduction">
        <div>
          <a className="identity" href="#about" aria-label="Nahom Derese Gizaw, about section">
            <span className="identity-mark" aria-hidden="true">NDG</span>
            <h1>Nahom Derese Gizaw</h1>
          </a>
          <p className="role">Senior Backend Engineer</p>
          <p className="positioning">Building dependable distributed systems for high-integrity transactions, digital identity, and event-driven workflows.</p>
        </div>
        <nav className="section-nav" aria-label="Section navigation">
          {navItems.map(([id, label]) => (
            <a key={id} className={activeSection === id ? "active" : ""} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined}>
              <span aria-hidden="true" />{label}
            </a>
          ))}
        </nav>
        <div className="profile-links" aria-label="Professional profiles">
          {links.map(([label, href]) => <ExternalLink key={label} href={href}>{label}</ExternalLink>)}
        </div>
      </aside>

      <div className="reading-column">
        <section id="about" aria-labelledby="about-title">
          <SectionHeading id="about-title">About</SectionHeading>
          <div className="prose">
            <p>I am a senior backend-focused engineer who builds distributed systems for financial services, digital wallets, digital onboarding, and fraud intelligence. My work centers on high-integrity transaction flows, reusable SDKs, identity-resolution services, and event-driven delivery.</p>
            <p>I have worked on financial platforms and digital-identity integrations where reliability and explicit failure handling matter. That includes transaction and ledger capabilities, account-creation workflows, identity harmonization channels, and services designed to behave predictably across retries and partial failures.</p>
            <p>I work across TypeScript and Go, pairing pragmatic system design with strong delivery practices. I value clear domain boundaries, executable specifications, and maintainable services that give teams confidence as systems evolve.</p>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-title">
          <SectionHeading id="experience-title">Experience</SectionHeading>
          <div className="timeline">
            {experiences.map((experience) => <ExperienceEntry key={`${experience.company}-${experience.dates}`} {...experience} />)}
          </div>
        </section>

        <section id="systems" aria-labelledby="systems-title">
          <SectionHeading id="systems-title">Selected Systems</SectionHeading>
          <div className="systems-grid">
            {systems.map((system) => <SystemEntry key={system.title} {...system} />)}
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-title">
          <SectionHeading id="skills-title">Technical Skills</SectionHeading>
          <dl className="skills-grid">
            {skillGroups.map(([group, skills]) => <div key={group}><dt>{group}</dt><dd>{skills}</dd></div>)}
          </dl>
        </section>

        <section id="education" aria-labelledby="education-title">
          <SectionHeading id="education-title">Education</SectionHeading>
          <div className="education-entry">
            <p className="eyebrow">Dec 2020</p>
            <h3>Addis Ababa University - Addis Ababa Institute of Technology (AAiT)</h3>
            <p>BSc in Software Engineering, Great Distinction</p>
            <p>GPA: 3.52</p>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <SectionHeading id="contact-title">Contact</SectionHeading>
          <div className="prose">
            <p>For senior backend engineering opportunities, connect through LinkedIn or review Nahom&apos;s public work on GitHub and Stack Overflow.</p>
          </div>
          <div className="contact-links">
            {links.map(([label, href]) => <ExternalLink key={label} href={href}>{label}</ExternalLink>)}
          </div>
        </section>

        <footer>
          <p>Layout inspired by <a href="https://brittanychiang.com/" target="_blank" rel="noopener noreferrer">Brittany Chiang&apos;s portfolio<span className="sr-only"> (opens in a new tab)</span></a>.</p>
        </footer>
      </div>
    </main>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return <h2 id={id} className="section-heading">{children}</h2>;
}

function TagList({ tags }: { tags: string[] }) {
  return <ul className="tags">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>;
}

function ExperienceEntry({ dates, role, company, highlights, tags }: Experience) {
  return <article className="experience-entry">
    <p className="eyebrow">{dates}</p>
    <div>
      <h3>{role} <span aria-hidden="true">at</span> <strong>{company}</strong></h3>
      <ul className="highlights">{highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
      <TagList tags={tags} />
    </div>
  </article>;
}

function SystemEntry({ title, context, contribution, result, tags }: System) {
  return <article className="system-entry">
    <h3>{title}</h3>
    <p>{context}</p>
    <dl>
      <div><dt>Contribution</dt><dd>{contribution}</dd></div>
      <div><dt>Result</dt><dd>{result}</dd></div>
    </dl>
    <TagList tags={tags} />
  </article>;
}

function ExternalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}<span className="external-mark" aria-hidden="true">&#8599;</span><span className="sr-only"> (opens in a new tab)</span></a>;
}
