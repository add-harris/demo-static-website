<template>
  <v-app dark>

    <Toolbars title="Cute Cafe" height="400px"></Toolbars>

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

export default {

  name: "Landing",

  components: {
    Toolbars
  },

  data () {
    return {}
  },

  mounted() {
  },

  computed: {
  },

  methods: {
  }
}
</script>

<style>

</style>
