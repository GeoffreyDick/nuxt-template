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

// TODO: Set values below
const meta = {
  title: 'An Interesting Title',
  siteName: 'A Fabulous Site Name',
  siteDescription: 'A Fascinating Default Description.',
  img: {
    src: 'https://picsum.photos/id/318/1200/630.jpg',
    alt: 'A Beautiful Image'
  },
  twitterHandle: '@GeoffDick'
}

useHead({
    title: meta.title,
    titleTemplate: `%s | ${meta.siteName}`,
    meta: [
      { name: 'description', content: meta.siteDescription },
      { name: 'author', content: meta.siteName },
      { name: 'copyright', content: meta.siteName },
      { name: 'robots', content: 'index, follow' },
      // OpenGraph tags
      { hid: 'og:site_name', property: 'og:site_name', content: meta.siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: canonicalURL },
      { hid: 'og:image', property: 'og:image', content: meta.img.src },
      { hid: 'og:image:url', property: 'og:image', content: meta.img.src },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: meta.img.src },
      { hid: 'og:image:alt', property: 'og:image:alt', content: meta.img.alt },
      { hid: 'og:image:width', property: 'og:image:width', content: 1200 },
      { hid: 'og:image:height', property: 'og:image:height', content: 630 },
      // Twitter tags
      { hid: 'twitter:site', name: 'twitter:site', content: meta.twitterHandle },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image', name: 'twitter:image', content: meta.img.src },
    ],
  link: [
    { rel: 'canonical', href: canonicalURL }
  ]
})
</script>