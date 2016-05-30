# FastWork
preface : When you login to the machine, you can use the go command to simplify the operation of the password each time you need to enter the password.

condition : You must install expect5.45

1.How to install [go goscp db] command?
> sh install.sh -f

2.How to edit ~/.go file?

    config paramter : alias_name -h host_name -u user_name [-P password] [-p port]

    config exsample : hyy -h 192.168.0.110 -u root -P root -p 222

3.How to use go command?
> go hyy

4.How to use goscp command?
> goscp hyy ~/test/*:~

5.How to edit ~/.db file?

    config paramter : alias_name -h host_name -u user_name -P password [-p port] [-D database]

    config exsample : my -h 192.168.0.110 -u root -p root -P 3306 -D test

6.How to use db command?
> db my

===============================中文说明===============================

前言：当你需要登录服务器、数据库等等的时候，常常需要输入密码，当然也可以屏蔽这一步，开始吧！

条件：你必须安装expect5.x（4.x版本未测试）

1.如何安装【go、goscp、db】命令？
> sh install.sh -f

2.如何编辑配置文件（~/.go）？

    参数说明 : 短链名称 -h 主机名 -u 用户名 [-P 密码] [-p 端口]
    配置示例 : hyy -h 192.168.0.110 -u root -P root -p 222

3.如何使用go命令？
> go hyy

4.如何使用goscp命令？
> goscp hyy ~/test/*:~

5.如何编辑配置文件（~/.db）？

    参数说明 : 短链名称 -h 主机名 -u 用户名 -P 密码 [-p 端口] [-D 数据库]
    配置示例 : my -h 192.168.0.110 -u root -p root -P 3306 -D test

6.如何使用db命令？
> db my


