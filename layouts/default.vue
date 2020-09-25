<template>
  <v-app dark>

    <ToolbarsMini :title="appBarTitle"></ToolbarsMini>

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
import { mapGetters, mapMutations } from 'vuex'

export default {

  name: "Default",

  components: {
    ToolbarsMini
  },

  data () {
    return {
      appBarTitle: "Cute Cafe"
    }
  },

  mounted() {
    this.setLandingVisited(true)
  },

  methods: {

    ...mapMutations({
      setLandingVisited: 'properties/setLandingVisited',
    }),

  }

}
</script>

<style>


</style>
