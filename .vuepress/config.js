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
      { text: '下载安装', link: '/download/' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '快速开始',
          collapsable: false,
          children: ['', 'login']
        },
        {
          title: '样机功能',
          collapsable: false,
          children: ['material-list', 'local-material-two']
        },
        {
          title: '工具箱',
          collapsable: false,
          children: ['tools']
        },
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
