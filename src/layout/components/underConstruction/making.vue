<template>
  <v-container>
    <div style="text-align:center">
      <h3>
        {{ getMessage }}
      </h3>
    </div>
    <template v-for="i in getImageNames">
      <v-img
        :key="i"
        width="100vw"
        height="100vh"
        :src="require(`@/assets/images/making/`+i)"
      />
    </template>
  </v-container>
</template>

<script>

export default {
  name: 'UnderConstruction',
  data: function() {
    return {
      imgNames: ['making_bg1.png', 'making_bg2.png', 'making_bg3.png', 'making_bg4.png']
    }
  },
  computed: {
    getMessage() {
      return '아직 만드는 중이에요. 오늘도 귀여운 스이짱 보고가셔요~'
    },
    getImageNames() {
      return this.imgNames
    }
  }
}
</script>
