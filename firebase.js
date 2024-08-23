// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYHSSOXXb_Nr0hUcr-pi0TnfU6kumLOxg",
  authDomain: "flashcard-b7725.firebaseapp.com",
  projectId: "flashcard-b7725",
  storageBucket: "flashcard-b7725.appspot.com",
  messagingSenderId: "282985484073",
  appId: "1:282985484073:web:c3b832919fa1c6603df138",
  measurementId: "G-HGJLDS2KBJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);