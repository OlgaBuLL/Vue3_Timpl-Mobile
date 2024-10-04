<template>
  <div class="overlay">
    <div class="dialog">
      <button class="dialog__button-close" @click="closeDialog">
        <BaseIcon name="cross" />
      </button>
      <div>
        <slot name="top" />
      </div>
      <div class="dialog__content">
        <slot name="content" />
      </div>
      <div class="dialog__actions">
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";

const emit = defineEmits(["close-dialog"]);

const closeDialog = () => {
  emit("close-dialog", false);
};
</script>

<style lang="sass">
.overlay
    position: fixed
    inset: 0
    width: 100vw
    height: 100vh
    background: rgba(49, 65, 88, 0.4)
    display: flex
    align-items: center
    justify-content: center
    padding: 20px
    z-index: 100

.dialog
    position: relative
    display: grid
    gap: 16px
    padding: 12px
    border-radius: 24px
    background: $color-white
    animation: modal 0.4s forwards

    &__content
        display: flex
        flex-direction: column
        gap: 4px
        text-align: center

    &__title
        font-size: 18px
        font-weight: $font-weight-medium

    &__text
        font-size: 17px
        color: $color-text-light

    &__button-close
        position: absolute
        top: 20px
        right: 20px
        width: 32px
        height: 32px
        display: grid
        place-items: center
        border: none
        border-radius: 30px
        background: $color-white
        z-index: 1000
        cursor: pointer

        &:hover
          .vue-icon
            color: $color-primary

        .vue-icon
            max-width: 12px
            max-height: 12px
            transition: $transition-4

    &__actions
        display: flex
        flex-wrap: wrap
        align-items: center
        justify-content: center
        gap: 8px

@keyframes modal
  0%
    transform: scale(0.7)

  100%
    transform: scale(1)
</style>
