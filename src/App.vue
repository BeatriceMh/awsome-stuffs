<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-dark bg-dark">
        <img
          alt="Vue logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
        />
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/login">Login</router-link>
          </b-navbar-nav>
        </b-navbar>
      </nav>
    </div>
    <router-view @authenticated="setAuthenticated" />

    <footer class="bg-dark">
      <div class="container">
        <p>
          © A copyright notice is a short line of text that lets the public know
          that your work is protected by copyright law and is not to be copied.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      authenticated: false,
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  footer {
    margin-top: 2rem;
    color: #fff;

    p {
      font-size: 12px;
      line-height: normal;
      max-width: 50%;
      margin: 0 auto;
      padding: 20px 0;
    }
  }
}

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
