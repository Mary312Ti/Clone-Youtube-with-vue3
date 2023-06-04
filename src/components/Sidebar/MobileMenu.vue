<template>
    <div class="block sm:hidden fixed bottom-0 w-full">
        <ul class="flex justify-between items-stretch bg-white  py-4">
        <li class="flex-1">
            <a class="flex flex-col items-center justify-center" href="#">
                <BaseIcon name="homeIcon" fill-color="currentColor" stroke-color="none"/>
            </a>
        </li>
        <li class="flex-1">
            <a class="flex flex-col items-center justify-center" href="#">
                <BaseIcon name="shortsIcon" fill-color="currentColor" stroke-color="none"/>
            </a>
        </li>
        <li class="flex-1">
            <a class="flex flex-col items-center justify-center" href="#">
                <BaseIcon name="libraryIcon" fill-color="currentColor" stroke-color="none"/>
            </a>
        </li>
    </ul>
</div>
    
</template>

<script setup>
import BaseIcon from '../Base/BaseIcon.vue';
</script>