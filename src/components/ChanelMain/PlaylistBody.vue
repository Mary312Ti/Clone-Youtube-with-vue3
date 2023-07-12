<template>
    <div class="flex gap-2">
        <a v-for="(videoTitle, index) in videoTitles" :key="index" href="#" class="mt-4 mb-7 group">
            <VideoItemThumbnail :index="index"></VideoItemThumbnail>
            <VideoItemInfo :index="index" :videoTitle="videoTitle" 
                :viewCount="viewCounts[index]" :showChannelLink="false" :showImage="false" :addingTime="addingTime[index]"></VideoItemInfo>
        </a>
    </div>
</template>
  
<script setup>
import VideoItemThumbnail from '../TheVideo/VideoItemThumbnail.vue';
import VideoItemInfo from '../TheVideo/VideoItemInfo.vue';

</script>
  