<template>
    <a href="#" class="w-full flex flex-col items-center ml-14 mr-14">
        <img src="http://placekitten.com/100/100" alt="" class="rounded-full">
        <span class="font-semibold mb-4 mt-2">
            {{ chanelName }}
        </span>
        <span class="text-gray-600 text-xs pb-4">
            {{ subscribersQuantity + ' subscribers' }}
        </span>
        <button class="bg-gray-200 py-1 px-2 text-xs hover:bg-gray-400 font-semibold rounded-xl focus:outline-none">
            Subscribe
        </button>
    </a>
</template>

<script setup>
const props = defineProps({
    chanelName: {
        type: String,
        required: true,
    },
    subscribersQuantity: {
        type: String,
        required: true,
    },

});
</script>