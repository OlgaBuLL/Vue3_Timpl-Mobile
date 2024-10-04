<template>
  <section class="tips-page">
    <EmployeeData />

    <div class="tips-page__content">
      <Tips />

      <Rating :activeStar="activeStar" @update-rating="updateRatingStar">
        <template #title>Rate your experience</template>
      </Rating>

      <Rating
        v-if="benefitStore.ratingBlocks.service && activeStar > 0"
        :activeStar="activeStar"
      >
        <template #title>Rate Service</template>
      </Rating>

      <Rating
        v-if="benefitStore.ratingBlocks.cleanliness && activeStar > 0"
        :activeStar="activeStar"
      >
        <template #title>Rate Cleanliness</template>
      </Rating>

      <Rating
        v-if="benefitStore.ratingBlocks.atmosphere && activeStar > 0"
        :activeStar="activeStar"
      >
        <template #title>Rate Atmosphere</template>
      </Rating>

      <Rating
        v-if="benefitStore.ratingBlocks.food && activeStar > 0"
        :activeStar="activeStar"
      >
        <template #title>Rate Food quality</template>
      </Rating>

      <Benefits v-if="activeStar > 0" />
      <FullAmount />
    </div>
    <Payment />
  </section>
</template>

<script setup>
import { ref, watch } from "vue";
import { useBenefitStore } from "../stores/benefit";

import EmployeeData from "../components/EmployeeData.vue";
import Tips from "../components/Tips.vue";
import Rating from "../components/Rating.vue";
import Benefits from "../components/Benefits.vue";
import Payment from "../components/Payment.vue";
import FullAmount from "../components/FullAmount.vue";

const benefitStore = useBenefitStore();
const activeStar = ref(0);

const updateRatingStar = (newStar) => {
  activeStar.value = newStar;
};

watch(benefitStore.clickedBenefits, () => {
  const serviceItem = benefitStore.clickedBenefits.find((bnft) =>
    bnft.title.includes("Service")
  );

  if (serviceItem) {
    benefitStore.ratingBlocks.service = true;
  } else {
    benefitStore.ratingBlocks.service = false;
  }

  const cleanlinessItem = benefitStore.clickedBenefits.find((bnft) =>
    bnft.title.includes("Cleanliness")
  );

  if (cleanlinessItem) {
    benefitStore.ratingBlocks.cleanliness = true;
  } else {
    benefitStore.ratingBlocks.cleanliness = false;
  }

  const atmosphereItem = benefitStore.clickedBenefits.find((bnft) =>
    bnft.title.includes("Atmosphere")
  );

  if (atmosphereItem) {
    benefitStore.ratingBlocks.atmosphere = true;
  } else {
    benefitStore.ratingBlocks.atmosphere = false;
  }
  const foodItem = benefitStore.clickedBenefits.find((bnft) =>
    bnft.title.includes("Food")
  );

  if (foodItem) {
    benefitStore.ratingBlocks.food = true;
  } else {
    benefitStore.ratingBlocks.food = false;
  }
});

watch(
  () => benefitStore.ratingBlocks,
  (newValue) => {
    benefitStore.ratingBlocks = newValue;
  },
  { deep: true }
);
</script>

<style lang="sass">
.tips-page
  &__content
    display: grid
    gap: 12px
</style>
