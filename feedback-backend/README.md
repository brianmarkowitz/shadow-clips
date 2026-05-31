# Crew feedback backend (optional — makes comments shared + emailed)

Out of the box, comments left on the site are saved in **each visitor's own
browser** and submitting opens a pre-filled email to `bmarko@gmail.com`. That
works with zero setup, but comments aren't shared between people.

To make comments **shared (everyone sees them on the page)** and **emailed to
you automatically**, deploy this tiny Google Apps Script (free, no third party,
no ads). ~2 minutes:

1. Go to <https://sheets.new> to create a Google Sheet (this is where comments
   are stored). Leave it open.
2. In that sheet: **Extensions → Apps Script**.
3. Delete the starter code, paste in **`Code.gs`** from this folder, and **Save**.
4. **Deploy → New deployment** → gear icon → **Web app**. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
   Click **Deploy**, authorize when prompted (it's your own script).
5. Copy the **Web app URL** (ends in `/exec`).
6. In `../index.html`, set `const FEEDBACK_URL = "<that /exec URL>";` and push.

After that, every crew comment is written to the sheet, shows on the page for
everyone, and emails `bmarko@gmail.com`. To change the notify address, edit
`NOTIFY_EMAIL` at the top of `Code.gs` and redeploy.
