type Row = {
  axis: string;
  left: React.ReactNode;
  right: React.ReactNode;
};

const rows: Row[] = [
  {
    axis: "Origin",
    left: (
      <>
        A religious collective that received the{" "}
        <em>Torah at Mount Sinai</em>, in the desert, with no shared land —
        a people defined by covenant, not territory.
        <div className="mt-3 font-semibold not-italic">
          (Deuteronomy 27:9)
        </div>
      </>
    ),
    right: (
      <>
        A nineteenth-century political movement that{" "}
        <em className="text-[var(--color-blood)]">co-opted Jewish identity</em>,
        transforming sacred faith into earthly nationalism and political
        ambition.
      </>
    ),
  },
  {
    axis: "Form",
    left: (
      <>
        The <em>bearers of an eternal tradition</em> — bound across
        continents and centuries by Torah, halacha, and the memory of Sinai.
      </>
    ),
    right: (
      <>
        A <em className="text-[var(--color-blood)]">nation-state</em> with
        armies, parliaments, and foreign ministries. A flag, a border, a
        military.
      </>
    ),
  },
  {
    axis: "Method",
    left: (
      <>
        <em>Torah Law.</em> We follow G-d's commandments, live in peace with
        our neighbors, and uphold the core Torah values of kindness and
        compassion toward{" "}
        <strong className="not-italic">every human being</strong>.
      </>
    ),
    right: (
      <>
        <em className="text-[var(--color-blood)]">Force.</em> Zionists rely
        on military power, nationalist ideology, and actions that contradict
        fundamental Torah principles.
      </>
    ),
  },
  {
    axis: "Posture",
    left: (
      <>
        A <em>patient</em> awaiting of divine redemption — borne with
        humility through every exile, generation upon generation.
      </>
    ),
    right: (
      <>
        An <em className="text-[var(--color-blood)]">impatient</em> forcing
        of the hand of history — what the Talmud calls "rebelling against the
        nations."
      </>
    ),
  },
  {
    axis: "Voice",
    left: (
      <>
        Speaks for the Jewish people — in the voice of its{" "}
        <em>rabbis and its tradition</em>, for three thousand years.
      </>
    ),
    right: (
      <>
        Speaks only for <em className="text-[var(--color-blood)]">itself</em>{" "}
        — a political state and its elected officials.
        <div className="mt-3 font-semibold not-italic">
          Not for Jews. Not for Judaism.
        </div>
      </>
    ),
  },
];

export function ComparisonTable() {
  return (
    <div className="relative">
      {/* Headers */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]">
        <header className="bg-[var(--color-parchment-deep)] px-8 py-10 text-[oklch(0.2_0.02_80)] md:px-10 md:py-14">
          <div className="eyebrow text-[oklch(0.36_0.04_80)]">
            Since Mount Sinai · 3,300 Years
          </div>
          <h3 className="mt-4 font-display text-5xl md:text-6xl">Yiddishkeit</h3>
          <p className="mt-3 font-display text-lg italic text-[oklch(0.36_0.04_80)]">
            "A people bound by covenant."
          </p>
        </header>
        <div
          aria-hidden
          className="hidden md:flex w-24 items-center justify-center bg-[var(--color-background)] text-[var(--color-olive-pale)]"
        >
          <div className="font-display text-3xl italic">vs.</div>
        </div>
        <header className="bg-[var(--color-olive-deep)] px-8 py-10 text-right text-[var(--color-bone)] md:px-10 md:py-14">
          <div className="eyebrow text-[var(--color-olive-pale)]">
            150 Years · Since the First Zionist Congress, 1897
          </div>
          <h3 className="mt-4 font-display text-5xl md:text-6xl text-[var(--color-bone)]">
            Zionism
          </h3>
          <p className="mt-3 font-display text-lg italic text-[var(--color-bone)]/70">
            "A modern political project."
          </p>
        </header>
      </div>

      {/* Rows */}
      {rows.map((row, i) => (
        <div
          key={row.axis}
          className={`grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] ${
            i > 0 ? "border-t border-[oklch(0.82_0.02_80)]/40" : ""
          }`}
        >
          <div className="bg-[var(--color-parchment)] px-8 py-10 text-[oklch(0.2_0.02_80)] md:px-10 md:py-12">
            <p className="font-display text-base italic md:text-lg leading-relaxed">
              {row.left}
            </p>
          </div>
          <div
            aria-hidden
            className="hidden md:flex w-24 items-center justify-center bg-[var(--color-background)]"
          >
            <div
              className="origin-center -rotate-90 whitespace-nowrap text-[10px] tracking-[0.32em] uppercase text-[var(--color-olive-pale)]"
            >
              {row.axis}
            </div>
          </div>
          <div className="bg-[oklch(0.91_0.02_80)] px-8 py-10 text-right text-[oklch(0.2_0.02_80)] md:px-10 md:py-12">
            <p className="font-display text-base italic md:text-lg leading-relaxed">
              {row.right}
            </p>
          </div>
        </div>
      ))}

      {/* Bottom line */}
      <div className="bg-[oklch(0.14_0.008_80)] border-t border-[var(--color-olive-deep)] px-8 py-10 md:px-12 md:py-14">
        <div className="eyebrow mb-3 text-[var(--color-blood)]">
          The Bottom Line
        </div>
        <p className="font-display text-2xl italic leading-snug md:text-3xl text-[var(--color-bone)]">
          These are not two versions of the same thing. They are different in
          kind — one is a religion, the other is a nationalism.
        </p>
      </div>
    </div>
  );
}
