<template>
  <div class="container-fluid" id="home">
    <panel
      title="Many foot disorders in dogs are caused by long toenails."
      firstParagraf="Endal was the first dog to ride on the London Eye (the characteristic ferris wheel in London, England), and was also the first known dog to successfully use a ATM machine."
      secondParagraf="At the age of 4 weeks, most dogs have developed the majority of their vocalizations."
    />
    <div class="row justify-content-around">
      <div class="col-4">
        <list-group />
      </div>
      <div class="col-4">
        <image-output />
        <button type="button" class="btn btn-warning mt-4 float-start">
          Change Image
        </button>
      </div>
    </div>
    <hr />
    <div class="row justify-content-around">
      <div class="col-4">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Add Title</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Insert Title..."
            v-model="form.title"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Add Content</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Insert Content..."
            rows="3"
            v-model="form.description"
          ></textarea>
          <button @click="submit()" type="submit" class="btn btn-primary mt-3">
            Add
          </button>
        </div>
      </div>
      <div class="col-8">
        <div class="row">
          <div
            v-for="info in articlesInfo"
            :key="info.id"
            class="card col-3 p0 mb-3"
          >
            <div class="card-header">
              {{ info.title }}
            </div>
            <div class="card-body">
              <p class="card-text">{{ info.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageOutput from "../components/image-output.vue";
import ListGroup from "../components/list-group.vue";
import Panel from "../components/panel.vue";
import axios from "axios";

export default {
  name: "Home",
  components: { Panel, ListGroup, ImageOutput },

  data() {
    return {
      articlesInfo: null,
      form: {
        title: "",
        description: "",
      },
    };
  },
  created() {
    this.$store
      .dispatch("getArticleInfo")
      .then((response) => (this.articlesInfo = response.data));
  },
  methods: {
    submit() {
      axios.post("https://jsonplaceholder.typicode.com/posts", this.form).then(
        response => console.log(response)
      );
    },
  },
};
</script>

<style scoped>
#home .row {
  justify-content: center;
}
.p0 {
  padding: 0 !important;
  margin: 0 15px;
}
</style>
