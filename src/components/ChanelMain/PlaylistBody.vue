<template>
    <div class="flex gap-2">
        <a v-for="(videoTitle, index) in videoTitles" :key="index" href="#" class="mt-4 mb-7 group">
            <VideoItemThumbnail :index="index"></VideoItemThumbnail>
            <VideoItemInfo :index="index" :videoTitle="videoTitle" 
                :viewCount="viewCounts[index]" :addingTime="addingTime[index]"></VideoItemInfo>
        </a>
    </div>
</template>
  
<script setup>
import VideoItemThumbnail from '../TheVideo/VideoItemThumbnail.vue';
import VideoItemInfo from '../TheVideo/VideoItemInfo.vue';

const videoTitles = ['Video title 1', 'Video title 2', 'Video title 3', 'Video title 4']; // Add the remaining video titles
const channelNames = ['Channel name 1', 'Channel name 2', 'Channel name 3', 'Channel name 4']; // Add the remaining channel names
const viewCounts = ['1K', '2K', '500', '40']; // Add the remaining view counts
const addingTime = ['1 day ago', '2 days ago', '3 days ago', '8 days ago']; // Add the remaining adding times
</script>
  