<template>
  <div class="navbar"></div>
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
