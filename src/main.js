import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
Vue.config.productionTip = false
import FieryVue from 'fiery-vue'
Vue.use(FieryVue)
import jQuery from 'jquery'
global.$ = jQuery 
import VueQrcodeReader from "vue-qrcode-reader";
Vue.use(VueQrcodeReader);
import VueSpeech from 'vue-speech'


Vue.use(VueSpeech)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created(){
    firebase.initializeApp({
      apiKey: "AIzaSyBxx2TKMzoBl_8bcMoiqM_pXQnyxBmPodg",
      authDomain: "cointer-ae59e.firebaseapp.com",
      databaseURL: "https://cointer-ae59e.firebaseio.com",
      projectId: "cointer-ae59e",
      storageBucket: "cointer-ae59e.appspot.com",
      messagingSenderId: "592136640793",
      appId: "1:592136640793:web:d6ee87af59231f83894d88",
      measurementId: "G-M4K4PRSYQF"
    })
  }
}).$mount('#app')