<template>
  <div class="no-data">
    <BaseIcon name="slash" class="no-data__icon" />

    <h3 class="no-data__title">{{ title }}</h3>
    <p class="no-data__text">{{ text }}</p>
  </div>
</template>

<script setup>
import BaseIcon from "./UI/BaseIcon.vue";
const props = defineProps({
  title: {
    type: String,
    default: "No results",
  },

  text: {
    type: String,
    default: "",
  },
});
</script>

<style lang="sass">
.no-data
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    color: $text-line-grey

    &__icon
        max-width: 100px
        max-height: 100px

    &__title
        font-size: 20px
        color: $text-grey

    &__text
        font-size: 14px
        color: $text-grey
</style>
