export default defineNuxtConfig({
  extends: 'docus',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    'nuxt-umami',
  ],
  nitro: {
    preset: 'cloudflare_module'
  },
  css: ['~/assets/css/main.css'],
  content: {
    experimental: { sqliteConnector: 'native' },
  },
  docus: {
    enableLandingPage: false,
  },
  site: {
    url: "https://docs.locyanfrp.cn",
    name: "LoCyanFrp 帮助文档",
  },
  llms: {
    domain: "https://docs.locyanfrp.cn",
  },
  umami: {
    enabled: true,
    id: "321f68d2-1667-450a-ac30-22166d693b6d",
    host: "https://analytics.locyan.cn",
    autoTrack: true,
    ignoreLocalhost: true,
  },
})