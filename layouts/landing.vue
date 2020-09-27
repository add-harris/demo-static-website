<template>
  <v-app dark>

    <Toolbars :landing="!landingVisited" height="400px"></Toolbars>

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
import { mapGetters, mapMutations, mapState } from 'vuex'

export default {

  name: "Landing",

  components: {
    Toolbars
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
