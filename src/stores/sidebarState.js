import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    sidebarState: 'normal'
  }),
  actions: {
    toggleSidebar() {
      const width = window.innerWidth;
      if (width >= 768) {
        this.sidebarState = this.sidebarState === 'normal' ? 'compact' : 'normal';
      } else {
        this.sidebarState = 'compact';
      }
    }
  }
});
