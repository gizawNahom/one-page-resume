import { Project1 } from "@/components/project";
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
  const projects = await readProjects();

  return (
    <main style={styles.main as React.CSSProperties}>
      <h1>Projects</h1>

      {projects.map((project, i) => {
        return <Project1 key={i} project={project} isReverse={false} />;
      })}
    </main>
  );
}
