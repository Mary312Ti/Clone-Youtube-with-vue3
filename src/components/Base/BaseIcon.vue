<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :fill="fillColor" :stroke="strokeColor" stroke-width="1.5"
        :class="$attrs.class || 'w-6 h-6'" 
        v-html="path">
    </svg>
</template>

<script setup>
import icons from './icons.js';
import { ref } from 'vue';
const props = defineProps({
    name: { type: String, required: true },
    strokeColor: { type: String, default: "currentColor", required: true },
    fillColor: { type: String, default: "none", required: true },

});
const path = ref(icons[props.name]);
</script>