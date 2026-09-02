import process from 'node:process'

const { DEV_URL, DEV_KEY, DEV_CERT } = process.env

const GOOGLE_FONTS =
  'https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Geist:wght@300;400;500;600&family=Instrument+Serif:ital@0;1&display=swap'

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
    head: {
      templateParams: { separator: '•' },
      htmlAttrs: { lang: 'pt-BR', class: 'dark' },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: GOOGLE_FONTS },
      ],
    },
  },
  css: ['~/assets/main.css'],
  site: {
    name: 'CodeFlow',
    description:
      'Autofix inteligente para times de dev. Detecta, explica e corrige bugs automaticamente.',
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
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        'font-src': ["'self'", 'data:', 'https://fonts.gstatic.com'],
        'worker-src': ["'self'", 'blob:'],
      },
    },
  },
})
