<template>
  <div class="container-fluid">
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
  </div>
</template>

<script>
import ImageOutput from "../components/image-output.vue";
import ListGroup from "../components/list-group.vue";
import Panel from "../components/panel.vue";
export default {
  name: "Home",
  components: { Panel, ListGroup, ImageOutput },
};
</script>
