<template>
<div class="flex justify-between items-center pl-4 lg:pl-0">
        <nav class="mt-4">
          <!--active-->
            <TheChanelNavItem v-for="navItem in navItems" :key="navItem" :navItem="navItem" :isActive="navItem === 'Home'"/>
        </nav>
        <div class="flex justify-between pt-4 lg:pt-0 ">
          <div class="xl:flex items-center hidden">
            <svg
              class="w-5 h-5 mr-2 mt-1.5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              class="opacity-0 border-b-2 border-black text-xs py-1 focus:outline-none w-36 bg-transparent"
            />
          </div>

          <!-- arrow -->
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 text-gray-600 ml-auto"
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
</template>

<script setup>
import TheChanelNavItem from './TheChanelNavItem.vue';
const navItems = [
    'Home',
    'Videos',
    'Playlists',
    'Community',
    'Channels',
    'About',
]

</script>