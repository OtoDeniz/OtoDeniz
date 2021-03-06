export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  components: true,
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.png'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    "@/assets/style.less"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/carousel.js',
      ssr: false
    },
    {
      src: '~/plugins/carousel3d.js',
      ssr: false
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['bootstrap-vue/nuxt', {
      icons: true,
    }],
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAPidtIo3i6ouAnwrg9W-hr7kFIaMVJA_Q",
          authDomain: "oto-deniz.firebaseapp.com",
          databaseURL: "https://oto-deniz.firebaseio.com",
          projectId: "oto-deniz",
          storageBucket: "oto-deniz.appspot.com",
          messagingSenderId: "287682020228",
          appId: "1:287682020228:web:478403d0c2a067f31a93d1",
        },
        services: {
          auth: true,
          firestore:{
            ssr:true
          },
          functions: true,
          storage: {
            ssr:true
          },
          realtimeDb: true,
          messaging: true,
          performance: true,
          remoteConfig: true
        }
      }
    ]
  ],
  styleResources: {
    less: ['./assets/variables.less']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: { compact: true }

  }
}
