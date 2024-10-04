<template>
  <div class="rating">
    <div class="rating__top">
      <hr class="rating__line" />
      <p class="rating__title block-title">
        <slot name="title" />
      </p>
      <hr class="rating__line" />
    </div>
    <div class="rating__stars box">
      <RatingStar
        v-for="(star, index) in 5"
        :key="index"
        v-model="activeStar"
        :star="index + 1"
        class="rating__star"
        :class="{ active: index + 1 <= activeStar }"
        @update:star="updateRating"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBenefitStore } from "../stores/benefit";
import RatingStar from "./RatingStar.vue";

const benefitStore = useBenefitStore();

const props = defineProps({
  activeStar: {
    type: [Number, String],
    default: 0,
  },
});

const emit = defineEmits(["update-rating"]);

const activeStar = ref(0);

const updateRating = (newIndex) => {
  if (activeStar.value === newIndex) {
    activeStar.value = 0;
    benefitStore.clickedBenefits = [];
    benefitStore.ratingBlocks = {
      service: false,
      cleanliness: false,
      atmosphere: false,
      food: false,
    };
  } else activeStar.value = newIndex;

  emit("update-rating", activeStar.value);
};
</script>

<style lang="sass">
.rating
    display: flex
    flex-direction: column
    gap: 12px

    &__top
        display: flex
        align-items: center
        gap: 8px

    &__line
        height: 1px
        flex: 1
        border: none
        background: $color-primary

    &__stars
        display: flex
        justify-content: center
        align-items: center
        gap: 16px

    &__star
        color: $color-grey
        cursor: pointer

        &.active
            color: $color-primary
</style>
