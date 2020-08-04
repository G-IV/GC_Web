<template>
  <b-container id="app" class="vh-100">
    <div id="nav" class="navHeight">
      <router-link to="/" class="routerHeight">Home</router-link> |
      <router-link to="/Accounts">Accounts</router-link> |
      <router-link to="/Tours">Tours</router-link> |
      <router-link to="/Tournaments">Tournaments</router-link> |
      <router-link to="/about" class="routerHeight">About</router-link>
    </div>
    <router-view/>
  </b-container>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style>
.routerHeight{
  height: calc(100vh - (60px));
}
.navHeight{
  height: 60px !important;
}

</style>