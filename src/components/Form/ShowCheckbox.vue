<template>
    <label for="showCheckbox" class="text-left pb-3 flex items-center gap-2">
      <input type="checkbox" id="showCheckbox" v-model="checked" class="transform scale-125">
      <slot></slot>
    </label>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const checked = ref(false);
  const showPassword = Boolean;
  </script>