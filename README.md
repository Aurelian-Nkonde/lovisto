# Lovisto Tours Transport & Enterprise — Astro 5 site

Static, photo-led website built from the company profile PDF only. All facts come
from that PDF; anything it does not state is marked `[TO BE CONFIRMED BY CLIENT]`.

## 1. Design rationale

The site is a documentary travel brand, not a template. Warm paper (#f3efe6)
carries most of the page, deep forest (#123c2f) holds the feature and closing
blocks, and a single signal yellow (#ffc20e) is reserved for actions and
accreditation accents. Tokens are provisional until exact brand hex codes arrive.

Type does the heavy lifting: DM Sans for tight, large editorial headlines and
neutral body copy, with Fraunces italic used sparingly as a human counterpoint
in the wordmark and key phrases. Both are self-hosted through
`@fontsource-variable`.

Layout is a 12-column editorial grid with solid hairline rules, asymmetric image
sizes and generous white space. There are no oversized section numbers, dashed
route decorations, icon-card grids, gradients or stock photos. Photography comes
from the company profile and is sized to its real resolution: the large blocks
use the high-resolution frames, while the smaller profile photos stay as
thumbnails in the "who we serve" cards and the six-frame strip. Motion is limited
to a short scroll reveal, image hover scale and optional parallax, all disabled
under `prefers-reduced-motion`.

## 2. Project tree

```
lovisto/
├── .env.example
├── .gitignore
├── README.md
├── astro.config.mjs
├── netlify.toml
├── package.json
├── package-lock.json
├── tsconfig.json
├── vercel.json
├── public/
│   ├── documents/lovisto-company-profile.pdf   # placeholder file
│   ├── favicon.svg
│   ├── og-default.jpg                          # social card built from a profile photo
│   └── robots.txt
└── src/
    ├── assets/images/                          # photographs cropped from the profile
    ├── components/
    │   ├── ContactForm.astro
    │   ├── Footer.astro
    │   ├── Header.astro
    │   ├── ImageSlot.astro
    │   ├── MapEmbed.astro
    │   ├── PageHero.astro
    │   ├── RouteMap.astro
    │   └── WhatsAppButton.astro
    ├── data/
    │   ├── audiences.ts
    │   ├── caseStudies.ts
    │   ├── company.ts
    │   ├── events.ts
    │   ├── fleet.ts
    │   ├── images.ts
    │   ├── services.ts
    │   └── site.ts
    ├── layouts/Base.astro
    ├── pages/
    │   ├── 404.astro
    │   ├── about.astro
    │   ├── contact.astro
    │   ├── fleet.astro
    │   ├── index.astro
    │   ├── procurement.astro
    │   ├── services.astro
    │   └── track-record.astro
    └── styles/global.css
```

## 3. Setup, run and deploy

```bash
cd lovisto
npm install
cp .env.example .env
npm run dev       # http://localhost:4321
npm run check     # TypeScript + Astro diagnostics
npm run build     # static output in dist/
npm run preview
```

**Form endpoint** — set `PUBLIC_FORM_ENDPOINT` in `.env`:

- Formspree: `https://formspree.io/f/your-id`
- Web3Forms: `https://api.web3forms.com/submit` plus `PUBLIC_FORM_ACCESS_KEY`

With no endpoint, the form offers a pre-filled email link and the WhatsApp
alternative still works.

**Netlify** — connect the repository. `netlify.toml` sets `npm run build` and
publish directory `dist`. Add `SITE_URL`, `PUBLIC_FORM_ENDPOINT` and, if needed,
`PUBLIC_FORM_ACCESS_KEY` in Site configuration → Environment variables.

**Vercel** — import the repository; `vercel.json` sets the Astro framework,
build command and output directory. Add the same environment variables in
Project settings → Environment Variables.

**Before launch:** set the live domain in `SITE_URL`, update the sitemap URL in
`public/robots.txt`, replace the profile PDF placeholder, and confirm all
placeholders listed in section 5.

## 4. Photographs

No stock images. Every photograph in `src/assets/images/` was cropped from the
Lovisto Tours company profile; `src/data/images.ts` records the alt text and
which page uses each file. `ImageSlot.astro` renders an optimised responsive
`<Image>` and falls back to a labelled slot if a file is ever removed.

Several profile photos are only 200–420 px wide. They are used at thumbnail size
in the "who we serve" cards and the home photo strip so they stay sharp. If the
client supplies the original camera files, drop them in with the same names —
Astro re-optimises at build time and the layout needs no change.

| File name | Used on | Profile photo |
| --- | --- | --- |
| `hero-coach-convoy.jpg` | Home hero, Fleet hero | Cover: coaches and van parked together |
| `services-transport.jpg` | Home services, Home CTA, About, Services | Van and group beside the road below a koppie |
| `services-tours.jpg` | Home hero, Services hero | Group on the rocks by the green pool |
| `services-groups.jpg` | Home services | Group and vans at a fuel stop |
| `serve-schools.jpg` | Home — who we serve | Lore Primary School learners under the trees |
| `serve-government.jpg` | Home — who we serve | Coach under the shade shelter |
| `serve-corporate.jpg` | Home — who we serve | Group on the cliff walkway |
| `serve-groups.jpg` | Home — who we serve | Robben Island museum with Table Mountain |
| `case-g20.jpg` | Home — selected work | 17–24 November 2025 G20 graphic |
| `case-lore-primary.jpg` | Home — selected work | Lore Primary School 2025 collage |
| `fleet-luxury-coach.jpg` | Home fleet, Fleet page | White coach beside the van |
| `fleet-semi-luxury-coach.jpg` | Home fleet, Fleet page | Coach under the shade shelter |
| `fleet-passenger-van.jpg` | Home fleet, Fleet page, Contact hero | Van and group on the open road |
| `fleet-game-drive.jpg` | Home hero, Home fleet, Fleet page | Open game-drive vehicle at sunset |
| `gallery-02.jpg` | Home feature, Home strip | Game-drive vehicle at sunset |
| `gallery-03.jpg` | Home strip | Lore Primary School learners |
| `gallery-04.jpg` | Home strip | Van and group beside the road |
| `gallery-05.jpg` | Home strip | Big Hole, Kimberley |
| `gallery-06.jpg` | Home strip, 404 | Van in a mountain pass |
| `gallery-07.jpg` | Home strip | Robben Island museum viewpoint |
| `gallery-08.jpg` | Home strip | Coach under the shelter |
| `about-vans.jpg` | About hero | Vans outside the building |
| `track-record-group.jpg` | Track record hero | Group at the cliff viewpoint |

## 5. Placeholders and information to request

**Text placeholders in code:** site/domain URL (`astro.config.mjs`, `.env.example`),
brand hex codes (`src/styles/global.css`), eight fleet capacity/specification
fields (`src/data/fleet.ts`), three case-study figures (`src/data/caseStudies.ts`),
and `public/documents/lovisto-company-profile.pdf`.

**Ask Lovisto Tours for:**

- confirmed brand hex codes and the final live domain
- fleet capacities, makes, models and on-board specifications for all four vehicles
- passenger and vehicle numbers for the G20 assignment, and the Lore Primary School destination plus learner/bus counts
- package details and rates (the PDF states only "5-star luxury to budget")
- testimonials or case-study quotes
- social media links and handles
- preferred WhatsApp greeting / message text
- opening hours and any after-hours contact policy
- exact map pin or coordinates for Stand no 12041
- the original high-resolution photographs behind the profile images
- a real company-profile PDF
# lovisto
# lovisto
