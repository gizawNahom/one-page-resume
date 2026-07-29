import Link from "next/link";

export default function DigitalWalletCaseStudy() {
  return (
    <main className="case-study-page">
      <Link className="back-link" href="/#systems">Back to selected systems</Link>
      <h1>Digital Wallet Transaction Capabilities</h1>
      <p className="case-study-summary">A retained, concise case-study page grounded only in the approved master resume.</p>
      <article>
        <h2>Context</h2>
        <p>At Eagle Lion System Technology, Nahom worked on transaction and ledger capabilities for a multi-tenant digital wallet.</p>
      </article>
      <article>
        <h2>Contribution</h2>
        <p>He owned TypeScript/Express capabilities that enforced idempotent settlement, concurrency safety, balance integrity, and deterministic recovery across retries and partial failures.</p>
      </article>
      <article>
        <h2>Scope note</h2>
        <p>This retained page intentionally stays within the scope of the approved master resume.</p>
      </article>
    </main>
  );
}
