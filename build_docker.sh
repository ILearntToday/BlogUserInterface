#!/bin/bash

main() {
  echo "Creating docker image"
  commit_number=$(git rev-list HEAD --count)
  docker build . -t ilearnttoday/bloguserinterface:v${commit_number}
  echo "Created docker image"
}

main
