"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CrmDashboard } from "@/components/CrmDashboard";
import { Header } from "@/components/Header";
import { LeadPreview } from "@/components/LeadPreview";
import { NicheGrid } from "@/components/NicheGrid";
import { OfferGenerator } from "@/components/OfferGenerator";
import { copy } from "@/lib/copy";
import { incomingPeople, seedLeads } from "@/lib/leads";
import { nicheById, niches } from "@/lib/niches";
import type { Lang, Lead, LeadStatus, NicheId } from "@/lib/types";

const statusOrder: LeadStatus[] = ["new", "qualified", "in_progress"];

const initialVariants: Record<NicheId, number> = {
  auto: 0,
  gastro: 0,
  praxis: 0,
  polymer: 0,
};

export function LeadFlowApp() {
  const [lang, setLang] = useState<Lang>("en");
  const [selectedId, setSelectedId] = useState<NicheId | null>(null);
  const [variants, setVariants] = useState(initialVariants);
  const [generating, setGenerating] = useState(false);
  const [leads, setLeads] = useState<Lead[]>(seedLeads);
  const [live, setLive] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const text = copy[lang];
  const niche = selectedId ? nicheById[selectedId] : null;
  const offer = niche ? niche.offers[variants[niche.id]] : null;

  const seq = useRef(240);
  const pool = useRef(0);
  const timer = useRef<number | null>(null);
  const liveRef = useRef(live);
  const nicheRef = useRef(selectedId);
  const langRef = useRef(lang);
  const addLeadRef = useRef<(input: { name: string; phone: string; nicheId: NicheId }) => void>(() => {});

  const addLead = useCallback((input: { name: string; phone: string; nicheId: NicheId }) => {
    seq.current += 1;
    const lead: Lead = {
      id: `LF-${seq.current}`,
      name: input.name,
      phone: input.phone,
      nicheId: input.nicheId,
      status: "new",
      time: new Date().toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
      fresh: true,
    };
    setLeads((current) => [lead, ...current]);
    setToast(`${lead.name} · ${nicheById[lead.nicheId].name[langRef.current]}`);
  }, []);

  useEffect(() => {
    liveRef.current = live;
    nicheRef.current = selectedId;
    langRef.current = lang;
    addLeadRef.current = addLead;
  }, [live, selectedId, lang, addLead]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    if (!leads.some((lead) => lead.fresh)) return;
    const timeout = window.setTimeout(() => {
      setLeads((current) => current.map((lead) => (lead.fresh ? { ...lead, fresh: false } : lead)));
    }, 1600);
    return () => window.clearTimeout(timeout);
  }, [leads]);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (!liveRef.current) return;
      const person = incomingPeople[pool.current % incomingPeople.length];
      const nicheId = nicheRef.current ?? niches[pool.current % niches.length].id;
      pool.current += 1;
      addLeadRef.current({ ...person, nicheId });
    }, 14000);
    return () => window.clearInterval(interval);
  }, []);

  function selectNiche(id: NicheId) {
    if (timer.current) window.clearTimeout(timer.current);
    setGenerating(false);
    setSelectedId(id);
  }

  function regenerate() {
    if (!selectedId || generating) return;
    const nicheId = selectedId;
    setGenerating(true);
    timer.current = window.setTimeout(() => {
      setVariants((current) => ({
        ...current,
        [nicheId]: (current[nicheId] + 1) % nicheById[nicheId].offers.length,
      }));
      setGenerating(false);
    }, 1200);
  }

  function simulate() {
    const person = incomingPeople[pool.current % incomingPeople.length];
    const nicheId = nicheRef.current ?? niches[pool.current % niches.length].id;
    pool.current += 1;
    addLead({ ...person, nicheId });
  }

  function cycleStatus(id: string) {
    setLeads((current) =>
      current.map((lead) => {
        if (lead.id !== id) return lead;
        const index = statusOrder.indexOf(lead.status);
        return { ...lead, status: statusOrder[(index + 1) % statusOrder.length] };
      }),
    );
  }

  const steps = [
    { id: "01", label: text.stepNiche, on: true },
    { id: "02", label: text.stepOffer, on: Boolean(selectedId) },
    { id: "03", label: text.stepPreview, on: Boolean(selectedId) },
    { id: "04", label: text.stepCrm, on: true },
  ];

  return (
    <div className="relative flex-1 bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-[480px] w-[480px] rounded-full bg-[#5aa7ff]/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#e8ff47]/10 blur-3xl" />
      </div>

      <div className="relative">
        <Header
          lang={lang}
          onLang={(next) => {
            langRef.current = next;
            setLang(next);
          }}
        />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10">
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#e8ff47]">{text.eyebrow}</p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                LeadFlow & AI Niche Builder
              </h1>
              <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">{text.subtitle}</p>
            </div>
            <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:w-[420px]">
              {steps.map((step) => (
                <li
                  key={step.id}
                  className={`rounded-2xl border px-3 py-2 ${
                    step.on ? "border-[#e8ff47]/40 bg-[#e8ff47]/10" : "border-white/10 bg-white/5"
                  }`}
                >
                  <span className="font-mono text-[10px] text-[#5aa7ff]">{step.id}</span>
                  <p className="text-xs font-medium text-zinc-100">{step.label}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <NicheGrid
                copy={text}
                lang={lang}
                niches={niches}
                selectedId={selectedId}
                onSelect={selectNiche}
              />
              <OfferGenerator
                copy={text}
                lang={lang}
                niche={niche}
                offer={offer}
                variantIndex={selectedId ? variants[selectedId] : 0}
                variantCount={niche?.offers.length ?? 0}
                generating={generating}
                onGenerate={regenerate}
              />
            </div>
            <div className="lg:col-span-5">
              <LeadPreview
                key={offer ? offer.id : "empty"}
                copy={text}
                lang={lang}
                niche={niche}
                offer={offer}
                onCapture={(lead) => {
                  if (!selectedId) return;
                  addLead({ ...lead, nicheId: selectedId });
                }}
              />
            </div>
          </div>

          <CrmDashboard
            copy={text}
            lang={lang}
            leads={leads}
            live={live}
            onToggleLive={() => setLive((value) => !value)}
            onSimulate={simulate}
            onCycleStatus={cycleStatus}
          />

          <p className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">
            {text.footer}
          </p>
        </main>
      </div>

      {toast ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 max-w-xs rounded-2xl border border-[#e8ff47]/40 bg-zinc-950/95 px-4 py-3 shadow-[0_16px_50px_rgba(0,0,0,0.45)]"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#e8ff47]">{text.incoming}</p>
          <p className="mt-1 text-sm text-zinc-100">{toast}</p>
        </div>
      ) : null}
    </div>
  );
}
