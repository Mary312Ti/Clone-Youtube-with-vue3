<template>
    <div class="flex items-center">
        <a href="" class="font-semibold text-gray-800 mr-6 text-sm">{{ header }}</a>
        <a href="" class="flex items-center">
            <BaseIcon name="playIcon" stroke-color="none" fill-color="currentColor"/>
            <span class="ml-2 font-semibold text-xs hover:text-black text-gray-600">
                Play all
            </span>
        </a>
    </div>
</template>

<script setup>
import BaseIcon from '../Base/BaseIcon.vue'
import { defineProps } from 'vue';

const props = defineProps({
  header: {
    type: String,
    required: true,
  },
});

</script>