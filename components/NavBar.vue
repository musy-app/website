<template>
  <div class="navbar">
    <div class="navbar__item" :scroll-to="{ el: '#play', offset: -100 }">
      <span>{{ $t("AppHeader.NavBar.item.1") }}</span>
    </div>
    <div class="navbar__item" :scroll-to="{ el: '#publicgame', offset: -100 }">
      <span>{{ $t("AppHeader.NavBar.item.2") }}</span>
    </div>
    <div class="navbar__item" :scroll-to="{ el: '#tutorial', offset: -100 }">
      <span>{{ $t("AppHeader.NavBar.item.3") }}</span>
    </div>
    <div class="navbar__item" :scroll-to="{ el: '#contact', offset: -100 }">
      <span>{{ $t("AppHeader.NavBar.item.4") }}</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  &__item {
    transition: all 0.3s;
    &:hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
}
</style>
