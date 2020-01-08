const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  BUY_STOCK(state, { stockId, stockPrice, quantity }) {
    const record = state.stocks.find(el => el.id === stockId);

    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity
      });
    }

    state.funds -= stockPrice * quantity;
  },
  SELL_STOCK(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(el => el.id === stockId);
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);
    }
    state.funds += stockPrice * quantity;
  },
  SET_PORTAFOLIO(state, portafolio) {
    state.funds = portafolio.funds;
    state.stocks = portafolio.stocksPortafolio
      ? portafolio.stocksPortafolio
      : [];
  }
};

const actions = {
  sellStock({ commit }, order) {
    commit("SELL_STOCK", order);
  }
};

const getters = {
  stocksPortafolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocks.find(el => el.id === stock.id);
      return {
        id: stock.id,
        name: record.name,
        price: record.price,
        quantity: stock.quantity
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
