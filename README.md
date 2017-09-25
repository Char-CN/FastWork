# FastWork

[![Documentation](https://travis-ci.org/alibaba/dubbo.svg?branch=master)](https://github.com/Char-CN/FastWork/wiki)
[![Download](https://img.shields.io/badge/release-download-orange.svg)](https://github.com/Char-CN/FastWork/releases)

## 下载 | Download(https://github.com/Char-CN/FastWork/releases)


## 文档 | Documentation(https://github.com/Char-CN/FastWork/wiki)


前言：当你需要登录服务器、数据库等等的时候，常常需要输入密码，当然也可以屏蔽这一步，开始吧！

条件：你必须安装expect5.x（4.x版本也是兼容的）和 SSH

说明：当你安装好命令后，可以使用类似【go hyy】命令进入服务器，你必须配置~/.go文件，添加hyy映射，添加主机、用户名、密码、端口等信息。

1.如何安装【go、goscp、db】命令？
> sh install.sh -f

2.如何编辑配置文件（~/.go）？

    参数说明 : 短链名称 -h 主机名 -u 用户名 [-P 密码] [-p 端口]
    
    配置示例 : hyy -h 192.168.0.110 -u root -P root -p 222

3.如何使用go命令？
> go hyy

4.如何使用goscp命令？
> goscp hyy \~/test/*:\~

    将本机 \~/test\* 文件全部拷贝到目标机器(hyy)的 \~ 目录下

5.如何编辑配置文件（~/.db）？

    参数说明 : 短链名称 -h 主机名 -u 用户名 -P 密码 [-p 端口] [-D 数据库]
    
    配置示例 : my -h 192.168.0.110 -u root -p root -P 3306 -D test

6.如何使用db命令？
> db my

