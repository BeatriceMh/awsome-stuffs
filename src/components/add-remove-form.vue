<template>
  <form @submit.prevent class="bg-dark p-4">
    <div class="row mb-3">
      <div class="col-sm-12">
        <input
          v-model="ids"
          type="text"
          class="form-control"
          id="id"
          placeholder="Please enter the id ..."
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-sm-12">
        <input
          v-model="name"
          type="text"
          class="form-control"
          id="inputName"
          placeholder="Please enter the name ..."
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-sm-12">
        <input
          v-model="origin"
          type="text"
          class="form-control"
          id="inputOrigin"
          placeholder="Please enter the origin ..."
        />
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-sm-12">
        <input type="file" id="img" name="img" accept="image/*" />
      </div>
    </div>
    <button @click="addTableBreed" type="submit" class="btn btn-primary">
      Add New Cat
    </button>
  </form>
</template>

<script>
export default {
  name: "addRemoveForm",
  event: "addTableBreed",
  data() {
    return {
      ids: "",
      name: "",
      origin: "",
      newBreeds: [],
    };
  },
  methods: {
    addTableBreed() {
      console.log("test");

      this.$emit("addTableBreed", this.ids, this.name, this.origin);
    },
  },
};
</script>
<style scoped>
p {
  color: aliceblue;
}
</style>
