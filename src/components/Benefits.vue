<template>
  <div class="benefits">
    <p class="benefits__title block-title">What did you like?</p>

    <div class="benefits__cards">
      <BenefitCard
        v-for="card in benefits"
        :key="card.title"
        :card="card"
        @set-benefit="setActiveBenefit"
      />
    </div>

    <Feedback />
  </div>
</template>

<script setup>
import { useBenefitStore } from "../stores/benefit";
import BenefitCard from "./BenefitCard.vue";
import Feedback from "./Feedback.vue";
import EmojiService from "@/assets/images/icons/service-emoji.png";
import EmojiCleanliness from "@/assets/images/icons/cleanliness-emoji.png";
import EmojiAtmosphere from "@/assets/images/icons/atmosphere-emoji.png";
import EmojiFood from "@/assets/images/icons/food-emoji.png";

const benefitStore = useBenefitStore();
const benefits = [
  {
    title: "Service",
    image: EmojiService,
  },
  {
    title: "Cleanliness",
    image: EmojiCleanliness,
  },
  {
    title: "Atmosphere",
    image: EmojiAtmosphere,
  },
  {
    title: "Food quality",
    image: EmojiFood,
  },
];

const setActiveBenefit = (newCard) => {
  benefitStore.activeBenefit = newCard;

  const index = benefitStore.clickedBenefits.findIndex(
    (bnft) => bnft.title === benefitStore.activeBenefit.title
  );

  if (index !== -1) {
    benefitStore.clickedBenefits.splice(index, 1);
  } else {
    benefitStore.clickedBenefits.push(benefitStore.activeBenefit);
  }
};
</script>

<style lang="sass">
.benefits
    display: grid
    gap: 12px
    justify-items: center

    &__cards
      display: flex
      align-items: center
      justify-content: center
      gap: 12px
</style>
