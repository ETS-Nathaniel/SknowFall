import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCi-aXahuoRmzvzT-VoqhevcvJToe-AGTc",
  authDomain: "comeaux-sknow-fall-2020.firebaseapp.com",
  databaseURL: "https://comeaux-sknow-fall-2020.firebaseio.com",
  projectId: "comeaux-sknow-fall-2020",
  storageBucket: "comeaux-sknow-fall-2020.appspot.com",
  messagingSenderId: "127924966193",
  appId: "1:127924966193:web:93aceddeb9363e0c2a5610",
};

firebase.initializeApp(firebaseConfig);

export default {
  auth: firebase.auth(),
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
      });
  },
  logout() {
    firebase
      .auth()
      .signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error);
      });
  },
};
