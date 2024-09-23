import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'
import { recoTheme } from 'vuepress-theme-reco'
import { defineUserConfig } from 'vuepress'

import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension'

export default defineUserConfig({
  base: "/",
  lang: "zh-cn",
  title: "LoCyanFrp 帮助文档",
  description: "适用于 LoCyanFrp 的帮助文档",
  head: [['link', { rel: 'icon', href: 'https://www.locyan.cn/favicon.ico' }]],
  bundler: viteBundler(),
  plugins: [removeHtmlExtensionPlugin()],
  theme: recoTheme({
    navbar: [
      {
        text: '首页',
        link: '/main',
      },
      "/app/account",
      "/app/proxy-management",
      {
        text: 'API',
        link: 'https://docs.locyanfrp.cn/api',
      },
      "/app/contact",
    ],
    series: {
      '/': [
        '/main',
        '/app/account',
        '/app/proxy-management',
        '/app/contact'
      ],
    },
  }),
})