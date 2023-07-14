import { defineStore } from 'pinia';
import axios from 'axios';

export const useGetCategories = defineStore('getCategories', {
  state: () => ({
    videoCategories: [],
  }),
  actions: {
    async fetchVideoCategories() {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/videoCategories',
          {
            params: {
              part: 'snippet',
              key: import.meta.env.VITE_API_KEY,
              regionCode: 'US', // e.g., US
            },
          }
        );

        this.videoCategories = response.data.items;
      } catch (error) {
        console.error('Error fetching video categories:', error);
      }
    },
  },
});
