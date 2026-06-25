import { Link } from "@tanstack/react-router";
import jerusalem from "@/assets/scenes/jerusalem-banner.jpg";

export function HeroBanner() {
  return (
    <section className="relative border-y border-[var(--color-olive-deep)]/40 bg-[oklch(0.14_0.03_250)]">
      <div className="mx-auto grid max-w-7xl items-stretch md:grid-cols-[1.05fr_1fr]">
        {/* LEFT — copy */}
        <div className="relative px-6 py-10 md:px-10 md:py-14">
          <h2
            dir="rtl"
            className="font-hebrew text-3xl md:text-4xl lg:text-5xl text-[var(--color-olive-pale)] tracking-wide"
          >
            הַמַּחֲזִיר שְׁכִינָתוֹ לְצִיּוֹן
          </h2>
          <p className="mt-3 font-display text-2xl md:text-3xl lg:text-4xl text-[var(--color-olive-pale)] italic">
            Ha'machazir Shechina Tzion
          </p>
          <p className="mt-4 font-display text-lg md:text-xl text-[var(--color-bone)]">
            We don't just want Tzion. We want the Shechina in Tzion.
          </p>

          <div className="mt-5 flex items-center gap-3 text-[var(--color-olive)]">
            <span className="h-px w-10 bg-[var(--color-olive)]/60" />
            <span className="text-xs">◆</span>
            <span className="h-px w-10 bg-[var(--color-olive)]/60" />
          </div>

          <p className="mt-5 max-w-xl text-sm md:text-base leading-relaxed text-[var(--color-bone)]/75">
            This moment demands more than emotion. It demands Torah clarity.
            <br />
            <span className="text-[var(--color-bone)]">
              Am Hashem Chai documents the record, explains what is at stake,
            </span>
            <br />
            and awakens a responsible Jewish response.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/the-record"
              className="inline-flex items-center bg-[var(--color-olive)] px-6 py-3 text-[0.72rem] uppercase tracking-[0.26em] text-[oklch(0.18_0.04_250)] hover:bg-[var(--color-olive-pale)]"
            >
              See the Record
            </Link>
            <a
              href="#galus"
              className="inline-flex items-center border border-[var(--color-bone)]/70 px-6 py-3 text-[0.72rem] uppercase tracking-[0.26em] text-[var(--color-bone)] hover:border-[var(--color-olive-pale)] hover:text-[var(--color-olive-pale)]"
            >
              Understand What Is at Stake
            </a>
          </div>
        </div>

        {/* RIGHT — image + two truth cards overlay */}
        <div className="relative min-h-[320px] md:min-h-full">
          <img
            src={jerusalem}
            alt="The Old City of Jerusalem at golden hour"
            className="absolute inset-0 h-full w-full object-cover"
            width={1600}
            height={768}
            loading="lazy"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, oklch(0.14 0.03 250 / 0.85) 0%, oklch(0.14 0.03 250 / 0.25) 35%, transparent 60%)",
            }}
          />

          {/* Truth cards */}
          <div className="relative z-10 flex h-full flex-col justify-end gap-3 p-5 md:p-7">
            <div className="text-[0.62rem] uppercase tracking-[0.28em] text-[var(--color-olive-pale)]">
              Our Two Central Truths
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="border border-[var(--color-olive)]/40 bg-[oklch(0.14_0.03_250)/0.85] p-4 backdrop-blur-sm">
                <div className="font-display text-sm tracking-[0.22em] uppercase text-[var(--color-olive-pale)]">
                  Am Hashem Chai
                </div>
                <p className="mt-2 text-sm text-[var(--color-bone)]/85">
                  There is no unity without Hashem in the middle.
                </p>
                <p
                  dir="rtl"
                  className="mt-3 font-hebrew text-base text-[var(--color-olive-pale)]"
                >
                  וְאָהַבְתָּ לְרֵעֲךָ כָּמוֹךָ אֲנִי ה׳
                </p>
                <p className="mt-2 text-xs italic text-[var(--color-bone)]/60">
                  — The source of unity.
                </p>
              </div>
              <div className="border border-[var(--color-olive)]/40 bg-[oklch(0.14_0.03_250)/0.85] p-4 backdrop-blur-sm">
                <div className="font-display text-sm tracking-[0.22em] uppercase text-[var(--color-olive-pale)]">
                  Ha'machazir Shechina Tzion
                </div>
                <p className="mt-2 text-sm text-[var(--color-bone)]/85">
                  We don't just seek land or power. We seek Hashem's presence in
                  the land.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
