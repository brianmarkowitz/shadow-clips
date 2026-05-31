# shadow-clips

Hosted silhouette / shadow-projection clips for the community-theater production
**_The Reluctant Resurrection of Sherlock Holmes_**.

Each clip is a black-silhouette-on-white render of stage footage, intended for scrim
projection (light everywhere except the figure reads as a cast shadow).

**Live viewer:** https://brianmarkowitz.github.io/shadow-clips/

## Adding a clip

1. Drop the `.mp4` (and an optional `.jpg` poster frame) into `clips/`.
2. Add an entry to `clips.json`:
   ```json
   {
     "id": "sceneN",
     "title": "Scene N — …",
     "page": 0,
     "file": "clips/your_clip.mp4",
     "poster": "clips/your_clip.jpg",
     "source": "IMG_XXXX.MOV (cut …)",
     "notes": "…",
     "review": { "projectionist": "approved", "director": "pending" }
   }
   ```
   - `id` keys the clip's feedback thread — keep it stable and unique.
   - `review` is optional metadata for tracking sign-off; it is **not** shown on
     the page right now (status badges were removed — only a Page badge renders).
3. Commit and push — GitHub Pages serves the update automatically.

## Crew navigation & feedback

- The left **Chapters** sidebar is generated from `clips.json`; built scenes
  show as cards, not-yet-built scenes appear in the menu only. Each clip has a
  **Download .mp4** link.
- Each clip has a **＋ Comment** box with an **Insert timecode** button (grabs
  the video's current time so notes can point at an exact moment).
- The site is **open** — no passcode. It's an unlisted link (`noindex`); share
  the URL only with crew.
- **Comments save on the page only (per browser); no email is sent.** Email send
  was turned off because the work network blocks third-party form services. To
  turn it back on (works behind the firewall, no third party), deploy the Google
  Apps Script in [`feedback-backend/`](feedback-backend/) and POST to its `/exec`
  URL from `submitComment()` in `index.html`.
