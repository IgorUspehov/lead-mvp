import type { ReactNode } from "react";

type SectionCardProps = {
  step: string;
  title: string;
  hint?: string;
  children: ReactNode;
  className?: string;
  action?: ReactNode;
};

export function SectionCard({ step, title, hint, children, className, action }: SectionCardProps) {
  return (
    <section
      className={`rounded-3xl border border-white/10 bg-zinc-900/75 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-md ${className ?? ""}`}
    >
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#5aa7ff]">{step}</p>
          <h2 className="mt-1 text-lg font-semibold tracking-tight text-zinc-50">{title}</h2>
          {hint ? <p className="mt-1 max-w-xl text-sm leading-6 text-zinc-400">{hint}</p> : null}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
