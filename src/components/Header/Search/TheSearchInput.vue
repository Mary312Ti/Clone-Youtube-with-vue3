<template>
    <div class="relative flex-grow">
      <input type="text" @input="handleInput" placeholder="Search" class="relative bg-white h-full w-full px-3 shadow-inner rounded-bl-3xl rounded-tl-3xl border border-gray-300 focus:outline-none placeholder:text-gray-500" />
      <SearchResultList v-if="showList" />
    </div>
  </template>
  
  <script setup>
  import SearchResultList from './SearchResultList.vue';
  import { ref } from 'vue';
  import { useSearchStore } from '../../../stores/searchStore.js';
  
  const searchStore = useSearchStore();
  const showList = ref(false);
  
  const handleInput = async (event) => {
    const query = event.target.value;
    await searchStore.fetchAutocompleteSuggestions(query);
    showList.value = query.length > 0;
  };
  </script>
  