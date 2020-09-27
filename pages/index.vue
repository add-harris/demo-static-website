<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>

      <h1 :class="landingVisited ? 'pt-100' : 'pt-200' ">Content1</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>
      <h1>Content</h1>

    </v-flex>
  </v-layout>
</template>

<script>

import { mapState } from 'vuex'

export default {

  name: "Home",

  layout: 'landing',

  computed: {

    ...mapState({
      landingVisited: state => state.properties.landingVisited,
    }),

  }


}
</script>

<style>

  .pt-200 {
    padding-top: 200px;
  }

  .pt-100 {
    padding-top: 200px;
  }

</style>
