ARG NODE_VERSION="18"
FROM node:${NODE_VERSION}

RUN apt-get update && apt-get install -y --no-install-recommends xdg-utils

WORKDIR /workspace
COPY ../package.json ../yarn.lock ./

RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn

ENV PATH=/workspace/node_modules/.bin:$PATH

WORKDIR /workspace/app