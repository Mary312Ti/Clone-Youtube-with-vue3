<template>
    <aside class="max-h-screen overflow-hidden fixed bg-white"> 
      <section>
        <ul>
          <SidebarSmallItem label="Home" icon="homeIcon" isActive=""/>
          <SidebarSmallItem label="Shorts" icon="shortsIcon"/>
          <SidebarSmallItem label="Subscriptions" icon="subscribeIcon"/>
        </ul>
        <ul>
          <SidebarSmallItem label="Library" icon="libraryIcon"/>
          <SidebarSmallItem label="History" icon="historyIcon"/>
        </ul>
      </section>
    </aside>
</template>

<script setup>
import SidebarSmallItem from './SidebarSmallItem.vue';

</script>