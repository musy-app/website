<template>
  <div class="menu--mobile">
    <div
      class="menu--mobile__btn"
      :class="{ active: isMenuOpen }"
      @click="toggleNav()"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isMenuOpen: ["Menu/getState"],
    }),
  },
  methods: {
    ...mapActions({
      openNav: "Menu/openNavbar",
      closeNav: "Menu/closeNavbar",
      toggleNav: "Menu/toggleNavbar",
    }),
  },
};
</script>

<style lang="scss" scoped>
.menu--mobile {
  display: flex;
  align-content: center;
  justify-content: center;

  @include min-m {
    display: none;
  }
  &__btn {
    width: 30px;
    height: 21px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    cursor: pointer;

    span {
      width: 25px;
      height: 2px;
      background-color: $light;
      transition: $trans;
    }

    &.active {
      justify-content: center;

      span {
        background-color: $light;
        &:nth-child(1) {
          transform: rotate(45deg);
          position: relative;
          top: 1px;
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
          position: relative;
          top: -1px;
        }

        &:nth-child(2) {
          display: none;
        }
      }
    }
  }
}
</style>
