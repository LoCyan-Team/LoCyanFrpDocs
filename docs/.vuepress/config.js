import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'
import { recoTheme } from 'vuepress-theme-reco'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: "/",
  lang: "zh-cn",
  title: "LoCyanFrp 帮助文档",
  description: "适用于 LoCyanFrp 的帮助文档",
  head: [['link', { rel: 'icon', href: 'https://www.locyan.cn/favicon.ico' }]],
  bundler: viteBundler(),
  theme: recoTheme({
    navbar: [
      {
        text: '首页',
        link: '/main',
      },
      {
        text: 'API',
        link: 'https://docs.locyanfrp.cn/api',
      },
      "/contact",
    ],
    series: {
      '/': [
        '/main',
        '/contact',
        '/start',
        {
          text: '账户',
          children: [
            '/account/main',
          ]
        },
        {
          text: '隧道',
          children: [
            '/proxy/create',
            {
              text: '运行',
              children: [
                '/proxy/run/systemd',
                '/proxy/run/supervisor'
              ]
            }
          ]
        },
        {
          text: '游戏联机',
          children: [
            '/game/port',
            '/game/minecraft',
          ]
        },
        '/solution',
        '/definition'
      ]
    },
  }),
})