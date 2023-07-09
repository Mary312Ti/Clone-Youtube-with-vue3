<template>
    <a v-for="(videoTitle, index) in videoStore.videos" :key="index" href="#" class="mb-7 group">
      <VideoItemThumbnail :index="index"></VideoItemThumbnail>
      <VideoItemInfo
      :index="index"
      :showImage="true"
      :showChannelLink="true"
      ></VideoItemInfo>
    </a>
  </template>

<script setup>
import VideoItemThumbnail from './VideoItemThumbnail.vue';
import VideoItemInfo from './VideoItemInfo.vue';
import { useVideoStore } from '../../stores/previewVideoStore.js';

const videoStore = useVideoStore();
</script>