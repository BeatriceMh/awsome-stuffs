<template>
  <div class="image-output">
    <img :src="image" />
  </div>
</template>

<script>
export default {
  name: "Image-Output",
  data() {
    return {
      image: {},
    };
  },
  created() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => (this.image = data.message));
  },
};
</script>

<style lang="scss">
.image-output {
  display: flex;
  flex-flow: column;
  max-height: 390px;
  overflow: hidden;
  background: url("../assets/dotted-line.jpg");
  background-size: cover;
  background-size: 72%;
  background-repeat: no-repeat;

  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    margin-bottom: 2rem;
    border: 2px dotted #000;
  }
}
</style>
