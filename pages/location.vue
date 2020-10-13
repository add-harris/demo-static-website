<template>

  <v-card class="map-card">

    <v-row>

      <v-col xs="12" sm="12" md="6">

        <div class="address-text">
          <label>Address:</label>
          <p>Luca's BBQ Restaurant</p>
          <p>101 Grey Street</p>
          <p>Newcastle Upon Tyne</p>
          <p>NE1 6BR</p>
          <p><label>tel:</label> 0191 654321</p>
          <p><label>email:</label> lucasbbq@gmail.com</p>
        </div>

      </v-col>

      <v-col xs="12" sm="12" md="6">
        <div id="map"></div>
      </v-col>

    </v-row>

    <v-divider></v-divider>

    <v-row>



    </v-row>

  </v-card>

</template>

<script>

  import mapboxgl from 'mapbox-gl'

  export default {

    name: 'Location',

    layout: 'default',

    data() {
      return {}
    },

    mounted() {

      // mapbox docs: https://docs.mapbox.com/
      // accessToken should be replaced with customer accessToken

      mapboxgl.accessToken = 'pk.eyJ1IjoiYWRkLWhhcnJpcyIsImEiOiJja2Z6eG01MGYwMjFwMnFxdzdxcmk0aTg5In0.8x5PhfXW5RzLfLC65HqtGQ'
      var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-1.612, 54.973], // starting position [lng, lat]
        zoom: 12 // starting zoom
      });

      map.addControl(new mapboxgl.NavigationControl());

      var marker = new mapboxgl.Marker()
        .setLngLat([-1.6125, 54.9729])
        .addTo(map);

    }

  }


</script>

<style>

  #map {
    height: 400px;
    width: 400px;
    /*margin-right: 20px;*/
  }

  .map-card {
    /*padding: 50px;*/
    margin-top: 100px;
    height: 600px;
  }

  @media only screen and (max-width: 960px) {
    .map-card {
      height: 1000px;
    }
  }

  .address-text {
    padding: 20px;
  }

  .address-text > p, .address-text > label {
    font-family: 'Courier Prime', monospace;
    text-align: left;
    font-size: 1.1em;
    margin-bottom: 5px;
  }

  .address-text label {
    text-decoration: underline;
  }


</style>
