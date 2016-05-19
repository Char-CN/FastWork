var page = require('webpage').create();
var log = function(str) {
  console.log(getDate() + " " + str);
};
var render = function(step) {
  log('render picture_send' + step + '.png start .');
  page.render('picture_send' + step + '.png');
  log('render picture_send' + step + '.png stop  .');
};
var getDate = function(){
  date = new Date();
  var yyyy = date.getFullYear();//年
  var MM = date.getMonth()+1;//月 月比实际月份要少1
  var dd = date.getDate();//日
  var HH = date.getHours();//HH
  var mm = date.getMinutes();//MM
  var ss = date.getSeconds();//ss
  ss = ss < 10 ? "0" + ss : ss;
  return yyyy + "-" + MM + "-" + dd + " " + HH + ":" + mm + ":" + ss;
};
var wait_time = 0;
var wait = function(add_time) {
  wait_time_ = wait_time;
  wait_time += add_time;
  return wait_time_;
};

log('The default user agent is ' + page.settings.userAgent);
//page.settings.userAgent = 'SpecialAgent';

// open page
setTimeout(function() {
  page.open('http://ums.zj165.com/index.jsp', function(status) {
    log("Status: " + status);
    if(status === "success") {
      ;
    } else {
      phantom.exit();
    }
  });
}, wait(3000));

// save pic1
setTimeout(function() {
  render(1);
}, wait(1000));

// fill form
setTimeout(function() {
  page.evaluate(function() {
    var code = '';
    var user_name = '';
    var password = '';
    $("#spCode").val(code);
    $("#userName").val(user_name);
    $("#password").val(password);
  });
}, wait(1000));

// save pic2
setTimeout(function() {
  render(2);
}, wait(1000));

// click login (a link)
setTimeout(function() {
  log('event 登录 start .');
  page.evaluate(function() {
    var a = document.getElementsByClassName('login_btn')[0];
    var e = document.createEvent('MouseEvents');
    e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
  });
  log('event 登录 stop  .');
}, wait(1000));

// save pic3
setTimeout(function() {
  render(3);
}, wait(1000));

// click 短信
setTimeout(function() {
  log('event 短信 start .');
  page.evaluate(function() {
    var a = document.getElementById('bizNav110201');
    var e = document.createEvent('MouseEvents');
    e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
  });
  log('event 短信 stop  .');
}, wait(3000));

// save pic4
setTimeout(function() {
  render(4);
}, wait(1000));

// fill form
setTimeout(function() {
  page.evaluate(function() {
    $("#sendTitleTextArea").val('自动化测试之哈哈');
    $("#recieveMdnInput").val('15618194808');
  });
}, wait(1000));

// save pic5
setTimeout(function() {
  render(5);
}, wait(1000));

// click 发送 (a link)
setTimeout(function() {
  log('event 发送 start .');
  page.evaluate(function() {
    var a_s = document.getElementsByClassName('confimbtn2 w120 mar10');
    var a ;//= a_s[1];
    for (var i in a_s) {
        //log(a_s[i].innerHTML);
        if (a_s[i].innerHTML == "发送") {
            a = a_s[i];
        }
    }
    var e = document.createEvent('MouseEvents');
    e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
  });
  log('event 发送 stop  .');
}, wait(3000));

// save pic6
setTimeout(function() {
  render(6);
}, wait(1000));

// click 确定发送 (a link)
setTimeout(function() {
  log('event 确定发送 start .');
  page.evaluate(function() {
    var a = document.getElementById('confirmSendBtn');
    var e = document.createEvent('MouseEvents');
    e.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    a.dispatchEvent(e);
  });
  log('event 确定发送 stop  .');
}, wait(3000));

// save pic7
setTimeout(function() {
  render(7);
}, wait(1000));

// exit ....
setTimeout(function() {
  log('exit...');
  phantom.exit();
}, wait(0));

