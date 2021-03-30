import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDg7Il0smAArUl3s7NQLA_VZX_K22zpI3g",
    authDomain: "mitienda-63c01.firebaseapp.com",
    projectId: "mitienda-63c01",
    storageBucket: "mitienda-63c01.appspot.com",
    messagingSenderId: "913957189249",
    appId: "1:913957189249:web:c4557e12f99683ef547f80",
    measurementId: "G-BF8E97F2TR"
  };
  // Initialize Firebase
 export const firebaseapp = firebase.initializeApp(firebaseConfig);