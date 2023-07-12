<template>
    <div class="flex flex-row">
      <div class="w-2/3">
        <VideoPlayer :selectedVideo="selectedVideo" />
      </div>
      <div class="w-1/3">
        <a v-for="(video, index) in videoStore.videos" :key="index" href="#" class="mt-4 mb-7 group">
          <VideoItemThumbnail
            :index="index"
            :video="video"
            @selectVideo="selectedVideo = video"
          />
          <VideoItemInfo
            :index="index"
            :video="video"
            :showChannelLink="false"
            :showImage="false"
          />
        </a>
      </div>
    </div>
  </template>
  
  <script setup>
  import VideoPlayer from './VideoPlayer.vue';
  import VideoItemThumbnail from '../TheVideo/VideoItemThumbnail.vue';
  import VideoItemInfo from '../TheVideo/VideoItemInfo.vue';
  import { useVideoStore } from '../../stores/previewVideoStore';
  import { ref,onMounted } from 'vue';

onMounted(() => {
  videoStore.fetchRandomVideos();
});

  
  const videoStore = useVideoStore();
  const selectedVideo = ref(null);
  </script>
  