// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import * as fb from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyBnJfTvGkh40Z8n1SIMuFOCpOR0Dqs_8kE',
      authDomain: 'onlinestore2-e951c.firebaseapp.com',
      databaseURL: 'https://onlinestore2-e951c.firebaseio.com',
      projectId: 'onlinestore2-e951c',
      storageBucket: '',
      messagingSenderId: '994592766065',
      appId: '1:994592766065:web:f0fbccd7f8e64cd8'
    }
    // Initialize Firebase
    fb.initializeApp(firebaseConfig)

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
