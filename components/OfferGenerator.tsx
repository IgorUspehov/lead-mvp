import { SectionCard } from "@/components/SectionCard";
import type { Copy, Lang, Niche, Offer } from "@/lib/types";

type OfferGeneratorProps = {
  copy: Copy;
  lang: Lang;
  niche: Niche | null;
  offer: Offer | null;
  variantIndex: number;
  variantCount: number;
  generating: boolean;
  onGenerate: () => void;
};

export function OfferGenerator({
  copy,
  lang,
  niche,
  offer,
  variantIndex,
  variantCount,
  generating,
  onGenerate,
}: OfferGeneratorProps) {
  return (
    <SectionCard
      step="02"
      title={copy.step2Title}
      hint={copy.step2Hint}
      action={
        offer ? (
          <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 font-mono text-[11px] text-zinc-300">
            {copy.variant} {String(variantIndex + 1).padStart(2, "0")} / {String(variantCount).padStart(2, "0")}
          </span>
        ) : null
      }
    >
      {niche && offer ? (
        <div className={generating ? "opacity-80" : undefined}>
          {generating ? (
            <div className="relative mb-4 overflow-hidden rounded-2xl border border-[#e8ff47]/30 bg-black/40 p-4">
              <div className="scan-bar pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#e8ff47]/40 to-transparent" />
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#e8ff47]">{copy.drafting}</p>
              <div className="mt-3 space-y-2">
                <div className="h-3 w-28 animate-pulse rounded-full bg-white/10" />
                <div className="h-5 w-4/5 animate-pulse rounded-full bg-white/10" />
                <div className="h-5 w-2/3 animate-pulse rounded-full bg-white/10" />
              </div>
            </div>
          ) : (
            <div className="mb-4 grid gap-3 sm:grid-cols-2">
              <article className="rounded-2xl border border-white/10 bg-zinc-950/60 p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#e8ff47]">{copy.german}</p>
                <h3 className="mt-2 text-base font-semibold leading-snug text-zinc-50">{offer.headline.de}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{offer.subhead.de}</p>
              </article>
              <article className="rounded-2xl border border-[#5aa7ff]/30 bg-[#5aa7ff]/10 p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#5aa7ff]">{copy.english}</p>
                <h3 className="mt-2 text-base font-semibold leading-snug text-zinc-50">{offer.headline.en}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{offer.subhead.en}</p>
              </article>
            </div>
          )}

          <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-400">{copy.structure}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">{niche.rationale[lang]}</p>
            <ol className="mt-4 space-y-2">
              {offer.questions.map((question, index) => (
                <li key={question.id} className="flex gap-3 rounded-xl bg-white/5 px-3 py-2.5">
                  <span className="font-mono text-xs text-[#e8ff47]">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-sm font-medium text-zinc-100">{question.label[lang]}</p>
                    <p className="mt-0.5 text-xs text-zinc-500">{question.options[lang].join(" · ")}</p>
                  </div>
                </li>
              ))}
              <li className="flex gap-3 rounded-xl bg-white/5 px-3 py-2.5">
                <span className="font-mono text-xs text-[#5aa7ff]">04</span>
                <div>
                  <p className="text-sm font-medium text-zinc-100">
                    {copy.name} + {copy.phone}
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500">{copy.contact}</p>
                </div>
              </li>
            </ol>
          </div>

          <button
            type="button"
            onClick={onGenerate}
            disabled={generating}
            className="mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#e8ff47] px-4 text-sm font-semibold text-zinc-950 shadow-[0_10px_30px_rgba(232,255,71,0.2)] transition hover:brightness-105 disabled:cursor-wait disabled:opacity-80"
          >
            {generating ? (
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-950/20 border-t-zinc-950" />
            ) : (
              <span aria-hidden className="text-base leading-none">
                ✦
              </span>
            )}
            {generating ? copy.generating : copy.generate}
          </button>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/15 bg-black/20 px-5 py-10 text-center">
          <p className="text-sm font-medium text-zinc-200">{copy.emptyOfferTitle}</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">{copy.emptyOffer}</p>
        </div>
      )}
    </SectionCard>
  );
}
