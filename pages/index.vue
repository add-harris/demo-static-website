<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>

<!--      <v-row justify="center" align="center" class="nicely-spaced">-->
<!--        <h1 :class="landingVisited ? 'pt-100' : 'pt-200' " justify-center align-center>Content1</h1>-->
<!--      </v-row>-->

      <v-row justify="center" align="center" class="pt-100">
        <v-icon size="50">mdi-hamburger</v-icon>
      </v-row>
      <v-row justify="center" align="center" class="p-50">
        <p class="para-text">Lots of nice text about our restaurant. We make the best food, it is truley delicious. Served with a range of chilled drinks, ect ect ect ...</p>
      </v-row>

      <v-divider></v-divider>



      <v-row justify="center" align="center" class="p-50">
        <v-carousel cycle height="400" style="max-width: 500px;">
          <v-carousel-item
            eager
            v-for="(image , i) in images"
            :key="i"
            :src="image.src"
          >
          </v-carousel-item>
        </v-carousel>
      </v-row>

      <v-divider></v-divider>

      <v-row justify="center" align="center" class="pt-100">
        <v-btn>Food</v-btn>
      </v-row>


      <v-row justify="center" align="center" class="pt-100">
        <v-btn>Drinks</v-btn>
      </v-row>

      <v-row justify="center" align="center" class="pt-100">
        <v-btn>Drinks</v-btn>
      </v-row>



    </v-flex>
  </v-layout>
</template>

<script>

import { mapState } from 'vuex'

export default {

  name: "Home",

  layout: 'landing',

  data() {
    return {
      images: [
        {
          src: 'https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
        {
          src: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?cs=srgb&dl=pexels-pascal-claivaz-410648.jpg&fm=jpg',
        },
        {
          src: 'https://images.pexels.com/photos/789327/pexels-photo-789327.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        }
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

  .pt-200 {
    padding-top: 200px;
  }

  .pt-150 {
    padding-top: 150px;
  }

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
    font-size: 1.4em;
  }

  .nicely-spaced {
    padding: 100px;
  }

  .floating-icon {
    font-size: 50px !important;

  }



</style>
