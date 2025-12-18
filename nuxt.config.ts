export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  routeRules: {
    '/': { redirect: '/getting-started' },
  },
})