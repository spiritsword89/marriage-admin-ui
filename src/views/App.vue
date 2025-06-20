<template>
  <div class="all-main">
    <div class="main-area">
      <div>

      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.all-main {
  width: 100%;
  
  .main-area {
    width: 100%;
    height: 100vh;
    background-color: red;
  }
}
</style>
