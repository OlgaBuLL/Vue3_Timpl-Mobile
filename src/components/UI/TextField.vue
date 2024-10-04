<template>
  <input
    ref="textFieldEl"
    v-model="text"
    type="text"
    class="input"
    :class="{ readonly: readonly }"
    :placeholder="placeholder"
    :disabled="readonly"
  />
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: false,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  readonly: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const textFieldEl = ref();

const text = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    if (!props.readonly) {
      emit("update:modelValue", newValue);
    }
  },
});
</script>

<style lang="sass">
.input
    border: 1px solid $text-line-grey
    border-radius: $border-radius-md
    padding: 9px 16px
    font-family: var(--font-family)
    outline: none
    transition: $transition-4

    &::placeholder
        font-size: 16px
        color: $text-dark-grey

    &:focus
        border: 1px solid $secondary-blue

    &.readonly
      cursor: not-allowed
</style>
