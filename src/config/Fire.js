import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCkSdKjQ_sM6As8u_9xq2097YPjIz1xvlw",
    authDomain: "login-firebase-88acb.firebaseapp.com",
    databaseURL: "https://login-firebase-88acb.firebaseio.com",
    projectId: "login-firebase-88acb",
    storageBucket: "login-firebase-88acb.appspot.com",
    messagingSenderId: "478100577323",
    appId: "1:478100577323:web:4e20f10cc311ddc91f9e6e",
    measurementId: "G-QNRN1WHE90"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;