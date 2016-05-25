function Self(url) {

	/**
	 * 基础变量
	 */

	this.url = url;
	this.page = require('webpage').create();
	this.args = require('system').args;
	this.login_info = {};
	this.login_info.code = this.args[1];
	this.login_info.user_name = this.args[2];
	this.login_info.password = this.args[3];
	this.sms = {};
	this.sms.content = '自动化测试之手机名单上传:insert is here!';
	this.sms.path = '/Users/hyy/FastWork/send_sms/person.txt';

	/**
	 * 封装函数
	 */

	var getDate = function() {
		var date = new Date();
		var yyyy = date.getFullYear();
		var MM = date.getMonth() + 1;
		var dd = date.getDate();
		var HH = date.getHours();
		var mm = date.getMinutes();
		var ss = date.getSeconds();
		ss = ss < 10 ? "0" + ss : ss;
		return yyyy + "-" + MM + "-" + dd + " " + HH + ":" + mm + ":" + ss;
	};
	this.getDate = getDate;

	var log = function(str) {
		console.log(this.getDate() + " " + str);
	};
	this.log = log;

	var exit = function() {
		this.log('退出程序...');
		this.log('生成' + (this.next() - 1) + '张图片');
		this.log('耗时' + (this.wait(0)) + '毫秒');
		phantom.exit();
	};
	this.exit = exit;

	this.wait_time = 0;
	this.wait = function(add_time) {
		var wait_time_ = this.wait_time;
		this.wait_time += add_time;
		return wait_time_;
	};

	this.next_picture = 1;
	this.next = function() {
		return this.next_picture++;
	};

	this.render = function(step) {
		this.page.render('picture_send' + step + '.png');
		this.log('render picture_send' + step + '.png');
	};

	/**
	 * 回调函数
	 */

	this.page.onConsoleMessage = function(str) {
		console.log(getDate() + " [onConsoleMessage] " + str);
	}

	this.page.onUrlChanged = function(str) {
		console.log(getDate() + " [onUrlChanged] " + str);
	};
};

var self = new Self('http://ums.zj165.com/index.jsp');

// self.page.settings.userAgent = 'SpecialAgent';
self.log('The default user agent is ' + self.page.settings.userAgent);
self.log('system args : ' + self.args);

setTimeout(function() {
	self.log('打开主页');
	self.page.open(self.url, function(status) {
		log("Status: " + status);
		if (status != "success") {
			phantom.exit();
		}
	});
}, self.wait(3000));

setTimeout(function() {
	self.render(self.next());
}, self.wait(1000));

setTimeout(function() {
	self.log('填写登录信息');
	self.page.evaluate(function(self) {
		console.log("获取网页标题 : " + document.title);
		$("#spCode").val(self.login_info.code);
		$("#userName").val(self.login_info.user_name);
		$("#password").val(self.login_info.password);
	}, self);
}, self.wait(1000));

setTimeout(function() {
	self.render(self.next());
}, self.wait(1000));

setTimeout(function() {
	self.log('触发登录事件');
	self.page.evaluate(function() {
		var _btn = document.getElementsByClassName('login_btn')[0];
		var _event = document.createEvent('MouseEvents');
		_event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		_btn.dispatchEvent(_event);
	});
}, self.wait(1000));

setTimeout(function() {
	self.render(self.next());
}, self.wait(1000));

setTimeout(function() {
	self.log('点击短信标签页');
	self.page.evaluate(function() {
		var _btn = document.getElementById('bizNav110201');
		var _event = document.createEvent('MouseEvents');
		_event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		_btn.dispatchEvent(_event);
	});
}, self.wait(3000));

setTimeout(function() {
	self.render(self.next());
}, self.wait(1000));

setTimeout(function() {
	self.log('填写短信内容');
	self.page.evaluate(function(self) {
		$("#sendTitleTextArea").val(self.sms.content);
	}, self);
}, self.wait(1000));

setTimeout(function() {
	self.render(self.next());
}, self.wait(1000));

setTimeout(function() {
	self.log('点击上传文件');
	self.page.evaluate(function() {
		var _btn = document.getElementById('importAtagId');
		var _event = document.createEvent('MouseEvents');
		_event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		_btn.dispatchEvent(_event);
	});
}, self.wait(2000));

setTimeout(function() {
	self.render(self.next());
}, self.wait(1000));

setTimeout(function() {
	self.log('选择上传文件');
	self.page.uploadFile('input[name=importMdnFile]', self.sms.path);
}, self.wait(1000));

setTimeout(function() {
	self.render(self.next());
}, self.wait(1000));

setTimeout(function() {
	self.log('点击导入');
	self.page.evaluate(function() {
		var _btn = $('input[value="导入"]')[0];
		var _event = document.createEvent('MouseEvents');
		_event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		_btn.dispatchEvent(_event);
	});
}, self.wait(3000));

setTimeout(function() {
	self.render(self.next());
}, self.wait(1000));

setTimeout(function() {
	self.log('点击发送');
	self.page.evaluate(function() {
		var _btns = document.getElementsByClassName('confimbtn2 w120 mar10');
		var _btn;
		for ( var i in _btns) {
			if (_btns[i].innerHTML == "发送") {
				_btn = _btns[i];
			}
		}
		var _event = document.createEvent('MouseEvents');
		_event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		_btn.dispatchEvent(_event);
	});
}, self.wait(3000));

setTimeout(function() {
	self.render(self.next());
}, self.wait(1000));

setTimeout(function() {
	self.log('退出程序...');
	self.log('生成' + (self.next() - 1) + '张图片');
	self.log('耗时' + (self.wait(0)) + '毫秒');
	phantom.exit();
}, self.wait(0));

setTimeout(function() {
	self.log('点击确定发送');
	self.page.evaluate(function() {
		var _btn = document.getElementById('confirmSendBtn');
		var _event = document.createEvent('MouseEvents');
		_event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		_btn.dispatchEvent(_event);
	});
}, self.wait(3000));

setTimeout(function() {
	self.render(self.next());
}, self.wait(1000));

setTimeout(function() {
	self.exit();
}, self.wait(0));
