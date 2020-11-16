<template>
  <v-app dark>
    <ErrorPage :error="error"></ErrorPage>
  </v-app>
</template>

<script>

import ErrorPage from '../components/ErrorPage'

export default {
  layout: 'empty',

  components: {
    ErrorPage
  },

  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      // pageNotFound: '404 Not Found',
      // otherError: 'An error occurred'
    }
  },
}
</script>
