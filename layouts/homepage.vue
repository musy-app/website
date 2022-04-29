<template>
  <div class="app">
    <div class="app__content">
      <AppHeader />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.app {
  width: 100%;
  height: 100vh;
  background-color: $lightblue;

  &__content {
    max-width: $width-app;
    margin: 0 auto;
    width: 100%;
  }
}
</style>
