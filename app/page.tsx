import { ReadMoreButton } from "@/components/readMoreButton";
import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { Modal } from "@/components/modal";
import Image from "next/image";
import { SplashScreen } from "@/components/splashScreen";
import { Experience } from "@/components/experience";
import { LandingEffects } from "@/components/landingEffects";
import { Company, readCompanies } from "@/lib/readCompanies";
import { ReactNode } from "react";
import Link from "next/link";

const IS_UPWORK = process.env.IS_UPWORK;

export default async function Home() {
  const companies: Company[] = await readCompanies();
  const email = "nahomgizaw4@gmail.com";
  const upworkLink = "https://www.linkedin.com/in/nahom-gizaw-7ab824311/";

  return (
    <SplashScreen>
      <>
        <LandingEffects />
        <Header>{renderHeaderContent()}</Header>
        <Main>{renderMainContent()}</Main>
        {!IS_UPWORK && (
          <aside className="side-email">
            <a className="side-email__text" href={`mailto:${email}`}>
              {email}
            </a>
          </aside>
        )}
        <Footer />
      </>
    </SplashScreen>
  );

  function renderHeaderContent() {
    return (
      <nav className="header__nav">
        {renderLogo()}
        <ul className="header__menu-items">{renderNavItems()}</ul>
        <Modal>{renderNavItems()}</Modal>
      </nav>
    );
  }

  function renderLogo() {
    return (
      <div id="logo" className="logo fade-down">
        {`{`}
        <span className="logo__text">N</span>
        {`}`}
      </div>
    );
  }

  function renderNavItems() {
    return (
      <>
        <li className="fade-down header__menu-item">
          <a className="link" href="#about">
            About
          </a>
        </li>
        <li className="fade-down header__menu-item">
          <a className="link" href="#experience">
            Experience
          </a>
        </li>
        <li className="fade-down header__menu-item">
          <a className="link" href="#case-studies">
            Case Studies
          </a>
        </li>
        <li className="fade-down header__menu-item">
          <a className="link" href="#contact">
            Contact
          </a>
        </li>
      </>
    );
  }

  function renderMainContent() {
    return (
      <>
        {renderHeroSection()}
        {renderAboutSection()}
        <Experience companies={companies} />
        {renderCaseStudiesSection()}
        {renderContactSection()}
      </>
    );
  }

  function renderHeroSection() {
    return (
      <section id="hero" className="hero">
        <div>
          <h1 className="fade-up green-text hero__green-text">
            Hi, my name is
          </h1>
        </div>
        <h3 className="big-heading fade-up hero__primary-text">Nahom Gizaw.</h3>
        <h3 className="big-heading fade-up hero__secondary-text">
          Senior Software Engineer focused on backend systems.
        </h3>
        <p className="hero__text fade-up">
          I work on transaction processing, ledger correctness, and onboarding services in production systems. I build empirically-scoped, high-quality software on time and within budget. I am currently working at{" "}
          <a
            href="https://www.eaglelionsystems.com/"
            className="content-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            EagleLion
          </a>
          .
        </p>
        <div className="fade-up hero__cta-container">
          <Link
            className="action-link hero__action-link"
            href="/case-studies/digital-wallet"
            style={{ fontSize: '0.9rem' }}
          >
            Digital Wallet — Transactions & Ledger
          </Link>
          <Link
            className="action-link hero__action-link"
            href="/case-studies/dashen-superapp"
            style={{ fontSize: '0.9rem' }}
          >
            Dashen SuperApp — Digital Onboarding
          </Link>
        </div>
      </section>
    );
  }

  function renderAboutSection() {
    return (
      <section
        id="about"
        className="animated-in-section"
        data-testid="aboutSection"
      >
        <h1>Engineering Philosophy</h1>
        <div className="divider"></div>
        <div className="content">
          <div>
            <p>
              I don&#39;t just write code; I design systems for correctness and maintainability.
              My approach is grounded in <strong>Extreme Programming (XP)</strong> practices.
            </p>
            <p>
              I am a strong advocate for <strong>Test Driven Development (TDD)</strong> because it ensures that every line of code has a purpose and a guarantee.
              I value <strong>Pair Programming</strong> for its ability to diffuse knowledge across a team and elevate code quality in real-time.
            </p>
            <p>
              In production, I care about <strong>observability</strong>, <strong>idempotency</strong>, and <strong>failure recovery</strong>.
              I build software that assumes the network will fail and the database will timeout—and handles it gracefully.
            </p>
          </div>
          <div id="profile-picture">
            <figure>
              <Image
                src="/imgs/face.jpg"
                alt="profile image"
                width={1667}
                height={2048}
              />
            </figure>
          </div>
        </div>
      </section>
    );
  }

  function renderCaseStudiesSection() {
    return (
      <section id="case-studies" className="animated-in-section">
        <h1>Selected Case Studies</h1>
        <div className="divider"></div>
        <div className="content" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

          {/* Case Study 1 */}
          <div className="case-study-block">
            <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '1rem' }}>Digital Wallet — Transactions & Ledger</h2>
            <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
              Backend ownership of transaction execution, ledger modeling, idempotency, and concurrency handling for a high-volume financial system.
            </p>
            <Link className="action-link" href="/case-studies/digital-wallet">
              Read Case Study
            </Link>
          </div>

          {/* Case Study 2 */}
          <div className="case-study-block">
            <h2 style={{ color: 'var(--green)', fontSize: '1.5rem', marginBottom: '1rem' }}>Dashen SuperApp — Onboarding & Security</h2>
            <p style={{ marginBottom: '1.5rem', opacity: 0.8 }}>
              Owned backend onboarding orchestration and fraud prevention systems, integrating with telecom providers for identity verification and account security.
            </p>
            <Link className="action-link" href="/case-studies/dashen-superapp">
              Read Case Study
            </Link>
          </div>

        </div>
      </section>
    );
  }

  function renderContactSection() {
    const contactLink = IS_UPWORK ? upworkLink : `mailto:${email}`;

    return (
      <section id="contact" className="contact animated-in-section">
        <h1 className="green-text contact__green-text">What&#39;s Next?</h1>
        <h1 className="contact__title">Reach Out</h1>
        <p className="contact__text">
          Whether you’re interested in collaborating on a project, discussing a
          new idea, or simply saying hello, I’d love to connect!
        </p>
        <a className="action-link contact__action-link" href={contactLink}>
          Say Hello
        </a>
      </section>
    );
  }
}

function Footer() {
  return (
    <footer id="credits">
      {!IS_UPWORK && <SocialMediaLinks />}
      <div className="credits">
        <a
          href="https://github.com/gizawNahom/one-page-resume"
          rel="noopener noreferrer"
          target="_blank"
          className="link credits__link"
        >
          <p className="credits__text">
            Inspired by Brittany Chiang & Built by Nahom Gizaw
          </p>
        </a>
      </div>
    </footer>
  );
}

function SocialMediaLinks() {
  return (
    <div className="socialMedia-links">
      <ul className="socialMedia-links__list">
        <li>
          <SocialMediaLink
            link={"https://gitlab.com/nahom.derese"}
            label="GitLab"
            linkIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="socialMedia-links__icon"
              >
                <title>GitLab</title>
                <path d="M23.955 13.587l-1.4-4.3-2.8-8.6a.74.74 0 0 0-1.41 0l-2.8 8.6H8.455l-2.8-8.6a.74.74 0 0 0-1.41 0l-2.8 8.6-1.4 4.3a.74.74 0 0 0 .27.82l10.87 7.9a.74.74 0 0 0 .87 0l10.87-7.9a.74.74 0 0 0 .27-.82z" />
              </svg>
            }
          />
        </li>
        <li>
          <SocialMediaLink
            link={"https://github.com/gizawNahom"}
            label="GitHub"
            linkIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="socialMedia-links__icon"
              >
                <title>GitHub</title>
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            }
          />
        </li>
        <li>
          <SocialMediaLink
            link={"https://www.linkedin.com/in/nahom-gizaw-7ab824311/"}
            label="LinkedIn"
            linkIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="socialMedia-links__icon"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            }
          />
        </li>
        <li>
          <SocialMediaLink
            link={"https://stackoverflow.com/users/23258247/nahom"}
            label="StackOverflow"
            linkIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="socialMedia-links__icon"
              >
                <title>stackoverflow</title>
                <path d="M17.36,20.2V14.82h1.79V22H3V14.82H4.8V20.2H17.36M6.77,14.32l.37-1.76,8.79,1.85-.37,1.76L6.77,14.32m1.16-4.21L8.69,8.5l8.14,3.78-.76,1.62L7.93,10.11m2.26-4,1.15-1.38,6.9,5.76-1.15,1.37-6.9-5.75m4.45-4.25L20,9.08l-1.44,1.07L13.2,2.94l1.44-1.07m-8,16.54v-1.8h9v1.8Z" />
              </svg>
            }
          />
        </li>
      </ul>
    </div>
  );
}

function SocialMediaLink({
  link,
  label,
  linkIcon,
}: {
  link: string;
  label: string;
  linkIcon: ReactNode;
}) {
  return (
    <a
      href={link}
      className="socialMedia-links__link"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {linkIcon}
    </a>
  );
}
