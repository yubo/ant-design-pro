#!/bin/bash
ROOT=`cd $(dirname $0)/../; pwd`
cd ${ROOT}

FILENAME=/tmp/wx-ui.tar.gz
remote_host=e1
#
if [[ ! -f dist/index.html ]]; then
	echo "dist/index.html not found"
	exit 1
fi

tar czvf ${FILENAME} ./dist
#
scp ${FILENAME} e1:/tmp/wx-ui.tar.gz
ssh e1 tar xzvf /tmp/wx-ui.tar.gz -C /opt/html
ssh e1 rm -rf /opt/html/fe
ssh e1 mv /opt/html/dist /opt/html/fe
