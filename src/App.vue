<template>
  <div id="app">
    <div id="nav">
      <navigation />
    </div>
    <router-view />

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
import Navigation from "./components/navigation";

export default {
  components: {
    Navigation,
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
</style>
