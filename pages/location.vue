<template>

  <v-card class="map-card">

    <v-row>

      <v-col xs="12" sm="8" offset-sm="2" md="6" offset-md="0" align="center">

        <Address :addressDetails="addressDetails"></Address>

      </v-col>

      <v-col xs="12" sm="12" md="6" align="center">

        <Map></Map>

      </v-col>

    </v-row>

    <v-divider></v-divider>

    <v-row align="center">

      <v-col xs="12" sm="12" md="12" offset-md="0">

        <OpeningTimes :openingTimes="openingTimes"></OpeningTimes>

      </v-col>


    </v-row>

  </v-card>

</template>

<script>

  import mapboxgl from 'mapbox-gl'
  import OpeningTimes from '../components/OpeningTimes'
  import Address from '../components/Address'
  import Map from '../components/Map'

  export default {

    name: 'Location',

    layout: 'default',

    components: {
      OpeningTimes,
      Address,
      Map
    },

    data() {
      return {
        openingTimes: [
          {
            day: "mon",
            time: "10:00 - 22:00"
          },
          {
            day: "tue",
            time: "10:00 - 22:00"
          },
          {
            day: "wed",
            time: "10:00 - 22:00"
          },
          {
            day: "thurs",
            time: "10:00 - 22:00"
          },
          {
            day: "fri",
            time: "10:00 - 22:00"
          }
        ],

        addressDetails: {
          line1: "Luca's BBQ Restaurant",
          line2: "101 Grey Street",
          line3: "Newcastle Upon Tyne",
          postcode: "NE1 6BR",
          tel: "0191 654321",
          email: "lucasbbq@gmail.com"
        }

      }
    },

  }


</script>

<style>

  .map-card {
    height: 850px;
  }

  @media only screen and (max-width: 960px) {
    .map-card {
      height: 1300px;
    }
  }


</style>
