<template>
<!--  <v-layout column justify-center align-center>-->
<!--    <v-flex xs12 sm8 md6>-->

    <div>

      <h2>Deployed by Cloud Build!!</h2>
      <h2>www.binxly.net!!!</h2>

      <v-row justify="center" align="center" class="pt-100">
        <v-icon size="50">mdi-hamburger</v-icon>
      </v-row>

      <v-row justify="center" align="center" class="p-50">
        <p class="para-text">
          Lots of nice text about our restaurant.
          We make the best food, it is truley delicious.
          Served with a range of chilled drinks, ect ect ect ...
        </p>
      </v-row>

      <v-divider></v-divider>

      <v-row justify="center" align="center" class="p-50">

        <v-col align="center" v-for="card in cards" :key="card.label" lg="3" md="3" sm="12">
          <CardButton :cardData="card" ></CardButton>
        </v-col>

      </v-row>

    </div>

<!--    </v-flex>-->
<!--  </v-layout>-->
</template>

<script>

import { mapState } from 'vuex'
import CardButton from '../components/CardButton'

export default {

  name: 'Home',

  layout: 'default',

  components: {
    CardButton
  },

  data() {
    return {

      cards: [
        {
          src: 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          label: 'Food'
        },
        {
          src: 'https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          label: 'Drink'
        },
        {
          src: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?cs=srgb&dl=pexels-pascal-claivaz-410648.jpg&fm=jpg',
          label: 'Specials'
        },
        {
          src: 'https://images.pexels.com/photos/789327/pexels-photo-789327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          label: 'Deserts'
        },
      ],

    }
  },

  computed: {

    ...mapState({
      landingVisited: state => state.properties.landingVisited,
    }),

  }


}
</script>

<style>

  .pt-100 {
    padding-top: 100px;
  }

  .p-50 {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .para-text {
    font-family: 'Courier Prime', monospace;
    width: 400px;
    font-size: 1.3em;
    text-align: justify;
    text-justify: inter-word;
  }

  @media only screen and (max-width: 500px) {
    .para-text {
      width: 300px;
      font-size: 1.1em;
    }
  }

  @media only screen and (max-width: 350px) {
    .para-text {
      width: 200px;
      font-size: 1.1em;
    }
  }



</style>
