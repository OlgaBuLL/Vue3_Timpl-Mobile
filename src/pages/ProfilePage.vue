<template>
  <section class="profile box">
    <h1 class="profile__title">
      {{ employeeStore.activeEmployee?.name || "Employee Profile" }}
    </h1>

    <div>
      <img
        v-if="employeeStore.activeEmployee?.avatar"
        :src="employeeStore.activeEmployee?.avatar"
        class="employee__avatar"
        :alt="employeeStore.activeEmployee?.name || 'Avatar'"
      />

      <p v-else class="profile__position">no image</p>
    </div>
    <p>
      {{ employeeStore.activeEmployee?.position || "employee position" }}
    </p>
  </section>
</template>

<script setup>
import { useEmployeeStore } from "../stores/employee";

const employeeStore = useEmployeeStore();
</script>

<style lang="sass">
.profile
  &__title
    color: $color-primary
    margin-bottom: 20px

  &__position
    color: $color-text-light
</style>
