<template>
    <button class="pl-2 pr-6">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-6 h-6"
            >
            <template v-html="path" />
        </svg>
    </button>
</template>

<script setup>
import icons from '../../icons';
import { computed } from 'vue';


const props = defineProps({
   name: { type: String, required: true },
});

const path = computed(() => icons[props.name]);

</script>