<template>
 <main :class="mainClasses" class="pt-24 px-5 pb-5 bg-white">
      <div
        class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 max-w-screen-2xl m-auto"
      >
        <VideoItem />
      </div>
    </main> 
</template>

<script setup>
import VideoItem from './VideoItem.vue';
import { computed } from '@vue/reactivity';
import { useVideoStore } from '../../stores/previewVideoStore';

const videoStore = useVideoStore();
const videos = computed(() => videoStore.videos);

const props = defineProps({
  sidebarState: String
});

const mainClasses = computed(() => {
    return {
        'ml-64': props.sidebarState === 'normal',
        'ml-24': props.sidebarState === 'compact'
    }
});

</script>
