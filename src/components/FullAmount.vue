<template>
  <div class="full-amount box">
    <div class="full-amount__wrapper">
      <p class="full-amount__title">
        I want <span>{{ employeeStore.activeEmployee?.name || "" }}</span> to
        receive the full amount
      </p>

      <p class="full-amount__text">
        You compensate service fee of 0.00€, which will be applied to your
        payment.
      </p>
    </div>

    <Switcher />
  </div>
</template>

<script setup>
import { useEmployeeStore } from "../stores/employee";
import Switcher from "@/components/UI/Switcher.vue";

const employeeStore = useEmployeeStore();
</script>

<style lang="sass">
.full-amount
    display: flex
    justify-content: space-between
    align-items: center
    gap: 8px

    &__wrapper
      display: grid
      gap: 4px

    &__title
        font-size: 14px
        font-weight: $font-weight-medium

    &__text
        font-size: 12px
        color:$color-text-light
</style>
