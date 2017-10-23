#!/bin/bash

docker login -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD" 
cd $TRAVIS_BUILD_DIR

bash scripts/docker_build.sh $DOCKER_USERNAME $TRAVIS_BUILD_DIR udrone