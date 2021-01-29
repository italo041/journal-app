import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDJGDCFeCij-N6Rcg4UJdu8nhfMdADUYH8",
    authDomain: "curso-react-d9c9b.firebaseapp.com",
    databaseURL: "https://curso-react-d9c9b.firebaseio.com",
    projectId: "curso-react-d9c9b",
    storageBucket: "curso-react-d9c9b.appspot.com",
    messagingSenderId: "969499222651",
    appId: "1:969499222651:web:c4fb5f3bcd99dcf99138de"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {
      db,
      googleAuthProvider,
      firebase
  }