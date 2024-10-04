<template>
  <div class="app-content">
    <TheHeader />
    <AdsLine />

    <main class="main container">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import AdsLine from "./components/AdsLine.vue";
</script>

<style scoped></style>
