<template>
    <a href="#" :class="classes">{{ category }}</a>
</template>

<script setup>
import { computed, } from '@vue/reactivity';

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
    const activeClasses = ['border-black', 'bg-black', 'text-white']
    const inactiveClasses = ['border-gray-300', 'bg-gray-100', 'hover:bg-gray-200']

    return [
    ...baseClasses,
    (props.isActive ? activeClasses : inactiveClasses)
  ]
})

// class="px-3 py-1 transition bg-black text-white border border-black rounded-lg"
</script>