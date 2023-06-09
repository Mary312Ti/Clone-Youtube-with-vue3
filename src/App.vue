<template>
  <TheHeader @toggle-sidebar="toggleSidebar" />
  <TheSidebarSmall v-show="state.sidebarState === 'compact'" />
  <TheSidebarBig v-show="state.sidebarState === 'normal'" />
  <TheCategory />
  <TheVideoMain />
  <MobileMenu />
</template>

<script setup>
import TheHeader from './components/Header/TheHeader.vue';
import TheSidebarSmall from './components/Sidebar/TheSidebarSmall.vue';
import TheSidebarBig from './components/Sidebar/TheSidebarBig.vue';
import TheCategory from './components/TheCategory.vue';
import TheVideoMain from './components/TheVideoMain.vue';
import MobileMenu from './components/Sidebar/MobileMenu.vue';
import { reactive, } from 'vue';
import { useWindowSize } from '@vueuse/core'

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
  // if (width.value >= 1024) {
  //   state.sidebarState = state.sidebarState === 'normal' ? 'compact' : 'normal'
  // }
}

window.addEventListener('resize', toggleSidebar)

const components = {
  TheHeader,
  TheSidebarSmall,
  TheSidebarBig,
  TheCategory,
  TheVideoMain,
  MobileMenu

}



defineExpose({ components })
</script>

<style scoped lang="sass">

</style>
