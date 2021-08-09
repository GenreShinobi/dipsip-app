import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH8cb-i7dajAQNJonEXAH-m6d-NTcTiws",
  authDomain: "thedipsip.firebaseapp.com",
  projectId: "thedipsip",
  storageBucket: "thedipsip.appspot.com",
  messagingSenderId: "264906711883",
  appId: "1:264906711883:web:c7baeb07a3a6bbeab77ece",
  measurementId: "G-X0XLNZWG6T",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let dipsip;

firebase.auth().onAuthStateChanged(() => {
  if (!dipsip) {
    dipsip = createApp(App);
    dipsip.use(store, axios).use(router).mount("#app");
  }
});
