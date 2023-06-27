<template>
    <input type="text" @click="toggleList" placeholder="Search"
        class="relative bg-white w-full px-3 shadow-inner rounded-bl-3xl rounded-tl-3xl border border-gray-300 focus:outline-none placeholder:text-gray-500" />
        <SearchResultList  v-if="showList" />
</template>

<script setup>
import SearchResultList from './SearchResultList.vue';
import { ref, } from 'vue';

// const { inputWidth } = toRefs(props);

const showList = ref(false);

const toggleList = () => {
    showList.value = !showList.value;
};

// onMounted(() => {
//   const input = document.querySelector('input');
//   inputWidth.value = `${input.offsetWidth}px`;
// });

</script>