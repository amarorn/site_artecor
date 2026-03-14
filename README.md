# Artecor - Site Institucional

Site institucional para empresa de pintura predial, residencial, condomínios e limpeza de fachadas.

## Tecnologias

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Como rodar

```bash
npm install
npm run dev
```

## Configuração

### WhatsApp

Edite `src/config/site.ts` e altere o número de telefone no formato: 5511999999999 (código país + DDD + número).

### Analytics e Marketing

Crie um arquivo `.env.local` com as variáveis:

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - ID do Google Analytics 4
- `NEXT_PUBLIC_GTM_ID` - ID do Google Tag Manager

### Deploy

O projeto está pronto para deploy na Vercel ou Cloudflare Pages. Ajuste a URL base em `src/app/sitemap.ts` e `src/app/robots.ts` conforme seu domínio.
