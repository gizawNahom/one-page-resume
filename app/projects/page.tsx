import Image from "next/image";

export default function Page() {
  const styles = {
    main: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px 20px",
    },
  };

  return (
    <main style={styles.main}>
      <h1>Projects</h1>

      <Project />
    </main>
  );
}

export function Project() {
  return (
    <article className="project">
      <header className="project__header">
        <h1 className="green-text project__green-text">Featured Project</h1>
        <h2 className="project__title">Project name</h2>
      </header>
      <Image
        src="/imgs/face.jpg"
        alt="project image"
        width={1667}
        height={2048}
        className="project__image"
      />
      <p className="project__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi
        deserunt eaque modi veniam iure nisi voluptatibus voluptatem nobis
        debitis. Sed fugit repellat possimus ex ratione placeat sunt harum unde.
      </p>
      <footer className="project__footer">
        <ul className="project__tools">
          <li>VSCode</li>
          <li>React</li>
          <li>Express</li>
          <li>VSCode</li>
          <li>React</li>
          <li>Express</li>
          <li>VSCode</li>
        </ul>
        <div className="project__links">
          <a
            href="https://github.com/bchiang7/spotify-profile"
            aria-label="GitHub Link"
            rel="noopener noreferrer"
            target="_blank"
            className="project__link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="project__link-icon"
            >
              <title>GitHub</title>
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a
            href="https://spotify-profile.herokuapp.com/"
            aria-label="External Link"
            className="project__link"
            rel="noopener noreferrer"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="project__link-icon"
            >
              <title>External Link</title>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </footer>
    </article>
  );
}
