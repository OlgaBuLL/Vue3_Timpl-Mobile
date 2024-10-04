<template>
  <BaseIcon name="star" v-model="activeStar" @click="toggleActiveStar" />
</template>

<script setup>
import { ref } from "vue";
import BaseIcon from "./UI/BaseIcon.vue";

const props = defineProps({
  star: {
    type: [Number, Boolean],
    default: null,
  },
});

const emit = defineEmits(["update:star"]);

const activeStar = ref(props.star);

const toggleActiveStar = () => {
  emit("update:star", activeStar.value);
};
</script>

<style lang="sass">
.rating
    &__star
        color: $color-grey
        cursor: pointer
</style>
