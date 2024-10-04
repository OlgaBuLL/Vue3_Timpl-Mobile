<template>
  <button class="button" :class="[props.class]">
    <span v-if="props.text" class="button__text">{{ text }}</span>
    <BaseIcon v-if="props.icon" :name="icon" class="button__icon" />
  </button>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";

const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },

  class: {
    type: String,
    default: "",
  },
});
</script>

<style lang="sass">
.button
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    gap: 10px
    height: 44px
    padding: 10px 24px
    border: none
    border-radius: 40px
    cursor: pointer
    transition: $transition-4

    &__icon
        max-width: 47px
        max-height: 24px

    &__text
        font-family: $font-family
        font-size: 16px
        font-weight: $font-weight-medium
        white-space: nowrap

.button__primary_dark
    background: $color-text-dark
    color: $color-white

    &:hover
        background: $color-text-light

.button__primary_light
    background: $color-primary
    color: $color-white

    &:hover
        background: $color-primary-hover
</style>
