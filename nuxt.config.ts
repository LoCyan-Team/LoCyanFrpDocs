export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  routeRules: {
    '/': { redirect: '/getting-started' },
  },
  site: {
    name: "LoCyanFrp 帮助文档",
  },
})