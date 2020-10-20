<template>

  <v-row justify="center" align="center">

    <v-col align="center" v-for="card in cards" :key="card.label" lg="3" md="3" sm="12">
      <CardButton :cardData="card" ></CardButton>
    </v-col>

  </v-row>

</template>

<script>

  import CardButton from '../components/CardButton'

  export default {

    name: 'Menu',

    layout: 'default',

    components: {
      CardButton
    },

    data () {
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

  }

</script>
