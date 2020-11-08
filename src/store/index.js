import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const LS = {
  load() {
    // console.log(localStorage);
    return JSON.parse(localStorage.getItem("vue-shop") || "[]");
  },
  save(data) {
    localStorage.setItem("vue-shop", JSON.stringify(data));
  },
};
export default new Vuex.Store({
  strict: true,
  state: {
    content: [
      {
        name: "醫療",
        price: "49",
        src: "1.jpg",
        number: 1,
      },
      {
        name: "玩樂",
        price: "99",
        src: "2.jpg",
        number: 1,
      },
      {
        name: "照顧",
        price: "149",
        src: "3.jpg",
        number: 1,
      },
    ],
  },
  mutations: {
    set_shop(state, data) {
      state.content = data;
      LS.save(state.content);
    },
    add_shop(state, { data }) {
      state.content.push(data);
      LS.save(state.content);
    },
    update_shop(state, { index, data }) {
      state.content[index].number = data.number;
      LS.save(state.content);
    },
    remove_shop(state, index) {
      state.content.splice(index, 1);
      LS.save(state.content);
    },
  },
  actions: {
    INIT_shop({ commit }) {
      commit("set_shop", LS.load());
    },
  },
  modules: {},
});
