import Vue from "vue";
import Vuex from "vuex";
import stocks from "./modules/stocks";
import portafolio from "./modules/portafolio";
import * as actions from "./actions";

Vue.use(Vuex);
export default new Vuex.Store({
  actions,
  modules: {
    stocks,
    portafolio
  }
});
