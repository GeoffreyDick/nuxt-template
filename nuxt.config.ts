import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    titleTemplate: '%s | A Fabulous Site Name',
    meta: [
      // OpenGraph tags
      { hid: 'og:site_name', property: 'og:site_name', content: 'A Fabulous Site Name' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://picsum.photos/id/318/1200/630.jpg'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://picsum.photos/id/318/1200/630.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'A Beautiful Image'
      },
      // Twitter tags
      { hid: 'twitter:site', name: 'twitter:site', content: '@GeoffDick' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://picsum.photos/id/318/1200/630.jpg'
      },
    ],
  },
  typescript: {
    shim: false,
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  tailwindcss: {
    // https://tailwindcss.nuxtjs.org/getting-started/options
    viewer: false,
  },
  vite: {
    // https://vitejs.dev/config/server-options.html
    server: {
      port: 443,
      https: true,
      hmr: {
        protocol: 'wss'
      }
    },
  },
});
