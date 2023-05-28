<template>
    <header class="flex justify-between bg-white sticky top-0 z-50">
        <div class="lg:w-1/4 xl:w-64 flex">
            <div class="flex items-center pl-4">
                <button class="pl-2 pr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <LogoMain />
            </div>
        </div>
        <div class="hidden p-2.5 sm:flex flex-1 gap-2 justify-end pl-8 md:pl-12 md:px-8 lg:px-0 items-center lg:w-1/2">
            <TheSearch />
            <button class="ml-4 hidden sm:flex focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                    <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                    <path
                        d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                </svg>
            </button>
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
            <button class="relative group p-2 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
                <TheDropdown />
            </button>
            <LoginButton />
        </div>
    </header>
</template>
<script setup>
import TheDropdown from '../TheDropdown.vue';
import LogoMain from './LogoMain.vue';
import TheSearch from './Search/TheSearch.vue';
import LoginButton from '../Login/LoginButton.vue';

const components = {
    TheDropdown,
    LogoMain,
    TheSearch,
    LoginButton,
}


defineExpose({ components })
</script>