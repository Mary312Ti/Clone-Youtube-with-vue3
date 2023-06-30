<template>
    <TheHeader />
    <TheSidebarSmall v-show="sidebarState === 'compact'" />
    <TheSidebarBig v-show="sidebarState === 'normal'" />
    <TheCategory :sidebarState="sidebarState" :marginClasses="marginClasses" />
    <TheVideoMain :sidebarState="sidebarState" :mainClasses="mainClasses" />
    <MobileMenu v-show="sidebarState === 'compact'" />
</template>
  
<script setup>
import TheHeader from '../components/Header/TheHeader.vue';
import TheSidebarSmall from '../components/Sidebar/TheSidebarSmall.vue';
import TheSidebarBig from '../components/Sidebar/TheSidebarBig.vue';
import TheCategory from '../components/TheCategory.vue';
import TheVideoMain from '../components/TheVideo/TheVideoMain.vue';
import MobileMenu from '../components/Sidebar/MobileMenu.vue';
import { useWindowSize } from '@vueuse/core';
import { useSidebarStore } from '../stores/sidebarState';
import { onMounted, onUnmounted, computed } from 'vue';

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
  
<style scoped lang="sass">
  
  </style>
  