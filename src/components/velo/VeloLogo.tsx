export function VeloMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="44" height="44" rx="11" fill="#2196F3" />
      <path
        d="M12 10 H24.5 A12.5 12.5 0 0 1 24.5 35 H12 Z M12 15.5 V29.5 M21.5 15.5 V29.5"
        stroke="#fff"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="35" cy="34.5" r="2.8" fill="#fff" />
    </svg>
  );
}

export function VeloLogo({
  dark = false,
  compact = false,
}: {
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5 select-none">
      <VeloMark size={38} />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-[21px] font-bold tracking-tight ${
              dark ? "text-white" : "text-[#0C2947]"
            }`}
          >
            Velo
          </span>
          <span
            className={`font-display text-[8.5px] font-medium tracking-[0.18em] mt-0.5 ${
              dark ? "text-velo-200/80" : "text-[#5B7290]"
            }`}
          >
            FINANCE LTD
          </span>
        </span>
      )}
    </span>
  );
}
