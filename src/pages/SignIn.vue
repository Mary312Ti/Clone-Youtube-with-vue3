<template>
    <div class="flex justify-center items-center h-screen">
      <form action="" class="border-solid border-[1px] flex flex-col max-w-md rounded-lg py-8 px-8">
        <fieldset class="flex flex-col text-center">
          <legend class="font-semibold text-xl">Sign in <span class="block text-sm font-normal py-2"> to continue to clone YouTube</span></legend>
          
          <input-field placeholder="Email or phone"></input-field>
          <input-field :type="showPassword ? 'text' : 'password'" placeholder="Password" :showPassword="showPassword"></input-field>
          
          <show-checkbox :showPassword="showPassword">Show password</show-checkbox>
          
          <div class="flex justify-between items-center">
            <router-link to="/signup" class="text-blue-500">Sign up</router-link>
            <submit-button>Sign in</submit-button>
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
  
  const showPassword = ref(false);
  </script>
  