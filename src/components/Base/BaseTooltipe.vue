<template>
    <div class="relative">
        <div @mouseenter="toggleState" @mouseleave="toggleState">
            <slot></slot> 
        </div>
        <div v-show="tooltipeState" :class="classes">
            {{ text }}
        </div>
    </div>
</template>

<script setup>
import { computed, ref, defineProps } from 'vue';

const props = defineProps({
    text: {
        type: String,
        required: true
    },
})

const tooltipeState = ref(false)

const toggleState = () => {
    tooltipeState.value = !tooltipeState.value;
}

const classes = computed(() => {
    return [
        'bg-gray-600',
        'bg-opacity-80',
        'rounded-md',
        'text-white',
        'text-xs',
        'whitespace-nowrap',
        'p-2',
        'absolute',
        'top-14',
        'left-1/2',
        'transform',
        '-translate-x-1/2'
    ]
});
</script>