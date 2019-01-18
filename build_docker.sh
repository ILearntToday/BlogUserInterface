#!/bin/bash

commit_number=$(git rev-list HEAD --count)

create_docker_image() {
  echo "Creating docker image"
  docker build . -t ilearnttoday/bloguserinterface:v${commit_number}
  echo "Created docker image"
}

push_docker_image() {
  echo "Pushing docker image"
  docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD ;
  docker push ilearnttoday/bloguserinterface:v${commit_number} ;
  echo "Pushed docker image"
}

main() {
  create_docker_image
  push_docker_image
}

main
