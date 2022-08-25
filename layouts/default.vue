<template>
  <div
    class="min-h-screen grid grid-rows-[auto_1fr_auto] bg-white dark:bg-gray-900 transition-colors duration-300 ease-in-out"
  >
    <AppHeader #header />
    <NuxtPage />
    <AppFooter #footer />
  </div>
</template>

<script lang="ts" setup>
const { fullPath } = useRoute()

const baseURL: string = 'https://geoffdick.com'
const canonicalURL: string = usePrettifyURL(baseURL, fullPath)
const siteName: string = 'Fabulous Site Name'
const siteDescription: string = 'A Fascinating Default Description.'
const siteImage: string = 'https://picsum.photos/id/318/1200/630.jpg'
const titleTemplate: string = `%s | ${siteName}`

useHead({
  titleTemplate,
  meta: [
    { name: 'description', content: siteDescription },
    { name: 'author', content: siteName },
    { name: 'copyright', content: siteName },
    { name: 'robots', content: 'index, follow' },
    // OpenGraph tags
    { name: 'og:description', content: siteDescription },
    { name: 'og:site_name', content: siteName },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: canonicalURL },
    { name: 'og:image', content: siteImage },
    { name: 'og:image:url', content: siteImage },
    { name: 'og:image:secure_url', content: siteImage },
    { name: 'og:image:alt', content: 'A Beautiful Image' },
    { name: 'og:image:width', content: 1200 },
    { name: 'og:image:height', content: 630 },
    // Twitter tags
    { name: 'twitter:site', content: '@GeoffDick' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: siteImage },
  ],
  link: [
    { rel: 'canonical', href: canonicalURL }
  ]
})
</script>