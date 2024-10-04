<template>
  <div class="tips">
    <div class="tips__amount box">
      <p class="tips__title block-title">Enter amount of tips</p>
      <p
        class="tips__sum"
        :class="{
          active: paymentStore.totalSum > 0,
        }"
      >
        <span class="tips__total">{{ paymentStore.totalSum }}</span>

        <span>€</span>
      </p>
    </div>

    <div class="tips__options">
      <TipAmount
        v-for="(option, index) in tipsOptions"
        :key="option"
        :tip="option"
        class="tips__option"
        :class="{ active: activeTip === index && paymentStore.totalSum !== 0 }"
        @click="activeTip = index"
        @update:tip="updateTipAmount"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { usePaymentStore } from "../stores/payment";

import TipAmount from "./TipAmount.vue";

const paymentStore = usePaymentStore();
const tipsOptions = [2, 5, 100];
const activeTip = ref(null);
const isTotalChanging = ref(false);

const updateTipAmount = (newTip) => {
  if (paymentStore.totalSum === newTip) {
    paymentStore.totalSum = 0;
  } else {
    paymentStore.totalSum = newTip;
  }
};
</script>

<style lang="sass">
.tips
  display: grid
  gap: 8px

  &__amount
    display: grid
    place-items: center
    gap: 8px

  &__sum
    font-size: 34px
    font-weight: $font-weight-bold
    color:$color-grey-light

    &.active
      color: $color-text-dark
      animation: appear 1.8s linear

  &__options
    display: flex
    gap: 4px

  &__option
    &.active
      background: $color-primary
      color: $color-white
</style>
