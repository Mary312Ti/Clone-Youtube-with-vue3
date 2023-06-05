<template>
    <div class="block sm:hidden fixed bottom-0 w-full">
        <ul class="flex justify-between items-stretch bg-white">
            <SidebarSmallItem class="flex-1" label="Home" icon="homeIcon"/>
          <SidebarSmallItem class="flex-1" label="Shorts" icon="shortsIcon"/>
          <SidebarSmallItem class="flex-1" label="Library" icon="libraryIcon"/>
    </ul>
</div>
    
</template>

<script setup>
import SidebarSmallItem from './SidebarSmallItem.vue';
</script>