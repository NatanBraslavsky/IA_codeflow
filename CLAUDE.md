# CodeFlow

**Autofix inteligente para times de dev.** Detecta, explica e corrige bugs automaticamente:
conecta um repositório, roda um scan estático, lista as issues com severidade, e gera um PR
com o fix + explicação.

Idioma do produto e da comunicação: **pt-BR**.

---

## Estado atual do projeto

Este repositório é a **reescrita em Nuxt 4** do CodeFlow. Hoje ele é praticamente um esqueleto:

- `app/app.vue` — shell com `UApp` + `NuxtLayout`/`NuxtPage`
- `app/layouts/default.vue` — apenas `UMain` + slot
- `app/pages/index.vue` — **vazia**
- `app/assets/main.css` — só os dois imports (`tailwindcss`, `@nuxt/ui`)
- `nuxt.config.ts` / `package.json` — ainda carregam metadados do template de origem
  (`name: portfolio_natan`, `site.name: 'eXp'`, descrição de portfólio). **Trocar para CodeFlow**
  quando começar a implementação de verdade.

A versão funcional do produto (HTML puro + Flask) está em [REFERENCIA/](REFERENCIA/).

### ⚠️ Regra sobre `REFERENCIA/`

`REFERENCIA/` é **somente leitura**. É a cópia do projeto antigo, serve de fonte de verdade para
layout, copy, fluxo e contrato de API. **Nunca edite, mova ou delete nada lá dentro** — o usuário
vai apagar a pasta inteira depois que a migração terminar.

### Migração

A conversão do HTML para Nuxt **ainda não foi pedida**. Não converta páginas, não crie componentes
Vue a partir da referência e não conecte o backend por conta própria — espere o pedido explícito.

---

## Stack

**Frontend (este repo)**
- Nuxt 4 (`app/` como srcDir) + Vue 3 `<script setup lang="ts">`
- Nuxt UI 4 + Tailwind CSS 4 (config via CSS, não `tailwind.config`)
- Módulos: `@vueuse/nuxt`, `@nuxtjs/seo`, `nuxt-security`, `@nuxt/a11y`, `@nuxt/hints`
- Validação: `valibot`
- Runtime/package manager: **Bun** (`bun@1.3.11`) — não use npm/yarn/pnpm
- Nitro preset: `bun` (ou `vercel` quando `VERCEL` está setado)

**Backend (referência, futuro alvo de integração)**
- Python 3.12 + Flask 3 + SQLite (WAL) + PyJWT, sem ORM
- Um único arquivo: [REFERENCIA/backend/app.py](REFERENCIA/backend/app.py) (~630 linhas)

## Comandos

```bash
bun install
bun run dev              # dev server
bun run build
bun run prerelease       # fmt + lint + typecheck — rode antes de considerar algo pronto
bun run prerelease:fix   # mesma coisa, corrigindo o que dá
```

Individuais: `fmt` / `fmt:fix` (oxfmt), `lint` / `lint:fix` (oxlint `--type-aware`), `typecheck`
(`nuxi typecheck`).

## Convenções de código

Ditadas por `.oxfmtrc.json` (oxfmt) e `.oxlintrc.json` (extends `@dethdkn/ox-config`):

- **sem ponto e vírgula**, aspas simples, trailing comma `all`, 2 espaços, largura 100
- `bracketSameLine: true`, `vueIndentScriptAndStyle: true`
- imports ordenados automaticamente (builtin → external → internal → relativos → side-effect → index)
- classes Tailwind são ordenadas pelo oxfmt usando `./app/assets/main.css` como stylesheet base
- `package.json` é mantido ordenado pelo formatter

Não brigue com o formatter: escreva e rode `bun run fmt:fix`.

## Variáveis de ambiente

`.env` local, `.env.example` versionado. As chaves atuais (`DEV_URL`, `DEV_KEY`, `DEV_CERT`,
`NUXT_SITE_URL`, ...) ainda são do template — `DEV_KEY`/`DEV_CERT` habilitam HTTPS no dev server.
Quando a integração com a API começar, adicionar algo como `NUXT_PUBLIC_API_BASE`.

`nuxt-security` já aplica CSP; qualquer origem externa nova (fontes, CDN de ícones, a própria API)
precisa ser liberada em `security.headers.contentSecurityPolicy` no `nuxt.config.ts`.

---

## Referência: o produto em HTML puro

```
REFERENCIA/
├── frontend/
│   ├── index.html   # 1172 linhas — landing + onboarding + dashboard, tudo em 3 <section>
│   └── login.html   # tela de login isolada (só marcação e CSS, sem JS)
├── backend/app.py   # API Flask completa
├── start.sh         # cd backend && python app.py
└── README.md        # visão geral + backend/README.md com todos os endpoints
```

Rodar: `pip install flask pyjwt && ./REFERENCIA/start.sh` → API em `http://localhost:8000`.
O frontend é aberto direto no browser (`file://`), sem build.

### Telas (`index.html`)

Um SPA manual: três `<section class="screen">` alternadas por `showScreen(id)` trocando a classe
`.active`.

1. **`#landing`** — hero, code preview (diff antes/depois), features strip, steps, depoimentos, pricing
2. **`#onboarding`** — 4 passos com barra de progresso (`nextStep(n)`): cadastro → escolher repo →
   scan animado (`startScan()`, log fake com `setInterval` de 400ms) → resultados
3. **`#dashboard`** — métricas, lista de issues, gráficos, e um `#modal` com preview do fix / criar PR

### Design system (extraído do `:root` do `index.html`)

Tema escuro, acento verde-limão. Ao migrar, transformar isso em tokens no `app/assets/main.css`
(`@theme` do Tailwind 4) em vez de repetir hex solto.

| Token | Valor | Uso |
|---|---|---|
| `--bg` / `--bg2` / `--bg3` | `#0a0a0a` / `#111111` / `#181818` | fundo, cards, superfícies |
| `--border` / `--border2` | `rgba(255,255,255,.08)` / `.14` | bordas |
| `--text` / `--muted` / `--muted2` | `#f0ede8` / `#888580` / `#555250` | texto |
| `--accent` / `--accent2` | `#c8f060` / `#a8d840` | acento (CTA, logo, destaques) |
| `--red` / `--amber` / `--green` / `--blue` | `#ff5a5a` / `#f5a623` / `#4cde8a` / `#60a8f0` | severidade e status |

Fontes: **Instrument Serif** (títulos, com `em` em itálico no acento), **Geist** (UI),
**DM Mono** (código, labels, badges). Ícones: `hgi-stroke-rounded` (Hugeicons via CDN).

Severidade → cor: `high` = red, `medium` = amber, `low` = muted/blue. Score de código é verde.

### Contrato da API

Base `http://localhost:8000`. Todas as respostas seguem `{ success, data }` ou
`{ success: false, error }`. Rotas 🔒 exigem `Authorization: Bearer <jwt>` (HS256, 7 dias).

| Método | Rota | |
|---|---|---|
| GET | `/` , `/health` | status |
| POST | `/auth/register` | `{ email, name, password }` → `{ token, user }` |
| POST | `/auth/login` | `{ email, password }` → `{ token, user }` |
| GET | `/auth/me` | 🔒 usuário atual |
| GET/POST | `/repos` | 🔒 listar / conectar (`{ name, full_name, language, framework }`) |
| DELETE | `/repos/:id` | 🔒 desconectar |
| POST | `/repos/:id/scan` | 🔒 dispara scan, retorna contagens + score |
| GET | `/repos/:id/scans` | 🔒 histórico |
| GET | `/repos/:id/issues` | 🔒 filtros `severity`, `status` (default `open`), `limit` ≤ 100 |
| GET | `/issues/:id` | 🔒 detalhe + `fix_diff` |
| PATCH | `/issues/:id/status` | 🔒 `open` \| `fixed` \| `ignored` |
| POST | `/issues/:id/fix` | 🔒 cria PR e marca issue como `fixed` |
| GET | `/repos/:id/pull-requests` | 🔒 |
| GET | `/dashboard` | 🔒 `{ metrics, top_rules, recent_issues, repos }` |
| GET/POST | `/team` | 🔒 membros (adicionar exige plano team/scale) |
| POST | `/billing/upgrade` | 🔒 `{ plan: starter \| team \| scale }` |

Modelo: `users → repos → scans → issues` e `repos → pull_requests`; `users → team_members`.
Planos: `starter` (1 repo), `team`, `scale`.

O "motor de análise" é **simulado**: `simulate_scan()` sorteia issues a partir de uma lista de
`RULES` (regex por linguagem) usando `random.seed(hash(repo_name))` — determinístico por repo — e
pega o diff/explicação de um dicionário `FIXES` fixo. Score = `100 - high*15 - med*7 - low*3`.

### Problemas conhecidos da referência (não replicar)

- **Dois clients de API convivendo** no `index.html`: `CF_API = 'http://localhost:8000'` com token
  em `localStorage['cf_token']`, e mais abaixo `API = "http://localhost:5000"` com token em
  `localStorage['token']`. A porta 5000 e a chave `token` estão erradas — o backend sobe em 8000.
- `login.html` não tem nenhum JS: os campos e botões não submetem nada.
- Senhas com `hashlib.sha256` sem salt; `SECRET_KEY` e `CORS_ORIGINS: *` com defaults de dev.
- Todo o fluxo de onboarding (scan, resultados, criar PR) é animação/`alert()`, não chama a API.

Ao migrar, unifique em um único client (composable/`$fetch` com `NUXT_PUBLIC_API_BASE`) e trate
esses pontos em vez de portar o comportamento atual.
