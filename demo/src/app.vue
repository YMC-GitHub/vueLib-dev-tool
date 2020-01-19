<template>
  <div>
    <h1>hi,boy!</h1>
    <div>
      <v-button>Hello</v-button>
      <v-button color="gray">Hello</v-button>
      <v-button color="warm">Hello</v-button>
      <v-button color="warm" size="sm">Hello</v-button>
      <v-button color="warm" size="lg">Hello</v-button>
    </div>
  </div>
</template>

<script>
</script>

<style lang='less'>
@color: cadetblue;
h1 {
  text-align: center;
  color: @color;
}
</style>