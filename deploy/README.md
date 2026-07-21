# saas-website deployment

## Prerequisites

```bash
docker network create saas-shared-network
cp .env.example .env
# Edit .env - NEXT_PUBLIC_* vars are embedded at docker build time
```

## Start / stop

Single replica:

```bash
docker compose -p saas-website up -d --build website
docker compose -p saas-website down
```

Two replicas:

```bash
docker compose -p saas-website --profile replica up -d --build
docker compose -p saas-website --profile replica down
```

## Apache

- Public port: **7002**
- Backends: **7011** (primary), **7015** (replica)
- Config: [deploy/apache/saas-website.conf](./apache/saas-website.conf)

## Health checks

```bash
curl http://localhost:7011/api/health
curl http://localhost:7015/api/health
```

## Resources

- Memory limit: **4G** per container (`MEMORY_LIMIT`, `NODE_OPTIONS` in `.env`)
