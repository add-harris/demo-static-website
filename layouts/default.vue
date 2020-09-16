<template>
  <v-app dark>

    <ToolbarsMini title="Cute Cafe" height="64px"></ToolbarsMini>

      <v-main>
        <v-container>
          <nuxt />
        </v-container>
      </v-main>


    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>

import ToolbarsMini from "../components/ToolbarsMini"

export default {

  name: "Default",

  components: {
    ToolbarsMini
  }

}
</script>

<style>


</style>
