import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
