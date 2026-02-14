import { useState } from "react";
import {
  Home,
  Code,
  Video,
  PenTool,
  User,
  Menu,
  X,
  FolderKanban,
  MessageCircle,
} from "lucide-react";

export default function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavigate(key) {
    setActive(key);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="min-h-screen flex flex-col text-[color:var(--fg)]">
      {/* Top Header - Sticky */}
      <header className="sticky top-0 z-20 border-b border-purple-500/20 bg-black/60 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <div className="flex items-baseline gap-2">
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-purple-300/80">
              TechPurple
            </span>
            <span className="hidden text-xs text-slate-400 sm:inline">
              AI Studio
            </span>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-white/5 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-100 shadow-md transition hover:bg-white/10"
          >
            <span className="rounded-full bg-purple-500/20 p-1 text-purple-300">
              {menuOpen ? (
                <X className="h-3 w-3" />
              ) : (
                <Menu className="h-3 w-3" />
              )}
            </span>
            <span>Menu</span>
          </button>
        </div>
      </header>

      <main className="flex-1 px-4 pb-8 pt-8 sm:px-6">
        <ActiveSection active={active} />
      </main>

      <Footer />

      {/* Bottom Navigation - Sticky at bottom, moves with content */}
      <nav className="sticky bottom-0 z-20 border-t border-purple-500/20 bg-black/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-md items-center justify-around px-3 text-xs text-slate-400">
          <Nav
            icon={<Home className="h-4 w-4" />}
            label="Home"
            active={active === "home"}
            onClick={() => handleNavigate("home")}
          />
          <Nav
            icon={<Code className="h-4 w-4" />}
            label="Dev"
            active={active === "dev"}
            onClick={() => handleNavigate("dev")}
          />
          <Nav
            icon={<FolderKanban className="h-4 w-4" />}
            label="Projects"
            active={active === "projects"}
            onClick={() => handleNavigate("projects")}
          />
          <Nav
            icon={<Video className="h-4 w-4" />}
            label="Video"
            active={active === "video"}
            onClick={() => handleNavigate("video")}
          />
          <Nav
            icon={<PenTool className="h-4 w-4" />}
            label="Content"
            active={active === "content"}
            onClick={() => handleNavigate("content")}
          />
          <Nav
            icon={<User className="h-4 w-4" />}
            label="About"
            active={active === "about"}
            onClick={() => handleNavigate("about")}
          />
        </div>
      </nav>

      <ChatWidget />

      {/* Menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="menu-panel mx-auto mt-20 max-w-xs rounded-2xl border border-purple-500/30 bg-slate-950/95 p-4 text-sm text-slate-50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-3 text-[0.7rem] uppercase tracking-[0.22em] text-purple-300/80">
              Navigate
            </p>
            <div className="space-y-1">
              <OverlayItem
                label="Home"
                description="Overview of what TechPurple can build with AI."
                active={active === "home"}
                onClick={() => handleNavigate("home")}
              />
              <OverlayItem
                label="Development"
                description="Web apps, automations, and AI-powered tools."
                active={active === "dev"}
                onClick={() => handleNavigate("dev")}
              />
              <OverlayItem
                label="Projects"
                description="A sample of launches, tools, and experiments."
                active={active === "projects"}
                onClick={() => handleNavigate("projects")}
              />
              <OverlayItem
                label="Video"
                description="Cuts, reels, explainers with AI-enhanced workflow."
                active={active === "video"}
                onClick={() => handleNavigate("video")}
              />
              <OverlayItem
                label="Content"
                description="Scripts, copy, and content systems tuned to your brand."
                active={active === "content"}
                onClick={() => handleNavigate("content")}
              />
              <OverlayItem
                label="About"
                description="Who we are, how we work, and what matters here."
                active={active === "about"}
                onClick={() => handleNavigate("about")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Nav({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center gap-0.5 text-[0.65rem] transition ${
        active ? "text-purple-300" : "text-slate-400 hover:text-purple-200"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

function OverlayItem({ label, description, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full flex-col items-start rounded-xl px-3 py-2 text-left transition ${
        active
          ? "bg-purple-600/25 text-purple-100"
          : "text-slate-200 hover:bg-white/5"
      }`}
    >
      <span className="text-xs font-semibold uppercase tracking-[0.16em]">
        {label}
      </span>
      <span className="mt-0.5 text-[0.7rem] text-slate-400">{description}</span>
    </button>
  );
}

function ActiveSection({ active }) {
  if (active === "dev") return <DevSection key="dev" />;
  if (active === "projects") return <ProjectsSection key="projects" />;
  if (active === "video") return <VideoSection key="video" />;
  if (active === "content") return <ContentSection key="content" />;
  if (active === "about") return <AboutSection key="about" />;
  return <HomeSection key="home" />;
}

function SectionShell({ eyebrow, title, kicker, children }) {
  return (
    <section className="section-fade mx-auto flex max-w-5xl flex-col gap-8 text-slate-100">
      <div className="space-y-3 text-center">
        {eyebrow && (
          <span className="inline-flex items-center justify-center rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-purple-200">
            {eyebrow}
          </span>
        )}
        <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
          {title}
        </h2>
        {kicker && (
          <p className="mx-auto max-w-2xl text-sm text-slate-400">{kicker}</p>
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.1fr)]">
        <div className="space-y-4 rounded-3xl border border-purple-500/30 bg-slate-950/80 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.95)]">
          {children}
        </div>
        <aside className="space-y-3 rounded-3xl border border-white/10 bg-white/5 p-4 text-xs text-slate-100">
          <p className="font-medium text-purple-100">What you get</p>
          <ul className="space-y-1 text-slate-200/90">
            <li className="flex gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Human taste with AI speed.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>Systems that keep shipping, not one‑off hype.</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-0.5 h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span>One small team across product, media, and ops.</span>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

function HomeSection() {
  return (
    <SectionShell
      eyebrow="Welcome"
      title="One studio for AI, product, and content."
      kicker="TechPurple turns ideas into shippable experiences — from landing pages and internal tools to content engines and on-brand visuals."
    >
      <p className="text-sm leading-relaxed text-slate-300">
        Ship faster without juggling five different agencies. We blend{" "}
        <span className="text-purple-200">
          product thinking, creative direction, and AI-first workflows
        </span>{" "}
        so every asset you publish ladders up to a clear outcome: more signal,
        less noise.
      </p>
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        <FeaturePill title="Launch pages">
          Crisp, fast sites tuned for conversions and story.
        </FeaturePill>
        <FeaturePill title="Content systems">
          Reusable prompts, templates, and automations.
        </FeaturePill>
        <FeaturePill title="Creative support">
          Embedded partner across product and media teams.
        </FeaturePill>
      </div>
    </SectionShell>
  );
}

function DevSection() {
  return (
    <SectionShell
      eyebrow="Development"
      title="AI-native products and internal tools."
      kicker="From prototypes to production, we build React and Node-based experiences that plug cleanly into your existing stack."
    >
      <p className="text-sm leading-relaxed text-slate-300">
        We design and ship{" "}
        <span className="text-purple-200">
          web apps, customer portals, dashboards, and AI agents
        </span>{" "}
        that feel clean, fast, and reliable. No mystery frameworks — just modern
        React, strong UI, and a focus on real workflows.
      </p>
      <ul className="mt-3 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
        <Bullet title="Internal tools">
          Automate busywork around data entry, ops, and reporting.
        </Bullet>
        <Bullet title="Customer-facing apps">
          Portals, dashboards, and simple SaaS built with clarity.
        </Bullet>
        <Bullet title="AI integrations">
          Chatbots, retrieval, and copilots for existing systems.
        </Bullet>
        <Bullet title="Technical care">
          Monitoring, docs, and small improvements over time.
        </Bullet>
      </ul>
    </SectionShell>
  );
}

function VideoSection() {
  return (
    <SectionShell
      eyebrow="Video"
      title="Clear stories in under 90 seconds."
      kicker="We cut explainers, reels, and product walk-throughs that actually get watched — with AI handling the grunt work."
    >
      <p className="text-sm leading-relaxed text-slate-300">
        We combine a tight narrative with punchy visuals so every clip has a
        job to do. AI helps us{" "}
        <span className="text-purple-200">
          clean audio, generate variations, and repurpose longer sessions
        </span>{" "}
        without losing your brand voice.
      </p>
      <ul className="mt-3 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
        <Bullet title="Launch videos">
          Short explainers for new features or products.
        </Bullet>
        <Bullet title="Cut downs & reels">
          Slice long talks into social-ready moments.
        </Bullet>
        <Bullet title="YouTube & pods">
          Intros, overlays, and templates you can reuse.
        </Bullet>
        <Bullet title="Content library">
          Organized, searchable assets for your team.
        </Bullet>
      </ul>
    </SectionShell>
  );
}

function ContentSection() {
  return (
    <SectionShell
      eyebrow="Content"
      title="Words that still sound human."
      kicker="We use AI to explore directions — then edit with taste, context, and a strong point of view."
    >
      <p className="text-sm leading-relaxed text-slate-300">
        Your tone shouldn&apos;t sound like every other AI-written post. We
        help you define a sharp{" "}
        <span className="text-purple-200">voice, structure, and rhythm</span>{" "}
        that we can then scale across posts, scripts, and emails.
      </p>
      <ul className="mt-3 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
        <Bullet title="Landing copy">
          Positioning and story that makes sense quickly.
        </Bullet>
        <Bullet title="Long-form content">
          Articles, playbooks, and resources worth bookmarking.
        </Bullet>
        <Bullet title="Scripts & outlines">
          Video scripts and talk tracks your team can deliver.
        </Bullet>
        <Bullet title="Content engines">
          Calendars, prompts, and assets inside one simple system.
        </Bullet>
      </ul>
    </SectionShell>
  );
}

function AboutSection() {
  return (
    <SectionShell
      eyebrow="About"
      title="A small studio with hands on the work."
      kicker="We stay intentionally small so we can ship with you — not just send over decks."
    >
      <p className="text-sm leading-relaxed text-slate-300">
        TechPurple is a tight group of builders across{" "}
        <span className="text-purple-200">
          product, engineering, video, and content
        </span>
        . We&apos;ve worked inside startups and creative teams, so we try to be
        the studio we wished we had on speed dial — fast, clear, and calm.
      </p>
      <ul className="mt-3 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
        <Bullet title="How we work">
          One small team embedded alongside yours, not a rotating cast of
          strangers.
        </Bullet>
        <Bullet title="Focus">
          Clear goals, fast experiments, and honest feedback over vanity
          metrics.
        </Bullet>
        <Bullet title="Stack">
          React, Node, modern AI tooling, and the boring infrastructure that
          keeps things up.
        </Bullet>
        <Bullet title="Fit">
          Perfect for lean teams who want a thinking partner, not just a vendor.
        </Bullet>
      </ul>
    </SectionShell>
  );
}

function ProjectsSection() {
  return (
    <SectionShell
      eyebrow="Projects"
      title="A sample of the kinds of things we ship."
      kicker="Names and details are anonymized — the patterns are not."
    >
      <div className="space-y-4 text-sm text-slate-200">
        <ProjectCard
          tag="Product"
          title="Founder dashboard for a B2B SaaS"
          body="A focused control center for revenue, pipeline, and experiments — built in React with a simple Node API and AI-powered summary emails each morning."
          bullets={[
            "Interactive metrics with saved views for operators and founders.",
            "Weekly digest emails written by AI, edited by humans.",
            "Launched v1 in four weeks, then iterated in small releases.",
          ]}
        />
        <ProjectCard
          tag="Video + Content"
          title="Launch kit for a devtools product"
          body="A tight homepage, product explainer, and a set of reusable social clips timed to a major release."
          bullets={[
            "Scripted, recorded, and cut a 75-second product video.",
            "Generated 12 short clips for Twitter, LinkedIn, and ads.",
            "Built a landing page that matched the story beat-for-beat.",
          ]}
        />
        <ProjectCard
          tag="Automation"
          title="Internal content engine for a small team"
          body="A Notion + AI workflow that turned raw meeting notes into publish-ready outlines, briefs, and social posts."
          bullets={[
            "Prompt systems tuned to the team's voice and style.",
            "One-click generation flows wired into existing tools.",
            "Hours saved each week on first-draft writing.",
          ]}
        />
      </div>
    </SectionShell>
  );
}

function FeaturePill({ title, children }) {
  return (
    <div className="rounded-2xl border border-purple-500/40 bg-purple-500/10 px-4 py-3 text-left text-[0.8rem] text-slate-100">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple-200">
        {title}
      </p>
      <p className="mt-1 text-[0.78rem] text-slate-200/90">{children}</p>
    </div>
  );
}

function Bullet({ title, children }) {
  return (
    <li className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
      <div>
        <p className="text-[0.8rem] font-semibold text-slate-50">{title}</p>
        <p className="mt-1 text-[0.8rem] text-slate-300">{children}</p>
      </div>
    </li>
  );
}

function ProjectCard({ tag, title, body, bullets }) {
  return (
    <article className="rounded-2xl border border-purple-500/30 bg-black/40 p-4">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="inline-flex items-center rounded-full bg-purple-500/15 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-purple-200">
          {tag}
        </span>
        <span className="text-[0.65rem] text-slate-400">
          Example of what we build
        </span>
      </div>
      <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
      <p className="mt-1 text-[0.8rem] text-slate-300">{body}</p>
      <ul className="mt-2 space-y-1 text-[0.78rem] text-slate-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-1 h-1 w-1 flex-shrink-0 rounded-full bg-purple-400" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Footer() {
  return (
    <footer className="border-t border-purple-500/20 bg-black/70 px-5 py-6 text-[0.78rem] text-slate-300">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-200">
            TechPurple Studio
          </p>
          <p className="max-w-xs text-[0.78rem] text-slate-400">
            AI-native creative and product studio for small teams that care
            about craft.
          </p>
        </div>
        <div className="flex flex-1 flex-wrap gap-8 sm:justify-end">
          <div className="space-y-1.5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-purple-200">
              Contact
            </p>
            <a
              href="mailto:techpurple.inc@gmail.com"
              className="block text-[0.78rem] text-slate-200 hover:text-purple-200"
            >
              techpurple.inc@gmail.com
            </a>
            <p className="text-[0.78rem] text-slate-400">
              Available for product, media, and content retainers.
            </p>
          </div>
          <div className="space-y-1.5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-purple-200">
              Useful
            </p>
            <a href="#home" className="block hover:text-purple-200">
              Services overview
            </a>
            <a href="#projects" className="block hover:text-purple-200">
              Sample projects
            </a>
            <a href="#about" className="block hover:text-purple-200">
              How we work
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-5 flex max-w-5xl items-center justify-between text-[0.7rem] text-slate-500">
        <span>© {new Date().getFullYear()} TechPurple Studio.</span>
        <span>Made with React & Vite.</span>
      </div>
    </footer>
  );
}

function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm the TechPurple assistant. Ask anything about services, timelines, or how we'd work together.",
    },
  ]);

  function handleSubmit(e) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const next = [
      ...messages,
      { from: "user", text: trimmed },
      {
        from: "bot",
        text: "Thanks for the question! For specific scopes or timelines, drop a short note to hello@techpurple.studio and we'll get back to you quickly.",
      },
    ];
    setMessages(next);
    setInput("");
  }

  return (
    <div className="fixed bottom-20 right-3 z-40 flex flex-col items-end gap-3 sm:bottom-24 sm:right-6">
      {open && (
        <div className="w-72 max-w-xs rounded-2xl border border-purple-500/40 bg-black/90 p-3 text-[0.78rem] text-slate-100 shadow-[0_18px_50px_rgba(15,23,42,0.95)] backdrop-blur">
          <div className="mb-2 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/40">
                <MessageCircle className="h-3.5 w-3.5 text-purple-100" />
              </span>
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-purple-200">
                  Assistant
                </p>
                <p className="text-[0.68rem] text-slate-400">
                  Quick questions, not a full chatbot.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-slate-400 hover:bg-white/5 hover:text-slate-100"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
          <div className="mb-2 max-h-44 space-y-1 overflow-y-auto pr-1">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`rounded-xl px-2.5 py-1.5 ${
                  m.from === "user"
                    ? "ml-auto bg-purple-600/60 text-white"
                    : "mr-auto bg-white/5 text-slate-100"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center gap-1.5">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a quick question…"
              className="h-7 flex-1 rounded-full border border-white/10 bg-black/40 px-2 text-[0.75rem] text-slate-100 outline-none placeholder:text-slate-500 focus:border-purple-400"
            />
            <button
              type="submit"
              className="rounded-full bg-purple-500 px-3 py-1 text-[0.7rem] font-medium text-white hover:bg-purple-400 disabled:opacity-50"
              disabled={!input.trim()}
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full border border-purple-500/40 bg-purple-600/90 px-3 py-1.5 text-[0.75rem] font-medium text-white shadow-[0_18px_45px_rgba(15,23,42,0.9)] hover:bg-purple-500"
      >
        <MessageCircle className="h-3.5 w-3.5" />
        <span>Ask the studio</span>
      </button>
    </div>
  );
}