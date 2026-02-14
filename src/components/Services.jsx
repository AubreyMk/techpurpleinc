const SERVICE_GROUPS = [
  {
    title: "AI Agent Systems",
    description:
      "Specialised agents that capture leads, triage support, and orchestrate your internal tools.",
    items: [
      "Sales & lead-qual agents",
      "Support copilots & FAQ brains",
      "Internal ops & automation agents",
      "Knowledge base ingestion & RAG",
    ],
  },
  {
    title: "Web & App Development",
    description:
      "From concept to live product, with AI assisting every branch of the stack.",
    items: [
      "Landing pages & marketing sites",
      "Full-stack MVPs & dashboards",
      "API & automation backends",
      "Design systems & component libraries",
    ],
  },
  {
    title: "Video & Content Studio",
    description:
      "Cinematic storytelling, social-first formats, and copy that actually converts.",
    items: [
      "Launch & product films",
      "UGC-style social edits",
      "Repurposed long-form content",
      "Brand voice & conversion copy",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto mb-6 mt-4 max-w-6xl px-4 sm:mt-6"
    >
      <div className="section-shell">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="pill-badge mb-3 bg-brand-purple/10 text-[11px] text-brand-soft">
              Full-stack creative & build studio
            </p>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Everything you need to{" "}
              <span className="bg-gradient-to-r from-brand-soft to-sky-400 bg-clip-text text-transparent">
                launch and iterate
              </span>
              .
            </h2>
          </div>
          <p className="max-w-sm text-xs text-slate-300 sm:text-sm">
            Engage one squad that thinks like founders: strategy, story, design,
            engineering, and AI automation under one roof.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {SERVICE_GROUPS.map((group) => (
            <article
              key={group.title}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-4 transition hover:-translate-y-1 hover:border-brand-soft/60 hover:bg-slate-900/90"
            >
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100" />
              <h3 className="mb-1 text-sm font-semibold text-slate-50">
                {group.title}
              </h3>
              <p className="mb-3 text-xs text-slate-300">{group.description}</p>
              <ul className="mt-auto space-y-1.5 text-xs text-slate-200">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-soft" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

