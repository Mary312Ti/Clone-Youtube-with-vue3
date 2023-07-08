<template>
    <video :src="path" :width="width" :height="height" controls></video>
</template>
  
<script setup>

const props = defineProps({
    path: String,
    width: {
        type: Number,
        default: 640
    },
    height: {
        type: Number,
        default: 360
    }

})

</script>