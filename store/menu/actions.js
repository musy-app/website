export default {
  closeNavbar: ({ commit }) => {
    commit("CLOSE_NAVBAR", false);
  },

  openNavbar: ({ commit }) => {
    commit("OPEN_NAVBAR", true);
  },

  toggleNavbar: ({ commit }) => {
    commit("TOGGLE_NAVBAR");
  },
};
