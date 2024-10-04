<template>
  <div class="employees">
    <!-- :autoplay="swiperOptions.autoplay" -->
    <!-- @swiper="onSwiper" -->
    <swiper
      :modules="swiperOptions.modules"
      :keyboard="swiperOptions.keyboard"
      :slide-to-clicked-slide="true"
      :grab-cursor="true"
      :loop="true"
      :loopedSlides="1"
      :space-between="37"
      :slides-per-view="2.2"
      :centered-slides="true"
      :initial-slide="activeSlide"
      :speed="1200"
      :freeMode="true"
      :watchOverflow="true"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="person in employees"
        :key="person.id"
        class="employee"
        :class="{ 'swiper-slide-active': activeSlide }"
      >
        <img :src="person.avatar" class="employee__avatar" :alt="person.name" />
        <div class="employee__info">
          <p class="employee__name" @click="goToEmployeePage(person.id)">
            {{ person.name }}
          </p>
          <p class="employee__position">{{ person.position }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useEmployeeStore } from "../stores/employee";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import avatarMadison from "@/assets/images/avatar.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const router = useRouter();
const activeSlide = ref(0);
const employeeStore = useEmployeeStore();

// function onSwiper(swiper) {

// }

function onSlideChange(swiper) {
  employeeStore.activeEmployee = employees.find((employee) => {
    return employee === employees[swiper.realIndex];
  });
}

const swiperOptions = {
  modules: [Autoplay, Navigation],
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  grabCursor: true,
};

const employees = [
  {
    id: 1,
    name: "Mark",
    position: "Bartender",
    avatar: avatarMadison,
  },
  {
    id: 2,
    name: "Madison",
    position: "Waiter",
    avatar: avatarMadison,
  },
  {
    id: 3,
    name: "Ozan",
    position: "Waiter",
    avatar: avatarMadison,
  },
  {
    id: 4,
    name: "Alison",
    position: "Receptionist",
    avatar: avatarMadison,
  },
  {
    id: 5,
    name: "Jason",
    position: "Waiter",
    avatar: avatarMadison,
  },
  {
    id: 6,
    name: "Andrew",
    position: "Waiter",
    avatar: avatarMadison,
  },
  {
    id: 7,
    name: "Barth",
    position: "Waiter",
    avatar: avatarMadison,
  },
];

const goToEmployeePage = (id) => {
  let newPage = {
    name: "ProfilePage",
    params: {
      id,
    },
  };

  router.push(newPage);
};
</script>

<style lang="sass">
.employees
  margin: 16px -20px 20px

.employee
    display: flex
    justify-content: center
    align-items: center
    gap: 12px
    opacity: 0.2
    scale: 0.7

    &__avatar
      border-radius: 50%

    &__info
      display: none
      gap: 5px

    &__name
      font-size: 22px
      font-weight: $font-weight-semi-bold
      color: $color-text-dark
      cursor: pointer

    &__position
      font-size: 16px
      font-weight: $font-weight-semi-bold
      color: $color-primary

.employee.swiper-slide-active
  opacity: 1 !important
  scale: 1

  .employee__info
    display: grid
</style>
