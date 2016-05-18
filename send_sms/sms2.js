console.log('Loading a web page');
var page = require('webpage').create();
var url = 'http://ums.zj165.com/index.jsp';
setTimeout(function() {
  page.open(url, function (status) {
    console.log("Status: " + status);
    if(status === "success") {
    } else {
      phantom.exit();
    }
  });
}, 100);

setTimeout(function() {
  page.render('sms2.png');
}, 2000);




etTimeout(function() {
  page.render('sms2.png');
}, 2000);
phantom.exit();
