/**
 * 检查文本的字符长度
 */
var check_length = 70;
var args = require('system').args;
var path = args[1];
var fs = require('fs');
var content = fs.read(path);
var head = '【恒大金服】';

//console.log('content.length: ' + content.length);
//console.log('content.indexOf(\'\\n\') : ' + content.lastIndexOf('\n'));
if (content.lastIndexOf('\n') == content.length - 1) {
	content = content.substr(0, content.length - 1);
}
content = head + content;
//console.log('content.length: ' + content.length);
//console.log('content.indexOf(\'\\n\') : ' + content.lastIndexOf('\n'));
console.log('发送内容: ' + content);
console.log('系统检测字符长度: ' + check_length);
console.log('字符长度: ' + content.length);

if (content.length > check_length) {
	console.log('超过系统检测字符长度, 程序退出状态 255');
	phantom.exit(255);
}

console.log('未超过系统检测字符长度, 程序退出状态 0');
phantom.exit(0);
