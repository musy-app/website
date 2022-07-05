<template>
  <div id="header">
    <div class="navbar">
      <h1 class="title">{{ $t("AppHeader.AppTitle") }}</h1>
      <NavBarMobile />
      <NavBarDesktop />
      <div class="btn--container">
        <ButtonRegular :text="$t('AppHeader.btnAuth')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#header {
  width: 100%;
  padding: $pad-s;
  padding-top: calc($pad-s + env(safe-area-inset-top));
  max-height: 350px;

  @include min-m {
    padding: $pad-l $pad-s;
  }
  .navbar {
    color: $light;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 32px;
      letter-spacing: 2px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-align: left;
      @include min-m {
        width: 33%;
      }
    }

    .btn--container {
      width: 33%;
      display: flex;
      justify-content: flex-end;
      @include max-m {
        display: none;
      }
    }
  }
}
</style>
