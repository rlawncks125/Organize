<template>
  <div id="nav">
    <p>공부 하자 !!!!!!!</p>
    <router-link to="/TypeSCript">TypeSCript</router-link> |
    <router-link to="/common">common</router-link> |
    <router-link to="/vue2">Vue2</router-link> |
    <router-link to="/vue3">Vue3</router-link> |
    <router-link to="/TA">TA</router-link> |
  </div>
  <router-view />
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
