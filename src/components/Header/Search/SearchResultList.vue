<template>
    <ul class="absolute top-12 rounded-lg drop-shadow-lg bg-white py-2">
        <li v-for="(result, index) in searchResult" :key="result" :class="listItemClasses(index)">
            <BaseIcon name="search" strokeColor="currentColor" fillColor="none" class="w-5 h-5"></BaseIcon>
            {{ result }}
        </li>
    </ul>
</template>

<script setup>
import BaseIcon from '../../Base/BaseIcon.vue';

const searchResult = ['lorem ipsum', 'lorem ipsum1', 'lorem ipsum2', 'lorem ipsum3', 'lorem ipsum4'];

const listItemClasses = (index) => {
    const classes = ['hover:bg-gray-100', 'px-12', 'py-2', 'flex', 'flex-row', 'gap-4',];

    if (index === 0) {
        classes.push('mt-4');
    }

    if (index === searchResult.length - 1) {
        classes.push('mb-4');
    }

    return classes;
};

</script>