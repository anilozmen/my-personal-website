export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Anıl Özmen - Software Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'og:title', property: 'og:title', content: 'Anıl Özmen - Software Developer' },
      { hid: 'og:image', property: 'og:image', content: '' },
      { hid: 'og:url', property: 'og:url', content: 'https://anilozmen.com/' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=UA-****",
        async: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/repositories.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt', '@nuxtjs/axios', '@nuxtjs/google-gtag',
  ],

  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },

  axios: {
    baseURL: 'https://api.anilozmen.com', // A URL to get all my github repositories.
  },

  'google-gtag': {
    id: 'UA-***',
    config: {
      anonymize_ip: true, // anonymize IP 
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
    },
    debug: false, // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
