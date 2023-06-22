<template>
    <header class="flex justify-between bg-white sticky top-0 z-50">
        <div class="lg:w-1/4 xl:w-64 flex">
            <div class="flex items-center pl-4">
                <button @click="$emit('toggleSidebar')" class="pl-2 pr-6 hidden sm:block">
                    <BaseIcon name="menu" strokeColor="currentColor" fillColor="none"></BaseIcon>
                </button>
                <LogoMain />
            </div>
        </div>
        <div class="hidden p-2.5 sm:flex flex-1 gap-2 justify-end pl-8 md:pl-12 md:px-8 lg:px-0 items-center lg:w-1/2">
            <TheSearch />
            <BaseTooltipe text="Voice search">
                <button class="ml-4 hidden sm:flex focus:outline-none">
                    <BaseIcon name="microphone" strokeColor="none" fillColor="currentColor"></BaseIcon>
                </button>
            </BaseTooltipe>
        </div>
        <div class="mt-2 z-20 sm:m-0 sm:space-x-8 flex items-center justify-end lg:w-1/4 pr-4 px-4">
            <button class="sm:hidden px-6 py-2 text-gray-600">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </button>
            <!-- dots-menu -->
            <BaseTooltipe text="Settings">
            <button @click="isDropDownOpen = !isDropDownOpen" class="relative group p-2 focus:outline-none">
                <BaseIcon name="dotsSettings" fill-color="none" stroke-color="currentColor"></BaseIcon>
                <TheDropdown v-if="isDropDownOpen" />
            </button>
        </BaseTooltipe>
            <LoginButton />
        </div>
    </header>
</template>
<script setup>
import TheDropdown from './TheDropdown.vue';
import LogoMain from './LogoMain.vue';
import TheSearch from './Search/TheSearch.vue';
import LoginButton from '../Login/LoginButton.vue';
import BaseIcon from '../Base/BaseIcon.vue';
import BaseTooltipe from '../Base/BaseTooltipe.vue';
import { defineEmits } from 'vue';
import { ref } from 'vue';

defineEmits: ['toggleSidebar']

const isDropDownOpen = ref(false);

</script>