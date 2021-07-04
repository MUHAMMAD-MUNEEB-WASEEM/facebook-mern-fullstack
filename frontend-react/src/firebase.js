
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDCe6f-cXkeSXyGFmDecXN__jE3-kUVTo",
  authDomain: "facebook-firebase-fullstack.firebaseapp.com",
  projectId: "facebook-firebase-fullstack",
  storageBucket: "facebook-firebase-fullstack.appspot.com",
  messagingSenderId: "663232030936",
  appId: "1:663232030936:web:7fc4d405d249c18c110fad"
};

//initializing app mandatory
const firebaseApp = firebase.initializeApp(firebaseConfig);  

//db stuff of firebase
const db = firebaseApp.firestore();

//firebase authentication 
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider};
export default db;