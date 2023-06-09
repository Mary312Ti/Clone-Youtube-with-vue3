import { defineStore } from "pinia";
import axios from "axios";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"; // Import the relativeTime plugin
import { useAuthStore } from "./auth";

dayjs.extend(relativeTime); // Enable the relativeTime plugin

export const useVideoStore = defineStore("video", {
  state: () => ({
    query: "",
    videos: [],
  }),
  actions: {
    async fetchRandomVideos() {
      try {
        const authStore = useAuthStore();
        if (authStore.isAuthenticated) {
          const token = authStore.token; // Get the user's token from the auth store
          const response = await axios.post(
            "http://localhost:8008/recommendations",
            { token }
          );
          // Process the response and update the videos array in the store
          this.videos = response.data;
        } else {
          const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/search",
            {
              params: {
                q: this.query,
                part: "snippet",
                type: "video",
                maxResults: 4,
                key: import.meta.env.VITE_API_KEY,
              },
            }
          );
          this.videos = response.data.items.map((item) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            channelName: item.snippet.channelTitle,
            viewCount: item.statistics?.viewCount || "43.4K",
            addingTime: item.snippet.publishedAt,
            thumbnailUrl: item.snippet.thumbnails.default.url,
          }));
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    },

    formatAddingTime(video) {
      return dayjs(video.addingTime).fromNow();
    },
  },
});
