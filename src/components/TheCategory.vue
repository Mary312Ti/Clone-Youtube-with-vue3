<template>
  <section :class="marginClasses" class="flex fixed bg-white w-screen xs:top-14 z-20 pl-4">
    <div class="max-w-screen-2xl m-auto">
      <div class="scrollbar scrollbar-none text-sm py-5 pl-4 bg-white flex space-x-3 overflow-auto whitespace-nowrap">
        <CategoryItem
          v-for="category in videoCategories"
          :key="category"
          :category="category"
          :isActive="category === 'All'"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CategoryItem from './CategoryItem.vue';
import { computed, onMounted } from 'vue';
import { useGetCategories } from '../stores/getCategories';

const props = defineProps({
  sidebarState: String
});

const marginClasses = computed(() => {
  return {
    'ml-64': props.sidebarState === 'normal',
    'ml-24': props.sidebarState === 'compact'
  }
});

const store = useGetCategories();
const videoCategories = computed(() => store.videoCategories.map(item => item.snippet.title));

onMounted(() => {
  store.fetchVideoCategories();
});
</script>
