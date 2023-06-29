<template>
  <section :class="marginClasses" class="flex fixed bg-white w-screen xs:top-14 z-20 pl-4">
    <div class="max-w-screen-2xl m-auto">
      <div class="scrollbar scrollbar-thumb-gray-400 scrollbar-track-transparent scrollbar-thumb-rounded-full hover:scrollbar-thumb-gray-500 hover:scrollbar-track-gray-100 text-sm py-5 pl-4 bg-white flex space-x-3 overflow-auto whitespace-nowrap">
       <CategoryItem
       v-for="category in categories" :key="category" :category="category" :isActive="category === 'All'" />
      </div>
    </div>
  </section>
</template>

<script setup>

import CategoryItem from './CategoryItem.vue';
import { computed } from '@vue/reactivity';

const props = defineProps({
  sidebarState: String
});

const marginClasses = computed(() => {
    return {
        'ml-64': props.sidebarState === 'normal',
        'ml-24': props.sidebarState === 'compact'
    }
});


const categories = [
  'All',
  'Music',
  'Playlists',
  'Live',
  'Gaming',
  'Television comedy',
  'Test drives',
  'Animated films',
  'History',
  'Cars',
  'Home improvement',
  'Conversation',
  'Pop music',
  'Strategy video games',
  'Role-Playing Games',
  'Reently uploaded',

]

defineExpose({ categories })
</script>