<template>

  <v-hover>
    <template v-slot:default="{ hover }">

      <v-card width="200px" height="300px" class="ma-6" nuxt to="/">

        <v-img :src="cardData.src" height="300px">
          <v-btn class="center-btn grey-gradient" outlined >{{cardData.label}}</v-btn>
        </v-img>

        <v-fade-transition>

          <v-overlay
            v-if="hover"
            absolute
            color="rgba(255,255,255,0.5)"
          >
            <v-btn class="center-btn grey-gradient" outlined >{{cardData.label}}</v-btn>
          </v-overlay>

        </v-fade-transition>

      </v-card>
    </template>

  </v-hover>

</template>

<script>

  export default {

    name: "Card",

    props: {
      cardData: Object
    },

    data () {
      return {}
    },

    computed: {

    },
    methods: {

    }
  }

</script>

<style>

  .center-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .grey-gradient {
    background-color: rgba(0,0,0,0.5);
  }


</style>
