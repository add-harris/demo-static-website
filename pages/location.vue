<template>

  <v-card class="map-card">

    <v-row>

      <v-col xs="12" sm="12" md="6">

        <Address :addressDetails="addressDetails"></Address>

      </v-col>

      <v-col xs="12" sm="12" md="6">
        <Map></Map>
      </v-col>

    </v-row>

    <v-row>

      <OpeningTimes :openingTimes="openingTimes"></OpeningTimes>

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
    height: 600px;
  }

  @media only screen and (max-width: 960px) {
    .map-card {
      height: 1000px;
    }
  }


</style>
