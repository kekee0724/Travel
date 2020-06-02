<template>
  <div id="nav">
    <div class="home">可可的世界</div>
    <router-link to="/list">列表页</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
 .home {
    font-size: 0.85rem;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>
