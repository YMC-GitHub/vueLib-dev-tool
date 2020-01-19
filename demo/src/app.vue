<template>
  <div>
    <h1>hi,boy!</h1>
    <div>
      <v-button></v-button>
      <v-button color="gray">Hello</v-button>
      <v-button color="warm">Hello</v-button>
      <v-button color="warm" size="sm">Hello</v-button>
      <v-button color="warm" size="lg">Hello</v-button>
    </div>

    <!-- <lo-button></lo-button> -->
  </div>
</template>

<script>
/*
import LoButton from "./l-button.vue";
export default {
  components: {
    LoButton
  }
};
*/
</script>

<style lang='less'>
@color: cadetblue;
h1 {
  text-align: center;
  color: @color;
}
</style>