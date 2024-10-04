<template>
  <div class="tip box" @click="updateTipAmount">
    {{ tip }}
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePaymentStore } from "../stores/payment";

const props = defineProps({
  tip: {
    type: [Number, String],
    default: 0,
  },
});

const emit = defineEmits(["update:tip"]);
const paymentStore = usePaymentStore();

const tip = ref(props.tip);

const updateTipAmount = () => {
  emit("update:tip", tip.value);
};
</script>

<style lang="sass">
.tip
    flex: 1
    text-align: center
    cursor: pointer
    font-size: 13px
    font-weight: $font-weight-semi-bold
</style>
