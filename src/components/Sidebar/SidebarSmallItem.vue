<template>
    <li>
        <a href="#" :class="classes">
            <BaseIcon :name="icon" fill-color="currentColor" stroke-color="none" class="w-6 h-6" />
            <span>{{ label }}</span>
        </a>
    </li>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import BaseIcon from '../Base/BaseIcon.vue';
const props = defineProps({
    label: { type: String },
    icon: { type: String },
    isActive: { type: Boolean },
    customClass: { type: String }
})

const classes = computed(() => {
    const baseClasses = ['rounded-3xl', 'flex', 'items-center', 'flex-col', 'px-2', 'py-4', 'text-xs', 'hover:bg-gray-100'];
    const activeClasses = ['font-semibold', 'bg-gray-200', 'text-gray-800'];
    return props.isActive ? [...baseClasses, ...activeClasses] : [...baseClasses];
})
</script>