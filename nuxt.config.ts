export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', 'nuxt-umami'],
  routeRules: {
    '/': { redirect: '/getting-started' },
  },
  site: {
    name: "LoCyanFrp 帮助文档",
  },
  umami: {
    enabled: true,
    id: "321f68d2-1667-450a-ac30-22166d693b6d",
    host: "https://analytics.locyan.cn",
    autoTrack: true,
    ignoreLocalhost: true,
  },
})