<template>

  <div>

    <!-- NAV DRAW -->

    <NavDrawer :open="openDraw" ></NavDrawer>

    <!-- APP BAR -->

    <v-app-bar
      app
      color="#F7DDA4"
      min-height=64
      :height=height
      class="app-bar"
    >

      <v-app-bar-nav-icon @click.stop="openDraw = !openDraw" />

      <v-toolbar-title :v-text="title" />

      <v-img :src="require('../static/logo_transparent.png')" class="small-logo"></v-img>

      <v-spacer />

      <v-select placeholder="Theme" class="theme-select"></v-select>

      <v-btn icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>

    </v-app-bar>

  </div>

</template>

<script>

  import NavDrawer from "./NavDrawer"

  export default {

    name: "Toolbars",

    props: {
      title: String,
      height: {
        type: String,
        default: "64px"
      }
    },

    components: {
      NavDrawer
    },

    data () {
      return {

        openDraw: false,

      }
    }

  }

</script>

<style>

  .theme-select {
    max-width: 300px;
    min-width: 100px;
  }

  .small-logo {
    max-width: 100px;
  }

  .app-bar {
    color: #557581 !important;
  }

</style>
