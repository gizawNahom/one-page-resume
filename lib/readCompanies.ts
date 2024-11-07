import fs from "fs/promises";
import path from "path";
import matter from "front-matter";

export interface Company {
  order: number;
  companyName: string;
  companyWebsite?: string;
  title: string;
  duration: string;
  tasks: string[];
}

type CompanyDTO = {
  attributes: {
    order: number;
    companyName: string;
    companyWebsite: string;
    title: string;
    duration: string;
    tasks: string[];
  };
  body: string;
};

export async function readCompanies(): Promise<Company[]> {
  const directory = "./content/companies";
  const markdownFiles = await readCompanyFiles(directory);
  const companies = await parseCompanies(directory);
  return sortCompanies(companies);

  async function readCompanyFiles(directory: string) {
    const files = await fs.readdir(directory);
    const markdownFiles = files.filter((file) => file.endsWith(".md"));
    return markdownFiles;
  }

  async function parseCompanies(directory: string): Promise<Company[]> {
    const companies: Company[] = [];
    for (const file of markdownFiles) {
      const parsed = parseCompany(await readFile(file));
      addToParsedCompanies(buildCompany(parsed));
    }
    return companies;

    async function readFile(file: string) {
      const filePath = path.join(directory, file);
      const fileContent = await fs.readFile(filePath, "utf-8");
      return fileContent;
    }

    function parseCompany(fileContent: string): CompanyDTO {
      return matter(fileContent);
    }

    function buildCompany(parsed: CompanyDTO): Company {
      return {
        order: parsed.attributes.order,
        companyName: parsed.attributes.companyName,
        companyWebsite: parsed.attributes.companyWebsite,
        title: parsed.attributes.title,
        duration: parsed.attributes.duration,
        tasks: parsed.attributes.tasks,
      };
    }

    function addToParsedCompanies(company: Company) {
      companies.push(company);
    }
  }

  function sortCompanies(companies: Company[]): Company[] {
    return companies.sort(
      (c1, c2) => (c2.order as number) - (c1.order as number)
    );
  }
}
