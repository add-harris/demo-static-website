<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>

      <div id="slanted"></div>

    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>

<style>

  #slanted {
    width: 0px;
    height: 0px;
    border-top: 50px solid orange;
    /*border-bottom: 50px solid orange;*/
    /*border-left: 50px solid orange;*/
    border-right: 1000px solid transparent;
    /*background-color: orange;*/
  }

</style>
