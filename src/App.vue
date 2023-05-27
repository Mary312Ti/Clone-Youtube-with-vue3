<template>
  <TheHeader />
  <TheSidebarSmall />
  <TheSidebarBig />
  <TheSidebarMobile />
  <TheCategory />
  <TheVideoMain />
</template>

<script setup>
import TheHeader from './components/Header/TheHeader.vue';
import TheSidebarSmall from './components/Sidebar/TheSidebarSmall.vue';
import TheSidebarBig from './components/Sidebar/TheSidebarBig.vue';
import TheSidebarMobile from './components/Sidebar/TheSidebarMobile.vue';
import TheCategory from './components/TheCategory.vue';
import TheVideoMain from './components/TheVideoMain.vue';

const components = {
  TheHeader,
  TheSidebarSmall,
  TheSidebarBig,
  TheSidebarMobile,
  TheCategory,
  TheVideoMain,
}

//экспорт по умолчанию находится внутри блока <script setup>
//В этом блоке используется новый синтаксис компонентов Vue 3, 
//который позволяет объявлять переменные и импорты прямо в шаблоне.
//при использовании этого синтаксиса экспортировать компоненты 
//нужно не через export default, а через опцию defineExpose


defineExpose({ components })
</script>

<style scoped></style>
