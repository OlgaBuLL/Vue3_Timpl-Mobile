<template>
  <div className="loading">
    <div className="loading__content">
      <BaseIcon name="logo" class="loading__logo" />
      <div className="loading__loader">
        <div className="loading__dot" id="d1"></div>
        <div className="loading__dot" id="d2"></div>
        <div className="loading__dot" id="d3"></div>
        <div className="loading__dot" id="d4"></div>
        <div className="loading__dot" id="d5"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";
</script>
<style lang="sass">
.loading
    position: absolute
    inset: 0
    display: grid
    place-items: center
    background: $color-light

    &__content
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        gap: 20px

    &__logo
        max-width: 96px
        max-height: auto
        color: $color-text-dark

    &__loader
        position: relative
        width: 100px
        height: 40px

    &__dot
        width: 10px
        height: 10px
        background: $color-text-light
        border-radius: 50%
        position: absolute

#d1
    animation: animate 2s linear infinite

#d2
    animation: animate 2s linear infinite -0.4s

#d3
    animation: animate 2s linear infinite -0.8s

#d4
    animation: animate 2s linear infinite -1.2s

#d5
    animation: animate 2s linear infinite -1.6s

@keyframes animate
    0%
        left: 90px
        top: 0

    80%
        left: 0
        top: 0

    85%
        left: 0
        top: -12px
        width: 10px
        height: 10px

    90%
        width: 20px
        height: 10px

    95%
        left: 100px
        top: -12px
        width: 10px
        height: 10px

    100%
        left: 90px
        top: 0
</style>
