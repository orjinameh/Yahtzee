export default function Die({
  value,
  size = 64,
  animate = false,
  delayMs = 0,
  bg = "#FFFDF6",
}: {
  value: number;
  size?: number;
  animate?: boolean;
  delayMs?: number;
  bg?: string;
}) {
  return (
    <div
      className={`die shadow-die grid place-items-center ${animate ? "die-roll" : ""}`}
      style={{ width: size, height: size, background: bg, animationDelay: `${delayMs}ms` }}
      role="img"
      aria-label={`Die showing ${value}`}
    >
      <span
        className="font-display text-pip leading-none select-none"
        style={{ fontSize: size * 0.52 }}
      >
        {value}
      </span>
    </div>
  );
}
