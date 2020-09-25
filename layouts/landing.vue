<template>
  <v-app dark>

    <Toolbars v-if="!landingVisited" :title="appBarTitle" height="400px"></Toolbars>
    <ToolbarsMini v-else :title="appBarTitle"></ToolbarsMini>


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
import ToolbarsMini from "../components/ToolbarsMini"
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {

  name: "Landing",

  components: {
    Toolbars,
    ToolbarsMini
  },

  data () {
    return {
      appBarTitle: "Cute Cafe"
    }
  },

  mounted() {
  },

  computed: {

    ...mapState({
      title: state => state.properties.title,
      landingVisited: state => state.properties.landingVisited,
    }),

    // checkVisited() {
    //   return this.checkLandingVisited()
    // }
  },

  methods: {

    // ...mapGetters({
    //   checkLandingVisited: 'properties/checkLandingVisited',
    // }),

  }

}
</script>

<style>

</style>
