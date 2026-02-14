export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto mb-6 mt-6 flex max-w-6xl flex-col gap-8 px-4 sm:mt-10 sm:flex-row sm:items-center"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.16),_transparent_55%)] opacity-80" />
      <div className="section-shell sm:flex-1">
        <div className="pill-badge mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Always-on AI delivery squad
        </div>
        <h1 className="mb-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Ship startups speeds with an{" "}
          <span className="bg-gradient-to-r from-brand-soft via-brand-purple to-sky-400 bg-clip-text text-transparent">
            AI‑native studio
          </span>
          .
        </h1>
        <p className="mb-6 max-w-xl text-sm text-slate-300 sm:text-base">
          TechPurple Studio blends autonomous AI agents with senior-level web
          &amp; app development, cinematic video editing, and high-converting
          content to build your next launch in weeks—not quarters.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-purple px-5 py-2.5 text-sm font-semibold text-white shadow-soft shadow-brand-purple/40 transition hover:-translate-y-0.5 hover:bg-brand-soft"
          >
            Book a build sprint
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-slate-100 hover:bg-white/10"
          >
            View recent launches
          </a>
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-3 text-xs text-slate-300 sm:text-sm md:max-w-md">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-2">
            <dt className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              AI Agents
            </dt>
            <dd className="mt-1 font-semibold text-slate-50">
              Lead capture, support, &amp; automations
            </dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-2">
            <dt className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Full Stack
            </dt>
            <dd className="mt-1 font-semibold text-slate-50">
              Web &amp; app builds, idea to MVP
            </dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-2">
            <dt className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Video
            </dt>
            <dd className="mt-1 font-semibold text-slate-50">
              Launch films, ads, explainers
            </dd>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 px-3 py-2">
            <dt className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Content
            </dt>
            <dd className="mt-1 font-semibold text-slate-50">
              Landing copy, email, socials
            </dd>
          </div>
        </dl>
      </div>
      <aside className="section-shell mt-2 flex-1 bg-grid-slate bg-grid">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Live project cockpit
        </p>
        <div className="space-y-3 text-xs text-slate-200">
          <div className="flex items-center justify-between rounded-2xl bg-slate-900/70 px-3 py-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                Agent Squad
              </p>
              <p className="text-sm font-semibold text-slate-50">
                4 agents collaborating
              </p>
            </div>
            <div className="flex -space-x-1.5">
              <span className="h-7 w-7 rounded-full bg-brand-purple/70" />
              <span className="h-7 w-7 rounded-full bg-sky-500/70" />
              <span className="h-7 w-7 rounded-full bg-emerald-500/70" />
              <span className="h-7 w-7 rounded-full bg-amber-500/70" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-slate-900/70 px-3 py-2">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                Time to launch
              </p>
              <p className="mt-1 text-lg font-semibold text-emerald-400">
                21 days
              </p>
            </div>
            <div className="rounded-2xl bg-slate-900/70 px-3 py-2">
              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                Experiments
              </p>
              <p className="mt-1 text-lg font-semibold text-sky-400">
                32 running
              </p>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-900/70 px-3 py-2">
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Production pipeline
            </p>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex-1 rounded-full bg-slate-800">
                <div className="h-1.5 w-4/6 rounded-full bg-gradient-to-r from-brand-soft to-emerald-400" />
              </div>
              <span className="text-[11px] text-slate-300">MVP build</span>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

