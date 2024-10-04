<template>
  <div class="payment">
    <div class="payment__total">
      <p class="payment__sum">
        <span>To pay </span>
        <span>{{ paymentStore.totalSum }}</span>
        <span>€</span>
      </p>
      <p class="payment__fee">
        <span>Service fees </span>
        <span>{{ paymentStore.serviceFees }}</span>
        <span>€</span>
      </p>
    </div>

    <hr class="payment__divider" />
    <BaseButton
      text="Pay with"
      icon="apple-pay"
      class="button__primary_dark"
      @click="openModal"
    />
    <BaseButton
      text="Pay with debit card"
      class="button__primary_light"
      @click="openModal"
    />

    <p class="payment__consent">
      By clicking the button, you agree to our
      <a href="#" class="link">Terms of Use</a> and
      <a href="#" class="link">Privacy Policy</a>, and
      <a href="#" class="link">authorize payment</a> and
      <a href="#" class="link">data processing</a>.
    </p>

    <DialogModal v-if="isModalOpened" class="modal" @close-dialog="closeModal">
      <template #top>
        <div class="modal__top">
          <p class="modal__text">SWEN</p>
          <p class="modal__text">+ %</p>
          <img
            src="../assets/images/icons/modal-image.svg"
            alt="Icon"
            class="modal__image"
          />
        </div>
      </template>
      <template #content>
        <div>
          <p class="dialog__title">Profit goes to SWEN</p>
          <p class="dialog__text">
            By leaving a tip, you take care <br />
            of nature
          </p>
        </div>
      </template>
      <template #actions>
        <BaseButton text="Learn more about SWEN" class="button__primary_dark" />
      </template>
    </DialogModal>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { usePaymentStore } from "../stores/payment";
import DialogModal from "./UI/DialogModal.vue";
import TextareaField from "./UI/TextareaField.vue";
import BaseButton from "./UI/BaseButton.vue";

const paymentStore = usePaymentStore();
const isModalOpened = ref(false);

const openModal = () => {
  isModalOpened.value = !isModalOpened.value;
};

const closeModal = (newValue) => {
  isModalOpened.value = newValue;
};
</script>

<style lang="sass">
.payment
    display: flex
    flex-direction: column
    align-items: center
    gap: 12px
    margin: 49px -20px 0
    border-radius: $border-radius $border-radius 0 0
    padding: 20px
    background: $color-white

    &__sum
        font-size: 15px
        font-weight: $font-weight-medium

    &__fee
        font-size: 14px
        font-weight: $font-weight-medium
        color: $color-text-light

    &__total
        width: 100%
        display: flex
        justify-content: space-between
        align-items: center
        gap: 20px

    &__divider
        height: 1px
        border: none
        background: $color-line

    &__consent
        font-size: 11px
        font-weight: $font-weight-medium
        color: $color-text-light
        text-align: center

.modal
  &__top
    position: relative
    padding: 15px
    border-radius: 16px
    background: #B693FA

  &__image
    position: absolute
    right: 0
    bottom: 0
    border-radius: 0 0 16px 0

  &__text
    font-family: 'Space Grotesk'
    font-weight: $font-weight-medium
    background: linear-gradient(to bottom, $color-white, transparent)
    -webkit-text-fill-color: transparent
    -webkit-background-clip: text
    line-height: 100%

    &:nth-child(1)
      font-size: 70px

    &:nth-child(2)
      font-size: 93px

  .dialog
    min-width: 320px

.dialog__text br
  display: none

@media screen and (max-width: 500px)
  .dialog__text br
    display: block
</style>
