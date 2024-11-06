import { ReadMoreButton } from "@/components/readMoreButton";
import { Header } from "@/components/header";
import { Main } from "@/components/main";
import { Modal } from "@/components/modal";
import Image from "next/image";
import { SplashScreen } from "@/components/splashScreen";
import { readProjects } from "@/lib/readProjects";
import { Project } from "@/components/project";
import { Project as Pj } from "@/lib/readProjects";

export default async function Home() {
  // const projects = await readProjects();
  const projects: Pj[] = [];

  return (
    <SplashScreen>
      <>
        <Header>{renderHeaderContent()}</Header>
        <Main>{renderMainContent()}</Main>
        <footer id="credits">
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
        {renderExperienceSection()}
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
          freelancing on Upwork.
        </p>
        <button className="fade-up action-link hero__action-link">
          Resume
        </button>
      </section>
    );
  }

  function renderAboutSection() {
    return (
      <section id="about" className="animated-in-section">
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

  function renderExperienceSection() {
    return (
      <section id="experience" className="animated-in-section">
        <h1>Where I&#39; ve worked</h1>
        <div className="divider"></div>
        <div className="content">
          <div className="tabs">
            <div className="tab-pole">
              <div className="tab-pole-selector"></div>
            </div>
            <div role="tablist" aria-label="Companies">
              <button role="tab" aria-selected="true" id="company1">
                Freelance
              </button>
              <button role="tab" aria-selected="false" id="company2">
                Sabbatical
              </button>
              <button role="tab" aria-selected="false" id="company3">
                CNET
              </button>
              <button role="tab" aria-selected="false" id="company4">
                Zeraf
              </button>
              <button role="tab" aria-selected="false" id="company5">
                Minab
              </button>
            </div>
          </div>
          <div
            role="tabpanel"
            aria-labelledby="company1"
            className="company-detail fade-enter"
            aria-hidden="false"
          >
            <h3>
              <span className="role">Software Engineer</span>
              <span className="at">@</span>
              <span className="content-link">Freelance</span>
            </h3>
            <p>Nov 2022 - Present</p>
            <ul>
              <li>Learned and applied new ways of building software;</li>
              <li>Built open-source projects</li>
              <li>Applied for jobs on Upwork.</li>
            </ul>
          </div>
          <div
            role="tabpanel"
            aria-labelledby="company2"
            className="company-detail fade-enter"
            aria-hidden="true"
            hidden
          >
            <h3>
              <span className="role">Learner</span>
              <span className="at">@</span>
              <span className="content-link">Sabbatical</span>
            </h3>
            <p>March 2022 - Nov 2022</p>
            <ul>
              <li>Started the journey of self-realization</li>
              <li>Laid the seeds for a compelling philosophy of life</li>
              <li>Mastered techniques for effective learning</li>
            </ul>
          </div>
          <div
            role="tabpanel"
            aria-labelledby="company3"
            className="company-detail fade-enter"
            aria-hidden="true"
            hidden
          >
            <h3>
              <span className="role">Programmer</span>
              <span className="at">@</span>
              <a className="content-link" href="https://cneterp.com/">
                CNET
              </a>
            </h3>
            <p>May 2021 - March 2022</p>
            <ul>
              <li>Met with clients and gathered their requirements</li>
              <li>Designed, developed and deployed numerous projects</li>
              <li>Developed libraries for different platforms</li>
              <li>Refactored legacy code</li>
              <li>Researched solutions to various problems</li>
            </ul>
          </div>
          <div
            role="tabpanel"
            aria-labelledby="company4"
            className="company-detail fade-enter"
            aria-hidden="true"
            hidden
          >
            <h3>
              <span className="role">Programmer</span>
              <span className="at">@</span>
              <a className="content-link" href="https://zeraftechnologies.com/">
                Zeraf
              </a>
            </h3>
            <p>February 2021 - April 2021</p>
            <ul>
              <li>
                Researched various technology stacks and development processes
              </li>
              <li>Interviewed potential developers</li>
              <li>Designed and developed a landing page</li>
              <li>Developed a user story map for an MVP</li>
            </ul>
          </div>

          <div
            role="tabpanel"
            aria-labelledby="company5"
            className="company-detail fade-enter"
            aria-hidden="true"
            hidden
          >
            <h3>
              <span className="role">Intern</span>
              <span className="at">@</span>
              <a className="content-link" href="https://www.minabtech.com/">
                Minab
              </a>
            </h3>
            <p>March 2019 - September 2019</p>
            <ul>
              <li>Developed functional and appealing web applications</li>
              <li>
                Participated in the entire application lifecycle, focusing on
                coding and debugging
              </li>
              <li>Collaborated with other team members and stakeholders</li>
            </ul>
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
            // return <Project key={i} project={project} isReverse={i % 2 == 0} />;
            // return <Project1 key={i} project={project} isReverse={false} />;
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
        <a className="action-link contact__action-link">Say Hello</a>
      </section>
    );
  }
}
