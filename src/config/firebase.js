import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCzRcvrICv2VdHaGyp0CcnQiEe7yI67Fn4",
  authDomain: "react-firebase-bacdc.firebaseapp.com",
  projectId: "react-firebase-bacdc",
  storageBucket: "react-firebase-bacdc.appspot.com",
  messagingSenderId: "553208374516",
  appId: "1:553208374516:web:9a8fc47795efd1de79aaa1",
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore(); // Conexion firebase
