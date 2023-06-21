<template>
    <div class="relative">
        <button @click="toggleDropdown" class="-mt-1 ml-auto p-1 text-gray-500 focus:outline-none">
            <BaseIcon name="dotsSettings" fill-color="none" stroke-color="currentColor" class="w-6 h-6" />
        </button>
        <div v-if="isDropdownOpen" @click="toggleDropdown" class="shadow-md z-50 visible absolute top-9 -right-full sm:right-0 bg-white w-56 rounded-md">
            <section class="py-2">
                <ul>
                    <dropdownList name="addToQueue" label="Add to queue" fill-color="currentColor" stroke-color="none">
                    </dropdownList>
                    <dropdownList name="shareIcon" label="Share" fill-color="currentColor" stroke-color="none">
                    </dropdownList>
                </ul>
            </section>
        </div>
    </div>
</template>

<script setup>

import BaseIcon from '../Base/BaseIcon.vue';
import dropdownList from '../Header/dropdownList.vue';
import { ref, watchEffect } from 'vue';

const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    isDropdownOpen.value = false;
  }
};

watchEffect(() => {
  if (isDropdownOpen.value) {
    document.addEventListener('click', handleClickOutside);
  } else {
    document.removeEventListener('click', handleClickOutside);
  }
});

</script>