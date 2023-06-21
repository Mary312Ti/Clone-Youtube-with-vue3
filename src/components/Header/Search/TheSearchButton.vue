<template>
    <BaseTooltipe text="Search"><button
            class="flex items-center px-6 py-2 text-gray-600 bg-gray-100 border border-l-0 focus:outline-none border-gray-300 rounded-tr-3xl rounded-br-3xl hover:bg-gray-200">
            <BaseIcon name="search" strokeColor="currentColor" fillColor="none" class="w-5 h-5"></BaseIcon>
        </button>
    </BaseTooltipe>
</template>

<script setup>
import BaseIcon from '../../Base/BaseIcon.vue';
import BaseTooltipe from '../../Base/BaseTooltipe.vue'

</script>