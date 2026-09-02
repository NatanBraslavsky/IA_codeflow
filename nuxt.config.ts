import process from 'node:process'

const { DEV_URL, DEV_KEY, DEV_CERT } = process.env

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/seo',
    'nuxt-security',
    '@nuxt/ui',
    '@nuxt/a11y',
    '@nuxt/hints',
  ],
  $development: {
    security: { headers: { crossOriginEmbedderPolicy: 'unsafe-none' } },
  },
  devtools: { enabled: true },
  app: {
    head: { templateParams: { separator: '•' } },
  },
  css: ['~/assets/main.css'],
  site: {
    name: 'eXp',
    description:
      'eXp é meu portfólio pessoal, onde compartilho meus projetos, experiências e aprendizados na área de desenvolvimento web.',
  },
  runtimeConfig: {
    public: {
      production: false,
      siteUrl: '',
    },
  },
  devServer: {
    host: DEV_URL,
    https: DEV_KEY && DEV_CERT ? { key: DEV_KEY, cert: DEV_CERT } : undefined,
  },
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: process.env.VERCEL ? 'vercel' : 'bun',
  },
  linkChecker: { enabled: false },
  ogImage: {
    enabled: false,
  },
  security: {
    headers: {
      permissionsPolicy: {
        camera: ['self'],
      },
      contentSecurityPolicy: {
        'img-src': ["'self'", 'data:', 'blob:'],
        'script-src': [
          "'self'",
          'https:',
          "'unsafe-inline'",
          "'strict-dynamic'",
          "'nonce-{{nonce}}'",
          "'wasm-unsafe-eval'",
        ],
        'worker-src': ["'self'", 'blob:'],
      },
    },
  },
})
