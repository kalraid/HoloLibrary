<template>
  <v-card>
    <template>
      <div class="text-center">
        <v-dialog
          v-model="dialog"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-card
              :style="fanartStyle('30vmin','profile')"
              v-bind="attrs"
              v-on="on"
            />
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Lage Image
            </v-card-title>

            <v-card
              :style="fanartStyle('70vmin','banner')"
              @contextmenu.prevent
            />
            <v-card-subtitle style="text-align:center">
              <a
                :href="channel.channel_url"
                target="_blank"
              >go to youtube</a>
              <v-card-text
                class="pa-0"
                v-text="channel.channel_name"
              />
              <v-card-text
                class="pa-0"
                v-text="channel.member_name"
              />
            </v-card-subtitle>
          </v-card>
        </v-dialog>
      </div>
    </template>
    <v-card-subtitle style="text-align:center">
      <v-card-text
        v-if="channel.twitter_id"
        class="pa-0"
      >
        <a
          :href="'https://www.youtube.com/channel/'+channel.channel_id"
          target="_blank"
        >go to youtube</a>
      </v-card-text>
      <v-card-text
        class="pa-0"
        v-text="channel.channel_name"
      />
      <v-card-text
        class="pa-0"
        v-text="channel.member_name"
      />
      <v-card-text
        v-if="getTime"
        class="pa-0"
      >
        <span> 구독일자 : <span v-text="getTime" /></span>
      </v-card-text>
    </v-card-subtitle>
  </v-card>
</template>
<script>
//! Helper는 Global Mixin으로 만들지 고민필요
import StoreHelper from '@/utils/store-helper'
import { mapGetters } from 'vuex'
import {
  GET_LOCAL_ITEM
} from '@/utils/local-storage'

export default {
  name: 'HoloMemberYoutube',
  mixins: [StoreHelper],
  props: {
    channel: {
      type: Object,
      default() {
        return {
          'isUse': 'Y',
          'created': 1641347990,
          'channel_name': 'SoraCh. ときのそらチャンネル',
          'modified': 1645003244,
          'member_name': '토키노 소라',
          'channel_id': 'UCp6993wxpyDPHUpavwDFqgg',
          'company_name': 'holo',
          'channel_profile_img_url': 'https://yt3.ggpht.com/ytc/AKedOLQO9Vyz7ysAwPSio5xvkw6n0xvlyDu7A9eawqIH3w=s800-c-k-c0x00ffffff-no-rj-mo',
          'isDelete': 'N',
          'channel_banner_img_url': 'https://lh3.googleusercontent.com/UTtaagGOKC2SdUTqTORLP_GQwAZMLonU-SHWJ08NWCPdsJeTt9pCpytJ6derR5jIaacgWfAV4w',
          'channel_url': 'https://www.youtube.com/channel/UCp6993wxpyDPHUpavwDFqgg',
          'class': 'JP',
          'genera': '0기'
        }
      }
    },
    type: {
      type: String,
      default: 'base'
    }
  },
  data() {
    return {
      dialog: false,
      lodingImg: 'http://pbs.twimg.com/media/FIZ-ACwUUAEONeG.jpg'
    }
  },
  computed: {
    ...mapGetters(['locale']),
    getChannel: {
      get() {
        return this.channel
      }
    },
    getTime() {
      if (this.channel.sub_date) {
        return this.channel.sub_date
      } else {
        return ''
      }
    }
  },
  watch: {
    dialog() {
      if (this.dialog && this.Channel.twitter_id) {
        this.$store.dispatch('statistics/sendMessage', { 'message': 'click', 'user': GET_LOCAL_ITEM('user_index'), 'type': this.type, 'data': this.channel })
      }
    }
  },
  beforeMount() {
    this.$i18n.locale = this.locale
  },

  methods: {
    fanartStyle(heightSize, imgType) {
      const channel = this.getChannel
      if ('type' in channel && channel.type === 'temp') {
        return {}
      }
      if (imgType === 'profile') {
        return { backgroundImage: 'url(' + channel.channel_profile_img_url + '?format=jpg), url(' + this.lodingImg + ')', backgroundSize: 'contain', backgroundPosition: 'center', height: heightSize }
      } else {
        return { backgroundImage: 'url(' + channel.channel_banner_img_url + '?format=jpg), url(' + this.lodingImg + ')', backgroundSize: 'contain', backgroundPosition: 'center', height: heightSize }
      }
    },
    imageDownLoad() {
      this.$refs.download.click()
      this.$store.dispatch('statistics/sendMessage', { 'message': 'download', 'user': GET_LOCAL_ITEM('user_index'), 'type': this.type, 'data': this.channel })
    }
  }
}
</script>
