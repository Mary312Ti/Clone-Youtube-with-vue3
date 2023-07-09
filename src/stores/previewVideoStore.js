import { defineStore } from 'pinia';
import axios from "axios";

export const useVideoStore = defineStore('video', {
  state: () => ({
    query: "",
    videos: [],
  }),
  getters: {
    getThumbnailUrl: () => (video) => {
      if (video && video.snippet && video.snippet.thumbnails && video.snippet.thumbnails.medium) {
        return video.snippet.thumbnails.medium.url;
      }
      return ''; // Return a default or placeholder image URL if the thumbnail is not available
    },
  },
  actions: {
    async fetchRandomVideos() {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              q: this.query,
              part: "snippet",
              type: "video",
              maxResults: 16,
              key: import.meta.env.VITE_API_KEY,
            },
          }
        );

        this.videos = response.data.items.map((item) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            channelName: item.snippet.channelTitle,
            viewCount: item.statistics?.viewCount || "N/A",
            addingTime: item.snippet.publishedAt, 
          }));
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    },
  },
});
