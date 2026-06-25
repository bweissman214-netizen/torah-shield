import { Play, Image as ImageIcon } from "lucide-react";

type Kind = "video" | "photo";

export function MediaPlaceholder({
  kind = "video",
  caption,
  image,
  className = "",
}: {
  kind?: Kind;
  caption: string;
  image?: string;
  className?: string;
}) {
  const Icon = kind === "video" ? Play : ImageIcon;
  return (
    <figure
      className={`group relative grain overflow-hidden border border-border bg-[var(--color-card)] ${className}`}
      style={{ aspectRatio: "4 / 5" }}
    >
      {image ? (
        <>
          <img
            src={image}
            alt={caption}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ filter: "grayscale(0.35) contrast(1.05) brightness(0.9)" }}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, oklch(0.1 0.005 80 / 0.9) 100%)",
            }}
          />
        </>
      ) : (
        <>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 80% at 50% 30%, oklch(0.26 0.012 80) 0%, oklch(0.14 0.008 80) 75%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-olive)]/60 bg-black/40 backdrop-blur-sm transition-transform duration-700 group-hover:scale-105">
              <Icon className="h-5 w-5 text-[var(--color-olive-pale)]" strokeWidth={1.5} />
            </div>
            <div className="eyebrow mb-2 text-[10px]">
              {kind === "video" ? "Video" : "Photo"} · Coming
            </div>
          </div>
        </>
      )}
      <div
        aria-hidden
        className="absolute inset-3 border border-[var(--color-olive-deep)]/60 pointer-events-none"
      />
      {image ? (
        <figcaption className="absolute inset-x-0 bottom-0 p-5 font-display text-base italic leading-snug text-[var(--color-bone)]">
          {caption}
        </figcaption>
      ) : (
        <figcaption className="absolute inset-x-0 bottom-6 px-6 text-center font-display text-lg italic leading-snug text-[var(--color-bone)]/85">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function MediaTriptych({ items }: { items: Array<{ kind?: Kind; caption: string; image?: string }> }) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((it, i) => (
        <MediaPlaceholder key={i} kind={it.kind} caption={it.caption} image={it.image} />
      ))}
    </div>
  );
}
