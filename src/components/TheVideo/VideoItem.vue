<template>
    <a v-for="(videoTitle, index) in videoTitles" :key="index" href="#" class="mb-7 group">
      <VideoItemThumbnail :index="index"></VideoItemThumbnail>
      <VideoItemInfo
        :index="index"
        :videoTitle="videoTitle"
        :channelName="channelNames[index]"
        :viewCount="viewCounts[index]"
        :addingTime="addingTime[index]"
      ></VideoItemInfo>
    </a>
  </template>

<script setup>
import VideoItemThumbnail from './VideoItemThumbnail.vue';
import VideoItemInfo from './VideoItemInfo.vue';

const videoTitles = ['Video title 1', 'Video title 2', 'Video title 3', 'Video title 4', 'Video title 5', 'Video title 6', 'Video title 7', 'Video title 8', 'Video title 9', 'Video title 10', 'Video title 11', 'Video title 12', 'Video title 13', 'Video title 14', 'Video title 15', 'Video title 16']; // массив заголовков видео
const channelNames = ['Channel name 1', 'Channel name 2', 'Channel name 3', 'Channel name 4', 'Channel name 5', 'Channel name 6', 'Channel name 7', 'Channel name 8', 'Channel name 9', 'Channel name 10', 'Channel name 11', 'Channel name 12', 'Channel name 13', 'Channel name 14', 'Channel name 16', 'Channel name 15']; // массив названий каналов
const viewCounts = ['1K', '2K', '500', '1K', '1K', '1K', '1K', '1K', '1', '1K', '1K', '11K', '1K', '200', '2', '1K',]; // массив количества просмотров
const addingTime = ['1 day ago', '2 day ago', '3 day ago', '4 day ago', '5 day ago', '6 day ago', '7 day ago', '8 day ago', '9 day ago', '10 day ago', '11 day ago', '12 day ago', '13 day ago', '14 day ago', '15 day ago', '16 day ago']

</script>