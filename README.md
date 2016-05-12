When you login to the machine, you can use the go command to simplify the operation of the password each time you need to enter the password.

You must install expect5.45

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

