# FastWork
[![Build Status](https://travis-ci.org/Char-CN/FastWork.svg?branch=master)](https://travis-ci.org/Char-CN/FastWork/wiki)
[![Download](https://img.shields.io/badge/release-download-orange.svg)](https://github.com/Char-CN/FastWork/releases)
	
## 下载 | Download
https://github.com/Char-CN/FastWork/releases

## 文档 | Documentation
English: https://github.com/Char-CN/FastWork/wiki

中文: https://github.com/Char-CN/FastWork/wiki/首页

### 前言: 通常在使用命令行登录服务器、数据库时需要输入密码，如何快速登录？
     
* 1.安装Fastwork
* 2.配置 ~/.go 和 ~/.db
* 3.使用 go hyy

### 依赖
* expect5.x 或 expect4.x
* SSH

### 操作手册

#### 1. 安装【go、goscp、db】命令

>默认安装到 /usr/local/bin 你可以更改安装目录 或者将bin目录添加到环境变量

`sudo sh install.sh /usr/local/bin`

#### 2. 编辑配置文件（~/.go）

>参数说明 : 短链名称 -h 主机名 -u 用户名 [-P 密码] [-p 端口]
>
>配置示例 : hyy -h 192.168.0.110 -u root -P root -p 222
>
>这里配置的短链名称就是 go 命令后面接的名称

`vi ~/.go`

#### 3. 使用go命令

>go 短链名称

`go hyy`

#### 4. 使用goscp命令

>将本机 ~/test/* 文件全部拷贝到目标机器(hyy)的 ~/ 目录下

`goscp hyy ~/test/*:~`

#### 5. 编辑配置文件（~/.db）

>参数说明 : 短链名称 -h 主机名 -u 用户名 -P 密码 [-p 端口] [-D 数据库]
>
>配置示例 : my -h 192.168.0.110 -u root -p root -P 3306 -D test

`vi ~/.db`

#### 6. 使用db命令

`db my`
