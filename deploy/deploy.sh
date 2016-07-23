#!/bin/bash

TAG=20160723
polymer build
# remove extra go files.
docker build --no-cache -t gcr.io/nich01as-com/pokemongo:$TAG .
gcloud docker push gcr.io/nich01as-com/pokemongo:$TAG
# update deplouments
kubectl apply -f deploy/deployment.yaml
