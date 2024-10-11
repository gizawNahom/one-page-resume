import { Project as Proj, readProjects } from "@/lib/readProjects";
import Image from "next/image";
import { ReactNode } from "react";

export default async function Page() {
  const styles = {
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px 20px",
    },
  };
  const projects = await readProjects("./content/projects");

  return (
    <main style={styles.main}>
      <h1>Projects</h1>

      {projects.map((project, i) => {
        return <Project key={i} project={project} />;
      })}
    </main>
  );
}

export function Project({
  project: { name, description, tools, cover, githubLink, externalLink },
}: {
  project: Proj;
}) {
  return (
    <article className="project">
      <div className="project__content">
        <header className="project__header">
          <h1 className="green-text project__green-text">Featured Project</h1>
          <h2 className="project__title">{name}</h2>
        </header>
        <div
          className="project__description"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <footer className="project__footer">
          <ul className="project__tools">
            {tools.map((tool, i) => {
              return <li key={i}>{tool}</li>;
            })}
          </ul>
          <div className="project__links">
            {githubLink && renderGithubLink(githubLink)}
            {externalLink && renderExternalLink(externalLink)}
          </div>
        </footer>
      </div>
      <div className="project__image-container">
        <Image
          src={cover}
          alt="project image"
          width={1667}
          height={2048}
          className="project__image"
        />
      </div>
    </article>
  );

  function renderExternalLink(externalLink: string): ReactNode {
    return (
      <ProjectLink href={externalLink} label="External Link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="project__link-icon"
        >
          <title>External Link</title>
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </ProjectLink>
    );
  }

  function renderGithubLink(href: string) {
    return (
      <ProjectLink href={href} label="GitHub Link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="project__link-icon"
        >
          <title>GitHub</title>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      </ProjectLink>
    );
  }
}

function ProjectLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      rel="noopener noreferrer"
      target="_blank"
      className="project__link"
    >
      {children}
    </a>
  );
}
