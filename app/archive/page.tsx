import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { Spotlight } from "@/components/spotlight";

export const metadata: Metadata = {
  title: "Project Archive | Nahom Derese Gizaw",
  description: "A list of things I've built.",
};

type ArchivedProject = {
  year: number;
  title: string;
  tags: string[];
  repo: string;
};

const archivedProjects: ArchivedProject[] = [
  {
    year: 2026,
    title: "Bookmark CLI",
    tags: ["Go", "SQLite", "Cobra"],
    repo: "https://github.com/gizawNahom/bookmark-cli",
  },
  {
    year: 2026,
    title: "Gherkin Glow",
    tags: ["JavaScript", "VS Code API"],
    repo: "https://github.com/gizawNahom/gherkin-glow",
  },
  {
    year: 2024,
    title: "Twitter Clone",
    tags: ["TypeScript", "Next.js", "Apollo GraphQL", "Express", "Socket.IO", "Prisma", "PostgreSQL"],
    repo: "https://github.com/gizawNahom/twitter",
  },
  {
    year: 2024,
    title: "URL Shortener",
    tags: ["TypeScript", "Next.js", "Express", "MongoDB", "Pino"],
    repo: "https://github.com/gizawNahom/url-shortener",
  },
  {
    year: 2022,
    title: "Minesweeper",
    tags: ["JavaScript", "Jest"],
    repo: "https://github.com/gizawNahom/mine-sweeper",
  },
];

function ProjectLink({ project }: { project: ArchivedProject }) {
  return (
    <a className="archive-link" href={project.repo} target="_blank" rel="noopener noreferrer">
      {project.repo.replace(/^https:\/\//, "")}<Arrow direction="up-right" className="external-mark" />
      <span className="sr-only"> ({project.title}, opens in a new tab)</span>
    </a>
  );
}

export default function Archive() {
  return (
    <main className="archive-page">
      <Spotlight />
      <Link className="back-link" href="/#projects"><Arrow direction="left" className="back-arrow" />Nahom Gizaw</Link>
      <h1>All Projects</h1>
      <table className="archive-table">
        <thead>
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Project</th>
            <th scope="col" className="archive-tags-col">Built with</th>
            <th scope="col" className="archive-links-col">Link</th>
          </tr>
        </thead>
        <tbody>
          {archivedProjects.map((project) => (
            <tr key={project.title}>
              <td className="archive-year">{project.year}</td>
              <td className="archive-title">{project.title}</td>
              <td className="archive-tags-col">
                <ul className="archive-tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </td>
              <td className="archive-links-col">
                <ProjectLink project={project} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
