import Vue from "vue";
export const loadData = ({ commit }) => {
  Vue.http
    .get("data.json")
    .then(res => res.json())
    .then(data => {
      if (data) {
        const stocks = data.stocks;
        const funds = data.funds;
        const stocksPortafolio = data.stocksPortafolio;
        const portafolio = {
          stocksPortafolio,
          funds
        };
        console.log(portafolio, "portafolio");
        commit("SET_STOCKS", stocks);
        commit("SET_PORTAFOLIO", portafolio);
      }
    });
};
