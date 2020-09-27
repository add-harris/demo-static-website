<template>
  <v-app dark>

    <Toolbars></Toolbars>

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

import Toolbars from "../components/Toolbars"
import { mapMutations } from 'vuex'

export default {

  name: "Default",

  components: {
    Toolbars
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
