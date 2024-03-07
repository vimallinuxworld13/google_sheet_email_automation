function main() {
  // access google sheet

  var wb = SpreadsheetApp.getActiveSpreadsheet();

  // access sheet with data

  var sheet = wb.getSheetByName('Summary');

  // access the data in a var

  var data = sheet.getRange(1,1, sheet.getLastRow(), sheet.getLastColumn()).getDisplayValues();


  // define data points

  var name = data[1][1];
  var email = data[1][2];
  var phone = data[1][3];
  var remarks = data[1][4];

  // mailing list

  var listEmail = ['vimal.linuxworld@gmail.com'];

  // create template object for dyn contruct html

  var htmlTemplate = HtmlService.createTemplateFromFile('email');

  // define html var
  htmlTemplate.name = name;
  htmlTemplate.email = email;
  htmlTemplate.phone = phone;
  htmlTemplate.remarks = remarks;

  // evalute template and return html output object
  var  htmlForEmail = htmlTemplate.evaluate().getContent();

  // send email
  GmailApp.sendEmail(
    listEmail,
    'hi test auto subject' + name,
    'this email contain html',
    {htmlBody: htmlForEmail}
  )

















  
}
