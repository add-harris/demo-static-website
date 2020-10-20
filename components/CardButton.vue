<template>

  <v-dialog v-model="dialogOpen" fullscreen hide-overlay transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">

      <v-hover>
        <template v-slot:default="{ hover }">

          <v-card class="card-link ma-6" v-bind="attrs" v-on="on">

            <v-img :src="cardData.src" class="card-link">
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

    <v-card>
      <v-toolbar dark color="grey">
        <v-btn icon dark @click="dialogOpen = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container style="height: 1000px">
        <embed src="/menu.pdf" type="application/pdf" width="100%" height="100%">
      </v-container>
    </v-card>

  </v-dialog>

</template>

<script>

  export default {

    name: "CardButton",

    props: {
      cardData: Object
    },

    data () {
      return {
        dialogOpen: false,
      }
    },

    computed: {

    },
    methods: {

    }
  }

</script>

<style>

  .card-link {
    height: 300px;
    width: 200px;
  }

  @media only screen and (max-width: 960px) {
    .card-link {
      height: 150px;
      width: 500px;
    }
  }

  @media only screen and (max-width: 550px) {
    .card-link {
      height: 150px;
      width: 300px;
    }
  }

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
