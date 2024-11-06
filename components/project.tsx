import { Project as Proj } from "@/lib/readProjects";
import Image from "next/image";
import { ReactNode } from "react";

export function Project({
  project: { name, description, tools, cover, githubLink, externalLink },
  isReverse = false,
}: {
  project: Proj;
  isReverse: boolean;
}) {
  const projectLink = getProjectLink({ githubLink, externalLink });

  return (
    <article className={`project1 ${isReverse && "project-right"}`}>
      <div
        className={`project__content1 ${isReverse && "project__content-right"}`}
      >
        <header className="project__header">
          <h1 className="green-text project__green-text">Featured Project</h1>
          <a className="project__title" href={projectLink} target="_blank">
            {name}
          </a>
        </header>
        <div
          className={`project__description ${
            isReverse && "project__description-right"
          }`}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
        <footer className="project__footer">
          <ul className="project__tools">
            {tools.map((tool, i) => {
              return <li key={i}>{tool}</li>;
            })}
          </ul>
          <div
            className={`project__links ${isReverse && "project__links-right"}`}
          >
            {githubLink && renderGithubLink(githubLink)}
            {externalLink && renderExternalLink(externalLink)}
          </div>
        </footer>
      </div>
      <div
        className={`project__image-container1 ${
          isReverse && "project__image-container-left"
        }`}
      >
        <a href={projectLink} target="_blank">
          <Image
            src={cover}
            alt="project image"
            width={1667}
            height={2048}
            className="project__image"
          />
        </a>
      </div>
    </article>
  );

  function getProjectLink(project: Partial<Proj>): string {
    return (project.externalLink || project.githubLink) as string;
  }

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
