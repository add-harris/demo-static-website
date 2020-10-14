<template>

  <div class="address-text">
<!--    <label>Address:</label>-->
    <p>{{addressDetails.line1}}</p>
    <p>{{addressDetails.line2}}</p>
    <p>{{addressDetails.line2}}</p>
    <p><label>tel:</label> {{addressDetails.tel}}</p>
    <p><label>email:</label> {{addressDetails.email}}</p>
  </div>

</template>

<script>

  export default {

    name: "Address",

    props: {
      addressDetails: Object
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

  .address-text {
    padding: 20px;
    margin: 20px;
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
