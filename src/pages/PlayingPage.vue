<template>
        <TheHeader />
    <TheSidebarSmall v-show="sidebarState === 'compact'" />
    <TheSidebarBig v-show="sidebarState === 'normal'" />
    <VideoList/>

</template>

<script setup>
import TheHeader from '../components/Header/TheHeader.vue';
import TheSidebarSmall from '../components/Sidebar/TheSidebarSmall.vue';
import TheSidebarBig from '../components/Sidebar/TheSidebarBig.vue';
import VideoList from '../components/PlayingPage/VideoList.vue';
import { useWindowSize } from '@vueuse/core';
import { useSidebarStore } from '../stores/sidebarState';
import { computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    mainClasses: { type: Object },
    marginClasses: { type: Object }
})

const store = useSidebarStore();
const { width } = useWindowSize();

onMounted(() => {
    window.addEventListener('resize', toggleSidebar);
});

onUnmounted(() => {
    window.removeEventListener('resize', toggleSidebar);
});

function toggleSidebar() {
    store.toggleSidebar();
}

const sidebarState = computed(() => store.sidebarState);



</script>