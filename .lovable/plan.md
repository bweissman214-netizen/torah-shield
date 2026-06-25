## Am Hashem Chai — Single-Page Advocacy Site

A somber, heavy single-page scrolling site documenting what the frum community in Israel faces. Mood is mournful and serious, not glossy activism.

### Visual Direction
- **Palette:** Deep charcoal/near-black background, bone-white text, **olive/army green** as the dominant accent (evoking IDF uniforms turned against the community). Muted blood-red used sparingly for the gravest moments (deaths, arrests, the bottom-line verdict). Aged parchment cream for Torah/quote sections.
- **Typography:** Serif display (Cormorant / Libre Caslon) for headlines; clean sans (Work Sans / Inter) for body. Hebrew (ונצעק אל ה׳) used as a sacred motif.
- **Texture:** Film grain overlay, desaturated imagery, slow fades. No bouncy motion.

### Sections (top to bottom)
Each content section (except Gedolim) gets **3 photo/video placeholders** rendered as styled dark `<MediaPlaceholder />` blocks with caption + play icon, swappable later.

1. **Hero** — "THE IDF IS MEANT TO PROTECT ALL JEWS IN ISRAEL… UNLESS THEY'RE FRUM." + ונצעק אל ה׳ + diaspora subtext.

2. **One Klal** — "The Frum community is one… equally at risk." — 3 placeholders (Rav Shternbuch video + 2 supporting).

3. **The Silence / Double Standard** — George Floyd vs. yeshiva bochur, police protecting Arabs/secular but beating frum boys. — 3 placeholders (yeshiva boys being attacked).

4. **Government Intent** — "The Israeli Government openly declares their intentions to dispose of the Olam Hatorah." — 3 placeholders (government officials).

5. **Why shouldn't frum boys serve?** — Q&A treatment. Stats (Tel Aviv / Arab population), boys going in frum and coming out secular (even frum units), Gedolim on the army. Sub-question: "Aren't there Frum Units?" — 3 placeholders.

6. **Stripped of Benefits — Parashat Hameonot** — Subsidies, daycare, yeshivos, elementary schools cut. Romema babies story. Arab Israelis qualify; jailed terrorists still receive bituach leumi. — 3 placeholders.

7. **The New Galus** — "Galus used to be non-Jews persecuting Jews. Now the antisemitism comes from an organized effort to eradicate Israel of Torah." — Herzl + Achad Ha'am pull-quotes. — 3 placeholders.

8. **A Jewish Country Without Torah** — Reflective transition: "What happens when a Jewish country is run without Torah and Halacha?" Leads into table.

9. **Yiddishkeit vs. Zionism — Comparison Table** (centerpiece)
   - Header: "SINCE MOUNT SINAI — 3,300 YEARS" vs. "150 YEARS"
   - Columns: **Yiddishkeit** (parchment-cream, serif) vs. **Zionism** (cold steel-grey, military green accents)
   - Rows: ORIGIN, FORM, METHOD, POSTURE, VOICE — using exact copy from the doc (covenant vs. co-opted nationalism; bearers of tradition vs. nation-state; Torah Law vs. Force; patient vs. impatient; rabbis & tradition vs. itself — "Not for Jews. Not for Judaism.")
   - Bottom line: *"These are not two versions of the same thing. They are different in kind — one is a religion, the other is a nationalism."*

10. **What the Gedolim Say** — "Wisdom across generations." Grid of 8 cards with rabbi photo (extracted from the uploaded doc), name, title/dates, and quote. No video placeholders here.
    - Satmar Rebbe (R. Joel Teitelbaum, 1887–1979)
    - Rabbi Samson Raphael Hirsch (1808–1889)
    - Reb Chaim Brisker (R. Chaim Soloveitchik, 1853–1918)
    - Rabbi Yosef Chaim Sonnenfeld (1848–1932)
    - The Brisker Rav (R. Yitzchok Zev Soloveitchik, 1886–1959)
    - The Chazon Ish (R. Avraham Yeshaya Karelitz, 1878–1953)
    - Rabbi Elchonon Wasserman (1874–1941)
    - The Munkacser Rebbe (R. Chaim Elazar Shapiro, 1868–1937)
    - Closing line: *"Every Torah authority condemned Zionism from the very beginning; none ever endorsed it."*

11. **Resources** — Card list (placeholder links: Torahjews.org and related).

12. **Footer** — Hebrew motif, Torahjews.org credit.

### Technical Notes
- Single route: `src/routes/index.tsx`, sections under `src/components/sections/`.
- `<MediaPlaceholder kind="video|photo" caption="..." />` reusable component.
- `<ComparisonTable />` data-driven from a rows array.
- `<GadolCard />` component; rabbi photos copied from `parsed-documents://` into `src/assets/gedolim/`.
- Design tokens in `src/styles.css`: `--color-bg` (charcoal), `--color-fg` (bone), `--color-olive` (army green primary accent), `--color-blood` (sparing red), `--color-parchment`, `--color-steel`. Fonts loaded via `<link>` in `__root.tsx`.
- Update `__root.tsx` head: title "Am Hashem Chai", meta description, retain `<Outlet />`.
- Subtle scroll-triggered fades; no flashy motion.

### Out of Scope (this pass)
- Real videos, real article links (placeholders only)
- Backend, forms, donations, i18n toggle
