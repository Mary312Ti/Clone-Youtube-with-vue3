<template>
    <div class="relative">
        <img class="rounded-lg hover:rounded-none" src="http://placekitten.com/720/404" />
        <VideoItemThumbnailButton name="historyIcon" label="Watch later"/>
        <VideoItemThumbnailButton name="addToQueue" label="Add to queue" class="top-8"/>
        <!-- TODO fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"-->
        <span
            class="opacity-100 group-hover:opacity-0 duration-500 absolute bottom-0 right-0 bg-black text-white rounded-md m-1 p-1 text-xs font-semibold">6:35</span>
    </div>
</template>

<script setup>
import VideoItemThumbnailButton from './VideoItemThumbnailButton.vue';


</script>