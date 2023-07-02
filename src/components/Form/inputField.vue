<template>
    <input :type="showPassword ? 'text' : 'password'" :placeholder="placeholder" v-model="value"
        class="placeholder:text-gray-500 px-4 py-2 my-4 border-solid border-[1px] rounded-lg">
</template>
  
<script setup>
import { ref } from 'vue';

const value = ref('');
const placeholder = String;
const showPassword = Boolean;
</script>