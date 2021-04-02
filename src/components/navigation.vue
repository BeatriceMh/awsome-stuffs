<template>
  <nav class="navbar navbar-dark bg-dark">
    <img alt="Vue logo" src="../assets/logo.png" />
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/login">Login</router-link>
      </b-navbar-nav>
    </b-navbar>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
.navbar-nav {
  a {
    color: #42b983;
    padding: 0 15px;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #fff;
    }
  }
}

nav {
  img {
    max-width: 60px;
  }
}
</style>