#!/bin/bash
############################
# ./install.sh -f          #
############################

echo "install begin ......."
s_p="`dirname $0`/bin"
ipath="/usr/local/bin"
function _install() {
    if [[ $3 == "${HOME}" && $2 == ".go" ]]
    then
        echo "install ${HOME}/.go exists ... "
        return
    fi
    if [[ $4 == "-f" || ! -f "$3/$2" ]]
    then
        #echo "install $1/$2 $3"
        install -v $1/$2 $3
    else
        echo "exists $3/$2 "
    fi
}



_install ${s_p} gocommonsfunc ${ipath} $1
_install ${s_p} go ${ipath} $1
_install ${s_p} goex ${ipath} $1
_install ${s_p} goscp ${ipath} $1
_install ${s_p} goscpex ${ipath} $1
_install ${s_p} .go ${ipath} $1
_install ${s_p} .go ${HOME} $1


echo "install done  ......"
