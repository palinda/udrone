#!/bin/bash

USERNAME=$1
BUILD_DIR=$2
ARTIFACT=$3

build(){
  echo $USERNAME
  echo $BUILD_DIR
  echo $ARTIFACT
  ng build --prod
  docker build -t $ARTIFACT:$ARTIFACT .
  docker images
  docker tag $ARTIFACT:$ARTIFACT $USERNAME/ustack-ui:1.0
  docker tag $ARTIFACT:$ARTIFACT $USERNAME/ustack-ui:latest
  docker push $USERNAME/ustack-ui:1.0
  docker push $USERNAME/ustack-ui:latest
  cd $BUILD_DIR
}

build