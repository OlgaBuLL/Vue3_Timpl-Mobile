<template>
  <div class="ads-line">
    <div class="ads-line__content">
      <p class="ads-line__text">By leaving a tip, you take care of nature</p>
      <BaseIcon name="colors" class="ads-line__icon" />
      <p class="ads-line__text">Part of the profit goes to sWen</p>
      <BaseIcon name="colors" class="ads-line__icon" />
      <p class="ads-line__text">By leaving a tip, you take care of nature</p>
      <BaseIcon name="colors" class="ads-line__icon" />
      <p class="ads-line__text">Part of the profit goes to sWen</p>
      <BaseIcon name="colors" class="ads-line__icon" />
      <p class="ads-line__text">By leaving a tip, you take care of nature</p>
      <BaseIcon name="colors" class="ads-line__icon" />
      <p class="ads-line__text">Part of the profit goes to sWen</p>
      <BaseIcon name="colors" class="ads-line__icon" />
      <p class="ads-line__text">By leaving a tip, you take care of nature</p>
      <BaseIcon name="colors" class="ads-line__icon" />
      <p class="ads-line__text">Part of the profit goes to sWen</p>
    </div>
  </div>
</template>

<script setup>
import BaseIcon from "./UI/BaseIcon.vue";
</script>

<style lang="sass">
.ads-line
    position: relative
    background: linear-gradient(to right, #F5CFC8, #DAFDD1)
    padding: 12px 0
    margin-bottom: 16px
    overflow: hidden

    &__content
      display: flex
      align-items: center
      gap: 8px
      animation: ads 6s linear infinite

    &__text
      font-family: 'Montserrat'
      font-size: 12px
      font-weight: $font-weight-semi-bold
      text-transform: uppercase
      white-space: nowrap
      flex-shrink: 0

    &__icon
      flex-shrink: 0

@keyframes ads
  0%
    transform: translateZ(0)

  100%
    transform: translate3d(-100%, 0, 0)
</style>
