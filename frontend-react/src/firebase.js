
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDE7bk8LEPxiPlZMxTLZEjB6sN1D_onI30",
  authDomain: "facebook-mern-fullstack.firebaseapp.com",
  projectId: "facebook-mern-fullstack",
  storageBucket: "facebook-mern-fullstack.appspot.com",
  messagingSenderId: "481765615479",
  appId: "1:481765615479:web:bc9f49a180d5c5b30b6372"
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