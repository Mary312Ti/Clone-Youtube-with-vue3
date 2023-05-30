<template>
    <li>
        <a href="#" class="flex items-center px-3 py-2 text-sm hover:bg-gray-100">
            <BaseIcon :name="name" :fill-color="fillColor" :stroke-color="strokeColor">
            </BaseIcon>
            <span class="pl-2">{{ label }}</span>
        </a>
    </li>
</template>

<script setup>
import BaseIcon from '../Base/BaseIcon.vue';

const props = defineProps({
    name: { type: String, required: true },
    strokeColor: { type: String, default: "currentColor" },
    fillColor: { type: String, default: "none"},
    label: { type: String, required: true }
});

</script>