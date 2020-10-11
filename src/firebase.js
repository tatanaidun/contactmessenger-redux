import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2_DTMVm3RTD7Yibm7WBiV2YLeTvJrZ6U",
  authDomain: "contactmessenger-tata.firebaseapp.com",
  databaseURL: "https://contactmessenger-tata.firebaseio.com",
  projectId: "contactmessenger-tata",
  storageBucket: "contactmessenger-tata.appspot.com",
  messagingSenderId: "284757458362",
  appId: "1:284757458362:web:9070b43d2c0d565ae97183",
  measurementId: "G-EH3PNKF4Z3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
