<template>
  <div class="list-group">
    <a
      v-for="listItem in listItems"
      :key="listItem.index"
      href="#"
      class="list-group-item list-group-item-action"
      aria-current="true"
    >
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1"></h5>
      </div>
      <p class="mb-1">{{ listItem.text }}</p>
      <small> {{ listItem.createdAt }} </small>
    </a>
  </div>
</template>

<script>
export default {
  name: "list-group",
  data() {
    return {
      listItems: {},
    };
  },
  created() {
    fetch(
      "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5"
    )
      .then((resp) => resp.json())
      .then((data) => {
        this.listItems = data;
      });
  },
};
</script>
