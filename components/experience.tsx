export function Experience() {
  const companies: Company[] = [
    {
      companyName: "Freelance",
      title: "Software Engineer",
      duration: "Nov 2022 - Present",
      tasks: [
        "Learned and applied new ways of building software",
        "Built open-source projects",
        "Applied for jobs on Upwork",
      ],
    },
    {
      companyName: "Sabbatical",
      title: "Learner",
      duration: "March 2022 - Nov 2022",
      tasks: [
        "Started the journey of self-realization",
        "Laid the seeds for a compelling philosophy of life",
        "Mastered techniques for effective learning",
      ],
    },
    {
      companyName: "CNET",
      title: "Programmer",
      duration: "May 2021 - March 2022",
      tasks: [
        "Met with clients and gathered their requirements",
        "Designed, developed and deployed numerous projects",
        "Developed libraries for different platforms",
        "Refactored legacy code",
        "Researched solutions to various problems",
      ],
    },
    {
      companyName: "Zeraf",
      title: "Programmer",
      duration: "February 2021 - April 2021",
      tasks: [
        "Researched various technology stacks and development processes",
        "Interviewed potential developers",
        "Designed and developed a landing page",
        "Developed a user story map for an MVP",
      ],
    },
    {
      companyName: "Minab",
      title: "Intern",
      duration: "March 2019 - September 2019",
      tasks: [
        "Developed functional and appealing web applications",
        "Participated in the entire application lifecycle, focusing on coding and debugging",
        "Collaborated with other team members and stakeholders",
      ],
    },
  ];
  const companyNames = companies.map((c) => c.companyName);

  return (
    <section id="experience" className="animated-in-section">
      <h1>Where I&#39; ve worked</h1>
      <div className="divider"></div>
      <div className="content">
        <div className="tabs">
          <div className="tab-pole">
            <div className="tab-pole-selector"></div>
          </div>
          {renderTabs(companyNames)}
        </div>
        {companies.map((company, i) => {
          return renderTabPanel(i + 1, company, i !== 0);
        })}
      </div>
    </section>
  );

  function renderTabPanel(
    id: number,
    companyDetail: Company,
    isHidden: boolean
  ) {
    return (
      <div
        role="tabpanel"
        aria-labelledby={`company${id}`}
        className="company-detail fade-enter"
        aria-hidden={isHidden}
        hidden={isHidden}
        key={id}
      >
        <h3>
          <span className="role">{companyDetail.title}</span>
          <span className="at">@</span>
          <span className="content-link">{companyDetail.companyName}</span>
        </h3>
        <p>{companyDetail.duration}</p>
        <ul>
          {companyDetail.tasks.map((t, i) => {
            return <li key={i}>{t}</li>;
          })}
        </ul>
      </div>
    );
  }

  function renderTabs(companyNames: string[]) {
    return (
      <div role="tablist" aria-label="Companies">
        {companyNames.map((name, i) => {
          return (
            <button
              role="tab"
              aria-selected="false"
              id={`company${i + 1}`}
              key={i}
            >
              {name}
            </button>
          );
        })}
      </div>
    );
  }
}

interface Company {
  companyName: string;
  title: string;
  duration: string;
  tasks: string[];
}
