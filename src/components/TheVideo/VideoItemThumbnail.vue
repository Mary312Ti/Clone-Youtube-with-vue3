<template>
    <div class="relative">
        <router-link to="/play"> <img class="rounded-lg hover:rounded-none w-full h-auto" :src="video.thumbnailUrl" /></router-link>
        <VideoItemThumbnailButton name="historyIcon" label="Watch later"/>
        <VideoItemThumbnailButton name="addToQueue" label="Add to queue" class="top-8"/>
        <span
            class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-md m-1 p-1 text-xs font-semibold">6:35</span>
    </div>
</template>

<script setup>
import VideoItemThumbnailButton from './VideoItemThumbnailButton.vue';
import { computed, onMounted } from 'vue';
import { useVideoStore } from '../../stores/previewVideoStore';

const videoStore = useVideoStore();
const video = computed(() => videoStore.videos[index]);
const index = 0;

onMounted(() => {
  videoStore.fetchRandomVideos();
});

</script>