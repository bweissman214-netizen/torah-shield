type ParchmentQuoteProps = {
  portrait?: string;
  quote: string;
  attribution: string;
  role?: string;
};

export function ParchmentQuote({
  portrait,
  quote,
  attribution,
  role,
}: ParchmentQuoteProps) {
  return (
    <figure
      className="relative flex gap-5 p-6 md:p-7"
      style={{
        background:
          "linear-gradient(180deg, var(--color-parchment) 0%, var(--color-parchment-deep) 100%)",
        boxShadow:
          "inset 0 0 60px rgba(120,90,40,0.18), 0 1px 0 rgba(0,0,0,0.2)",
      }}
    >
      {portrait && (
        <img
          src={portrait}
          alt={attribution}
          loading="lazy"
          className="h-28 w-24 flex-none object-cover grayscale-[20%] sepia-[40%]"
          style={{ filter: "sepia(45%) contrast(0.95)" }}
        />
      )}
      <div className="flex flex-col justify-between">
        <blockquote className="font-display text-[1.02rem] md:text-base italic leading-snug text-[oklch(0.22_0.03_60)]">
          "{quote}"
        </blockquote>
        <figcaption className="mt-3">
          <div className="font-display text-sm text-[oklch(0.28_0.04_60)]">
            — {attribution}
          </div>
          {role && (
            <div className="text-xs text-[oklch(0.42_0.04_60)] mt-0.5">
              {role}
            </div>
          )}
        </figcaption>
      </div>
    </figure>
  );
}

/** A parchment "question" card without portrait, used as the third panel. */
export function ParchmentNote({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  return (
    <div
      className="relative p-7 md:p-8 text-center"
      style={{
        background:
          "linear-gradient(180deg, var(--color-parchment) 0%, var(--color-parchment-deep) 100%)",
        boxShadow:
          "inset 0 0 60px rgba(120,90,40,0.18), 0 1px 0 rgba(0,0,0,0.2)",
      }}
    >
      <p className="font-display text-lg md:text-xl text-[oklch(0.22_0.03_60)] italic leading-snug">
        {heading}
      </p>
      <p className="mt-4 font-display text-base text-[oklch(0.3_0.03_60)]">
        {body}
      </p>
    </div>
  );
}
