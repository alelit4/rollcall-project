import Vue from 'vue'

// To use VueMaterial
//import VueMaterial from 'vue-material'
//import 'vue-material/dist/vue-material.min.css'
//import 'vue-material/dist/theme/default.css'

// To use Vuetify
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import colors from 'vuetify/es5/util/colors'

// Firebase configuration
import Firebase from 'firebase'
import firebaseConfig from './../config.json'
import '@firebase/firestore'
import VueFirestore from 'vue-firestore'

import App from './App.vue'
import router from './router'

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

Vue.use(VueFirestore)

// Firebase configuration
let app = Firebase.initializeApp(config)
export const db = app.firestore()

// To use VueMaterial
//Vue.use(VueMaterial)

// Clean style
// Vue.use(Vuetify)
// My Custom theme
Vue.use(Vuetify, {
    theme: {
        primary: '#4a148c',
        secondary: '#00bcd4',
        accent: colors.shades.black,
        error: colors.red.accent3,
    },
})

new Vue({
    router,
    render: h => h(App),
}).$mount('my-app')
