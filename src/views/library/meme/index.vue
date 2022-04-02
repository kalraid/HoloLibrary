<template>
  <v-app
    class="v-app"
  >
    <v-container
      fluid
      fill-height
    >
      <v-row
        no-gutters
        align="center"
        justify="center"
      >
        <UnderConstruction />
      </v-row>
      <!-- //? Snackbar 컴포넌트 -->
    </v-container>
  </v-app>
</template>

<script>
import {
// SET_LOCAL_ITEM,
// GET_LOCAL_ITEM,
// REMOVE_LOCAL_ITEM
} from '@/utils/local-storage'

//! Helper는 Global Mixin으로 만들지 고민필요
import StoreHelper from '@/utils/store-helper'
import { mapGetters } from 'vuex'
import UnderConstruction from '@/layout/components/underConstruction/making.vue'

export default {
  name: 'Channel',
  components: {
    UnderConstruction
  },
  mixins: [StoreHelper],
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['locale'])
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },
  mounted() {
  },
  methods: {

  }
}
</script>
