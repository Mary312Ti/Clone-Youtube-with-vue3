<template>
    <TheHeader @toggle-sidebar="toggleSidebar" />
    <TheSidebarSmall v-show="state.sidebarState === 'compact'" />
    <TheSidebarBig v-show="state.sidebarState === 'normal'" />
    <TheCategory :sidebarState="state.sidebarState" :marginClasses="marginClasses"/>
    <TheVideoMain :sidebarState="state.sidebarState" :mainClasses="mainClasses"/>
    <MobileMenu  v-show="state.sidebarState === 'compact'" />
  </template>
  
  <script setup>
  import TheHeader from '../components/Header/TheHeader.vue';
  import TheSidebarSmall from '../components/Sidebar/TheSidebarSmall.vue';
  import TheSidebarBig from '../components/Sidebar/TheSidebarBig.vue';
  import TheCategory from '../components/TheCategory.vue';
  import TheVideoMain from '../components/TheVideo/TheVideoMain.vue';
  import MobileMenu from '../components/Sidebar/MobileMenu.vue';
  import { reactive } from 'vue';
  import { useWindowSize } from '@vueuse/core'

  const props = defineProps({
    mainClasses: {type: Object},
    marginClasses: {type: Object}
  })
  
  const state = reactive({
    sidebarState: 'normal'
  })
  
  const { width } = useWindowSize()
  
  function toggleSidebar() {
    if (width.value >= 768) {
      state.sidebarState = state.sidebarState === 'normal' ? 'compact' : 'normal'
    } else {
      state.sidebarState = 'compact'
    }
  }
  
  window.addEventListener('resize', toggleSidebar)
  
  
  </script>
  
  <style scoped lang="sass">
  
  </style>
  