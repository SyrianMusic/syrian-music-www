FROM netlify/build:focal

USER root
RUN mkdir -p /app
RUN useradd user
RUN chown user /app

USER user
WORKDIR /app

RUN ruby --version

COPY package.json ./
COPY yarn.lock ./
RUN yarn

COPY . ./

EXPOSE 8888

CMD ["yarn", "netlify"]
