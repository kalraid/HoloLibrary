<template>
  <v-footer
    padless
    :style="horizon ? 'paddingLeft:0' : ''"
  >
    <v-col
      class="text-center"
      cols="12"
    >
      <!-- <p class="footer"><strong>HoloLibrary</strong></p> -->
    </v-col>
  </v-footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  }),
  computed: {
    ...mapGetters(['horizon'])
  }
}
</script>

<style scoped>
.v-application p {
  margin-bottom: 0;
}
.footer {
  color: #000 !important;
}
</style>
