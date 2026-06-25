import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  tone = "dark",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  tone?: "dark" | "parchment";
}) {
  const bg =
    tone === "parchment"
      ? "bg-[var(--color-parchment)] text-[oklch(0.2_0.02_80)]"
      : "bg-[var(--color-background)] text-[var(--color-foreground)]";
  return (
    <section id={id} className={`relative ${bg}`}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        {eyebrow && (
          <div className="eyebrow mb-6 flex items-center gap-3">
            <span
              aria-hidden
              className="inline-block h-px w-10"
              style={{ backgroundColor: "var(--color-olive)" }}
            />
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className="font-display text-4xl leading-[1.05] md:text-6xl md:leading-[1.02] max-w-4xl">
            {title}
          </h2>
        )}
        {lede && (
          <div className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-bone)]/80 md:text-xl">
            {lede}
          </div>
        )}
        {children && <div className="mt-14">{children}</div>}
      </div>
    </section>
  );
}
