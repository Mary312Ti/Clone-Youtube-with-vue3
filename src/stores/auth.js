import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    error: null,
  }),

  getters: {
    isAuthenticated() {
      return !!this.token;
    },
  },

  actions: {
    async register(username, password) {
      try {
        await axios.post('http://localhost:8008/register', { username, password });
      } catch (error) {
        this.error = error.response.data.error;
        throw error;
      }
    },

    async login(username, password) {
      try {
        const response = await axios.post('http://localhost:8008/login', { username, password });
        this.token = response.data.token;
      } catch (error) {
        this.error = error.response.data.error;
        throw error;
      }
    },

    logout() {
      this.token = null;
    },
  },
});
