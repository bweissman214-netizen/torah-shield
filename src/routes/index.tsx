import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { MediaTriptych } from "@/components/site/MediaPlaceholder";
import { ComparisonTable } from "@/components/site/ComparisonTable";
import { GedolimGrid } from "@/components/site/GedolimGrid";
import { Crest, Flourish } from "@/components/site/Crest";
import { SectionNavigator } from "@/components/site/SectionNavigator";
import { HeroBanner } from "@/components/site/HeroBanner";
import { ParchmentQuote, ParchmentNote } from "@/components/site/ParchmentQuote";
import silence1 from "@/assets/scenes/silence-1.jpg.asset.json";
import silence2 from "@/assets/scenes/silence-2.jpg.asset.json";
import silence3 from "@/assets/scenes/silence-3.jpg.asset.json";
import heroArrest from "@/assets/scenes/hero-arrest.jpg.asset.json";
import herzlPortrait from "@/assets/scenes/herzl.jpg.asset.json";
import achadPortrait from "@/assets/scenes/achad-haam.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Am Hashem Chai — Stand With Our Brothers In Israel" },
      {
        name: "description",
        content:
          "The IDF is meant to protect all Jews in Israel — unless they're frum. Diaspora Jews must know what our brothers face each day.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="grain min-h-screen overflow-x-hidden bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* HERO */}
      <header className="relative grain overflow-hidden">
        {/* dark backdrop */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 70% at 50% 0%, oklch(0.26 0.05 250) 0%, oklch(0.16 0.035 250) 60%, oklch(0.12 0.025 250) 100%)",
          }}
        />

        {/* Top nav with crest lockup */}
        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 md:px-10 md:py-6 border-b border-[var(--color-olive-deep)]/30">
          <a href="#top" className="flex items-center gap-3">
            <Crest size={44} />
            <span className="leading-tight">
              <span className="block font-display text-base md:text-lg tracking-[0.18em] text-[var(--color-bone)]">
                AM HASHEM CHAI
              </span>
              <span className="block text-[0.62rem] md:text-[0.68rem] uppercase tracking-[0.28em] text-[var(--color-olive-pale)]">
                Ha'machazir Shechina Tzion
              </span>
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-7 text-[0.68rem] uppercase tracking-[0.24em] text-[var(--color-bone)]/65">
            <a href="#klal" className="hover:text-[var(--color-olive-pale)]">The Klal</a>
            <a href="#silence" className="hover:text-[var(--color-olive-pale)]">The Silence</a>
            <a href="#table" className="hover:text-[var(--color-olive-pale)]">Yiddishkeit vs. Zionism</a>
            <a href="#gedolim" className="hover:text-[var(--color-olive-pale)]">Gedolim</a>
            <a href="#resources" className="hover:text-[var(--color-olive-pale)]">Resources</a>
          </div>
        </nav>

        {/* Banner — trilingual lockup over Jerusalem */}
        <HeroBanner />

        {/* IDF statement — full-bleed cinematic with arrest photo as backdrop */}
        <div className="relative">
          <img
            src={heroArrest.url}
            alt="A young yeshiva bochur in a Jerusalem alleyway as soldiers stand by"
            className="absolute inset-0 h-full w-full object-cover object-center"
            width={1600}
            height={900}
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.12 0.025 250 / 0.65) 0%, oklch(0.14 0.03 250 / 0.35) 45%, oklch(0.12 0.025 250 / 0.8) 100%)",
            }}
          />
          <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28 text-center fade-in">
            <div className="flex items-center justify-center gap-3">
              <Flourish />
              <span
                dir="rtl"
                className="font-hebrew text-2xl md:text-3xl text-[var(--color-olive-pale)] tracking-wide"
              >
                ונצעק אל ה׳
              </span>
              <Flourish flip />
            </div>
            <h1 className="mt-8 font-display text-4xl md:text-6xl lg:text-7xl leading-[1.04] text-[var(--color-bone)]">
              The IDF is meant to protect{" "}
              <em className="text-[var(--color-olive-pale)] not-italic">all Jews</em> in Israel…
              <br />
              <span className="text-[var(--color-bone)]">unless they're </span>
              <span className="italic text-[var(--color-olive-pale)]">frum.</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base md:text-lg text-[var(--color-bone)]/75 leading-relaxed">
              Diaspora Jews must know what our brothers in Eretz Yisrael face each day.
            </p>

            {/* three bullet rows with gold icon chips */}
            <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
              {[
                { label: "Beatings in the streets.", icon: "shield" as const },
                { label: "Arrests for the crime of learning Torah.", icon: "cuff" as const },
                { label: "A government that openly declares its intent to be done with the Olam HaTorah.", icon: "pillar" as const },
              ].map((b) => (
                <div key={b.label} className="flex flex-col items-center gap-3 text-center">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[var(--color-olive)] text-[var(--color-olive-pale)]">
                    <BulletIcon name={b.icon} />
                  </span>
                  <p className="text-sm leading-snug text-[var(--color-bone)]/85 max-w-[18ch]">
                    {b.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--color-olive)]/60 to-transparent" />
      </header>



      {/* Section navigator — 6 picture cards */}
      <SectionNavigator />


      {/* 1 — ONE KLAL */}
      <Section
        id="klal"
        eyebrow="One Klal · One Fate"
        title={
          <>
            The frum community is{" "}
            <em className="text-[var(--color-olive-pale)]">one</em> — no
            matter what language we speak.
          </>
        }
        lede={
          <>
            We're across the ocean, but we are equally at risk. What is done to
            our brothers in Yerushalayim, in Bnei Brak, in Beitar — is done to
            us. We are one people, one Torah, one neshama.
          </>
        }
      >
        <MediaTriptych
          items={[
            { kind: "video", caption: "Rav Moshe Sternbuch shlit\"a — a call to klal Yisrael" },
            { kind: "video", caption: "Gathering of diaspora rabbanim in solidarity" },
            { kind: "photo", caption: "Tehillim asifa across continents — one tefillah" },
          ]}
        />
      </Section>

      {/* 2 — THE SILENCE */}
      <Section
        id="silence"
        eyebrow="The Silence."
        title={
          <>
            When George Floyd is attacked, the world is in an uproar.
            <br />
            When it's a Yeshiva bochur?{" "}
            <em className="text-[var(--color-blood)]">Silence.</em>
          </>
        }
        lede={
          <>
            When Arabs protest, the police protect them. When secular Israelis
            protest, the police protect them. When frum boys protest? The
            police beat them and arrest them. Cameras roll. The world looks
            away.
          </>
        }
      >
        <MediaTriptych
          items={[
            { kind: "photo", image: silence1.url, caption: "Riot police vs. bochurim — a narrow alleyway in the Old City" },
            { kind: "photo", image: silence2.url, caption: "A bochur, a fallen sefer, and the shadow of a soldier" },
            { kind: "photo", image: silence3.url, caption: "Bochurim led out of a beis medrash at gunpoint" },
          ]}
        />
      </Section>

      {/* 3 — GOVERNMENT INTENT */}
      <Section
        id="intent"
        eyebrow="On the Record"
        title={
          <>
            The Israeli government openly declares its intent to{" "}
            <em className="text-[var(--color-blood)]">dispose of the Olam HaTorah.</em>
          </>
        }
        lede={
          <>
            These are not fringe voices. These are sitting ministers,
            coalition members, and party leaders — saying out loud, on the
            record, what they plan to do to the world of Torah.
          </>
        }
      >
        <MediaTriptych
          items={[
            { kind: "video", caption: "Minister: \"We will break the chareidi sector.\"" },
            { kind: "video", caption: "Knesset speech — \"No more yeshiva exemptions, ever.\"" },
            { kind: "video", caption: "Coalition press conference on the draft bill" },
          ]}
        />
      </Section>

      {/* 4 — WHY SHOULDN'T FRUM BOYS SERVE */}
      <Section
        id="serve"
        eyebrow="The Question Everyone Asks"
        title={
          <>
            "Doesn't the IDF need more soldiers? Why{" "}
            <em>shouldn't</em> frum boys serve?"
          </>
        }
        lede={
          <>
            The question sounds reasonable — until you look at the numbers,
            the outcomes, and what every Gadol of the last century has said.
          </>
        }
      >
        <div className="grid gap-8 md:grid-cols-3">
          <Stat
            big="Tel Aviv"
            label="Draft compliance is lowest in Israel's most secular city — yet the pressure is aimed at yeshivos."
          />
          <Stat
            big="≈ 21%"
            label="of Israeli citizens are Arab — fully exempted from the draft. No protest, no police, no arrests."
          />
          <Stat
            big="Most"
            label="frum boys who enter the army — including 'frum units' — leave less observant than they entered. Many leave Torah entirely."
          />
        </div>

        <div className="mt-12 border-l-2 border-[var(--color-olive)] pl-6 max-w-3xl">
          <div className="eyebrow mb-3">What the Gedolim are saying</div>
          <p className="font-display text-xl md:text-2xl italic leading-snug text-[var(--color-bone)]/85">
            "A yeshiva bochur belongs in the beis medrash. To pull him out
            is to attack the foundation of klal Yisrael."
          </p>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-2xl md:text-3xl text-[var(--color-bone)]">
            "But aren't there frum units, specifically so bochurim can serve
            and keep halacha?"
          </h3>
          <p className="mt-4 max-w-2xl text-[var(--color-bone)]/70">
            On paper, yes. In practice — the testimony of those who came out
            tells a very different story. Mixed environments. Pressure on
            tefillah and Torah seder. Officers and chaplains tasked with
            reshaping Jewish identity, not protecting it.
          </p>
        </div>

        <div className="mt-12">
          <MediaTriptych
            items={[
              { kind: "video", caption: "Testimony: \"I went in shomer Shabbos. I came out broken.\"" },
              { kind: "photo", caption: "Internal IDF chaplaincy materials targeting frum recruits" },
              { kind: "video", caption: "Rosh yeshiva on the spiritual cost of conscription" },
            ]}
          />
        </div>
      </Section>

      {/* 5 — STRIPPED OF BENEFITS */}
      <Section
        id="benefits"
        eyebrow="Parashat HaMeonot"
        title={
          <>
            Stripped of{" "}
            <em className="text-[var(--color-blood)]">every benefit</em> a
            citizen is owed.
          </>
        }
        lede={
          <>
            Daycare subsidies cut. Funding to yeshivos and elementary schools
            slashed. Family support gutted. The state has decided the frum
            community is the one population it does not owe protection or
            services to.
          </>
        }
      >
        <div className="grid gap-10 md:grid-cols-2 mb-14">
          <Callout
            title="Romema, 5784"
            body="Babies passed away in an overwhelmed daycare. Parents and rabbanim said openly: with proper funding, there would have been enough teachers to watch them. The state had cut the funding."
          />
          <Callout
            title="Who still qualifies?"
            body="Arab Israelis qualify for the same benefits the frum community is being denied. Arabs imprisoned for terror attacks still collect Bituach Leumi and full state benefits. Only one population is being singled out."
          />
        </div>
        <MediaTriptych
          items={[
            { kind: "photo", caption: "Articles from Romema after the daycare tragedy" },
            { kind: "video", caption: "Mother of seven: \"They cut our daycare to break us.\"" },
            { kind: "photo", caption: "Yeshiva ketana shuttered mid-zman — budget pulled" },
          ]}
        />
      </Section>

      {/* 6 — THE NEW GALUS */}
      <Section
        id="galus"
        eyebrow="The New Galus"
        title={
          <>
            Galus used to be the goyim persecuting Jews. Now the antisemitism
            comes from an{" "}
            <em className="text-[var(--color-blood)]">
              organized effort to eradicate Israel of Torah.
            </em>
          </>
        }
      >
        <div className="grid gap-6 md:grid-cols-3 mb-14">
          <ParchmentQuote
            portrait={herzlPortrait.url}
            quote="When once the Jews shall have nothing to fear from us, they will be the most exploited and the most despised of all peoples."
            attribution="Theodor Herzl"
            role="Founder of political Zionism"
          />
          <ParchmentQuote
            portrait={achadPortrait.url}
            quote="This is not the Jewish state we dreamed of. It is something else entirely — a nation among the nations, in the worst sense."
            attribution="Achad Ha'am"
            role="Early Zionist thinker"
          />
          <ParchmentNote
            heading="What happens when a Jewish country is run without Torah and Halacha?"
            body="It stops being Jewish in any meaningful sense."
          />
        </div>

        <MediaTriptych
          items={[
            { kind: "video", caption: "Historian: the founding Zionists' war on Torah Jewry" },
            { kind: "photo", caption: "Archival cartoons mocking the chareidi community — state press, 1950s" },
            { kind: "video", caption: "From persecution-from-without to persecution-from-within" },
          ]}
        />
      </Section>

      {/* 7 — TRANSITION TO TABLE */}
      <Section
        id="without-torah"
        eyebrow="The Question Beneath It All"
        title={
          <>
            What happens when a Jewish country is run{" "}
            <em className="text-[var(--color-olive-pale)]">
              without Torah and Halacha?
            </em>
          </>
        }
        lede={
          <>
            It stops being Jewish in any meaningful sense. It becomes a
            nation-state — armed, anxious, and at war with the very tradition
            that gave its people a name.
          </>
        }
      />

      {/* 8 — COMPARISON TABLE */}
      <section id="table" className="bg-[var(--color-background)]">
        <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
          <ComparisonTable />
        </div>
      </section>

      {/* 9 — GEDOLIM */}
      <Section
        id="gedolim"
        tone="parchment"
        eyebrow="Wisdom Across Generations"
        title={
          <span className="text-[oklch(0.18_0.02_80)]">
            What the Gedolim Say
          </span>
        }
        lede={
          <span className="text-[oklch(0.35_0.03_80)]">
            Great Torah minds, united in understanding — from Sinai's bearers
            of tradition, to the rosh yeshivos who watched the state rise.
          </span>
        }
      >
        <GedolimGrid />
      </Section>

      {/* 10 — RESOURCES */}
      <Section
        id="resources"
        eyebrow="Learn · Share · Daven"
        title="Resources"
        lede="A starting library for diaspora Jews who want to understand what is happening, and what our gedolim have said about it."
      >
        <div className="grid gap-px bg-[var(--color-border)] md:grid-cols-2">
          {[
            {
              title: "Torahjews.org",
              desc: "Central english-language hub for the Torah-true response to political Zionism.",
            },
            {
              title: "Va'ad L'Hatzolas Nidchei Yisrael",
              desc: "Helping families in Eretz Yisrael whose benefits have been cut.",
            },
            {
              title: "Statements of the Moetzes",
              desc: "Collected public declarations of the Moetzes Gedolei HaTorah on the draft.",
            },
            {
              title: "Tehillim & Asifa Schedules",
              desc: "Find a tehillim gathering near you — or organize one.",
            },
          ].map((r) => (
            <a
              key={r.title}
              href="#"
              className="group block bg-[var(--color-background)] p-8 transition-colors hover:bg-[var(--color-card)]"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl text-[var(--color-bone)]">
                  {r.title}
                </h3>
                <span
                  aria-hidden
                  className="text-[var(--color-olive-pale)] transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
              <p className="mt-3 text-[var(--color-bone)]/65">{r.desc}</p>
            </a>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--color-olive-deep)]/60 bg-[oklch(0.12_0.006_80)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div
            className="font-hebrew text-3xl text-[var(--color-olive-pale)] tracking-wide"
            dir="rtl"
          >
            ונצעק אל ה׳ אלקי אבותינו
          </div>
          <p className="mt-6 max-w-2xl font-display text-xl italic text-[var(--color-bone)]/75">
            Am Hashem chai. The Torah is not negotiable. The neshama of klal
            Yisrael is not for sale.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-[var(--color-border)] pt-6 text-xs uppercase tracking-[0.24em] text-[var(--color-bone)]/45">
            <span>Am Hashem Chai · A diaspora witness project</span>
            <span>In memory of those silenced.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- Small subcomponents ---------- */

function BulletIcon({ name }: { name: "shield" | "cuff" | "pillar" }) {
  const c = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "shield":
      return (
        <svg viewBox="0 0 24 24" width={14} height={14}>
          <path d="M12 3l7 2v6c0 4.5-3 8-7 10-4-2-7-5.5-7-10V5l7-2z" {...c} />
          <path d="M9.5 12l2 2 3.5-4" {...c} />
        </svg>
      );
    case "cuff":
      return (
        <svg viewBox="0 0 24 24" width={14} height={14}>
          <circle cx="8" cy="13" r="4" {...c} />
          <circle cx="16" cy="13" r="4" {...c} />
          <path d="M8 9V6M16 9V6" {...c} />
        </svg>
      );
    case "pillar":
      return (
        <svg viewBox="0 0 24 24" width={14} height={14}>
          <path d="M3 20h18M4 8h16M6 8v12M10 8v12M14 8v12M18 8v12M3 8l9-5 9 5" {...c} />
        </svg>
      );
  }
}


function Stat({ big, label }: { big: string; label: string }) {
  return (
    <div className="border-t border-[var(--color-olive-deep)] pt-6">
      <div className="font-display text-5xl text-[var(--color-olive-pale)] md:text-6xl">
        {big}
      </div>
      <p className="mt-4 text-[var(--color-bone)]/70 leading-relaxed">{label}</p>
    </div>
  );
}

function Callout({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-[var(--color-border)] bg-[var(--color-card)]/60 p-8">
      <div className="eyebrow mb-3 text-[var(--color-blood)]">{title}</div>
      <p className="font-display text-lg italic leading-relaxed text-[var(--color-bone)]/85 md:text-xl">
        {body}
      </p>
    </div>
  );
}

function Pullquote({
  quote,
  attribution,
}: {
  quote: string;
  attribution: string;
}) {
  return (
    <blockquote className="border-l-2 border-[var(--color-blood)] pl-6">
      <p className="font-display text-xl italic leading-snug text-[var(--color-bone)] md:text-2xl">
        "{quote}"
      </p>
      <footer className="mt-4 text-xs uppercase tracking-[0.24em] text-[var(--color-bone)]/55">
        — {attribution}
      </footer>
    </blockquote>
  );
}
