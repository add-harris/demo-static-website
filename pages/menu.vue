<template>

  <v-container>

    <v-row justify="center">

      <v-dialog v-model="dialogOne" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on" >
            Eat This
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="orange">
            <v-btn icon dark @click="dialogOne = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-container style="height: 1000px">
            <embed src="/menu.pdf" type="application/pdf" width="100%" height="100%">
          </v-container>
        </v-card>
      </v-dialog>

    </v-row>

    <v-row justify="center">

      <v-dialog v-model="dialogTwo" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on" >
            Drink This
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="orange">
            <v-btn icon dark @click="dialogTwo = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-container style="height: 1000px">
            <embed src="/menu.pdf" type="application/pdf" width="100%" height="100%">
          </v-container>
        </v-card>
      </v-dialog>

    </v-row>

  </v-container>

</template>

<script>
  export default {
    data () {
      return {
        dialogOne: false,
        dialogTwo: false,
        overlay: false
      }
    },
  }
</script>
