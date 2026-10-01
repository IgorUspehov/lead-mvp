import { LANGS, type Lang } from "@/lib/types";

type HeaderProps = {
  lang: Lang;
  onLang: (lang: Lang) => void;
};

const langLabel: Record<Lang, string> = {
  en: "English",
  de: "Deutsch",
  ru: "Русский",
};

export function Header({ lang, onLang }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#e8ff47] text-sm font-bold tracking-tight text-zinc-950 shadow-[0_0_24px_rgba(232,255,71,0.35)]">
            LF
          </span>
          <div>
            <p className="text-sm font-semibold tracking-tight text-zinc-50">
              Seodach <span className="text-zinc-500">×</span> WebStudio
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#e8ff47]">LeadFlow</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5aa7ff] opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5aa7ff]" />
            </span>
            Active Node: Munich
          </div>

          <div className="flex rounded-full bg-zinc-900 p-1 ring-1 ring-white/10" role="group" aria-label="Language">
            {LANGS.map((code) => {
              const active = code === lang;
              return (
                <button
                  key={code}
                  type="button"
                  aria-pressed={active}
                  aria-label={langLabel[code]}
                  onClick={() => onLang(code)}
                  className={`rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider transition ${
                    active
                      ? "bg-[#e8ff47] text-zinc-950 shadow-[0_0_18px_rgba(232,255,71,0.35)]"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {code}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-[#5aa7ff] via-[#e8ff47] to-transparent" />
    </header>
  );
}
