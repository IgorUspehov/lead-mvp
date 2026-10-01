import { NicheIcon } from "@/components/NicheIcon";
import { SectionCard } from "@/components/SectionCard";
import type { Copy, Lang, Niche, NicheId } from "@/lib/types";

type NicheGridProps = {
  copy: Copy;
  lang: Lang;
  niches: Niche[];
  selectedId: NicheId | null;
  onSelect: (id: NicheId) => void;
};

export function NicheGrid({ copy, lang, niches, selectedId, onSelect }: NicheGridProps) {
  return (
    <SectionCard step="01" title={copy.step1Title} hint={copy.step1Hint}>
      <div className="grid gap-3 sm:grid-cols-2">
        {niches.map((niche) => {
          const selected = niche.id === selectedId;
          return (
            <button
              key={niche.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(niche.id)}
              className={`group rounded-2xl border p-4 text-left transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8ff47] ${
                selected
                  ? "border-[#e8ff47] bg-[#e8ff47]/10 shadow-[0_0_32px_rgba(232,255,71,0.16)]"
                  : "border-white/10 bg-zinc-950/50 hover:border-[#5aa7ff]/50 hover:bg-zinc-950"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-2xl ${
                    selected ? "bg-[#e8ff47] text-zinc-950" : "bg-[#5aa7ff]/15 text-[#5aa7ff]"
                  }`}
                >
                  <NicheIcon id={niche.id} className="h-6 w-6" />
                </span>
                {selected ? (
                  <span className="rounded-full bg-[#e8ff47] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-zinc-950">
                    {copy.selected}
                  </span>
                ) : null}
              </div>
              <p className="mt-4 text-base font-semibold tracking-tight text-zinc-50">{niche.name[lang]}</p>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">{niche.tag[lang]}</p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{niche.description[lang]}</p>
            </button>
          );
        })}
      </div>
    </SectionCard>
  );
}
