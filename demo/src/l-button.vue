<template>
  <div>
    <h1>use as a locaol component</h1>
    <px-button></px-button>
    <px-button color="gray">Hello</px-button>
  </div>
</template>
<script>
import PxButton from "../../src/components/Button.vue";
export default {
  components: {
    PxButton
  }
};
</script>