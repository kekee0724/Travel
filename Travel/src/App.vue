<template>
<div id="app">
    <!-- <img src="./assets/logo.jpg"> -->
    <!-- <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/list">List</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/city">City</router-link>
    </div> -->
    <!-- 显示当前路由地址所对应的内容 -->
    <keep-alive exclude="Detail">
        <router-view />
    </keep-alive>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
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
