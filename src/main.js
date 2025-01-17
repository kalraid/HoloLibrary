import Vue from 'vue'

import App from './App'
import store from './store'
import router from './router'
import request from './utils/request'

import '@/permission'
import vuetify from './plugins/vuetify'
import VueLogger from 'vuejs-logger'
import lodash from 'lodash'
import moment from 'moment'
import './styles/index.scss'
import '@/assets/icons'

import '../node_modules/ag-grid-community/dist/styles/ag-grid.css'
import '../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css'
import '../node_modules/ag-grid-community/dist/styles/ag-theme-alpine-dark.css'

import PageContainer from '@/components/Form/PageContainer'
import i18n from './utils/i18n'

import GAuth from 'vue-google-oauth2'
import cors from 'cors'

import { Tweet, Moment, Timeline } from 'vue-tweet-embed'

//* VueLogger 옵션
//* https://github.com/justinkames/vuejs-logger#readme
const isProduction = process.env.NODE_ENV === 'production'
const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'info',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
}

//* Logger Global (component level ex this.$log.info(message))
Vue.use(VueLogger, options)
//* Lodash Global (component level ex) this.$lodash.random(20))
Vue.prototype.$lodash = lodash
//* Axios Global (component level ex) this.$axios.get() ...)
Vue.prototype.$axios = request

//* Moment Global
Vue.prototype.$moment = moment

Vue.component('page-container', PageContainer)
Vue.component('tweet-component-tweet', Tweet)
Vue.component('tweet-component-moment', Moment)
Vue.component('tweet-component-timeline', Timeline)

Vue.use(GAuth, { clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
  scope: 'profile email https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/youtube' })
Vue.use(cors)

//! <중요>
//! 실제 API 연동이 시작되면 아래 if 스크립트는 모두 삭제 하세요.
//! 그리고 vue.config.js 파일에서 mock 연동을 제거하세요.
//! https://github.com/nuysoft/Mock
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  i18n,
  render: (h) => h(App)
})
