import satmar from "@/assets/gedolim/satmar.png.asset.json";
import hirsch from "@/assets/gedolim/hirsch.png.asset.json";
import briskerChaim from "@/assets/gedolim/brisker-chaim.png.asset.json";
import sonnenfeld from "@/assets/gedolim/sonnenfeld.png.asset.json";
import briskerRav from "@/assets/gedolim/brisker-rav.png.asset.json";
import chazonIsh from "@/assets/gedolim/chazon-ish.png.asset.json";
import wasserman from "@/assets/gedolim/wasserman.png.asset.json";
import munkacser from "@/assets/gedolim/munkacser.png.asset.json";
import feuerstein from "@/assets/gedolim/feuerstein.png.asset.json";

type Gadol = {
  name: string;
  subtitle: string;
  quote: string;
  source: string;
  img: { url: string };
};

const gedolim: Gadol[] = [
  {
    name: "Satmar Rebbe",
    subtitle: "R. Joel Teitelbaum · 1887–1979",
    quote:
      "It is a serious danger to the Jewish people if they point to those who do not keep the Torah and call them the leaders of the Jewish people. All the nations are thereby misled to think that they speak in the name of Jewry, and thus they are transformed into anti-Semites.",
    source: "Kinus Haklali, 1961",
    img: satmar,
  },
  {
    name: "Rabbi Samson Raphael Hirsch",
    subtitle: "1808–1889",
    quote:
      "The Torah united all the individual Jews and made them a nation — not because of their past, nor because of their future, but because they are the bearers of an eternal tradition, a people that fulfills its covenant with Hashem.",
    source: "Horeb",
    img: hirsch,
  },
  {
    name: "Reb Chaim Brisker",
    subtitle: "R. Chaim Soloveitchik · 1853–1918",
    quote:
      "The Jewish people have suffered many plagues — the Sadducees, Karaites, Shabbesai Zvi, Haskalah, Reform and many others. But the strongest of them all is Zionism, because its heresy focuses on the center of Judaism.",
    source: "Mishkenos Haro'im p. 269",
    img: briskerChaim,
  },
  {
    name: "Rabbi Yosef Chaim Sonnenfeld",
    subtitle: "Chief Rabbi of Jerusalem · 1848–1932",
    quote:
      "Truth and Peace — a historic publication written before the establishment of Israel, clearly affirming that Jews oppose subjugating the inhabitants of the land and seeking dominion through political force.",
    source: "Ha'emes Veha'shalom",
    img: sonnenfeld,
  },
  {
    name: "The Brisker Rav",
    subtitle: "R. Yitzchok Zev Soloveitchik · 1886–1959",
    quote:
      "The Zionist state is built on a foundation that denies the Torah. No Jew who is loyal to our heritage can lend it legitimacy.",
    source: "Collected responsa",
    img: briskerRav,
  },
  {
    name: "The Chazon Ish",
    subtitle: "R. Avraham Yeshaya Karelitz · 1878–1953",
    quote:
      "The leading halachic authority of the pre-state Yishuv. Guided the Torah world's principled separation from political Zionism and insisted on its religious illegitimacy.",
    source: "Collected rulings",
    img: chazonIsh,
  },
  {
    name: "Rabbi Elchonon Wasserman",
    subtitle: "Rosh Yeshiva of Baranovich · 1874–1941",
    quote:
      "The nationalist reinterpretation of Jewish identity is a grave religious error. We are a people because of Torah — not in spite of it, not alongside it.",
    source: "Ikvesa D'Meshicha",
    img: wasserman,
  },
  {
    name: "The Munkacser Rebbe",
    subtitle: "R. Chaim Elazar Shapiro · 1868–1937",
    quote:
      "Pre-war leader of Hungarian Orthodoxy who allied with the Satmar Rebbe in opposition to both political Zionism and the accommodationist path of Agudat Israel.",
    source: "Minchas Elazar",
    img: munkacser,
  },
  {
    name: "Rav Chaim Feuerstein shlit\"a",
    subtitle: "Rosh Yeshiva · On the draft tracks \"Kodkod\" and \"Ma'alos Tzur\"",
    quote:
      "One who goes [to the army] surrenders himself to the control and authority of a military whose very purpose is the uprooting of religion. He accepts upon himself a world that is the inversion of the yoke of Heaven — and by this he removes from himself the yoke of Heaven and places himself in clear danger of casting off the yoke of Torah and mitzvos in the gravest manner. May the Merciful One save us.",
    source: "Public statement, translated from the Hebrew",
    img: feuerstein,
  },
];

export function GedolimGrid() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {gedolim.map((g) => (
          <article key={g.name} className="flex flex-col">
            <div
              className="relative grain overflow-hidden border border-[oklch(0.82_0.02_80)]/60"
              style={{ aspectRatio: "3 / 4" }}
            >
              <img
                src={g.img.url}
                alt={g.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ filter: "grayscale(0.35) contrast(1.05)" }}
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 60%, oklch(0.12 0.008 80 / 0.55) 100%)",
                }}
              />
            </div>
            <h3 className="mt-5 font-display text-xl text-[oklch(0.2_0.02_80)]">
              {g.name}
            </h3>
            <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-[oklch(0.4_0.04_80)]">
              {g.subtitle}
            </div>
            <p className="mt-4 font-display text-base italic leading-relaxed text-[oklch(0.25_0.02_80)]">
              "{g.quote}"
            </p>
            <div className="mt-3 text-xs italic text-[oklch(0.45_0.04_80)]">
              — {g.source}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 border-t border-[oklch(0.82_0.02_80)]/60 pt-8">
        <p className="font-display text-xl md:text-2xl italic text-[oklch(0.2_0.02_80)]">
          Every Torah authority condemned Zionism from the very beginning;{" "}
          <span className="text-[var(--color-blood)] not-italic font-medium">
            none ever endorsed it.
          </span>
        </p>
      </div>
    </div>
  );
}
