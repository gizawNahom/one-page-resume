import { Company } from "@/lib/readCompanies";

export function Experience({ companies }: { companies: Company[] }) {
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

  function renderTabPanel(id: number, company: Company, isHidden: boolean) {
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
          <span className="role">{company.title}</span>
          <span className="at">@</span>
          <a
            className="content-link"
            href={company.companyWebsite}
            target="_blank"
          >
            {company.companyName}
          </a>
        </h3>
        <p>{company.duration}</p>
        <ul>
          {company.tasks.map((t, i) => {
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
