<template>

  <v-simple-table dense class="ma-8">
    <template v-slot:default>
      <thead>
      <tr>
        <th colspan="2" class="text-center">
          Opening Times
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="openingTime in openingTimes"
        :key="openingTime.day"
      >
        <td>{{ openingTime.day }}</td>
        <td>{{ openingTime.time }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>

</template>

<script>

  export default {

    name: "OpeningTimes",

    props: {
      openingTimes: Array
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

  td {
    font-family: 'Courier Prime', monospace;
    text-align: center;
    font-size: 1.2em !important;
  }

  th {
    font-family: 'Lobster', cursive;
    font-size: 1.2em !important;
    color: white !important;
    padding: 5px !important;
  }

</style>
