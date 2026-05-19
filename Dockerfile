# Build stage
FROM oven/bun:1.3.13-alpine AS builder

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

# Production stage
FROM oven/bun:1.3.13-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production \
    PORT=4321 \
    HOST=0.0.0.0

RUN addgroup -g 1001 -S nodejs && \
    adduser -S astro -u 1001

COPY --from=builder --chown=astro:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=astro:nodejs /app/dist ./dist

USER astro

EXPOSE 4321

CMD ["bun", "dist/server/entry.mjs"]