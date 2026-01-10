FROM node:22-alpine
WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./

RUN npm install

COPY . .

RUN pnpm run build

EXPOSE 6006

CMD [ "pnpm", "dev:storybook" ]