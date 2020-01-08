<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/"><a>Navbar</a></router-link>

    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <router-link to="/portafolio"
          ><li class="nav-item">
            <a class="nav-link">portafolio</a>
          </li>
        </router-link>
        <router-link to="/stocks"
          ><li class="nav-item">
            <a class="nav-link">stocks</a>
          </li>
        </router-link>
        <li class="nav-item">
          <a class="nav-link" @click="endDay">end day</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="save">save</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="load">load</a>
        </li>
      </ul>
      <strong class="navbar-text navbar-right">
        funds: {{ funds | currency }}</strong
      >
    </div>
  </nav>
</template>
<script>
import { mapActions } from "vuex";
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    endDay() {
      this.randomizeStocks();
    },
    save() {
      const data = {
        funds: this.$store.getters.funds,
        stocksPortafolio: this.$store.getters.stocksPortafolio,
        stocks: this.$store.getters.stocks
      };
      this.$http.put("data.json", data);
    },
    load() {
      this.loadData();
    }
  }
};
</script>
