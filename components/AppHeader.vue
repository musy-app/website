<template>
  <div id="header">
    <div class="nav-bar">
      <h1 class="title">musy</h1>
      <ButtonNavBar />
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
  .nav-bar {
    color: $light;
    display: flex;
    justify-content: space-between;
    background-color: $darkblue;

    .title {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 30px;
      letter-spacing: 2px;
    }
  }
}
</style>
