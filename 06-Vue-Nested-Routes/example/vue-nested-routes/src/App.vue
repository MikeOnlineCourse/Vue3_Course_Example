<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <div id="main">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#nav {
  width: 20%;
  height: 100%;
  background-color: tomato;
  padding-top: 10%;
  a {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-active {
      color: #fff;
    }
  }
}
#main {
  width: 80%;
  height: 100%;
  background-color: wheat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
