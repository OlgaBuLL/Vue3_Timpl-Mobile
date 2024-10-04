import { defineStore } from "pinia";

export const usePaymentStore = defineStore("payment", {
  state: () => ({
    totalSum: 0,
    serviceFees: 0,
  }),

  actions: {},
});
