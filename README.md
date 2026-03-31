# Facebook Live Commerce System

Scaffolded monorepo for the Live Commerce platform based on the provided specification.

## Completed in this commit
- ✅ Setup monorepo with npm workspaces + Turborepo
- ✅ Backend package with Express + TypeScript + Prisma wiring
- ✅ Frontend package with React + Vite + TailwindCSS starter and shadcn/ui config
- ✅ Shared package for common types and Zod validators
- ✅ Docker Compose for MySQL + Redis
- ✅ Initial Prisma schema and seed file

## Quick start
```bash
npm install
cp .env.example .env
docker compose up -d
npm run db:migrate
npm run db:seed
npm run dev
```
