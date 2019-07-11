# FastWork
[![Build Status](https://travis-ci.org/Char-CN/FastWork.svg?branch=master)](https://travis-ci.org/Char-CN/FastWork/wiki)
[![Download](https://img.shields.io/badge/release-download-orange.svg)](https://github.com/Char-CN/FastWork/releases)

##### FastWork是一个快速登录机器、数据库的命令，一般用于私人机器，会将密码明文保存到文件（如果需要需自行加密），命令包含go、goscp、db，分别用于登录机器、直接传输文件、登录mysql数据库。

## 下载 | Download
https://github.com/Char-CN/FastWork/releases

## 文档 | Documentation
English: https://github.com/Char-CN/FastWork/wiki

中文: https://github.com/Char-CN/FastWork/wiki/首页

### 依赖
* expect5.x 或 expect4.x
* SSH

### 安装

>默认安装到 /usr/local/bin 你可以更改安装目录 或者将bin目录添加到环境变量

`sudo sh install.sh /usr/local/bin`

### 配置
`vi ~/.go`
>参数说明 : 短链名称 -h 主机名 -u 用户名 [-P 密码] [-p 端口]
> 
>配置示例 : hyy -h 192.168.0.110 -u root -P root -p 222

`vi ~/.db`
>参数说明 : 短链名称 -h 主机名 -u 用户名 -P 密码 [-p 端口] [-D 数据库]
>
>配置示例 : my -h 192.168.0.110 -u root -p root -P 3306 -D test

### 使用
>登录 短链名称 hyy 的机器

`go hyy`

>将本机 ~/test/* 文件全部拷贝到目标机器(hyy)的 ~/ 目录下

`goscp hyy ~/test/*:~`

>打开mysql的数据库

`db my`
