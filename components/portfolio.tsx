"use client";

import { useEffect, useState } from "react";
import { JungWordAssociation } from "./jung-word-association";

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
] as const;

const experiences: Experience[] = [
  {
    dates: "May 2026 - Jun 2026",
    role: "Senior Software Engineer",
    company: "InnoSphere Technologies",
    highlights: [
      "Built and delivered a reusable Go idempotency SDK adopted by 5-6 microservices during my tenure, providing atomic Redis/Lua state transitions, replay and conflict handling, payload-hash validation, and configurable fail-open/fail-closed circuit-breaker behavior.",
      "Built the SDK to a <=5 ms P95 overhead design budget, with a typical target below 4 ms, using in-process execution, a single Redis round trip, strict timeouts, and asynchronous event and observability paths.",
      "Completed implementation of an event-driven identity-resolution service that constructs identities from linked records and supports identity creation, merging, and splitting, using Go, Kafka, PostgreSQL, Debezium, a transactional outbox, domain-driven design, and hexagonal architecture.",
      "Facilitated daily coordination for a four-engineer team and helped the team adopt ATDD using executable Gherkin specifications, mutation testing, and continuous-delivery practices.",
    ],
    tags: ["Go", "Kafka", "PostgreSQL", "Redis", "Debezium"],
  },
  {
    dates: "Feb 2025 - May 2026",
    role: "Senior Software Engineer (Backend)",
    company: "Eagle Lion System Technology",
    highlights: [
      "Owned TypeScript/Express transaction and ledger capabilities for a multi-tenant digital wallet, using idempotency and concurrency controls to avoid duplicate settlement and protect balance integrity when operations were retried or interrupted.",
      "Built production backend capabilities for digital onboarding in Dashen Bank's mobile app, allowing customers to open bank accounts remotely. The SuperApp served more than 1.5 million users.",
      "Built a reusable TypeScript SDK for Fayda, Ethiopia's national digital ID, supporting integration both directly and indirectly through a wrapper provided by EthSwitch, Ethiopia's national payment switch. It was used for Dashen onboarding and for linking existing customers to Fayda across mobile, web-link, and in-branch channels, and was later reused for Ethiopay onboarding in QA.",
      "Built a shared Kafka library for Ethiopay, a multi-tenant digital-wallet platform, standardizing schema registration, dead-letter handling, retry backoff, offset management, and observability across its microservices.",
      "Delivered a separate integration with Ethio telecom for verifying customer SIM status and whether a SIM had been swapped.",
      "Built sender and receiver microservices with Temporal Saga orchestration for wallet transfers across separate institutional deployments, routed through EthSwitch; the feature reached QA.",
      "Built an internal TypeScript/Jest DSL for expressing readable, executable acceptance tests across cross-service transaction flows.",
    ],
    tags: ["TypeScript", "Express", "Temporal", "Jest"],
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
    result: "Adopted by 5\u20136 microservices during my tenure; built to a \u22645 ms P95 overhead design budget, with a typical target below 4 ms.",
    tags: ["Go", "Redis", "Lua", "Observability"],
  },
  {
    title: "Identity Resolution Service",
    context: "An event-driven service that constructs identities from linked records and handles identity creation, merging, and splitting.",
    contribution: "Completed the service using domain-driven and hexagonal architecture, a transactional outbox, Kafka, PostgreSQL, and Debezium.",
    result: "Completed implementation of the service's identity creation, merge, and split workflows.",
    tags: ["Go", "Kafka", "PostgreSQL", "Debezium"],
  },
  {
    title: "Cross-Institution Wallet Transfers",
    context: "A wallet-transfer flow between customers on separate institutional deployments, routed through EthSwitch.",
    contribution: "Built sender and receiver microservices with Temporal Saga orchestration.",
    result: "Reached QA and had not yet been deployed to production.",
    tags: ["TypeScript", "Temporal", "Microservices"],
  },
  {
    title: "Dashen Digital Onboarding",
    context: "Backend capabilities that allow customers to open bank accounts through the Dashen SuperApp.",
    contribution: "Built production backend capabilities supporting account creation.",
    result: "Deployed within the Dashen SuperApp, which served more than 1.5 million users.",
    tags: ["TypeScript", "Express", "Digital Identity"],
  },
  {
    title: "Fayda Integration and Harmonization SDK",
    context: "A reusable integration with Ethiopia's national digital ID for customer onboarding and linking existing customer records to Fayda.",
    contribution: "Built a TypeScript SDK supporting direct Fayda integration and an indirect integration through a wrapper provided by EthSwitch.",
    result: "Used for Dashen onboarding and across mobile, web-link, and in-branch customer-linking channels; later reused for Ethiopay onboarding in QA.",
    tags: ["TypeScript", "SDK Design", "Fayda"],
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
  const activeSectionLabel =
    navItems.find(([id]) => id === activeSection)?.[1] ?? "About";

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
        setActiveSection(navItems[navItems.length - 1][0]);
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
          <a className="identity" href="#about" aria-label="Nahom Gizaw, about section">
            <h1>Nahom Gizaw</h1>
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
        <div className="mobile-section-indicator" aria-hidden="true">
          <span>{activeSectionLabel}</span>
        </div>
        <section id="about" className="about-section" aria-labelledby="about-title">
          <SectionHeading id="about-title">About</SectionHeading>
          <div className="prose">
            <p>I&apos;m a backend engineer focused on building reliable services and distributed systems.</p>
            <p>My recent work has included digital-wallet backends, customer onboarding, and event-driven services. I&apos;ve worked on problems involving duplicate requests, concurrent updates, downstream backpressure, and interrupted operations where mistakes can affect balances or customer data.</p>
            <p>I work primarily with TypeScript and Go. I value clear service boundaries, domain-driven design, automated testing, and maintainable systems. My work has included executable acceptance tests, contract testing, mutation testing, and continuous-delivery practices.</p>
            <p>I&apos;m also interested in how AI-assisted development can increase delivery speed without weakening engineering judgment. I use agents within a disciplined workflow built around clear requirements, small increments, reviewable changes, and continuous feedback.</p>
            <p>Outside of engineering, I spend time studying depth psychology, particularly the work of <JungWordAssociation />. I value inner work as a practice of reflection: noticing patterns, making meaning, and staying curious about complexity in people and in myself. I return to these ideas because they encourage a more deliberate relationship with work, relationships, and responsibility.</p>
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
