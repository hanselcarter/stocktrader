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
          <a class="nav-link">end day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdownMenuLink"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            save and load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
      <strong class="navbar-text navbar-right"> funds: {{ funds }}</strong>
    </div>
  </nav>
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
