<template>
  <div class="feedback">
    <p class="feedback__title block-title">Share your feedback</p>
    <TextareaField class="feedback__message" />
  </div>
</template>

<script setup>
import TextareaField from "./UI/TextareaField.vue";
</script>

<style lang="sass">
.feedback
    width: 100%
    display: flex
    flex-direction: column
    align-items: center
    gap: 12px

    &__message
</style>
