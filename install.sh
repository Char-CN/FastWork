#!/bin/bash
##################################
# ./install.sh /usr/local/bin    #
##################################
s_p="`dirname $0`/bin"
ipath="/usr/local/bin"
error=0

if [ "$1" != "" ];then
  ipath="$1"
fi

echo "========================================================"
echo "install start."

echo "cp $s_p/fw_commons $ipath"
cp $s_p/fw_commons $ipath
((error=$error+$?))

echo "cp $s_p/fw_expect_db $ipath"
cp $s_p/fw_expect_db $ipath
((error=$error+$?))

echo "cp $s_p/fw_expect_go $ipath"
cp $s_p/fw_expect_go $ipath
((error=$error+$?))

echo "cp $s_p/fw_expect_goscp $ipath"
cp $s_p/fw_expect_goscp $ipath
((error=$error+$?))

echo "cp $s_p/fw_expect_kafka_send $ipath"
cp $s_p/fw_expect_kafka_send $ipath
((error=$error+$?))

echo "cp $s_p/hafka $ipath"
cp $s_p/hafka $ipath
((error=$error+$?))

echo "cp $s_p/go $ipath"
cp $s_p/go $ipath
((error=$error+$?))

echo "cp $s_p/db $ipath"
cp $s_p/db $ipath
((error=$error+$?))

if [ ! -f "$HOME/.go" ];then
  echo "cp $s_p/.go $ipath"
  cp $s_p/.go $ipath
  ((error=$error+$?))
else
  echo "ignore $HOME/.go exists."
fi

if [ ! -f "$HOME/.db" ];then
  echo "cp $s_p/.db $ipath"
  cp $s_p/.db $ipath
  ((error=$error+$?))
else
  echo "ignore $HOME/.db exists."
fi

if [ ! -f "$HOME/.hafka" ];then
  echo "cp $s_p/.hafka $ipath"
  cp $s_p/.db $ipath
  ((error=$error+$?))
else
  echo "ignore $HOME/.hafka exists."
fi

if [ $error != 0 ]; then
  echo "install fail, plase use [sudo sh install.sh]."
else
  echo "install success."
fi

echo "========================================================"
