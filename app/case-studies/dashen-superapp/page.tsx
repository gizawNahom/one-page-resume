import Link from "next/link";

export default function DashenSuperAppCaseStudy() {
    return (
        <main className="case-study-container">
            <section className="content" style={{ marginTop: '0px', paddingTop: '100px' }}>
                <Link href="/" className="back-link action-link" style={{ display: 'inline-block', marginBottom: '2rem', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    ← Back to Home
                </Link>

                <h1 className="big-heading" style={{ fontSize: 'clamp(30px, 5vw, 50px)', marginBottom: '1rem' }}>
                    Dashen SuperApp — Onboarding & Security
                </h1>
                <p className="green-text" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                    Two Backend Systems: Orchestration & Fraud Prevention
                </p>

                <div className="divider" style={{ marginBottom: '3rem' }}></div>

                {/* Introduction */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--fc-normal-text-color)', marginBottom: '1rem' }}>Context</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                        Dashen Bank needed to transition from physical branch onboarding to a fully digital flow.
                        The challenge was to orchestrate multiple external systems (Telecom, National ID, Core Banking) into a seamless, low-latency user experience.
                    </p>
                </div>

                {/* Role & Responsibility */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--fc-normal-text-color)', marginBottom: '1rem' }}>Role & Ownership</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        I owned two critical backend systems in the Dashen SuperApp ecosystem:
                    </p>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        <strong>1. Onboarding Service:</strong> Orchestrated identity verification flows across 5+ external systems (National ID, Core Banking).
                    </p>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        <strong>2. SIM Swap Detection Service:</strong> Built fraud prevention system that monitors for unauthorized SIM card changes and blocks compromised accounts.
                    </p>
                </div>

                {/* Deep Dive 1: Orchestration */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--fc-normal-text-color)', marginBottom: '1rem' }}>System 1: Onboarding — The Anti-Corruption Layer</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        The external systems we integrated with used older protocols (SOAP, XML) and had inconsistent uptime.
                        Directly exposing these to our modern mobile app would have been a disaster.
                    </p>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        I built an <strong>Anti-Corruption Layer (ACL)</strong>.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--c-accent)', marginRight: '10px' }}>1.</span>
                            <span><strong>Async State Machine:</strong> Dashen&#39;s account creation was slow and eventually consistent. I built a worker loop that polled our DB for pending accounts, created them in Dashen&#39;s system, verified creation, and updated state. The loop had backpressure control to respect Dashen&#39;s connection limits.</span>
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--c-accent)', marginRight: '10px' }}>2.</span>
                            <span><strong>Circuit Breaking:</strong> When external services failed, I used circuit breakers to detect the outage quickly and return meaningful errors to users instead of letting requests hang indefinitely.</span>
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--c-accent)', marginRight: '10px' }}>3.</span>
                            <span><strong>Translation:</strong> Converted gnarly XML responses into clean domain objects before they entered our system.</span>
                        </li>
                    </ul>
                </div>

                {/* Deep Dive 2: SIM Swap Detection */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--fc-normal-text-color)', marginBottom: '1rem' }}>System 2: SIM Swap Detection — Fraud Prevention</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        Mobile banking accounts are vulnerable to SIM swap fraud: attackers hijack a victim&#39;s phone number to intercept SMS OTPs and drain accounts.
                    </p>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        I built a backend service that verifies SIM card ownership on every request.
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--c-accent)', marginRight: '10px' }}>1.</span>
                            <span><strong>Real-Time Verification:</strong> On every critical request (login, transaction), the service fetches current SIM metadata from Ethiotelecom&#39;s API—ownership change timestamp, status (active/blocked), and other fields.</span>
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--c-accent)', marginRight: '10px' }}>2.</span>
                            <span><strong>Multi-Field Comparison:</strong> The service compares these fields against what was stored during onboarding. Any discrepancy (ownership change, status mismatch) flags a potential compromise.</span>
                        </li>
                        <li style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--c-accent)', marginRight: '10px' }}>3.</span>
                            <span><strong>Automatic Account Blocking:</strong> On mismatch, the account is immediately blocked. The user must go through identity re-verification before regaining access.</span>
                        </li>
                    </ul>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginTop: '1rem' }}>
                        The challenge: this had to be <strong>fast</strong> (can&#39;t add seconds to every login) and <strong>resilient</strong> (can&#39;t fail all requests when Ethiotelecom&#39;s API is down). I implemented caching and circuit breaking to balance security with availability.
                    </p>
                </div>

                {/* Technical Tradeoffs */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--fc-normal-text-color)', marginBottom: '1rem' }}>Constraints & Tradeoffs</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        <strong>Sync vs. Async:</strong> Ideally, onboarding is synchronous. But external checks could take 10-30 seconds.
                        We couldn&#39;t keep the HTTP connection open that long.
                    </p>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem', marginBottom: '1rem' }}>
                        We moved to a <strong>Polling</strong> model for the heavy checks. The client initiates a check, gets a `check_id`, and polls for status.
                        This kept the API responsive and prevented timeout errors on mobile devices with poor connectivity.
                    </p>
                </div>

                {/* Lessons */}
                <div style={{ marginBottom: '4rem' }}>
                    <h2 style={{ color: 'var(--fc-normal-text-color)', marginBottom: '1rem' }}>What I Learned</h2>
                    <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
                        You cannot trust external dependencies. You must defensively program against them (timeouts, circuit breakers, retries).
                        Also, <strong>domain modeling</strong> pays off—by standardizing our internal &quot;User&quot; model early, we could swap out identity providers later without rewriting the app.
                    </p>
                </div>

                <Link href="/" className="action-link" style={{ marginTop: '2rem' }}>
                    ← Back to Portfolio
                </Link>
            </section>
        </main>
    );
}
