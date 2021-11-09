// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2AY_jkd0RKQdQFIehKSU_e6rBUKd2soA",
  authDomain: "uber-eats-clone-a02f3.firebaseapp.com",
  projectId: "uber-eats-clone-a02f3",
  storageBucket: "uber-eats-clone-a02f3.appspot.com",
  messagingSenderId: "306426187702",
  appId: "1:306426187702:web:ec800577105c50073e3b17",
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export { db };
