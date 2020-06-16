module.exports = {
  title: '南科手册',
  lang:'zh-CN',
  description: 'Online manual for sustecher',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }], //标签页的ico图标，href后面填写你的图标地址（可以本地或者远程）
  ],
  plugins: [
  [
    '@vuepress/google-analytics',
    {
      'ga': 'UA-169618277-1' // UA-00000000-0
    }
  ]
],
  themeConfig: {
  nav: [
    { text: '主页', link: '/' },
    { text: '关于', link: '/about/' },
  ],
  sidebarDepth: 2,
  sidebar: {
    '/': [
      '',     /* /foo/ */
      '/facility/',
      '/contact/',
      '/calendar/',
      '/service/',
      '/network/',
      '/media/',
      '/catering/',
      '/transport/',
      '/surroundings/',
    ],
  }
}
}
