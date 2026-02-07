import Link from "next/link";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-bg-dark text-text-white min-h-[calc(100vh-72px)] flex items-center overflow-hidden mesh-bg">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-[fadeLeft_0.7s_ease_both]">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 text-text-white">
                Websites, Design &amp;{" "}
                <span className="gradient-text">AI&nbsp;Tools</span> That Work
                for Your Business
              </h1>
              <p className="text-text-muted text-lg max-w-lg mb-8 leading-relaxed">
                Custom sites starting at $200 &mdash; a fraction of what agencies charge.
                Hosting from just $3/mo while others charge $20+. Every project
                starts with a free demo &mdash; no commitment.
              </p>
              <div className="flex gap-3 flex-wrap mb-12">
                <Link
                  href="/contact"
                  className="bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]"
                >
                  Get Your Free Demo
                </Link>
                <Link
                  href="/services"
                  className="border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-text-white font-semibold px-7 py-3.5 rounded-lg transition-all"
                >
                  View Services
                </Link>
              </div>
              <div className="flex gap-8 pt-6 border-t border-border-dark flex-wrap">
                {[
                  { num: "150+", label: "Projects" },
                  { num: "$200", label: "Sites From" },
                  { num: "$3/mo", label: "Hosting From" },
                  { num: "100%", label: "Demo First" },
                ].map((s) => (
                  <div key={s.label}>
                    <span className="block text-2xl font-extrabold text-text-white">
                      {s.num}
                    </span>
                    <span className="text-xs text-text-muted uppercase tracking-wider">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative hidden lg:flex items-center justify-center animate-[fadeRight_0.7s_ease_both_0.15s]">
              <div className="bg-bg-card border border-border-dark rounded-2xl p-8 w-full max-w-md shadow-2xl">
                <div className="inline-flex items-center gap-2 bg-emerald-soft text-emerald text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                  <span className="w-1.5 h-1.5 bg-emerald rounded-full" />
                  Your demo is ready
                </div>
                <h3 className="text-text-white text-lg font-semibold mb-2">
                  yourbusiness.com
                </h3>
                <p className="text-text-muted text-sm mb-5">
                  Live preview &mdash; click through every page before you pay a cent.
                </p>
                <div className="bg-[#080d18] rounded-xl overflow-hidden border border-border-dark">
                  <div className="flex items-center gap-1.5 px-3 py-2.5 bg-white/[0.02] border-b border-border-dark">
                    <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                    <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                    <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                    <span className="ml-3 bg-white/[0.05] rounded px-3 py-0.5 text-[11px] text-text-muted flex-1">
                      yourbusiness.com
                    </span>
                  </div>
                  <div className="p-5 space-y-2.5 min-h-[140px]">
                    <div className="h-2 rounded bg-accent-soft w-[40%]" />
                    <div className="h-2 rounded bg-white/[0.04] w-[85%]" />
                    <div className="h-2 rounded bg-white/[0.04] w-[55%]" />
                    <div className="h-2 rounded bg-white/[0.04] w-[85%]" />
                    <div className="h-2 rounded bg-white/[0.04] w-[35%]" />
                    <div className="h-2 rounded bg-accent-soft w-[60%] mt-3" />
                  </div>
                </div>
              </div>
              <div
                className="absolute top-[8%] -right-4 bg-bg-card border border-border-dark rounded-lg px-4 py-2.5 text-xs text-text-muted shadow-lg"
                style={{ animation: "float 6s ease-in-out infinite" }}
              >
                🎨 Logo ready
              </div>
              <div
                className="absolute bottom-[15%] -left-6 bg-bg-card border border-border-dark rounded-lg px-4 py-2.5 text-xs text-text-muted shadow-lg"
                style={{ animation: "float 6s ease-in-out infinite 2s" }}
              >
                🤖 AI booking live
              </div>
              <div
                className="absolute top-[45%] -right-10 bg-bg-card border border-border-dark rounded-lg px-4 py-2.5 text-xs text-text-muted shadow-lg"
                style={{ animation: "float 6s ease-in-out infinite 4s" }}
              >
                📱 Mobile-first
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
              Three Services. One Partner.
            </h2>
            <p className="text-text-body text-lg">
              Everything a growing business needs to look professional, reach
              customers, and run leaner &mdash; without juggling multiple vendors.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🌐",
                bg: "bg-accent-soft",
                title: "Custom Websites",
                desc: "Fully custom, mobile-first sites built to convert visitors into customers. No templates. Starts at just $200 — agencies charge $2,000+ for the same thing.",
                tag: "From $200",
                tagColor: "text-accent bg-accent-soft",
              },
              {
                icon: "🎨",
                bg: "bg-[rgba(59,130,246,0.1)]",
                title: "Graphic Design",
                desc: "Business cards, brochures, flyers, advertisements, social graphics — whatever your business needs to look sharp and stay consistent.",
                tag: "From $99",
                tagColor: "text-[#3b82f6] bg-[rgba(59,130,246,0.1)]",
              },
              {
                icon: "🤖",
                bg: "bg-[rgba(139,92,246,0.1)]",
                title: "AI Business Tools",
                desc: "Automated booking systems, smart intake forms, workflow bots — replace that extra hire with a system that runs 24/7.",
                tag: "Custom Quote",
                tagColor: "text-[#8b5cf6] bg-[rgba(139,92,246,0.1)]",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="reveal bg-white border border-border-light rounded-2xl p-8 flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`w-13 h-13 rounded-xl flex items-center justify-center text-xl mb-5 ${s.bg}`}
                >
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-text-dark mb-2">{s.title}</h3>
                <p className="text-text-body text-[0.95rem] flex-1 leading-relaxed">
                  {s.desc}
                </p>
                <span
                  className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mt-4 w-fit ${s.tagColor}`}
                >
                  {s.tag}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center border border-border-light text-text-dark font-semibold px-6 py-3 rounded-lg transition-all hover:border-accent hover:text-accent"
            >
              See Full Service Details →
            </Link>
          </div>
        </div>
      </section>

      {/* Demo-First Promise */}
      <section className="py-20 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="reveal relative bg-gradient-to-br from-[#0e1529] to-bg-card border border-border-dark rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            <div className="absolute top-[-50%] right-[-10%] w-72 h-72 bg-[radial-gradient(circle,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />
            <div>
              <h3 className="text-2xl font-bold text-text-white mb-2">
                Every project starts with a free demo.
              </h3>
              <p className="text-text-muted text-base">
                See your site live &mdash; fully designed and functional &mdash; before you
                spend a dollar. If you love it, we move forward. If not, no hard
                feelings.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5"
            >
              Request Your Demo
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-dark mb-4">
              From Brief to Launch in Four Steps
            </h2>
            <p className="text-text-body text-lg">
              No surprises, no scope creep. Every project follows the same clear
              path.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "01",
                title: "Discovery",
                desc: "Share your goals, audience, and timeline. We ask the right questions to nail the scope.",
              },
              {
                n: "02",
                title: "Free Demo",
                desc: "We build a working preview of your site or design. You review it hands-on, no payment required.",
              },
              {
                n: "03",
                title: "Refine",
                desc: "Approve, tweak, or pivot. We iterate fast until every detail is dialed in.",
              },
              {
                n: "04",
                title: "Launch",
                desc: "Final files delivered or site goes live. You get everything — source files, assets, full ownership.",
              },
            ].map((s) => (
              <div key={s.n} className="reveal text-center p-8">
                <div className="text-5xl font-black text-accent/[0.12] mb-3 leading-none">
                  {s.n}
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-2">{s.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Plans */}
      <PricingSection />

      {/* Testimonials */}
      <section className="py-20 bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-accent text-xs font-bold uppercase tracking-[0.12em] block mb-3">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-text-white mb-4">
              What Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                quote:
                  "Hunter built our booking system in under a week. Our front desk used to spend 3 hours a day on the phone confirming appointments — now it's fully automated. Absolute game changer.",
                name: "Sarah Martinez",
                role: "CEO, TechForward Solutions",
                initials: "SM",
              },
              {
                quote:
                  "We got a full demo site before paying anything. The final product looked even better. Our online orders went up 60% in the first month after launch.",
                name: "Michael Johnson",
                role: "Owner, Peachtree Bistro",
                initials: "MJ",
              },
              {
                quote:
                  "The business cards and brochure design were done in 24 hours. Clean, professional, and exactly what we needed for our trade show booth.",
                name: "Emily Parker",
                role: "Founder, Atlanta Wellness Co.",
                initials: "EP",
              },
              {
                quote:
                  "I've worked with agencies that charge 10x more and deliver less. Hunter is fast, fair, and the quality speaks for itself. We've been on the monthly plan for over a year now.",
                name: "David Lee",
                role: "Product Manager, Georgia Gourmet",
                initials: "DL",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="reveal relative bg-bg-card border border-border-dark rounded-2xl p-8"
              >
                <span className="absolute top-2 left-5 text-6xl font-black text-accent/20 leading-none select-none">
                  &ldquo;
                </span>
                <p className="text-text-muted italic text-[0.95rem] mb-5 relative z-10 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-soft text-accent flex items-center justify-center text-sm font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-text-white font-semibold text-sm">
                      {t.name}
                    </div>
                    <p className="text-text-muted text-xs m-0">{t.role}</p>
                  </div>
                </div>
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
            Ready to See What We Can Build for You?
          </h2>
          <p className="text-text-muted max-w-lg mx-auto mb-8 text-lg">
            Get a free demo site &mdash; fully designed and clickable &mdash; with zero
            commitment. If you love it, we&apos;ll make it yours.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-light text-white font-semibold px-7 py-3.5 rounded-lg transition-all hover:-translate-y-0.5"
            >
              Get Your Free Demo
            </Link>
            <a
              href="tel:4707583549"
              className="border border-white/20 hover:border-white/40 hover:bg-white/[0.04] text-text-white font-semibold px-7 py-3.5 rounded-lg transition-all"
            >
              Call (470) 758-3549
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
