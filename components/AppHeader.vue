<template>
  <div id="header">
    <div class="navbar">
      <h1 class="title">{{ $t("AppHeader.AppTitle") }}</h1>
      <NavBar />
      <ButtonRegular />
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

  @include min-m {
    padding: $pad-l;
  }
  .navbar {
    color: $light;
    display: flex;
    justify-content: space-between;
    background-color: $lightblue;

    .title {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 50px;
      letter-spacing: 2px;
      width: 15%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .button-regular {
      width: 15%;
    }
  }
}
</style>
