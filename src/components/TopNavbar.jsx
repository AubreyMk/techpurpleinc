import logo from "../assets/logo-mark.svg";

export default function TopNavbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-4 py-4">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-slate-900/80 px-4 py-1.5 shadow-soft">
          <img
            src={logo}
            alt="TechPurple Studio"
            className="h-7 w-7 rounded-full bg-gradient-to-tr from-brand-purple via-brand-soft to-brand-electric p-[2px]"
          />
          <div className="flex flex-col text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              TechPurple Studio
            </span>
            <span className="text-[11px] text-slate-400">
              AI Agents · Web & App · Video · Content
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

