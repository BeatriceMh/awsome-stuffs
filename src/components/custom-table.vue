<template>
  <div>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Origin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="catInfo in catsInfo" :key="catInfo.id">
          <th class="row-id" scope="row">{{ catInfo.id }}</th>
          <td>
            <div v-if="catInfo.image"><img :src="catInfo.image.url" /></div>
          </td>
          <td>{{ catInfo.name }}</td>
          <td>{{ catInfo.origin }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Custom-table",
  props: ["arr"],
  data() {
    return {
      catsInfo: null,
      catsImages: null,
    };
  },
  created() {
    this.$store
      .dispatch("getCatsBreeds")
      .then((response) => (this.catsInfo = response.data));
  },
  watch: {
    arr(to) {
      this.catsInfo = [...to, ...this.catsInfo];
    },
  },
};
</script>

<style scoped>
img {
  width: auto;
  height: auto;
  border-radius: 5px;
  max-width: 300px;
  border: 2px solid #fff;
}

.row-id {
  max-width: 100px;
}
</style>
