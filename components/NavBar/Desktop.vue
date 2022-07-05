<template>
  <div class="navbar--desktop">
    <div class="navbar__list">
      <div class="navbar__item" :scroll-to="{ el: '#play', offset: -100 }">
        {{ $t("AppHeader.NavBar.item.1") }}
      </div>
      <div class="navbar__item">{{ $t("AppHeader.NavBar.item.2") }}</div>
      <div class="navbar__item">{{ $t("AppHeader.NavBar.item.3") }}</div>
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
.navbar {
  &--desktop {
    width: 66%;
    @include max-m {
      display: none;
    }
  }

  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: $pad-m;
  }

  &__item {
    cursor: pointer;
  }
}
</style>
