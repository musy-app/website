<template>
  <div class="homepage">
    <h2>{{ $t("devMode") }}</h2>
  </div>
</template>

<script>
export default {
  layout: "homepage",
};
</script>

<style lang="scss">
h2 {
  text-align: center;
  color: $light;
}
</style>
