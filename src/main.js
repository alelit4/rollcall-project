import Vue from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
const PROJECTID = "";
const APIKEY = "";

// Initialize Firebase
const config = {
  apiKey: APIKEY,
  authDomain: PROJECTID + ".firebaseapp.com",
  databaseURL: "https://" + PROJECTID + ".firebaseio.com",
  projectId: PROJECTID,
  storageBucket: PROJECTID + ".appspot.com",
  messagingSenderId: "518955145087"
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
