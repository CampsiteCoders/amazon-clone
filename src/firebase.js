import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAoSma2FBRuP7AWaFhZkiNAfnvogVNV8IU",
    authDomain: "challenge-b45e5.firebaseapp.com",
    databaseURL: "https://challenge-b45e5.firebaseio.com",
    projectId: "challenge-b45e5",
    storageBucket: "challenge-b45e5.appspot.com",
    messagingSenderId: "460172394021",
    appId: "1:460172394021:web:d3c2d3c5fd2f0d1359c9cc",
    measurementId: "G-ECRGDFHHQ0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}
