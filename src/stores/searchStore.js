import { defineStore } from "pinia";
import axios from "axios";

export const useSearchStore = defineStore("search", {
  state: () => ({
    query: "",
    suggestions: [],
  }),
  actions: {
    async fetchAutocompleteSuggestions(query) {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/search",
          {
            params: {
              q: query,
              part: "snippet",
              type: "video",
              maxResults: 5,
              key: "AIzaSyBbJ8YBrUI0TYUc5qvuYJG8FxVcK2b6bFQ",
            },
          }
        );

        const items = response.data.items;
        const suggestions = items.map((item) => item.snippet.title);
        this.setSuggestions(suggestions);
      } catch (error) {
        console.error("Error fetching autocomplete suggestions:", error);
        this.setSuggestions([]);
      }
    },
    setSuggestions(suggestions) {
      this.suggestions = suggestions;
    },
    setQuery(query) {
      this.query = query;
    },
  },
});