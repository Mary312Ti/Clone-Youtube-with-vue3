<template>
    <section :class="classes">
        <ul>
            <slot />
        </ul>
    </section>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { getCurrentInstance } from '@vue/runtime-core';

const { attrs } = getCurrentInstance();

const classes = computed(() => {
    return attrs.class ? attrs.class : 'py-2 border-b';
});

</script>