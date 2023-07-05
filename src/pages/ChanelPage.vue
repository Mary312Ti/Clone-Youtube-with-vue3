<template>
    <TheHeader />
    <TheSidebarSmall v-show="sidebarState === 'compact'" />
    <TheSidebarBig v-show="sidebarState === 'normal'" />
    <TheCategory :sidebarState="sidebarState" :marginClasses="marginClasses"/>
    <ChanelPreview :sidebarState="sidebarState" :mainClasses="mainClasses"/>
    <TheChanelHead :sidebarState="sidebarState" :mainClasses="mainClasses"/>
    <TheChanelMain :sidebarState="sidebarState" :mainClasses="mainClasses"/>
</template>

<script setup>
import TheHeader from '../components/Header/TheHeader.vue';
import TheSidebarSmall from '../components/Sidebar/TheSidebarSmall.vue';
import TheSidebarBig from '../components/Sidebar/TheSidebarBig.vue';
import TheCategory from '../components/TheCategory.vue';
import ChanelPreview from '../components/ChanelPreview.vue';
import TheChanelHead from '../components/ChanelNavigation/TheChanelHead.vue';
import TheChanelMain from '../components/ChanelMain/TheChanelMain.vue';
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