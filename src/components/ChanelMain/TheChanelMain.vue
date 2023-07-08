<template>
    <div :class="mainClasses" class="px-4">
        <div class="flex flex-col xl:flex-row py-6">
            <img src="/lorem-img1.jpg" alt="" class="xl:max-w-sm max-w-sm max-h-60 " />
           <TheChanelDescr/>
        </div>
        <div class="border-t border-gray-300 pt-5">
           <PlaylistHead header="Popular video"/>
            <PlaylistBody/>
        </div>
        <div class="border-t border-gray-300 pt-5">
            <PlaylistHead header="Main video"/>
            <PlaylistBody/>
        </div>
        <FeaturedChanels/>
    </div>
</template>

<script setup>
import TheChanelDescr from '../ChanelMain/TheChanelDescr.vue';
import PlaylistHead from './PlaylistHead.vue';
import PlaylistBody from './PlaylistBody.vue';
import FeaturedChanels from './FeaturedChanels.vue';
import { computed } from 'vue';

const mainClasses = computed(() => {
    return {
        'ml-64': props.sidebarState === 'normal',
        'ml-24': props.sidebarState === 'compact'
    }
});

const props = defineProps({
    sidebarState: String,
});

</script>