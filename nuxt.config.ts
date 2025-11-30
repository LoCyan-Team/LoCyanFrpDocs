export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  routeRules: {
    '/': { redirect: '/getting-started' },
  },
  app: {
    head: {
      title: 'LoCyanFrp 帮助文档',
      titleTemplate: '%s - LoCyanFrp 帮助文档'
    }
  }
})