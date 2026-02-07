import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Design over Atlanta",
  description:
    "Get a free demo site or same-day quote. Call (470) 758-3549 or fill out the form. Custom websites, graphic design, and AI tools.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg-dark text-text-white py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(99,102,241,0.06),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact</h1>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Request a free demo, get a same-day quote, or just ask a question.
            We respond within hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            {/* Form */}
            <ContactForm />

            {/* Sidebar */}
            <div className="reveal flex flex-col gap-5">
              <h2 className="text-2xl font-bold text-text-dark mb-1">
                Get In Touch
              </h2>
              <p className="text-text-body text-sm">
                Prefer to talk? Call or text anytime during business hours.
              </p>

              {[
                {
                  icon: "📞",
                  title: "Call or Text",
                  content: (
                    <>
                      <a
                        href="tel:4707583549"
                        className="text-accent font-bold text-lg"
                      >
                        (470) 758-3549
                      </a>
                      <p className="text-text-body text-xs mt-1 m-0">
                        Mon&ndash;Fri 9am&ndash;7pm · Sat 10am&ndash;4pm
                      </p>
                    </>
                  ),
                },
                {
                  icon: "💬",
                  title: "Fastest Response",
                  content: (
                    <p className="text-text-body text-sm m-0">
                      Text for the quickest reply on quotes, updates, or quick
                      questions.
                    </p>
                  ),
                },
                {
                  icon: "📍",
                  title: "Location",
                  content: (
                    <p className="text-text-body text-sm m-0">
                      Based in Atlanta, GA &mdash; serving clients worldwide. Fully
                      remote-friendly.
                    </p>
                  ),
                },
                {
                  icon: "🕒",
                  title: "Hours",
                  content: (
                    <p className="text-text-body text-sm m-0">
                      Mon&ndash;Fri: 9am&ndash;7pm
                      <br />
                      Sat: 10am&ndash;4pm
                      <br />
                      Sun: By appointment
                    </p>
                  ),
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="flex gap-4 items-start p-5 bg-bg-light border border-border-light rounded-2xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center text-lg shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-dark text-sm mb-1">
                      {c.title}
                    </h4>
                    {c.content}
                  </div>
                </div>
              ))}

              {/* Urgent CTA */}
              <div className="bg-bg-dark border border-border-dark rounded-2xl p-7 text-center">
                <h4 className="text-text-white font-bold mb-2">
                  Need Something Today?
                </h4>
                <p className="text-text-muted text-sm mb-4">
                  Rush and same-day options available. Call or text Hunter
                  directly.
                </p>
                <div className="flex gap-3 flex-wrap justify-center">
                  <a
                    href="tel:4707583549"
                    className="bg-accent hover:bg-accent-light text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
                  >
                    Call Now
                  </a>
                  <a
                    href="sms:4707583549"
                    className="border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-all"
                  >
                    Text Hunter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark">
              Common Questions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                q: 'What does "demo first" mean?',
                a: "For every website project, we build you a fully working demo site before you pay anything. You click through it, test it on your phone, show your team — and only pay if you want to move forward.",
              },
              {
                q: "How fast can you deliver?",
                a: "Graphic design: 24–72 hours. Websites: 3–7 days. AI tools: depends on scope — we'll give you a timeline after the initial call. Rush options are always available.",
              },
              {
                q: "Why is your hosting so cheap?",
                a: "We keep operations lean and pass the savings to you. Our $3/mo starter plan includes everything most businesses need — hosting, SSL, backups, and monitoring. Other companies charge $15–$25/mo for the same thing.",
              },
              {
                q: "Do I own my website and files?",
                a: "Yes — 100%. Source code, design files, assets — it's all yours. No proprietary lock-in, no platform you can't leave.",
              },
              {
                q: "What kind of AI tools do you build?",
                a: "Anything that replaces a manual step in your business workflow. The most common: online booking systems so customers don't have to call, automated confirmations, smart intake forms, and internal workflow bots.",
              },
              {
                q: "Do you offer payment plans?",
                a: "For projects over $500, yes — typically 50% upfront and 50% on completion. Monthly plans are billed monthly with no long-term contract.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="reveal bg-white border border-border-light rounded-2xl p-7 transition-all hover:shadow-sm"
              >
                <h4 className="font-bold text-text-dark text-sm mb-2">
                  {faq.q}
                </h4>
                <p className="text-text-body text-sm leading-relaxed m-0">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-bg-dark text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_50%_50%,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-text-muted max-w-lg mx-auto mb-8 text-lg">
            Free demo on every website project. Same-day quotes on design and AI
            tools. Zero commitment until you&apos;re happy.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="tel:4707583549"
              className="bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5"
            >
              Call (470) 758-3549
            </a>
            <Link
              href="#contact-form"
              className="border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-text-white font-semibold px-7 py-3.5 rounded-lg transition-all"
            >
              Fill Out the Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
