/**
 * Shadow Clips — crew feedback backend (Google Apps Script web app).
 *
 * What it does:
 *   - doPost: stores a comment row in the bound Google Sheet and emails NOTIFY_EMAIL.
 *   - doGet:  returns the comments for a scene as JSON (or JSONP if ?callback= is set;
 *             the site reads via JSONP because Apps Script can't set CORS headers).
 *
 * Deploy: see README.md in this folder. After deploying, copy the /exec URL into
 * FEEDBACK_URL at the top of ../index.html and push.
 */
const NOTIFY_EMAIL = 'bmarko@gmail.com';
const SHEET_NAME = 'comments';

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['ts', 'scene', 'title', 'page', 'name', 'comment']);
  }
  return sh;
}

function doGet(e) {
  const scene = (e.parameter.scene || '').toString();
  const cb = (e.parameter.callback || '').toString();
  const rows = sheet_().getDataRange().getValues();
  const out = [];
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    if (!scene || String(r[1]) === scene) {
      out.push({ ts: Number(r[0]) || 0, scene: r[1], name: r[4], comment: r[5] });
    }
  }
  const json = JSON.stringify(out);
  if (cb) {
    return ContentService.createTextOutput(cb + '(' + json + ')')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  let d = {};
  try { d = JSON.parse(e.postData.contents); } catch (err) {}
  const ts = Number(d.ts) || Date.now();
  sheet_().appendRow([ts, d.scene || '', d.title || '', d.page || '', d.name || 'Anonymous', d.comment || '']);
  try {
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: 'Shadow Clips feedback — ' + (d.title || d.scene || 'a clip'),
      body: 'Scene: ' + (d.title || d.scene) +
            '\nFrom: ' + (d.name || 'Anonymous') +
            '\nWhen: ' + new Date(ts).toString() +
            '\n\n' + (d.comment || '') +
            '\n\n— shadow-clips crew feedback'
    });
  } catch (err) {}
  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
