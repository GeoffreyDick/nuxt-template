<template>
    <header
        class="p-8 bg-transparent dark:text-gray-100 border-b-2 border-black/5 dark:border-white/5"
    >
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <span>Insert header</span>
                <nav class="flex flex-row space-x-8">
                        <div v-for="link of navigation" :key="link._path">
                            <NuxtLink :to="link._path" class="">{{ link.title }}</NuxtLink>
                        </div>
                </nav>
                <button
                    @click="toggleDark()"
                    class="p-3 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
                >
                    <span v-if="isDark">
                        <IconDark class="w-6 h-6" />
                    </span>
                    <span v-else>
                        <IconLight class="w-6 h-6" />
                    </span>
                </button>
            </div>
        </div>
    </header>
</template>

<script setup>
// Toggle Dark Mode
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)

const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>