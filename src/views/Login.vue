<template>
  <div id="login" class="login container mt-5">
    <h3 class="mb-3">Please log in to send us a good thought:</h3>
    <input
      class="form-control mb-3"
      type="text"
      name="username"
      v-model="input.username"
      placeholder="Username"
    />
    <input
      class="form-control mb-3"
      type="password"
      name="password"
      v-model="input.password"
      placeholder="Password"
    />
    <button class="btn btn-primary" type="button" v-on:click="login()">
      Login
    </button>
  </div>
</template>

<script>
import user from "../assets/user.json";

export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        if (
          this.input.username == user.username &&
          this.input.password == user.password
        ) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "secure" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      } else {
        console.log("A username and password must be present");
      }
    },
  },
};
</script>

<style lang="scss">
#login {
  width: 500px;
  border: 2px dashed #cccccc;
  background-color: #ffffff;
  margin: auto;
  padding: 20px;
  border-radius: 15px;
}

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
    margin: 0 auto;
  }
}
</style>
