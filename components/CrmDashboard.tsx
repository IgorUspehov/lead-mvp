"use client";

import { useState } from "react";
import { SectionCard } from "@/components/SectionCard";
import { nicheById } from "@/lib/niches";
import type { Copy, Lang, Lead, LeadStatus } from "@/lib/types";

const statuses: LeadStatus[] = ["new", "qualified", "in_progress"];

type CrmDashboardProps = {
  copy: Copy;
  lang: Lang;
  leads: Lead[];
  live: boolean;
  onToggleLive: () => void;
  onSimulate: () => void;
  onCycleStatus: (id: string) => void;
};

const statusClass: Record<LeadStatus, string> = {
  new: "border-[#5aa7ff]/40 bg-[#5aa7ff]/15 text-[#9cc7ff]",
  qualified: "border-[#e8ff47]/40 bg-[#e8ff47]/15 text-[#e8ff47]",
  in_progress: "border-white/15 bg-white/5 text-zinc-200",
};

export function CrmDashboard({
  copy,
  lang,
  leads,
  live,
  onToggleLive,
  onSimulate,
  onCycleStatus,
}: CrmDashboardProps) {
  const [filter, setFilter] = useState<LeadStatus | "all">("all");
  const visible = filter === "all" ? leads : leads.filter((lead) => lead.status === filter);
  const counts = {
    total: leads.length,
    fresh: leads.filter((lead) => lead.status === "new").length,
    qualified: leads.filter((lead) => lead.status === "qualified").length,
    working: leads.filter((lead) => lead.status === "in_progress").length,
  };

  return (
    <SectionCard
      step="04"
      title={copy.step4Title}
      hint={copy.step4Hint}
      className="mt-6"
      action={
        <div className="flex flex-wrap justify-end gap-2">
          <button
            type="button"
            aria-pressed={live}
            onClick={onToggleLive}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
              live
                ? "border-[#5aa7ff]/50 bg-[#5aa7ff]/15 text-[#9cc7ff]"
                : "border-white/10 bg-white/5 text-zinc-400"
            }`}
          >
            <span className={`mr-1.5 inline-block h-1.5 w-1.5 rounded-full ${live ? "bg-[#5aa7ff]" : "bg-zinc-500"}`} />
            {live ? copy.liveOn : copy.liveOff}
          </button>
          <button
            type="button"
            onClick={onSimulate}
            className="rounded-full bg-[#e8ff47] px-3 py-1.5 text-xs font-semibold text-zinc-950"
          >
            {copy.simulate}
          </button>
        </div>
      }
    >
      <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {(
          [
            ["total", counts.total],
            ["fresh", counts.fresh],
            ["qualified", counts.qualified],
            ["working", counts.working],
          ] as const
        ).map(([key, value]) => (
          <div key={key} className="rounded-2xl border border-white/10 bg-black/25 px-3 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{copy.stats[key]}</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-zinc-50">{value}</p>
          </div>
        ))}
      </div>

      <div className="mb-3 flex flex-wrap gap-2">
        <FilterChip active={filter === "all"} onClick={() => setFilter("all")} label={copy.filterAll} />
        {statuses.map((status) => (
          <FilterChip
            key={status}
            active={filter === status}
            onClick={() => setFilter(status)}
            label={copy.status[status]}
          />
        ))}
      </div>
      <p className="mb-3 text-xs text-zinc-500">{copy.statusHint}</p>

      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-black/40 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
            <tr>
              <th className="px-4 py-3 font-medium">{copy.columns.name}</th>
              <th className="px-4 py-3 font-medium">{copy.columns.phone}</th>
              <th className="px-4 py-3 font-medium">{copy.columns.niche}</th>
              <th className="px-4 py-3 font-medium">{copy.columns.status}</th>
              <th className="px-4 py-3 font-medium">{copy.columns.time}</th>
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-zinc-500">
                  {copy.noLeads}
                </td>
              </tr>
            ) : (
              visible.map((lead) => (
                <tr key={lead.id} className={`border-t border-white/10 ${lead.fresh ? "lead-in" : ""}`}>
                  <td className="px-4 py-3">
                    <p className="font-medium text-zinc-100">{lead.name}</p>
                    <p className="font-mono text-[11px] text-zinc-500">{lead.id}</p>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-zinc-300">{lead.phone}</td>
                  <td className="px-4 py-3 text-zinc-300">{nicheById[lead.nicheId].name[lang]}</td>
                  <td className="px-4 py-3">
                    <button
                      type="button"
                      onClick={() => onCycleStatus(lead.id)}
                      className={`rounded-full border px-2.5 py-1 text-xs font-medium ${statusClass[lead.status]}`}
                    >
                      {copy.status[lead.status]}
                    </button>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-zinc-400">{lead.time}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}

function FilterChip({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
        active ? "bg-white text-zinc-950" : "bg-white/5 text-zinc-400 hover:text-zinc-100"
      }`}
    >
      {label}
    </button>
  );
}
