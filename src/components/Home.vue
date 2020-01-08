<template>
  <div>
    <h1>trade or view your portafolio</h1>
    <h6>you may save & load your data</h6>
    <h6>click end day to begin a new day</h6>
    <hr />
    <p>YOUR FUNDS : {{ funds | currency }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>
