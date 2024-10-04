<template>
  <div className="loading">
    <div className="loading__content">
      <p class="loading__title">Loading</p>
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

<script setup></script>
<style lang="sass">
.loading
    position: absolute
    inset: 0
    display: grid
    place-items: center
    background: $primary-light-grey

    &__content
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        gap: 20px

    &__title
      font-size: 18px
      font-weight: $font-weight-bold
      color: $text-dark-grey

    &__loader
        position: relative
        width: 100px
        height: 40px

    &__dot
        width: 10px
        height: 10px
        background: $text-dark-grey
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
