
module.exports = {
  mode: 'universal',

  // 这里可以配置router
  router: {
    extendRoutes(routers, resolve) {
      routers.push({
        path: '/foo',
        component: resolve(__dirname, 'pages/other.vue')
      })
    },
    // middleware: ['auth']
  },

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/api-inject',
    '@/plugins/interceptor'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  /*
  ** 启用axios代理并把服务器代理到koa启动的端口，解决跨域问题
  */
  axios: {
    proxy: true
  },
  proxy: {
    '/api': 'http://localhost:3030'
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
