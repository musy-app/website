<template>
  <button :class="`button-regular button-regular--${theme}`">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Cliquez ici",
    },
    theme: {
      type: String,
      default: "white",
    },
  },
};
</script>

<style lang="scss" scoped>
.button-regular {
  margin: $pad-xs;
  padding: $pad-s $pad-m;
  border-radius: $rad-m;
  border: none;
  cursor: pointer;
  font-weight: 700;
  min-width: 215px;

  &:focus,
  &:active {
    border: none;
    outline: none;
  }

  &--white {
    background-color: $light;
    color: $darkblue;
  }

  &--blue {
    background-color: $lightblue;
    color: $light;
  }
}
</style>
