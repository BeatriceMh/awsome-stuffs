import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    getCatsInfo() {
      axios.defaults.headers["x-api-key"] = "DEMO-API-KEY";
      return axios.get("https://api.thecatapi.com/v1/favourites");
    },
    getCatsBreeds() {
      axios.defaults.headers["x-api-key"] = "DEMO-API-KEY";
      return axios.get("https://api.thecatapi.com/v1/breeds");
    },
    getArticleInfo() {
      return axios.get("https://jsonplaceholder.typicode.com/posts");
    },
  },
  modules: {},
});
