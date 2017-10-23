#!/bin/bash

USERNAME=$1
BUILD_DIR=$2
ARTIFACT=$3

build(){
  ng build --prod
  docker build -t $ARTIFACT:$ARTIFACT .
  docker images
  docker tag $ARTIFACT:$ARTIFACT $USERNAME/udrone:1.0
  docker tag $ARTIFACT:$ARTIFACT $USERNAME/udrone:latest
  docker push $USERNAME/udrone:1.0
  docker push $USERNAME/udrone:latest
  cd $BUILD_DIR
}

build