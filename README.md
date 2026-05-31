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
   - `review` drives the status badges (`approved` → green ✓, anything else →
     amber pending). Set `"director": "approved"` once the director signs off.
3. Commit and push — GitHub Pages serves the update automatically.

## Crew navigation & feedback

- The left **Chapters** sidebar and per-clip **status badges** are generated
  from `clips.json`. Each clip has a **Download .mp4** link.
- Each clip has a **Crew feedback** box with an **Insert timecode** button
  (grabs the video's current time so notes can point at an exact moment).
- The site is behind a soft **passcode gate** (client-side only — fine for an
  unlisted link, not real security).
- By default comments are stored per-browser and submitting opens a pre-filled
  email to the projectionist. To make comments **shared + auto-emailed**, deploy
  the helper in [`feedback-backend/`](feedback-backend/) and set `FEEDBACK_URL`
  in `index.html`.
