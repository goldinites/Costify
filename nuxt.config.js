export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Costify',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Costify'},
      {name: 'format-detection', content: 'telephone=no'},
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/reset',
    '~/assets/css/mixin',
    '~/assets/css/main',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/firebase',
 
  ],

  // firebase options
  firebase: {
    config: {
      apiKey: 'AIzaSyCU2dC6vxBQls-RJSYtC_oG8DSj_pSDoFk',
      authDomain: 'costify-app.firebaseapp.com',
      projectId: 'costify-app',
      storageBucket: 'costify-app.appspot.com',
      messagingSenderId: '426906950784',
      appId: '1:426906950784:web:7136d1d72d213950eeda65',
    },
    services: {
      auth: true,
      firestore: true,
      functions: true,
      storage: true,
      database: true,
      messaging: true,
      performance: true,
      analytics: true,
      remoteConfig: true
    },
    database: {
      emulatorPort: 9000,
      emulatorHost: 'localhost',
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    parser: [require('postcss-scss')],
    extractCSS: true,
    postcss: null,
  },
}
