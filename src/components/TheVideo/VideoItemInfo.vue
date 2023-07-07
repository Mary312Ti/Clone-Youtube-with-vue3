<template>
    <div class="flex items-start place-content-between mt-3">
      <div class="flex">
        <img v-if="showImage" src="http://placekitten.com/40/40" class="mr-3 rounded-full w-9 h-9" alt="" />
        <div class="text-sm">
          <span class="font-semibold text-gray-800">{{ videoTitle }}</span>
          <BaseTooltipe :text="channelName">
            <router-link to="/chanel" v-if="showChannelLink" class="text-gray-600 mt-1 flex items-center flex-nowrap">
              <span class="pr-[8px]">{{ channelName }}</span>
              <BaseIcon name="confirmChanel" strokeColor="none" fillColor="currentColor" class="w-4 h-4 opacity-50"></BaseIcon>
            </router-link>
          </BaseTooltipe>
          <div class="text-gray-600">
            {{ viewCount }} &middot; {{ addingTime }}
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
  </script>
  