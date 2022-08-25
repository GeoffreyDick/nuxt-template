<template>
    <header class="p-8 bg-black text-[#fafafa]">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <span>Insert header</span>
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
</script>