import fs from "fs/promises";
import path from "path";
import matter from "front-matter";
import { marked, Tokens } from "marked";
export interface Project {
  name: string;
  description: string;
  tools: string[];
  githubLink?: string;
  externalLink?: string;
  cover: string;
}

type ProjectDTO = {
  attributes: {
    name: string;
    tools: string[];
    cover: string;
    github: string;
    external: string;
  };
  body: string;
};

export async function readProjects(): Promise<Project[]> {
  const directory = "./content/projects";
  const markdownFiles = await readProjectFiles(directory);
  return await parseProjects(directory);

  async function readProjectFiles(directory: string) {
    const files = await fs.readdir(directory);
    const markdownFiles = files.filter((file) => file.endsWith(".md"));
    return markdownFiles;
  }

  async function parseProjects(directory: string): Promise<Project[]> {
    const projects: Project[] = [];
    const converter = createHTMLConverter();
    for (const file of markdownFiles) {
      const parsed = parseProject(await readFile(file));
      const descHTML = await getDescriptionHTML(converter, parsed.body);
      addToParsedProjects(buildProject(parsed, descHTML));
    }
    return projects;

    async function readFile(file: string) {
      const filePath = path.join(directory, file);
      const fileContent = await fs.readFile(filePath, "utf-8");
      return fileContent;
    }

    function parseProject(fileContent: string): ProjectDTO {
      return matter(fileContent);
    }

    async function getDescriptionHTML(converter: typeof marked, body: string) {
      return await converter(body);
    }

    function buildProject(parsed: ProjectDTO, description: string) {
      return {
        name: parsed.attributes.name,
        description: description,
        tools: parsed.attributes.tools,
        cover: parsed.attributes.cover,
        githubLink: parsed.attributes.github,
        externalLink: parsed.attributes.external,
      };
    }

    function addToParsedProjects(project: Project) {
      projects.push(project);
    }
  }
}

function createHTMLConverter() {
  const renderer = {
    link({ href, text }: Tokens.Link) {
      return `                
      <a class="content-link" href="${href}">
        ${text}
      </a>
    `;
    },
  };
  marked.use({ renderer });
  return marked;
}
