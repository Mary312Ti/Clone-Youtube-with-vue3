<template>
<main class="md:ml-24 xl:ml-64 pt-32 px-5 pb-5">
      <div
        class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 max-w-screen-2xl m-auto"
      >
        <VideoItem />
      </div>
    </main> 
</template>

<script setup>

import VideoItem from './VideoItem.vue';

const components = {
  VideoItem,
};


defineExpose({ components })

</script>