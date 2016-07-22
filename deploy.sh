#!/bin/bash

polymer build
# remove extra go files.
docker build --no-cache -t pokemongo .
