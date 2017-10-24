#!/bin/bash

USERNAME=$1
BUILD_DIR=$2
ARTIFACT=$3

build(){
  ng build --prod
  docker build -t $USERNAME/ustack-ui:1.0 .
  docker images
  docker tag $USERNAME:ustack-ui $USERNAME/ustack-ui:1.0
  docker tag $USERNAME:ustack-ui $USERNAME/ustack-ui:latest
  docker push $USERNAME/ustack-ui:1.0
  docker push $USERNAME/ustack-ui:latest
  cd $BUILD_DIR
}

build