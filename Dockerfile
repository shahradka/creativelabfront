FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm@10.4.1

# Copy EVERYTHING first (so workspaces exist)
COPY . .

# Install workspace deps
RUN pnpm install --frozen-lockfile

# Build with turbo
RUN pnpm run build

EXPOSE 6006

CMD ["pnpm", "dev:storybook"]
