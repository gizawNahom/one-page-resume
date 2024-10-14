import { Project } from "@/components/project";
import { readProjects } from "@/lib/readProjects";

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
    <main style={styles.main as React.CSSProperties}>
      <h1>Projects</h1>

      {projects.map((project, i) => {
        return <Project key={i} project={project} />;
      })}
    </main>
  );
}
