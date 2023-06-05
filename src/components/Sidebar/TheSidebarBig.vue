<template>
  <SidebarContent />
</template>

<script setup>
import SidebarContent from './SidebarContent.vue';
import { reactive, onMounted } from 'vue';

const state = reactive({
  sidebarState: null
});

onMounted(() => {
  if (window.innerWidth >= 768 && window.innerWidth < 1280) {
    sidebarState = 'compact'
  }
  if (window.innerWidth >= 1280) {
    sidebarState = 'normal'
  }
})

</script>