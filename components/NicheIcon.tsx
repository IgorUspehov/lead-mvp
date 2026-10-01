import type { NicheId } from "@/lib/types";

type IconProps = {
  id: NicheId;
  className?: string;
};

export function NicheIcon({ id, className }: IconProps) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (id === "auto") {
    return (
      <svg {...common}>
        <path d="M3 13.5 5.2 8.2A2 2 0 0 1 7 7h10a2 2 0 0 1 1.8 1.2L21 13.5" />
        <path d="M3.5 13.5h17V17a1 1 0 0 1-1 1h-1.2" />
        <path d="M6.2 18H4.5A1 1 0 0 1 3.5 17v-3.5" />
        <circle cx="7.5" cy="17.5" r="1.6" />
        <circle cx="16.5" cy="17.5" r="1.6" />
      </svg>
    );
  }

  if (id === "gastro") {
    return (
      <svg {...common}>
        <path d="M8 3v8" />
        <path d="M6 3v4a2 2 0 0 0 4 0V3" />
        <path d="M8 11v10" />
        <path d="M16 3c1.8 2.2 2.4 4.2 2.4 6.2 0 2.2-1.1 3.6-2.4 3.6S13.6 11.4 13.6 9.2C13.6 7.2 14.2 5.2 16 3Z" />
        <path d="M16 12.8V21" />
      </svg>
    );
  }

  if (id === "praxis") {
    return (
      <svg {...common}>
        <path d="M12 4v16" />
        <path d="M4 12h16" />
        <rect x="3.5" y="3.5" width="17" height="17" rx="4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M3 20h18" />
      <path d="M5 20V10l5 3V9l5 3V7l4 2.5V20" />
      <path d="M9 20v-3h2v3" />
    </svg>
  );
}
