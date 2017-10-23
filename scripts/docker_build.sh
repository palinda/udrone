#!/bin/bash

USERNAME=$1
BUILD_DIR=$2
ARTIFACT=$3

build(){
  ng build --prod
  docker build -t $ARTIFACT:$ARTIFACT .
  docker images
  docker tag $ARTIFACT:$ARTIFACT $USERNAME/$ARTIFACT:1.0
  docker tag $ARTIFACT:$ARTIFACT $USERNAME/$ARTIFACT:latest
  docker push $USERNAME/$ARTIFACT:1.0
  docker push $USERNAME/$ARTIFACT:latest
  cd $BUILD_DIR
}

build