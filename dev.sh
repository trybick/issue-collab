#!/bin/sh
set -xe

IMAGE_NAME="issue-collab"

docker build --tag ${IMAGE_NAME} --file Dockerfile .
docker rm --force ${IMAGE_NAME}-cont || true
docker run \
    --interactive \
    --tty \
    --name ${IMAGE_NAME}-cont \
    --publish 3000:3000 \
    --volume $(pwd)/src:/app/src \
    --volume $(pwd)/public:/app/public \
    ${IMAGE_NAME}
