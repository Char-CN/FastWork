console.log('Loading a web page');
var page = require('webpage').create();
var url = 'http://phantomjs.org/';

url = 'http://phantomjs.org/quick-start.html';
page.open(url, function (status) {
  console.log("Status: " + status);
  if(status === "success") {
    page.render('example.png');
  }
  phantom.exit();
});
