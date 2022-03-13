<template>
  <div id="button-navbar">
    <div class="nav-btn" :class="{ active: navIsOpen }" @click="toogleNav()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navIsOpen: false,
    };
  },
  methods: {
    toogleNav() {
      this.navIsOpen = !this.navIsOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
#button-navbar {
  .nav-btn {
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    cursor: pointer;

    span {
      width: 25px;
      height: 2px;
      margin: 3px 0;
      background-color: $light;
      transition: $trans;
    }

    &.active {
      justify-content: center;
      span {
        margin: 0;
        background-color: $light;
        &:nth-child(1) {
          transform: rotate(45deg);
          position: relative;
          top: 1px;
        }
        &:nth-child(3) {
          transform: rotate(-45deg);
          position: relative;
          top: -1px;
        }
        &:nth-child(2) {
          display: none;
        }
      }
    }
  }
}
</style>
