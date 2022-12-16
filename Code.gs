function doGet(e) {
  const id = '1631yeruvmAQ4UyoF8lgFSADktm16dSoaktXbtI9a4vM';
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheets()[0];
  const data = sheet.getDataRange().getValues();
  Logger.log(data);

  const val = JSON.stringify(data);
  const temp = val;

  return ContentService.createTextOutput(temp).setMimeType(ContentService.MimeType.JSON);
}
