import fs from "fs/promises";
import path from "path";
import matter from "front-matter";
import { marked } from "marked";

export interface Project {
  name: string;
  description: string;
  tools: string[];
  githubLink?: string;
  externalLink?: string;
  cover: string;
}

export async function readProjects(directory: string): Promise<Project[]> {
  const markdownFiles = await readProjectFiles();
  return await parseProjects();

  async function readProjectFiles() {
    const files = await fs.readdir(directory);
    const markdownFiles = files.filter((file) => file.endsWith(".md"));
    return markdownFiles;
  }

  async function parseProjects(): Promise<Project[]> {
    const projects: Project[] = [];

    for (const file of markdownFiles) {
      const filePath = path.join(directory, file);
      const fileContent = await fs.readFile(filePath, "utf-8");
      const parsed = matter(fileContent) as {
        attributes: {
          name: string;
          tools: string[];
          cover: string;
          github: string;
          external: string;
        };
        body: string;
      };
      projects.push({
        name: parsed.attributes.name,
        description: await marked(parsed.body),
        tools: parsed.attributes.tools,
        cover: parsed.attributes.cover,
        githubLink: parsed.attributes.github,
        externalLink: parsed.attributes.external,
      });
    }

    return projects;
  }
}
