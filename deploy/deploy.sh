#!/bin/bash

polymer build
# remove extra go files.
docker build --no-cache -t gcr.io/nich01as-com/pokemongo .
gcloud docker push gcr.io/nich01as-com/pokemongo
# update deplouments
kubectl apply -f deploy/deployment.yaml
