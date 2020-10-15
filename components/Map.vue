<template>

  <div id="map"></div>

</template>

<script>

  import mapboxgl from 'mapbox-gl'

  export default {

    name: 'Map',

    props: {
      lang: Number,
      lat: Number
    },

    data () {
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
    height: 350px;
    width: 350px;
    margin: 40px;
  }

  @media only screen and (min-width: 1264px) {
    #map {
      height: 450px;
      width: 450px;
    }
  }


</style>
