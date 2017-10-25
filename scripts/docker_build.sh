#!/bin/bash

USERNAME=$1
BUILD_DIR=$2
ARTIFACT=$3
VERSION=$4

build(){
  ng build --prod --base-href /demo/
  docker build -t app/ustack-ui .
  docker images
  docker tag app/ustack-ui $USERNAME/ustack-ui:$VERSION
  docker tag app/ustack-ui $USERNAME/ustack-ui:latest
  docker push $USERNAME/ustack-ui:$VERSION
  docker push $USERNAME/ustack-ui:latest
  cd $BUILD_DIR
}

build