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
  padding: $pad-xs $pad-s;
  border-radius: $rad-m;
  border: none;
  cursor: pointer;
  font-weight: 700;

  &:focus,
  &:active {
    border: none;
    outline: none;
  }

  &--white {
    background-color: $light;
    color: $darkblue;
  }

  &--lightblue {
    background-color: $lightblue;
    color: $light;
  }

  &--darkblue {
    background-color: $darkblue;
    color: $light;
  }
}
</style>
