<template>
  <div class="container about">
    <div class="row">
      <div class="col-md-7">
        <h3 class="mb-4">This is a list of cat's breeds</h3>
        <custom-table :arr="newBreedData" />
        {{ newBreedData }}
      </div>

      <div class="col-md-5">
        <h3 class="mb-4">Please add a new breeds</h3>
        <add-remove-form @addTableBreed="addNewBreed" />
      </div>
    </div>
  </div>
</template>

<script>
import customTable from "../components/custom-table";
import addRemoveForm from "../components/add-remove-form";

export default {
  components: {
    customTable,
    addRemoveForm,
  },
  data() {
    return {
      id: "",
      name: "",
      origin: "",
      newBreedData: [],
    };
  },
  methods: {
    addNewBreed(ids, name, origin) {
      this.newBreedData.push({
        id: ids,
        name: name,
        origin: origin,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.about {
  padding: 50px 0;
}
</style>
