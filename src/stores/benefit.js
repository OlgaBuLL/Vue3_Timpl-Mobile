import { defineStore } from "pinia";

export const useBenefitStore = defineStore("benefit", {
  state: () => ({
    activeBenefit: {},
    clickedBenefits: [],

    ratingBlocks: {
      service: false,
      cleanliness: false,
      atmosphere: false,
      food: false,
    },
  }),

  actions: {},
});
