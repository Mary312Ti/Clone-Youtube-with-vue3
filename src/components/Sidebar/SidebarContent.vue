<template>
    <aside class="hidden xl:block w-64 max-h-screen overflow-auto fixed">
    <SidebarSection>
      <SidebarNavItem label="Home" icon="homeIcon" fill-color="currentColor" stroke-color="none" is-active />
      <SidebarNavItem label="Shorts" icon="shortsIcon" />
      <SidebarNavItem label="Subscriptions" icon="subscribeIcon" />
    </SidebarSection>
    <SidebarSection>
      <SidebarNavItem label="Library" icon="libraryIcon" />
      <SidebarNavItem label="History" icon="historyIcon" />
    </SidebarSection>
    <section class="px-6 py-4 border-b leading-5">
      <span class="text-sm">Sign in to like videos, comment, and subscribe</span>
      <LoginButton class="mt-3" />
    </section>
    <SidebarSection>
      <SidebarSectionHeading title="Explore" />
      <SidebarNavItem label="Trending" icon="trendingIcon" />
        <SidebarNavItem label="Music" icon="musicIcon" />
        <SidebarNavItem label="Movies" icon="moviesIcon" />
        <SidebarNavItem label="Live" icon="liveIcon" />
        <SidebarNavItem label="Gaming" icon="gamingIcon" />
        <SidebarNavItem label="Sports" icon="sportsIcon" />
    </SidebarSection>
    <SidebarSection>
      <SidebarNavItem label="Trending" icon="trendingIcon" />
    </SidebarSection>
    <SidebarSection>
      <SidebarSectionHeading title="More from YouTube" />
      <SidebarNavItem label="YouTube Music" icon="youtubeMusic"/>
      <SidebarNavItem label="YouTube Kids" icon="youtubeKids"/>
    </SidebarSection>
    <SidebarSection>
      <SidebarNavItem label="Settings" icon="settingsIcon" />
        <SidebarNavItem label="Report history" icon="historyIcon" />
        <SidebarNavItem label="Help" icon="helpIcon" />
        <SidebarNavItem label="Send Feedback" icon="feedbackIcon" />
    </SidebarSection>
    <SidebarSection class="px-6 py-4 text-xs font-semobold space-y-4 text-gray-800">
      <Footer/>
    </SidebarSection>
  </aside>
</template>

<script setup>
import SidebarSection from './SidebarSection.vue';
import SidebarSectionHeading from './SidebarSectionHeading.vue';
import SidebarNavItem from './SidebarNavItem.vue';
import LoginButton from '../Login/LoginButton.vue';
import Footer from './Footer.vue';

</script>