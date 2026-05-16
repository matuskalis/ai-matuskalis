'use client';

import { useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = container.querySelectorAll('.fade-in');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function PageContent() {
  const containerRef = useFadeIn();

  return (
    <>
      <Navigation />
      <main ref={containerRef} className="w-full overflow-x-hidden">
        {/* Hero */}
        <section className="relative flex min-h-screen items-center px-6 pt-24 pb-20 lg:px-8">
          <div className="animate-drift pointer-events-none absolute top-1/4 -left-32 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[100px]" />
          <div className="animate-drift-slow pointer-events-none absolute -right-24 bottom-1/3 h-[380px] w-[380px] rounded-full bg-accent/8 blur-[80px]" />

          <div className="relative mx-auto w-full max-w-4xl">
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Design &amp; AI for companies that want to move faster.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl md:text-2xl">
              I help teams understand what AI can actually do — then I design and
              build it with them.
            </p>
            <div className="mt-12">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25"
              >
                Book a Workshop
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M3 8h10m0 0L9 4m4 4L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-24 px-6 py-28 lg:px-8 lg:py-36">
          <div className="fade-in mx-auto w-full max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-light">
              About
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Designer who speaks AI.
            </h2>
            <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted sm:text-xl">
              <p>
                I grew up in the world of tech — my father Martin Kalis co-founded
                Sygic (200M+ users) and TapHome. I took the design path.
              </p>
              <p>
                Today I help companies understand and use AI — not through slides,
                but by building things live in front of your team.
              </p>
              <p>
                I combine sharp UI/UX design with hands-on AI fluency to help teams
                ship faster and smarter.
              </p>
            </div>
            <p className="mt-10 text-base font-medium text-foreground/80">
              Based in Bratislava, working across Europe.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-24 px-6 py-28 lg:px-8 lg:py-36">
          <div className="fade-in mx-auto w-full max-w-6xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-light">
              Services
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              How I can help.
            </h2>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              {/* AI Workshops */}
              <div className="rounded-2xl border border-border bg-card-bg p-8 transition-colors hover:border-accent/30 sm:p-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-accent-light"
                  >
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  AI That Actually Works
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Half-day, on-site workshop for 10–15 people.
                </p>
                <ul className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    Live AI demos using your team&apos;s real workflows
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    Workflow analysis: what to automate, what to leave alone
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    Tool recommendations tailored to your industry
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    30/60/90 day action plan built during the session
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                    Post-workshop summary + follow-up call
                  </li>
                </ul>
                <div className="mt-10 flex items-end justify-between">
                  <div>
                    <p className="text-sm text-muted">Starting from</p>
                    <p className="font-display text-2xl font-bold text-foreground">
                      &euro;2,000
                    </p>
                  </div>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-accent-light transition-colors hover:text-foreground"
                  >
                    Book a Workshop &rarr;
                  </a>
                </div>
              </div>

              {/* Design Services */}
              <div className="rounded-2xl border border-border bg-card-bg p-8 transition-colors hover:border-accent/30 sm:p-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-accent-light"
                  >
                    <path
                      d="M12 19l7-7 3 3-7 7-3-3z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="11"
                      cy="11"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Design That Ships
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Fixed scope. Fixed price. No surprises.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="rounded-lg border border-border/60 bg-background/60 p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-foreground">
                        Landing Page Design
                      </p>
                      <p className="text-sm font-medium text-accent-light">
                        &euro;800
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-muted">5-day delivery</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-background/60 p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-foreground">
                        App UI Audit + Redesign
                      </p>
                      <p className="text-sm font-medium text-accent-light">
                        &euro;2,500
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-muted">5 screens</p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-background/60 p-5">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-foreground">
                        Monthly Design Retainer
                      </p>
                      <p className="text-sm font-medium text-accent-light">
                        &euro;2,000/mo
                      </p>
                    </div>
                    <p className="mt-1 text-sm text-muted">
                      Ongoing design support
                    </p>
                  </div>
                </div>
                <div className="mt-10 text-right">
                  <a
                    href="#contact"
                    className="text-sm font-medium text-accent-light transition-colors hover:text-foreground"
                  >
                    Get Started &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Background */}
        <section
          id="background"
          className="scroll-mt-24 px-6 py-28 lg:px-8 lg:py-36"
        >
          <div className="fade-in mx-auto w-full max-w-5xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-light">
              Background
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Where I come from.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Grew up around companies building products people actually use. That
              shaped how I think about design and technology.
            </p>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card-bg p-7">
                <p className="font-display text-lg font-bold text-foreground">
                  Sygic
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Grew up around the team that built navigation for 200M+ users.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card-bg p-7">
                <p className="font-display text-lg font-bold text-foreground">
                  TapHome
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Watched a smart home product scale from zero to 1,000+
                  projects/year.
                </p>
              </div>
              <div className="rounded-xl border border-border bg-card-bg p-7">
                <p className="font-display text-lg font-bold text-foreground">
                  AI-Native
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  I don&apos;t talk about AI. I build with it every day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-24 px-6 py-28 lg:px-8 lg:py-36">
          <div className="fade-in mx-auto w-full max-w-4xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-light">
              Contact
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Let&apos;s talk.
            </h2>
            <p className="mt-4 max-w-xl text-lg text-muted">
              Have a project in mind or want to explore how AI can help your team?
              Drop me a message.
            </p>

            <div className="mt-14 grid gap-14 lg:grid-cols-2">
              <form
                action="https://formsubmit.co/m3kalis@gmail.com"
                method="POST"
                className="space-y-6"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New inquiry from ai.matuskalis.com"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://ai.matuskalis.com"
                />
                <input
                  type="text"
                  name="_honey"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-foreground placeholder:text-muted/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-foreground placeholder:text-muted/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Your company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-border bg-card-bg px-4 py-3 text-foreground placeholder:text-muted/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-border bg-card-bg px-4 py-3 text-foreground placeholder:text-muted/50 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25 sm:w-auto"
                >
                  Send Message
                </button>
              </form>

              <div className="flex flex-col justify-center gap-8">
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href="mailto:m3kalis@gmail.com"
                    className="mt-1 block text-lg text-muted transition-colors hover:text-accent-light"
                  >
                    m3kalis@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/matuskalis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-lg text-muted transition-colors hover:text-accent-light"
                  >
                    linkedin.com/in/matuskalis
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Location</p>
                  <p className="mt-1 text-lg text-muted">Bratislava, Slovakia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border px-6 py-10 lg:px-8">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted">
              &copy; {new Date().getFullYear()} Matus Kalis
            </p>
            <p className="text-sm text-muted/60">
              Built with AI, designed by hand.
            </p>
            <a
              href="https://linkedin.com/in/matuskalis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-accent-light"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
