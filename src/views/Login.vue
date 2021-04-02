<template>
  <div class="login container mt-5">
    <h3 class="mb-3">Please log in to send us a good thought:</h3>
    <custom-form />
  </div>
</template>
<script>
import CustomForm from "../components/form.vue";

export default {
  name: "Login",
  components: {
    CustomForm,
  },
};
</script>

<style lang="scss">
.login {
  position: relative;
  padding-top: 48px;

  &::before {
    content: "";
    display: block;
    background: url("../assets/login.png") no-repeat;
    background-size: contain;
    width: 220px;
    height: 220px;
    position: absolute;
    right: 0;
    top: -47px;
    z-index: 9;
  }
}
</style>
