export default function Swatch({ tone = "bone", label, className = "" }) {
  const tones = {
    bone: "bg-bone-card bg-weave text-ink/50",
    ink: "bg-ink-soft bg-weave-dark text-bone/50",
    brass: "bg-[#C9A86A] bg-weave text-ink/60",
    wine: "bg-[#BD0039] bg-weave-dark text-bone/60",
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${tones[tone]} ${className}`}
    >
      <span className="font-mono text-[10px] tracking-widest2 uppercase">
        {label}
      </span>
      <span className="absolute inset-3 border border-current opacity-20 pointer-events-none" />
    </div>
  );
}
