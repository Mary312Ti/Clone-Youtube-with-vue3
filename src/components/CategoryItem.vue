<template>
    <a href="#" :class="classes">{{ category }}</a>
</template>

<script setup>
import { computed,defineProps } from '@vue/reactivity';


const props = defineProps({
    category: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
})

const classes = computed(() => {
    const baseClasses = ['px-3', 'py-1', 'transition', 'rounded-full', 'border']
    const activeClasses = ['border-gray-700', 'bg-gray-600', 'hover:bg-gray-500', 'text-white']
    const inactiveClasses = ['border-gray-300', 'bg-gray-100', 'hover:bg-gray-200']

    return [
    ...baseClasses,
    (isActive.value ? activeClasses : inactiveClasses)
  ]
})

// class="px-3 py-1 transition bg-black text-white border border-black rounded-lg"
</script>