<template>
  <div id="header">
    <div class="navbar">
      <h1 class="title">musy</h1>
      <NavBar />
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
      font-size: 30px;
      letter-spacing: 2px;
    }
  }
}
</style>
