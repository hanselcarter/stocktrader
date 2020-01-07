import Vue from "vue";
import Vuex from "vuex";
import stocks from "./modules/stocks";
import portafolio from "./modules/portafolio";

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    stocks,
    portafolio
  }
});
