import Home from "./components/Home.vue";
import Portafolio from "./components/portafolio/Portafolio.vue";
import Stocks from "./components/stocks/Stocks.vue";
export const routes = [
  { path: "/", component: Home },
  { path: "/portafolio", component: Portafolio },
  { path: "/stocks", component: Stocks }
];
