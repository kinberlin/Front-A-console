// https://nuxt.com/docs/api/configuration/nuxt-config
/*export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {
    middleware: ['auth'],
  },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

})*/

import type { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  // Other Nuxt.js configurations...
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato&family=Open+Sans&family=Roboto:wght@300&display=swap'
      }
    ]
  },
  serverMiddleware: ['~/middleware/static'],
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    'nuxt-icon',
    '@hypernym/nuxt-anime',
  ],

  css: ['~/assets/css/tailwind.css','~/assets/css/animate.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    //{ src: '~/plugins/toast.js', ssr: false },
  ],
  auth: {
    strategies: {
      // Configure your authentication strategy here
      // For example, using JWT strategy:
      jwt: {
        scheme: 'jwt',
        endpoints: {
          login: { url: '/api/login', method: 'post' },
          logout: { url: '/api/logout', method: 'post' },
          user: { url: '/api/user', method: 'get' },
        },
        // Adjust other JWT strategy options as needed
      },
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/',
    },
  },
  pinia: {
    autoImports : ["defineStore"],
  },
  imports: {
    dirs : ["/stores"],
  }
};

export default config;
