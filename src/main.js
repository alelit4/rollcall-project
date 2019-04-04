import Vue from 'vue'

// To use VueMaterial
//import VueMaterial from 'vue-material'
//import 'vue-material/dist/vue-material.min.css'
//import 'vue-material/dist/theme/default.css'

// To use Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import colors from 'vuetify/es5/util/colors'

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

// To use VueMaterial
//Vue.use(VueMaterial)

// Clean style
// Vue.use(Vuetify)
// My Custom theme
Vue.use(Vuetify, {
    theme: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
    },
})

new Vue({
    router,
    render: h => h(App),
}).$mount('my-app')
