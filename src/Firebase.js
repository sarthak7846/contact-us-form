import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA7jKD_Fo7PNyIzINmxwoSvz7seKHXTVNU",
  authDomain: "react-contact-form-6cbd3.firebaseapp.com",
  projectId: "react-contact-form-6cbd3",
  storageBucket: "react-contact-form-6cbd3.appspot.com",
  messagingSenderId: "944254932374",
  appId: "1:944254932374:web:fc92590df4c6cf00d4b9b7",
});

var db = firebaseApp.firestore();

export { db };
