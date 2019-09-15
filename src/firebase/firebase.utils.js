import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCuFA3RFWGeYTWGzVosjHBv2Og9G5aysFA",
  authDomain: "crwn-db-3912a.firebaseapp.com",
  databaseURL: "https://crwn-db-3912a.firebaseio.com",
  projectId: "crwn-db-3912a",
  storageBucket: "",
  messagingSenderId: "1079217464071",
  appId: "1:1079217464071:web:1207389dee95851f971ba2"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

