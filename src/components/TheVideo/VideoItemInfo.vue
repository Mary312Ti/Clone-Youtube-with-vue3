<template>
    <div class="flex items-start place-content-between mt-3">
        <div class="flex">
            <img v-if="showImage" :src="thumbnailUrl" class="mr-3 rounded-full w-9 h-9" alt="" />
            <div class="text-sm">
                <span class="font-semibold text-gray-800">{{ video.title }}</span>
                <BaseTooltipe :text="video.channelName">
                    <router-link to="/chanel" v-if="showChannelLink"
                        class="text-gray-600 mt-1 flex items-center flex-nowrap">
                        <span class="pr-[8px]">{{ video.channelName }}</span>
                        <BaseIcon name="confirmChanel" strokeColor="none" fillColor="currentColor"
                            class="w-4 h-4 opacity-50"></BaseIcon>
                    </router-link>
                </BaseTooltipe>
                <div class="text-gray-600">
                    {{ video.viewCount }} &middot; {{ video.publishedAt }}
                </div>
            </div>
        </div>

        <VideoItemDropdown />
    </div>
</template>
  
<script setup>
import VideoItemDropdown from './VideoItemDropdown.vue';
import BaseIcon from '../Base/BaseIcon.vue';
import BaseTooltipe from '../Base/BaseTooltipe.vue';
import { computed, onMounted } from 'vue';
import { useVideoStore } from '../../stores/previewVideoStore';

const props = defineProps({
    index: {
        type: Number,
        required: true
    },
    showImage: {
        type: Boolean,
        default: true
    },
    showChannelName: {
        type: Boolean,
        default: true
    },
    showChannelLink: {
        type: Boolean,
        default: true
    },
    videoTitle: String,
    channelName: String,
    viewCount: String,
    addingTime: String
});

const videoStore = useVideoStore();
const index = props.index;
const video = computed(() => videoStore.videos[index]);
const thumbnailUrl = computed(() => videoStore.getThumbnailUrl(video.value));

onMounted(() => {
  videoStore.fetchRandomVideos();
});
</script>
  