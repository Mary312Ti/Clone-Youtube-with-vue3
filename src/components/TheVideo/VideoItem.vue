<template>
    <a v-for="i in 15" :key="i" href="#" class="mb-7 group">
        <VideoItemThumbnail :index="i"></VideoItemThumbnail>
        <VideoItemInfo :index="i"></VideoItemInfo>
    </a>
</template>
<script setup>
import VideoItemThumbnail from './VideoItemThumbnail.vue';
import VideoItemInfo from './VideoItemInfo.vue';

</script>