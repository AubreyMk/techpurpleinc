const items = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "showcase", label: "Showcase" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function BottomNav({ activeId, onNavigate }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-2">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-2xl px-2 py-1.5 text-[11px] font-medium transition ${
                isActive
                  ? "bg-brand-purple/20 text-brand-soft"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
              }`}
            >
              <span
                className={`mb-0.5 h-1 w-6 rounded-full transition ${
                  isActive ? "bg-brand-soft" : "bg-transparent"
                }`}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

