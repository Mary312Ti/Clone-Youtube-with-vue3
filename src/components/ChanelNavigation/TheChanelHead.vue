<template>
<div :class="mainClasses" class="max-w-screen-2xl pr-4 pl-0 sm:pl-4">
      <div class="flex flex-row items-start justify-between md:items-center mb-4 xl:mb-0">
        <div class="flex items-center pt-4 ">
          <img
            src="../../assets/image/chanel-avatar.jpg"
            alt=""
            class="w-24 h-24 rounded-full object-cover hidden md:inline"
          />
          <div class="ml-3">
            <div class="flex items-center gap-2">
              <span class="text-2xl font-semibold">Kitty</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                fill-opacity="0.50"
                class="w-4 h-4 pt-[3px]"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div class="flex items-center gap-2 text-gray-800 text-xs md:text-sm">
              <p>@thekitty</p>
              <p>9,69 тыс. подписчиков</p>
              <p>238 видео</p>
            </div>
            <div class="flex items-center text-gray-800 text-xs md:text-sm">
              <p class="w-36 truncate md:w-96 ">Here at our channel, we celebrate all things cat-related</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4 text-gray-600 pt-[3px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
        <button
          class="bg-black font-semibold text-xs lg:text-sm text-white rounded-full px-4 py-2 xl:px-8 xl:py-3 focus:outline-none mt-8 ml-4 xl:ml-0 xl:mt-0"
        >
          Subscribe
        </button>
      </div>
      <TheChanelNav />
    </div>
</template>

<script setup>
import { computed } from 'vue';
import TheChanelNav from './TheChanelNav.vue';

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