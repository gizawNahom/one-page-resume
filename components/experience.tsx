export function Experience() {
  return (
    <section id="experience" className="animated-in-section">
      <h1>Where I&#39; ve worked</h1>
      <div className="divider"></div>
      <div className="content">
        <div className="tabs">
          <div className="tab-pole">
            <div className="tab-pole-selector"></div>
          </div>
          <div role="tablist" aria-label="Companies">
            <button role="tab" aria-selected="true" id="company1">
              Freelance
            </button>
            <button role="tab" aria-selected="false" id="company2">
              Sabbatical
            </button>
            <button role="tab" aria-selected="false" id="company3">
              CNET
            </button>
            <button role="tab" aria-selected="false" id="company4">
              Zeraf
            </button>
            <button role="tab" aria-selected="false" id="company5">
              Minab
            </button>
          </div>
        </div>
        <div
          role="tabpanel"
          aria-labelledby="company1"
          className="company-detail fade-enter"
          aria-hidden="false"
        >
          <h3>
            <span className="role">Software Engineer</span>
            <span className="at">@</span>
            <span className="content-link">Freelance</span>
          </h3>
          <p>Nov 2022 - Present</p>
          <ul>
            <li>Learned and applied new ways of building software;</li>
            <li>Built open-source projects</li>
            <li>Applied for jobs on Upwork.</li>
          </ul>
        </div>
        <div
          role="tabpanel"
          aria-labelledby="company2"
          className="company-detail fade-enter"
          aria-hidden="true"
          hidden
        >
          <h3>
            <span className="role">Learner</span>
            <span className="at">@</span>
            <span className="content-link">Sabbatical</span>
          </h3>
          <p>March 2022 - Nov 2022</p>
          <ul>
            <li>Started the journey of self-realization</li>
            <li>Laid the seeds for a compelling philosophy of life</li>
            <li>Mastered techniques for effective learning</li>
          </ul>
        </div>
        <div
          role="tabpanel"
          aria-labelledby="company3"
          className="company-detail fade-enter"
          aria-hidden="true"
          hidden
        >
          <h3>
            <span className="role">Programmer</span>
            <span className="at">@</span>
            <a className="content-link" href="https://cneterp.com/">
              CNET
            </a>
          </h3>
          <p>May 2021 - March 2022</p>
          <ul>
            <li>Met with clients and gathered their requirements</li>
            <li>Designed, developed and deployed numerous projects</li>
            <li>Developed libraries for different platforms</li>
            <li>Refactored legacy code</li>
            <li>Researched solutions to various problems</li>
          </ul>
        </div>
        <div
          role="tabpanel"
          aria-labelledby="company4"
          className="company-detail fade-enter"
          aria-hidden="true"
          hidden
        >
          <h3>
            <span className="role">Programmer</span>
            <span className="at">@</span>
            <a className="content-link" href="https://zeraftechnologies.com/">
              Zeraf
            </a>
          </h3>
          <p>February 2021 - April 2021</p>
          <ul>
            <li>
              Researched various technology stacks and development processes
            </li>
            <li>Interviewed potential developers</li>
            <li>Designed and developed a landing page</li>
            <li>Developed a user story map for an MVP</li>
          </ul>
        </div>

        <div
          role="tabpanel"
          aria-labelledby="company5"
          className="company-detail fade-enter"
          aria-hidden="true"
          hidden
        >
          <h3>
            <span className="role">Intern</span>
            <span className="at">@</span>
            <a className="content-link" href="https://www.minabtech.com/">
              Minab
            </a>
          </h3>
          <p>March 2019 - September 2019</p>
          <ul>
            <li>Developed functional and appealing web applications</li>
            <li>
              Participated in the entire application lifecycle, focusing on
              coding and debugging
            </li>
            <li>Collaborated with other team members and stakeholders</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
