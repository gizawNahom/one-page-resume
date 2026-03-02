import Link from "next/link";

export default function DigitalWalletCaseStudy() {
    return (
        <main className="case-study-container">
            <section className="content" style={{ marginTop: '0px', paddingTop: '100px' }}>
                <Link href="/" className="back-link action-link" style={{ display: 'inline-block', marginBottom: '2rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    ← Back to Home
                </Link>

                <h1 className="big-heading" style={{ fontSize: 'clamp(30px, 5vw, 50px)', marginBottom: '1rem' }}>
                    Digital Wallet — Transactions & Ledger
                </h1>
                <p className="green-text" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Backend Architecture & Financial Systems
                </p>

                <div className="divider" style={{ marginBottom: '3rem' }}></div>

                {/* Introduction */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--fc-normal-text-color)', marginBottom: '1rem' }}>Context</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                        A high-volume digital wallet system serving significantly large user base, built to handle core P2P transfers, merchant payments, and bank integrations.
                        The system required critical reliability guarantees: zero data loss, exact-once processing, and auditability.
                    </p>
                </div>

                {/* Role & Responsibility */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--fc-normal-text-color)', marginBottom: '1rem' }}>Role & Ownership</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        As the <strong>Senior Backend Engineer</strong>, I owned the core transaction engine. My scope included the ledger database design, the money movement state machine, and ensuring system correctness under load.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--c-accent)', marginRight: '10px' }}>▹</span>
                            <span>Designed an append-only double-entry ledger for auditability.</span>
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--c-accent)', marginRight: '10px' }}>▹</span>
                            <span>Implemented idempotent APIs to safely handle network retries.</span>
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--c-accent)', marginRight: '10px' }}>▹</span>
                            <span>Handled concurrency for &quot;hot wallets&quot; using pessimistic locking.</span>
                        </li>
                    </ul>
                </div>

                {/* Deep Dive 1: Ledger */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--fc-normal-text-color)', marginBottom: '1rem' }}>Architecture Detail: The Immutable Ledger</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        We initially started with a simple &quot;current balance&quot; column. However, debugging discrepancies became impossible.
                        I refactored this into an <strong>Event-Sourced Ledger</strong> pattern.
                    </p>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        Instead of updating a balance, every transaction inserts two rows (Debit + Credit) into an immutable <code>Journal</code> table.
                        The user&#39;s balance is a derived view (sum of all credits - sum of all debits).
                    </p>
                    <div style={{ background: 'var(--c-secondary)', padding: '1.5rem', borderRadius: '5px', borderLeft: '3px solid var(--c-accent)' }}>
                        <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--fc-light-text-color)' }}>
                            &quot;This shift allowed us to replay history to prove the correctness of any account balance at any point in time. It turned debugging from &#39;guesswork&#39; into &#39;accounting&#39;.&quot;
                        </p>
                    </div>
                </div>

                {/* Deep Dive 2: Idempotency */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--fc-normal-text-color)', marginBottom: '1rem' }}>Handling Distributed Failures: Idempotency</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        In a distributed network, a timeout doesn&#39;t mean failure—it means &quot;unknown state&quot;. If a client retries a transfer after a timeout, we risk double-spending.
                    </p>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        I implemented an <strong>Idempotency Key</strong> strategy.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--c-accent)', marginRight: '10px' }}>1.</span>
                            <span>Client sends a unique `Idempotency-Key` header with every request.</span>
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--c-accent)', marginRight: '10px' }}>2.</span>
                            <span>Middleware checks a highly-available key store (Redis + DB) before processing.</span>
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--c-accent)', marginRight: '10px' }}>3.</span>
                            <span>If the key exists, return the <strong>stored result</strong> of the previous execution immediately. Do not execute logic.</span>
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--c-accent)', marginRight: '10px' }}>4.</span>
                            <span>If new, execute transaction atomically and store result.</span>
                        </li>
                    </ul>
                </div>

                {/* Technical Tradeoffs */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--fc-normal-text-color)', marginBottom: '1rem' }}>Constraints & Tradeoffs</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        <strong>Throughput vs. Safety:</strong> We chose safety. We used <code>SELECT FOR UPDATE</code> (Pessimistic Locking) on database rows during transaction processing.
                        This serializes access to a single wallet, which lowers throughput for &quot;hot wallets&quot; (like a merchant receiving 100 payments/sec), but guarantees we never encounter a race condition where a balance goes negative.
                    </p>
                </div>

                {/* Lessons */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--fc-normal-text-color)', marginBottom: '1rem' }}>What I Learned</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                        Building financial systems taught me that <strong>invariants</strong> are more important than features.
                        Code that &quot;mostly works&quot; is broken in fintech. I learned to think in terms of failure states: &quot;What happens if the DB commits but the response fails?&quot; rather than just the happy path.
                    </p>
                </div>

                <Link href="/" className="action-link" style={{ marginTop: '2rem' }}>
                    ← Back to Portfolio
                </Link>
            </section>
        </main>
    );
}
