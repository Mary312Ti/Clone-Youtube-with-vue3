<template>
    <div class="pb-4">
        <a href="#" v-for="link in links.slice(0, 7)" :key="link" class="mr-2">{{ link }}</a>
      </div>
      <div class="pb-4">
        <a href="#" v-for="link in links.slice(7)" :key="link" class="mr-2">{{ link }}</a>
      </div>
      <div class="text-gray-500">
        &copy;&nbsp;2023 Google LLC
      </div>
</template>

<script setup>

const links = [
    'About',
    'Press',
    'Copyright',
    'Contact us',
    'Creators',
    'Advertise',
    'Developers',
    'Terms',
    'Privacy',
    'Policy & Safety',
    'How YouTube works',
    'Test new features',
]
</script>