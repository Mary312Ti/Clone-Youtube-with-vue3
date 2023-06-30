<template>
    <a href="#"
        :class="classes">{{ navItem }}</a>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    navItem: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
});

const classes = computed(() => {
    const baseClasses = ['px-6', 'uppercase', 'text-xs', 'font-semibold', 'inline-block', 'py-2']
    const activeClasses = ['border-black','text-black', 'border-b-2', 'border-gray-600']
    const inActiveclasses = ['text-gray-600']

    return [
        ...baseClasses,
    (props.isActive ? activeClasses : inActiveclasses)
  ]
})

</script>