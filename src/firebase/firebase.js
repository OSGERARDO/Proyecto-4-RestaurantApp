// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGZA3GVnv20cjcy9WwARFzS4yoKgxANhg",
  authDomain: "restaurantapp-99b98.firebaseapp.com",
  projectId: "restaurantapp-99b98",
  storageBucket: "restaurantapp-99b98.appspot.com",
  messagingSenderId: "174893111762",
  appId: "1:174893111762:web:6444b51ffc4589f6e1100b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore()