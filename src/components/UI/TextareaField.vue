<template>
  <textarea
    ref="textFieldEl"
    v-model="text"
    type="text"
    class="textarea"
    rows="3"
    :class="{ readonly: readonly }"
    :placeholder="placeholder"
    :disabled="readonly"
  ></textarea>
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
    default: "Describe your own",
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
.textarea
  width: 100%
  border: 1px solid transparent
  border-radius: $border-radius
  padding: 20px
  font-size: 17px
  font-family: var(--font-family)
  outline: none
  resize: vertical !important
  transition: $transition-4


  &::placeholder
    color: $color-text-light

  &:focus
    border: 1px solid $color-primary

  &.readonly
    cursor: not-allowed
</style>
