export default function SwingTag({
  code,
  label,
  tone = "ink",
  rotate = "-rotate-2",
  className = "",
}) {
  const isDark = tone === "ink";
  const bg = isDark ? "bg-ink text-bone" : "bg-bone-card text-ink";
  const border = isDark ? "border-line-dark" : "border-line";

  return (
    <div
      className={`inline-flex items-stretch ${rotate} ${className}`}
      aria-hidden="false"
    >
      <div
        className={`flex items-center gap-2 border ${border} ${bg} pl-3 pr-4 py-2 relative`}
        style={{
          clipPath:
            "polygon(14px 0, 100% 0, 100% 100%, 14px 100%, 0 50%)",
        }}
      >
        <span className={`tag-hole ${isDark ? "text-bone/50" : "text-ink/40"} ml-1 shrink-0`} />
        <span className="font-mono text-[11px] tracking-widest uppercase leading-none">
          {code && <span className="opacity-60 mr-2">{code}</span>}
          {label}
        </span>
      </div>
    </div>
  );
}
