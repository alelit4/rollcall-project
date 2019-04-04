import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'
import firebaseConfig from './../config.json'

Vue.config.productionTip = false

// Initialize Firebase
const config = {
    apiKey: firebaseConfig.APIKEY,
    authDomain: firebaseConfig.PROJECTID + '.firebaseapp.com',
    databaseURL: 'https://' + firebaseConfig.PROJECTID + '.firebaseio.com',
    projectId: firebaseConfig.PROJECTID,
    storageBucket: firebaseConfig.PROJECTID + '.appspot.com',
    messagingSenderId: '518955145087',
}
firebase.initializeApp(config)

Vue.use(VueMaterial)

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
