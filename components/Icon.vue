<template>
  <div class="single-icon" :style="`width: ${width}px; height: ${height}px;`">
    <component :is="icon" :color="color" />
  </div>
</template>

<script>
import DoubleArrowLeftRight from "./Icon/DoubleArrowLeftRight.vue";

export default {
  components: {
    DoubleArrowLeftRight,
  },
  props: {
    icon: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#FFFFFF",
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
  },
};
</script>

<style lang="scss">
.single-icon {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  position: relative;
  cursor: pointer;
  padding: 0;
  &:focus {
    outline: none;
  }
  svg {
    width: 100%;
    padding: 0;
    height: auto;
  }
}
</style>
