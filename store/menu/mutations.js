export default {
  CLOSE_NAVBAR: (state) => {
    state.state = false;
  },

  OPEN_NAVBAR: (state) => {
    state.state = true;
  },

  TOGGLE_NAVBAR: (state) => {
    state.state = !state.state;
  },
};
