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
     "title": "Scene N — …",
     "page": 0,
     "file": "clips/your_clip.mp4",
     "poster": "clips/your_clip.jpg",
     "source": "IMG_XXXX.MOV (cut …)",
     "notes": "…"
   }
   ```
3. Commit and push — GitHub Pages serves the update automatically.
