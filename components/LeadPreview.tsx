"use client";

import { useState, type FormEvent } from "react";
import { SectionCard } from "@/components/SectionCard";
import type { Copy, Lang, Niche, Offer } from "@/lib/types";

type LeadPreviewProps = {
  copy: Copy;
  lang: Lang;
  niche: Niche | null;
  offer: Offer | null;
  onCapture: (lead: { name: string; phone: string }) => void;
};

export function LeadPreview({ copy, lang, niche, offer, onCapture }: LeadPreviewProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError(true);
      setDone(false);
      return;
    }
    onCapture({ name: name.trim(), phone: phone.trim() });
    setName("");
    setPhone("");
    setAnswers({});
    setError(false);
    setDone(true);
  }

  return (
    <SectionCard step="03" title={copy.step3Title} hint={copy.step3Hint} className="lg:sticky lg:top-24">
      {niche && offer ? (
        <div className="mx-auto w-full max-w-[390px] rounded-[2rem] border border-white/15 bg-zinc-950 p-2 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="overflow-hidden rounded-[1.45rem] bg-zinc-100 text-zinc-900">
            <div className="flex items-center justify-between bg-zinc-950 px-5 py-2 text-[10px] font-medium text-zinc-300">
              <span>21:41</span>
              <span className="h-4 w-20 rounded-full bg-black" />
              <span>5G</span>
            </div>
            <div className="relative overflow-hidden bg-zinc-950 px-5 pb-5 pt-4 text-white">
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#5aa7ff]/50 to-transparent" />
              <div className="relative flex items-center justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e8ff47]">{copy.previewKicker}</p>
                <p className="text-[10px] uppercase tracking-wider text-zinc-400">{copy.sponsored}</p>
              </div>
              <p className="relative mt-4 text-xs text-zinc-400">Seodach × WebStudio · {niche.name[lang]}</p>
              <h3 className="relative mt-1 text-xl font-semibold leading-snug">{offer.headline[lang]}</h3>
            </div>
            <form onSubmit={submit} className="space-y-3 px-4 py-4">
              <p className="text-sm leading-6 text-zinc-600">{offer.subhead[lang]}</p>
              {offer.questions.map((question) => (
                <label key={question.id} className="block">
                  <span className="mb-1.5 block text-xs font-medium text-zinc-600">{question.label[lang]}</span>
                  <select
                    value={answers[question.id] ?? ""}
                    onChange={(event) =>
                      setAnswers((current) => ({ ...current, [question.id]: event.target.value }))
                    }
                    className="w-full appearance-none rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-zinc-900 focus:ring-2 focus:ring-[#e8ff47]"
                  >
                    <option value="">{copy.selectPh}</option>
                    {question.options[lang].map((option, index) => (
                      <option key={question.options.en[index]} value={String(index)}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              ))}
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-zinc-600">{copy.name}</span>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder={copy.namePh}
                  autoComplete="name"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-zinc-900 focus:ring-2 focus:ring-[#e8ff47]"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-zinc-600">{copy.phone}</span>
                <input
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder={copy.phonePh}
                  autoComplete="tel"
                  inputMode="tel"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-zinc-900 focus:ring-2 focus:ring-[#e8ff47]"
                />
              </label>
              {error ? <p className="text-xs font-medium text-red-600">{copy.required}</p> : null}
              {done ? <p className="text-xs font-medium text-emerald-700">{copy.captured}</p> : null}
              <button
                type="submit"
                className="w-full rounded-xl bg-zinc-950 py-3 text-sm font-semibold text-[#e8ff47] transition hover:bg-zinc-800"
              >
                {offer.cta[lang]}
              </button>
              <p className="text-center text-[11px] leading-5 text-zinc-500">{copy.privacy}</p>
            </form>
          </div>
        </div>
      ) : (
        <div className="mx-auto flex min-h-80 w-full max-w-[390px] items-center justify-center rounded-[2rem] border border-dashed border-white/15 bg-black/20 px-6 text-center">
          <p className="text-sm leading-6 text-zinc-500">{copy.emptyPreview}</p>
        </div>
      )}
    </SectionCard>
  );
}
