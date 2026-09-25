"use client";

import { useEffect, useState } from "react";
import { JungWordAssociation } from "./jung-word-association";

type Experience = {
  dates: string;
  role: string;
  company: string;
  website?: string;
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
    website: "https://www.eaglelionsystems.com/",
    highlights: [
      "Owned TypeScript/Express transaction and ledger capabilities for a multi-tenant digital wallet, using idempotency and concurrency controls to avoid duplicate settlement and protect balance integrity when operations were retried or interrupted.",
      "Built production backend capabilities for digital onboarding in Dashen Bank's mobile app, allowing customers to open bank accounts remotely. The SuperApp served more than 1.5 million users.",
      "Built a reusable TypeScript SDK for Fayda, Ethiopia's national digital ID, supporting integration both directly and indirectly through a wrapper provided by EthSwitch, Ethiopia's national payment switch. It was used for Dashen onboarding and for linking existing customers to Fayda across mobile, web-link, and in-branch channels, and was later reused for Ethiopay onboarding in QA.",
      "Built a shared Kafka library for Ethiopay, a multi-tenant digital-wallet platform, standardizing schema registration, dead-letter handling, retry backoff, offset management, and observability across its microservices.",
      "Delivered a separate integration with Ethio telecom for verifying customer SIM status and whether a SIM had been swapped.",
      "Implemented the Temporal Saga orchestration coordinating sender and receiver services for cross-institution wallet transfers through EthSwitch; the feature reached QA.",
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
    website: "https://cneterp.com/",
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
    website: "https://www.minabtech.com/",
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

// Icon paths from Simple Icons (CC0), 24x24 viewBox.
const links = [
  ["GitHub", "https://github.com/gizawNahom", "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"],
  ["GitLab", "https://gitlab.com/nahom.derese", "m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"],
  ["LinkedIn", "https://www.linkedin.com/in/nahom-gizaw-7ab824311/", "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"],
  ["Stack Overflow", "https://stackoverflow.com/users/23258247/nahom", "M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"],
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
        <ul className="profile-links" aria-label="Professional profiles">
          {links.map(([label, href, icon]) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`} title={label}>
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={icon} /></svg>
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <div className="reading-column">
        <div className="mobile-section-indicator" aria-hidden="true">
          <span>{activeSectionLabel}</span>
        </div>
        <section id="about" className="about-section" aria-labelledby="about-title">
          <SectionHeading id="about-title">About</SectionHeading>
          <div className="prose">
            <p>Hi there! I&apos;m Nahom, a backend engineer. I care about building systems that are reliable, maintainable, and observable, so you can trust them, change them, and see what&apos;s happening inside them. I&apos;m always looking for ways to deliver better software, faster.</p>
            <p>Currently, I&apos;m building <strong>Ledger Ops</strong>, a ledger that works out of the box for anyone who needs one in their app. It grows out of my work on digital wallets and bank onboarding, where keeping balances correct mattered most. I use AI throughout the development lifecycle, backed by layers of feedback that keep quality high as speed goes up.</p>
            <p>Outside of engineering, I study depth psychology, especially the work of <JungWordAssociation />. I treat inner work as a practice of noticing patterns and staying curious about complexity in people and in myself.</p>
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

function ExperienceEntry({ dates, role, company, website, highlights, tags }: Experience) {
  const title = <>{role} <span aria-hidden="true">&middot;</span><span className="sr-only"> at</span> <span className="entry-company">{company}</span></>;

  return <article className={website ? "experience-entry is-linked" : "experience-entry"}>
    <p className="eyebrow">{dates}</p>
    <div>
      <h3>
        {website
          ? <a className="entry-link" href={website} target="_blank" rel="noopener noreferrer" aria-label={`${role} at ${company} (opens in a new tab)`}>
            <span className="entry-link-area" aria-hidden="true" />
            {title}<span className="external-mark" aria-hidden="true">&#8599;</span>
          </a>
          : title}
      </h3>
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
