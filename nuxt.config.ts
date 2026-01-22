export default defineNuxtConfig({
  extends: 'docus',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    'nuxt-umami',
    '@nuxtjs/i18n',
  ],
  css: ['~/assets/css/main.css'],
  // routeRules: {
  //     '/zh-CN': { redirect: '/zh-cn/getting-started' }
  // },
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
  i18n: {
    defaultLocale: 'zh-CN',
    locales: [
      { code: 'zh-CN', name: '简体中文（中国）' },
    ],
  }
})