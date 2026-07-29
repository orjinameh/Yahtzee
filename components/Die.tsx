const PIP_LAYOUTS: Record<number, number[]> = {
  1: [5],
  2: [1, 9],
  3: [1, 5, 9],
  4: [1, 3, 7, 9],
  5: [1, 3, 5, 7, 9],
  6: [1, 3, 4, 6, 7, 9],
};

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
  const cells = PIP_LAYOUTS[value] ?? PIP_LAYOUTS[1];
  return (
    <div
      className={`die shadow-die ${animate ? "die-roll" : ""}`}
      style={{ width: size, height: size, background: bg, animationDelay: `${delayMs}ms` }}
      role="img"
      aria-label={`Die showing ${value}`}
    >
      {Array.from({ length: 9 }, (_, i) => i + 1).map((cell) => (
        <span key={cell} className="pip" style={{ opacity: cells.includes(cell) ? 1 : 0 }} />
      ))}
    </div>
  );
}
