<template>
  <div class="benefit" @click="toggleActiveCard">
    <div
      class="benefit__image"
      :class="{
        active: benefitStore.clickedBenefits.includes(card),
      }"
    >
      <BaseIcon name="spots" class="benefit__bg" />
      <img :src="card.image" :alt="card.title" />
    </div>

    <p
      class="benefit__title"
      :class="{
        active: benefitStore.clickedBenefits.includes(card),
      }"
    >
      {{ card.title }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useBenefitStore } from "../stores/benefit";
import BaseIcon from "./UI/BaseIcon.vue";

const props = defineProps({
  card: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const emit = defineEmits(["set-benefit"]);

const benefitStore = useBenefitStore();
const activeCard = ref(props.card);

const toggleActiveCard = () => {
  emit("set-benefit", activeCard.value);
};
</script>

<style lang="sass">
.benefit
    display: grid
    place-items: center
    gap: 4px
    cursor: pointer

    &__image
        position: relative
        max-height: 74px
        padding: 13px
        border-radius: 12px
        background: $color-white

        &.active
          background: $color-primary

        img
            max-width: 48px
            max-height: 48px

    &__bg
        position: absolute
        inset: 0
        width: 100%
        height: 100%
        max-width: none
        max-height: none
        color: $color-primary

    &__title
        font-size: 12px
        color: $color-text-light

        &.active
          color: $color-primary
</style>
