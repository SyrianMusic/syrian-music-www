ARG NODE_VERSION="18"
FROM node:${NODE_VERSION}

RUN apt-get update && apt-get install -y --no-install-recommends xdg-utils

WORKDIR /workspace
COPY ../package.json ../yarn.lock ./

ENV YARN_CACHE_FOLDER=/root/.yarn

RUN --mount=type=cache,target=${YARN_CACHE_FOLDER} yarn

ENV PATH=/workspace/node_modules/.bin:$PATH

WORKDIR /workspace/app