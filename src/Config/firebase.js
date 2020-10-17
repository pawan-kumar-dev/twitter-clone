import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCJU0chFiFArV_uxaMUxN0tVOUcdwVXico",
  authDomain: "twitter-react-clone-4fcf7.firebaseapp.com",
  databaseURL: "https://twitter-react-clone-4fcf7.firebaseio.com",
  projectId: "twitter-react-clone-4fcf7",
  storageBucket: "twitter-react-clone-4fcf7.appspot.com",
  messagingSenderId: "1065073590239",
  appId: "1:1065073590239:web:1f0d40b2b1daf2256f8e6a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //for auth signup

export { auth, provider };
export default db;
