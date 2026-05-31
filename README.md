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
   - `id` must be stable and unique — it keys the card anchor, the sidebar link,
     and the clip's saved comments.
   - `review` is optional metadata for tracking sign-off; it is **not** shown on
     the page right now (status badges were removed — only a Page badge renders).
3. Commit and push — GitHub Pages serves the update automatically.

## Crew navigation

- The left **Chapters** sidebar is generated from `clips.json`; built scenes
  show as cards, not-yet-built scenes appear in the menu only. Each clip has a
  **Download .mp4** link.
- The site is **open** — no passcode. It's an unlisted link (`noindex`); share
  the URL only with crew.
- Each clip has a **comment icon** (💬) to add a note and a **timecode** button
  (⏱) that stamps the video's current time into the note. Each saved comment has
  a **trash icon** (🗑) to delete it.
- **Comments save to that viewer's own browser only** (`localStorage`, keyed by
  clip `id`) — no server, no email. Notes are not shared between people or
  devices; treat them as a personal scratch pad while reviewing.
