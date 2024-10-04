<template>
  <div className="switch">
    <input id="toggle__switch" type="checkbox" v-model="switcher" />
    <label for="toggle__switch"></label>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { usePaymentStore } from "../../stores/payment";

const paymentStore = usePaymentStore();
const switcher = ref(false);

watch(switcher, (newValue) => {
  if (newValue) {
    paymentStore.serviceFees = 1.2;
  } else paymentStore.serviceFees = 0;
});
</script>

<style lang="sass">
.switch input
    display: none

.switch label
    display: flex
    align-items: center
    width: 54px
    height: 30px
    background: $color-primary-hover
    position: relative
    cursor: pointer
    border-radius: 1.6rem
    transition: all 0.4s ease
    &::before
        content: ""
        position: absolute
        right: 49%
        width: 24px
        height: 24px
        border-radius: 50%
        background: $color-white
        transition: all 0.4s ease
        box-shadow: 0 4px 4px rgb(0, 0, 0, 0.2)


.switch input:checked ~ label
    background: $color-primary

.switch input:checked ~ label::before
    right: 0.18rem
    background: $color-white
</style>
