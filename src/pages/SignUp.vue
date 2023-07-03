<template>
    <div class="flex justify-center items-center h-screen">
      <form @submit="registerUser" class="border-solid border-[1px] flex flex-col max-w-md rounded-lg py-8 px-8">
        <fieldset class="flex flex-col text-center">
          <legend class="font-semibold text-xl">Sign up <span class="block text-sm font-normal py-2"> to continue to clone YouTube</span></legend>
          
          <input-field v-model="username" placeholder="Email or phone"></input-field>
          <input-field :type="showPassword ? 'text' : 'password'" v-model="password" placeholder="Password" :showPassword="showPassword"></input-field>
          
          <show-checkbox v-model="showPassword">Show password</show-checkbox>
          
          <div class="flex justify-between items-center">
            <router-link to="/signin" class="text-blue-500">Sign in</router-link>
            <submit-button>Done</submit-button>
          </div>
        </fieldset>
      </form>
    </div>
  </template>
  
  <script setup>
  import SubmitButton from '../components/Form/SubmitButton.vue';
  import InputField from '../components/Form/inputField.vue';
  import ShowCheckbox from '../components/Form/ShowCheckbox.vue';
  
  import { ref } from 'vue';
  import { useAuthStore } from '../stores/auth';
  
  const showPassword = ref(false);
  const username = ref('');
  const password = ref('');
  
  const authStore = useAuthStore();
  
  const registerUser = async (event) => {
    event.preventDefault();
  
    try {
      await authStore.register(username.value, password.value);
      // Registration successful, handle next steps
    } catch (error) {
      // Registration failed, handle error
    }
  };
  </script>
  