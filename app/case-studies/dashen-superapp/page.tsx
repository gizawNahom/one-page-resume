import Link from "next/link";

export default function DashenSuperAppCaseStudy() {
  return (
    <main className="case-study-page">
      <Link className="back-link" href="/#systems">Back to selected systems</Link>
      <h1>Dashen Digital Onboarding</h1>
      <p className="case-study-summary">A retained, concise case-study page grounded only in the approved master resume.</p>
      <article>
        <h2>Context</h2>
        <p>At Eagle Lion System Technology, Nahom built production backend capabilities for Dashen SuperApp digital onboarding and account creation on a platform serving more than 1.5 million users.</p>
      </article>
      <article>
        <h2>Related identity systems</h2>
        <p>He also built a reusable TypeScript SDK supporting Fayda integration directly and through EthSwitch. It supported Dashen onboarding and mobile app, web-link, and in-branch harmonization channels, and was later reused for Ethiopay onboarding in QA.</p>
      </article>
      <article>
        <h2>Scope note</h2>
        <p>SIM-status and SIM-swap verification were delivered as a separate Ethio telecom integration. This retained page intentionally stays within the scope of the approved master resume.</p>
      </article>
    </main>
  );
}
