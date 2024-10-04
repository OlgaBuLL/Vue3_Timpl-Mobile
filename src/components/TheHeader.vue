<template>
  <header class="header container">
    <div class="header__content">
      <div class="header__burger"></div>

      <BaseIcon name="logo" class="header__logo" />

      <div class="header__language language">
        <div class="language__top">
          <span class="language__language">{{ language }}</span>
          <div class="language__arrow">
            <BaseIcon name="arrow-down" @click="showLanguagesOptions" />
          </div>
        </div>

        <ul v-show="isDropdownShown" class="language__options">
          <li
            v-for="option in languagesOptions"
            :key="option"
            class="language__option"
            @click="changeLanguage(option)"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import BaseIcon from "./UI/BaseIcon.vue";

const languagesOptions = ["Ru", "En", "De"];
const language = ref(languagesOptions[1]);
const isDropdownShown = ref(false);

const showLanguagesOptions = () => {
  isDropdownShown.value = !isDropdownShown.value;
};

const changeLanguage = (option) => {
  language.value = option;
  isDropdownShown.value = false;
};

onMounted(() => {
  changeLanguage(language.value);
});
</script>

<style lang="sass">
.header
    &__content
      display: flex
      justify-content: space-between
      gap: 30px
      padding: 12px 0

    &__logo
      max-width: 69px

    &__select
      font-size: 12px
      padding: 0
      border: none

      &:focus
        border: none

    &__burger
      transition: $transition-4
      cursor: pointer

.language
  position: relative

  &__top
    display: flex
    align-items: center
    gap: 4px

  &__arrow
    display: grid
    place-items: center
    width: 24px
    height: 24px
    color: $color-primary
    cursor: pointer

    .vue-icon
      max-width: 11px
      max-height: 7px

  &__options
    position: absolute
    left: -5px
    list-style: none
    background: $color-light
    animation: language 0.5s forwards

  &__language
    font-size: 16px
    font-weight: $font-weight-medium

  &__option
    padding: 4px 5px
    cursor: pointer

    &:hover
      background: $color-primary-hover
      color: $color-white

@keyframes language
  0%
    opacity: 0
    top: -10%
    z-index: -1

  100%
    opacity: 1
    top: 30px
    z-index: 10
</style>
