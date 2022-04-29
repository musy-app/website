export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Musy",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,400;1,700&family=Staatliches&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/dotenv", "@nuxtjs/style-resources", "@nuxtjs/pwa"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
    "vue-scrollto/nuxt",
  ],

  styleResources: {
    scss: ["~/assets/scss/*.scss"],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    // baseURL: process.env.API_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  //@nuxt/pwa module options
  pwa: {
    meta: {
      mobileAppIOS: true,
      appleStatusBarStyle: "black-translucent",
      name: "MUSY - The blind test webapp",
    },
  },

  //@nuxt/i18n module options
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en-US.js", dir: "ltr" },
      { code: "fr", iso: "fr-FR", file: "fr-FR.js" },
    ],
    defaultLocale: "fr",
    // baseUrl: 'https://talodev.fr',
    lazy: true,
    langDir: "lang/",
  },
};
