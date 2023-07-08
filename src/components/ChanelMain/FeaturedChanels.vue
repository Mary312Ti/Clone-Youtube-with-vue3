<template>
    <div class="border-t border-gray-300 pt-4 pb-10">
            <a href="#" class="font-semibold text-lg">Featured channels</a>
            <div class="mt-6 flex">
                <div class="flex items-center w-full">
                    <FeaturedChanelPreview chanelName="Chanel" subscribersQuantity="30.1K"/>
                    <FeaturedChanelPreview chanelName="Chanel" subscribersQuantity="20K"/>
                </div>
            </div>
        </div>
</template>

<script setup>
import FeaturedChanelPreview from './FeaturedChanelPreview.vue';
</script>