module.exports = {
  title: 'RugAdapt',
  description: 'RugAdapt Photoshop 插件使用教程',
  base: '/rug-adapt-desc/',
  head: [['link', { rel: 'icon', href: '/rug-adapt-desc/images/logo.png' }]],
  themeConfig: {
    logo: '/images/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '使用教程', link: '/guide/' },
      { text: '下载安装', link: '/download/' },
      { text: '账户与会员', link: '/account/member' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '快速开始',
          collapsable: false,
          children: ['', 'login']
        },
        {
          title: '素材功能',
          collapsable: false,
          children: ['material', 'local-material', 'source-file', 'psd-file']
        },
        {
          title: '生成功能',
          collapsable: false,
          children: ['import-file', 'more-service']
        },
        {
          title: 'PS 工具箱',
          collapsable: false,
          children: ['tools']
        }
      ],
      '/account/': [
        {
          title: '账户与会员',
          collapsable: false,
          children: ['member', 'recharge', 'setting']
        }
      ]
    },
    lastUpdated: '最后更新',
    smoothScroll: true
  },
  plugins: ['@vuepress/back-to-top', '@vuepress/medium-zoom']
};
