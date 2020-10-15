<template>

  <div class="address-box">

    <v-row>
      <v-col xs="12" class="address-text">

        <h2 class="address-header pa-6">Find Us</h2>
        <p>{{addressDetails.line1}}</p>
        <p>{{addressDetails.line2}}</p>
        <p>{{addressDetails.line3}}</p>
        <p>{{addressDetails.postcode}}</p>
        <h2 class="address-header pa-6">Contact Us</h2>
        <p><label>tel:</label> {{addressDetails.tel}}</p>
        <p><label>email:</label> {{addressDetails.email}}</p>

      </v-col>
    </v-row>

    <v-row>
      <v-col xs="12" >

        <h2 class="address-header">
          call to book a table
        </h2>
        <span class="emojis">
            {{emojis.one}}
            {{emojis.two}}
            {{emojis.three}}
        </span>

      </v-col>
    </v-row>

  </div>

</template>

<script>

  export default {

    name: "Address",

    props: {
      addressDetails: Object
    },

    data () {
      return {
        emojis: {
          one: '\u{1F32E}',
          two: '\u{1F379}',
          three: '\u{1F4AF}',
        }
      }
    },

    computed: {

    },
    methods: {

    }
  }

</script>

<style>

  .address-box {
    /*padding: 20px;*/
    margin: 20px;
  }

  .address-text > p {
    font-family: 'Courier Prime', monospace;
    text-align: left;
    font-size: 1.1em;
    margin-bottom: 5px;
  }

  .address-header {
    font-family: 'Lobster', cursive;
    text-align: center;
  }

  .emojis {
    font-size: 1.2em;
    padding-left: 3px;
  }

</style>
