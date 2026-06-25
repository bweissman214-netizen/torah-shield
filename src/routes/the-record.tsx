import { createFileRoute, Link } from "@tanstack/react-router";
import { Crest } from "@/components/site/Crest";
import { VIDEOS, getVideoEmbedUrl } from "@/data/videos";

export const Route = createFileRoute("/the-record")({
  head: () => ({
    meta: [
      { title: "The Record — Am Hashem Chai" },
      {
        name: "description",
        content:
          "A running newsfeed of videos and articles documenting what frum Jews in Eretz Yisrael face each day.",
      },
    ],
  }),
  component: TheRecord,
});

function TheRecord() {
  return (
    <main className="grain min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Top bar */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 md:px-10 md:py-6 border-b border-[var(--color-olive-deep)]/30">
        <Link to="/" className="flex items-center gap-3">
          <Crest size={40} />
          <span className="leading-tight">
            <span className="block font-display text-base md:text-lg tracking-[0.18em] text-[var(--color-bone)]">
              AM HASHEM CHAI
            </span>
            <span className="block text-[0.62rem] md:text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-olive-pale)]">
              Ha'machazir Shechina Tzion
            </span>
          </span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center border border-[var(--color-bone)]/70 px-5 py-2.5 text-[0.7rem] uppercase tracking-[0.22em] text-[var(--color-bone)] hover:border-[var(--color-olive-pale)] hover:text-[var(--color-olive-pale)]"
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Header */}
      <header className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="text-[0.7rem] uppercase tracking-[0.3em] text-[var(--color-olive-pale)]">
          The Record
        </div>
        <h1 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[var(--color-bone)]">
          What our brothers face,{" "}
          <em className="not-italic text-[var(--color-olive-pale)]">
            documented.
          </em>
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-[var(--color-bone)]/70">
          A running newsfeed of videos, eyewitness footage, and articles. New
          items added as the story develops.
        </p>
      </header>

      {/* Feed */}
      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        {/* First video — full width */}
        <div className="mb-8">
          {VIDEOS.length > 0 && (
            <article className="flex flex-col border border-[var(--color-olive-deep)]/40 bg-[oklch(0.16_0.035_250)] p-6 transition hover:border-[var(--color-olive)]/70">
              <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.28em] text-[var(--color-olive-pale)]">
                <span>▶ Video</span>
                <span className="text-[var(--color-bone)]/50">{VIDEOS[0].date}</span>
              </div>

              <div className="mt-5 aspect-[16/9] w-full border border-[var(--color-olive-deep)]/40 bg-[oklch(0.12_0.025_250)] overflow-hidden">
                <iframe
                  src={getVideoEmbedUrl(VIDEOS[0].driveId)}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>

              <h2 className="mt-5 font-display text-xl leading-snug text-[var(--color-bone)]">
                {VIDEOS[0].title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-bone)]/70">
                {VIDEOS[0].summary}
              </p>
              <div className="mt-5 text-[0.62rem] uppercase tracking-[0.28em] text-[var(--color-bone)]/55">
                Source: {VIDEOS[0].source}
              </div>
            </article>
          )}
        </div>

        {/* Remaining videos — 2 columns */}
        <div className="grid gap-6 md:grid-cols-2">
          {VIDEOS.slice(1).map((video) => (
            <article
              key={video.id}
              className="flex flex-col border border-[var(--color-olive-deep)]/40 bg-[oklch(0.16_0.035_250)] p-6 transition hover:border-[var(--color-olive)]/70"
            >
              <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.28em] text-[var(--color-olive-pale)]">
                <span>▶ Video</span>
                <span className="text-[var(--color-bone)]/50">{video.date}</span>
              </div>

              <div className="mt-5 aspect-[16/9] w-full border border-[var(--color-olive-deep)]/40 bg-[oklch(0.12_0.025_250)] overflow-hidden">
                <iframe
                  src={getVideoEmbedUrl(video.driveId)}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>

              <h2 className="mt-5 font-display text-xl leading-snug text-[var(--color-bone)]">
                {video.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-bone)]/70">
                {video.summary}
              </p>
              <div className="mt-5 text-[0.62rem] uppercase tracking-[0.28em] text-[var(--color-bone)]/55">
                Source: {video.source}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
