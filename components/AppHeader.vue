<template>
  <div class="header">
    <h1 class="title">musy</h1>
    <div class="nav"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  color: $light;
  padding: $pad-m;
  width: 100%;
  display: flex;
  justify-content: space-between;

  .title {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 2px;
  }
}
</style>
