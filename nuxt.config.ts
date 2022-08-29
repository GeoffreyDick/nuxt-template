import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'vue-plausible'
  ],
  // https://content.nuxtjs.org/api/configuration
  content: {
    // navigation: {
    //   // TODO: Figure out why navigation in frontmatter block is not working natively
    //   // fields: ['navigation']
    // }
  },
  // https://tailwindcss.nuxtjs.org/getting-started/options
  tailwindcss: {
    viewer: false,
  },
  // https://plausible.io/docs/proxy/introduction
  plausible: {
    domain: process.env.PLAUSIBLE_DOMAIN,
    
    // Uncomment the line below and set env variable to enable proxy (https://plausible.io/docs/proxy/introduction)
    // apiHost: process.env.PLAUSIBLE_API_HOST
    
    // Uncomment the line below to enable outbound tracking (https://plausible.io/docs/outbound-link-click-tracking)
    // enableAutoOutboundTracking: true,
  },
  // https://vitejs.dev/config/server-options.html
  vite: {
    server: {
      port: 443,
      https: true,
      hmr: {
        protocol: 'wss'
      }
    },
  },
  telemetry: false
});
