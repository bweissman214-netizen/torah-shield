import klalCrowd from "@/assets/scenes/klal-crowd.jpg.asset.json";
import silence1 from "@/assets/scenes/silence-1.jpg.asset.json";
import knesset from "@/assets/scenes/knesset.jpg.asset.json";
import learning from "@/assets/scenes/learning.jpg.asset.json";
import family from "@/assets/scenes/family.jpg.asset.json";
import galus from "@/assets/scenes/galus.jpg.asset.json";

type Card = {
  href: string;
  image: string;
  title: string;
  caption: string;
  icon: "people" | "mute" | "doc" | "question" | "heart" | "chain";
};

const CARDS: Card[] = [
  {
    href: "#klal",
    image: klalCrowd.url,
    title: "The Klal",
    caption:
      "We are one klal. What they face in Eretz Yisrael we feel everywhere.",
    icon: "people",
  },
  {
    href: "#silence",
    image: silence1.url,
    title: "The Silence",
    caption: "When it happens to us, the world looks away.",
    icon: "mute",
  },
  {
    href: "#intent",
    image: knesset.url,
    title: "On the Record",
    caption: "What Israeli leaders are saying out loud about the Olam HaTorah.",
    icon: "doc",
  },
  {
    href: "#serve",
    image: learning.url,
    title: "The Question",
    caption: "Why shouldn't frum boys serve? Facts. Outcomes. Torah perspective.",
    icon: "question",
  },
  {
    href: "#benefits",
    image: family.url,
    title: "Parashat HaMeonot",
    caption: "Stripped of benefits. Families under attack. Lives at risk.",
    icon: "heart",
  },
  {
    href: "#galus",
    image: galus.url,
    title: "The New Galus",
    caption: "From persecution-from-without to persecution-from-within.",
    icon: "chain",
  },
];

function Icon({ name }: { name: Card["icon"] }) {
  const stroke = "currentColor";
  const common = {
    fill: "none",
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "people":
      return (
        <svg viewBox="0 0 24 24" width={18} height={18}>
          <circle cx="9" cy="9" r="3" {...common} />
          <circle cx="17" cy="10" r="2.4" {...common} />
          <path d="M3 19c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" {...common} />
          <path d="M15 18.5c0-2.5 2-4 4-4s2.5 1 2.5 3" {...common} />
        </svg>
      );
    case "mute":
      return (
        <svg viewBox="0 0 24 24" width={18} height={18}>
          <path d="M4 10v4h3l5 4V6L7 10H4z" {...common} />
          <path d="M16 9l5 6M21 9l-5 6" {...common} />
        </svg>
      );
    case "doc":
      return (
        <svg viewBox="0 0 24 24" width={18} height={18}>
          <path d="M7 3h8l4 4v14H7z" {...common} />
          <path d="M9 12h8M9 16h8M9 8h4" {...common} />
        </svg>
      );
    case "question":
      return (
        <svg viewBox="0 0 24 24" width={18} height={18}>
          <circle cx="12" cy="12" r="9" {...common} />
          <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-1 .4-1.5 1-1.5 2.2" {...common} />
          <circle cx="12" cy="17.2" r="0.9" fill={stroke} />
        </svg>
      );
    case "heart":
      return (
        <svg viewBox="0 0 24 24" width={18} height={18}>
          <path
            d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"
            {...common}
          />
          <path d="M9 9l2 3-1 2 2 1" {...common} />
        </svg>
      );
    case "chain":
      return (
        <svg viewBox="0 0 24 24" width={18} height={18}>
          <path d="M10 14a4 4 0 0 1 0-5.7l2-2a4 4 0 0 1 5.7 5.7l-1.5 1.5" {...common} />
          <path d="M14 10a4 4 0 0 1 0 5.7l-2 2a4 4 0 0 1-5.7-5.7L7.8 10.5" {...common} />
        </svg>
      );
  }
}

export function SectionNavigator() {
  return (
    <section className="bg-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {CARDS.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="group flex flex-col border border-[var(--color-olive-deep)]/40 bg-[oklch(0.21_0.04_250)] transition-colors hover:border-[var(--color-olive)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={card.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[oklch(0.21_0.04_250)]"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="mx-auto -mt-9 mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-olive)] bg-[oklch(0.18_0.04_250)] text-[var(--color-olive-pale)]">
                  <Icon name={card.icon} />
                </span>
                <h4 className="text-center font-display text-base uppercase tracking-[0.18em] text-[var(--color-bone)]">
                  {card.title}
                </h4>
                <p className="mt-2 text-center text-sm leading-snug text-[var(--color-bone)]/65">
                  {card.caption}
                </p>
                <span className="mt-4 text-center text-[0.65rem] uppercase tracking-[0.28em] text-[var(--color-olive-pale)] transition-colors group-hover:text-[var(--color-bone)]">
                  Explore →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
