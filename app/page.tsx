import { ReadMoreButton } from "@/components/readMoreButton";
import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { Modal } from "@/components/modal";
import Image from "next/image";
import { SplashScreen } from "@/components/splashScreen";
import { readProjects } from "@/lib/readProjects";
import { Project } from "@/components/project";
import { Experience } from "@/components/experience";
import { Company, readCompanies } from "@/lib/readCompanies";
import { ReactNode } from "react";

export default async function Home() {
  const projects = await readProjects();
  const companies: Company[] = await readCompanies();

  return (
    <SplashScreen>
      <>
        <Header>{renderHeaderContent()}</Header>
        <Main>{renderMainContent()}</Main>
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
          <a className="link" href="#work">
            Work
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
        {renderWorkSection()}
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
          I build for the web.
        </h3>
        <p className="hero__text fade-up">
          I am a software engineer who cares about building empirically-scoped,
          high-quality software on time and within budget. I am currently
          freelancing on{" "}
          <a
            href="https://www.upwork.com/freelancers/~011abe9054337668dc"
            className="content-link"
            target="_blank"
          >
            Upwork
          </a>
          .
        </p>
        <a
          className="fade-up action-link hero__action-link"
          href="https://www.upwork.com/freelancers/~011abe9054337668dc"
          target="_blank"
        >
          Check out my profile!
        </a>
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
        <h1>My Story</h1>
        <div className="divider"></div>
        <div className="content">
          <div>
            <p>
              Hi! My name is Nahom, and I am a software craftsman who builds for
              the web. I started programming at&nbsp;
              <a href="https://www.aait.edu.et/" className="content-link">
                AAIT
              </a>
              (Addis Ababa Institute of Technology)—where I studied software
              engineering—in one of the first courses I took.
            </p>
            <p>
              It was a&nbsp;
              <a
                href="https://pll.harvard.edu/course/cs50-introduction-computer-science"
                className="content-link"
              >
                CS50
              </a>
              -style course that covered the fundamental computer science
              concepts and skills needed to write a full-stack web app. It was
              overwhelming at the time, but in hindsight, it gave me the drive
              to explore my curiosity independently.
            </p>
            <p>
              In a subsequent course, I came across&nbsp;
              <a
                href="https://en.wikipedia.org/wiki/Extreme_programming"
                className="content-link"
              >
                Extreme Programming(XP)
              </a>
              . It had practices like&nbsp;
              <a
                href="https://en.wikipedia.org/wiki/Test-driven_development"
                className="content-link"
              >
                Test Driven Development(TDD)
              </a>
              &nbsp;and&nbsp;
              <a
                href="https://en.wikipedia.org/wiki/Pair_programming"
                className="content-link"
              >
                Pair Programming
              </a>
              &nbsp;that fascinated me. I scoured the internet for material and
              found mentors like&nbsp;
              <a
                href="https://en.wikipedia.org/wiki/Robert_C._Martin"
                className="content-link"
              >
                Robert C. Martin(Uncle Bob)
              </a>
              ,&nbsp;
              <a
                href="https://en.wikipedia.org/wiki/Martin_Fowler_(software_engineer)"
                className="content-link"
              >
                Martin Fowler
              </a>
              &nbsp;and&nbsp;
              <a
                href="https://www.amazon.com/stores/author/B001KDCO2I/about"
                className="content-link"
              >
                Eric Evans
              </a>
              .
            </p>
            <ReadMoreButton className="action-link">Read more</ReadMoreButton>
            <div className="more">
              <p>
                I learned a lot about the practices, teams and processes that
                make great software, especially from Uncle Bob. He spoke about
                the&nbsp;
                <a
                  href="https://blog.cleancoder.com/uncle-bob/2015/11/18/TheProgrammersOath.html"
                  className="content-link"
                >
                  programmer’s oath
                </a>
                , and I took it to heart. He is why I call myself a software
                craftsman: a professional striving for maximum quality,
                accountability and integrity.
              </p>
              <p>
                I started my career as an intern at a software company
                called&nbsp;
                <a href="https://www.minabtech.com/" className="content-link">
                  Minab
                </a>
                . At Minab, I designed and developed full-stack apps together
                with my teammates.
              </p>
              <p>
                After graduation, I worked, for a short time, at a small Fintech
                startup called&nbsp;
                <a
                  href="https://zeraftechnologies.com/"
                  className="content-link"
                >
                  Zeraf
                </a>
                , where I turned a vision into a workable User Story Map.
              </p>
              <p>
                I then joined&nbsp;
                <a href="https://cneterp.com/" className="content-link">
                  CNET
                </a>
                , the largest ERP software provider in Ethiopia, where I
                developed most of my skills. I engaged with clients to
                thoroughly understand their requirements, leading to the
                successful development and deployment of multiple projects.
              </p>
              <p>
                Working for CNET gave me practical knowledge of Pair
                Programming, TDD,&nbsp;
                <a
                  href="https://en.wikipedia.org/wiki/Software_design_pattern"
                  className="content-link"
                >
                  Design Patterns
                </a>
                &nbsp;and&nbsp;
                <a
                  href="https://en.wikipedia.org/wiki/SOLID"
                  className="content-link"
                >
                  SOLID
                </a>
                &nbsp;principles. It also enhanced my communication,
                collaboration and leadership skills.
              </p>
              <p>Here are some of the skills I’ve acquired over the years:</p>
              <ul>
                <li>.NET</li>
                <li>Node.js</li>
                <li>REST APIs</li>
                <li>MongoDB</li>
                <li>Docker</li>
                <li>CI/CD</li>
                <li>Vue</li>
                <li>Javascript(ES6+)</li>
                <li>C#</li>
                <li>Express.js</li>
              </ul>
            </div>
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

  function renderWorkSection() {
    return (
      <section id="work" className="animated-in-section">
        <h1>Some Things I&#39;ve Built</h1>
        <div className="divider"></div>
        <div className="content projects__content">
          {projects.map((project, i) => {
            return <Project key={i} project={project} isReverse={i % 2 == 0} />;
          })}
        </div>
      </section>
    );
  }

  function renderContactSection() {
    return (
      <section id="contact" className="contact animated-in-section">
        <h1 className="green-text contact__green-text">What&#39;s Next?</h1>
        <h1 className="contact__title">Reach Out</h1>
        <p className="contact__text">
          Whether you’re interested in collaborating on a project, discussing a
          new idea, or simply saying hello, I’d love to connect!
        </p>
        <a
          className="action-link contact__action-link"
          href="mailto:nahomgizaw4@gmail.com"
        >
          Say Hello
        </a>
      </section>
    );
  }
}

function Footer() {
  return (
    <footer id="credits">
      <SocialMediaLinks />
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
            link={"https://github.com/gizawNahom"}
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
  linkIcon,
}: {
  link: string;
  linkIcon: ReactNode;
}) {
  return (
    <a href={link} className="socialMedia-links__link" target="_blank">
      {linkIcon}
    </a>
  );
}
