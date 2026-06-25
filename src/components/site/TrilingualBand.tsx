/** Three-column trilingual band, gold Hebrew at center. Mirrors the reference layout. */
export function TrilingualBand() {
  return (
    <section className="relative bg-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-3 md:gap-8">
          {/* Left */}
          <div className="text-center md:text-right">
            <h3 className="font-display text-3xl md:text-4xl tracking-wide text-[var(--color-bone)]">
              Am Yisrael Chai
            </h3>
            <p className="mt-4 text-[var(--color-bone)]/65">
              Unity comes only with Hashem in the middle.
            </p>
            <p
              dir="rtl"
              className="mt-5 font-hebrew text-xl text-[var(--color-olive-pale)]"
            >
              ואהבת לרעך כמוך אני ה׳
            </p>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.24em] text-[var(--color-bone)]/45">
              Vayichan sham Yisrael neged ha'har
            </p>
            <p className="mt-3 text-sm italic text-[var(--color-bone)]/55">
              — Hashem in our midst —
            </p>
          </div>

          {/* Center — gold Hebrew */}
          <div className="relative text-center">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[var(--color-olive)]/40 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[var(--color-olive)]/40 to-transparent" />
            <p
              dir="rtl"
              className="font-hebrew text-4xl md:text-5xl leading-tight text-[var(--color-olive-pale)]"
              style={{ textShadow: "0 0 30px rgba(218,178,99,0.15)" }}
            >
              הַמַּחֲזִיר
              <br />
              שְׁכִינָתוֹ לְצִיּוֹן
            </p>
            <p className="mt-6 font-display text-2xl md:text-3xl text-[var(--color-olive-pale)] italic">
              Ha'machazir Shechina Tzion
            </p>
            <p className="mt-3 text-[var(--color-bone)]/70 max-w-xs mx-auto">
              We don't just want Tzion. We want the Shechina in Tzion.
            </p>
          </div>

          {/* Right */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl md:text-4xl tracking-wide text-[var(--color-bone)]">
              Am Hashem Chai
            </h3>
            <p className="mt-4 text-[var(--color-bone)]/65">
              A people whose life is bound to Hashem.
            </p>
            <p
              dir="rtl"
              className="mt-5 font-hebrew text-xl text-[var(--color-olive-pale)]"
            >
              ונצבים היום כולכם
            </p>
            <p className="mt-3 text-sm italic text-[var(--color-bone)]/55">
              — One covenant. One people. One destiny. —
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
