# Huston Archery

Coaching and master brand site for [hustonarchery.com](https://hustonarchery.com).

This is **Huston Archery**, not a squeeze page and not a school. The school stays at [levelup-archery.com](https://levelup-archery.com). Do not point this repo at `patrickhustonarchery.co.uk`.

Contact: [patrick@hustonarchery.com](mailto:patrick@hustonarchery.com).

## Run locally

Needs Node 20 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

writes a static site to `out/`. Serve that folder with any static host.

## Information architecture

| Path | Page |
| --- | --- |
| `/` | Home — who, the teaching idea, where to start |
| `/frameworks` | How he teaches |
| `/3d-aiming` | First thing with every athlete |
| `/clicker` | Trigger, not exam |
| `/front-arm` | Structure plus intent |
| `/wind` | After 3D Aiming; the air |
| `/foundations` | Technique / equipment / training / tournaments |
| `/coaching` | Work with Patrick |
| `/contact` | Mailto + form stub |
| `/school` | Pointer to Level Up |

Spine: *The shot is not over when the arrow leaves.*

## Brand

- Dark ground. Flo orange `#F98B1C` as the only accent.
- No Level Up gold (`#FFD700`). No black-and-gold app look.
- Voice: teaching voice. Honest, precise, slightly formal. Not “secret Olympic trick.”
- Photographs can be added later if Patrick supplies rights. This build is type and space.

The contact form opens a mail draft. It does not claim to send until Workspace mail is wired.

## Deploy

**Do not change live DNS for hustonarchery.com.** Victoria / Wren point the domain after Patrick has seen a preview.

### Vercel (preferred preview)

1. Import this GitHub repo in Vercel.
2. Framework: Next.js. Build: `npm run build`. Output is a static export.
3. Use the Vercel preview URL. When Patrick is happy, point `hustonarchery.com` at Vercel.

```bash
npx vercel
```

### GitHub Pages

This repo includes `.github/workflows/pages.yml`. In the repo: **Settings → Pages → GitHub Actions**. The workflow builds `out/` and publishes it. Private-repo Pages needs GitHub Pro; if Pages is unavailable, use Vercel.

## Sources

Copy is drawn from `BRIEF.md` in this repo and from Patrick’s Notion teaching notes (3D Aiming, clicker, front arm, wind, Foundations of Recurve, and the teaching summary of the 13 November 2025 session). Frameworks only — no raw athlete-session quotes.

`archery-super-app` was requested as a read-only corpus. This environment’s GitHub token received 404 for `patrickhustonoly1996/archery-super-app` (private, not in token scope). The site was not blocked on that; the brief and Notion notes cover the same teaching spine.

Facts treated as given: British Olympic recurve; Rio 2016; Tokyo 2020; British Target Champion, August 2026; National Tour stage that weekend; world record holder; British number one on and off for a decade; professional coach; 70m outdoor and field; home at Over Lawley Woods / the Wrekin.

Public context used for the British Archery map: Archery GB Target Championships (70m, 1440, National Tour) as the top of the domestic pyramid; World Cup / Europeans / Worlds / Games as the international line. Wikipedia / Olympedia / Archery GB for the older record (Rio, Tokyo, junior world 70m record, British 70m record, National Series titles). No invented results.
