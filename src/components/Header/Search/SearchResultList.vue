<template>
    <ul class="absolute top-12 rounded-lg drop-shadow-lg bg-white min-w-input" ref="suggestionsContainer">
      <li v-for="(result, index) in searchStore.suggestions" :key="result" :class="listItemClasses(index)">
        <BaseIcon name="search" strokeColor="currentColor" fillColor="none" class="w-5 h-5"></BaseIcon>
        <p class="truncate">{{ decodeHTML(result) }}</p>
      </li>
    </ul>
  </template>
  
  <script setup>
  import BaseIcon from '../../Base/BaseIcon.vue';
  import { useSearchStore } from '../../../stores/searchStore';
  import { ref, onMounted } from 'vue';
  
  const searchStore = useSearchStore();
  const suggestionsContainer = ref(null);
  
  const listItemClasses = (index) => {
    const classes = ['hover:bg-gray-100', 'px-12', 'py-2', 'flex', 'flex-row', 'gap-4'];
  
    if (index === 0) {
      classes.push('mt-4');
    }
  
    if (index === searchStore.suggestions.length - 1) {
      classes.push('mb-4');
    }
  
    return classes;
  };
  
  const decodeHTML = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value.replace(/&amp;/g, '&');
  };
  
  onMounted(() => {
    adjustContainerWidth();
  });
  
  const adjustContainerWidth = () => {
    if (suggestionsContainer.value) {
      const inputWidth = suggestionsContainer.value.parentNode.offsetWidth;
      suggestionsContainer.value.style.width = inputWidth + 'px';
    }
  };
  </script>
  
  <style scoped>
  .min-w-input {
    min-width: calc(100% - 2 * 0.75rem);
  }
  
  .truncate {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  </style>
  