<template>
  <div class="panel">
    <h1>{{ title }}</h1>
    <p class="lead">
      {{ firstParagraf }}
    </p>
    <hr class="my-4" />
    <p>
      {{ secondParagraf }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Panel",
  props: ["title", "firstParagraf", "secondParagraf"],
};
</script>

<style lang="scss">
.panel {
  background-color: #17a2b8;
  margin: 1rem 0 2rem;
  border-radius: 0.3rem;
  padding: 4rem 2rem;
  border: 1px solid #343a40;

  h1 {
    font-weight: 300;
    line-height: 1.2;
    font-size: 4.5rem;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
    color: #fff;
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
    margin: 1.5rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>