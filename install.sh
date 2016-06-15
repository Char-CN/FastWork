#!/bin/bash
############################
# ./install.sh -f          #
############################
s_p="`dirname $0`/bin"
ipath="/usr/local/bin"

if [ -d $1 ];then
    ipath="$1"
fi
if [ -d $2 ];then
    ipath="$2"
fi

function _install() {
    if [[ $2 == ".db" || $2 == ".go" ]]; then
        if [ ! -f "$3/$2" ];then
            install $1/$2 $3
            if [ $? != 0 ]; then
                echo "[fail   ] install $1/$2 $3"
            else
                echo "[success] install $1/$2 $3"
            fi
        else
            echo "install ${HOME}/$2 exists"
        fi
        return
    fi
    if [[ $4 == "-f" || ! -f "$3/$2" ]]; then
        install $1/$2 $3
        if [ $? != 0 ]; then
            echo "[fail   ] install $1/$2 $3"
        else
            echo "[success] install $1/$2 $3"
        fi
    else
        echo "exists $3/$2 "
    fi
}

echo "======================================install begin ......"

echo " "
_install ${s_p} fw_commons ${ipath} $1
if [ $? != 0 ]; then
    echo "install fail ......"
    exit -1
fi

echo " "
_install ${s_p} fw_expect_go ${ipath} $1
_install ${s_p} fw_expect_goscp ${ipath} $1
_install ${s_p} fw_expect_db ${ipath} $1

echo " "
_install ${s_p} go ${ipath} $1
_install ${s_p} goscp ${ipath} $1
_install ${s_p} db ${ipath} $1

echo " "
_install ${s_p} .go ${ipath} $1
_install ${s_p} .go ${HOME} $1

echo " "
_install ${s_p} .db ${ipath} $1
_install ${s_p} .db ${HOME} $1

echo " "
echo "======================================install success ......"

