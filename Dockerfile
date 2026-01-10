FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm@10.4.1

COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm run build

EXPOSE 6006

CMD ["pnpm", "dev:storybook"]
