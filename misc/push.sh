#!/bin/bash -x
ssh e1 rm -rf /opt/html/fe/* && \
scp -r dist/* e1:/opt/html/fe/
