<template>
    <div class="hidden sm:flex w-full h-full max-w-screen-md">
        <TheSearchInput />
        <TheSearchButton />
    </div>
</template>

<script setup>

import TheSearchInput from './TheSearchInput.vue';
import TheSearchButton from './TheSearchButton.vue';

const components = {
    TheSearchInput,
    TheSearchButton
}

defineExpose ({ components })
</script>