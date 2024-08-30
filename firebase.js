// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Evelise's firebase config
// const firebaseConfig = {
//   apiKey: "AIzaSyCYHSSOXXb_Nr0hUcr-pi0TnfU6kumLOxg",
//   authDomain: "flashcard-b7725.firebaseapp.com",
//   projectId: "flashcard-b7725",
//   storageBucket: "flashcard-b7725.appspot.com",
//   messagingSenderId: "282985484073",
//   appId: "1:282985484073:web:c3b832919fa1c6603df138",
//   measurementId: "G-HGJLDS2KBJ"
// };


// Jimena's firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAhlW6J7d7jyZMREKcn_gg6pQSlbVl0dVQ",
  authDomain: "p4-flashcardsai.firebaseapp.com",
  projectId: "p4-flashcardsai",
  storageBucket: "p4-flashcardsai.appspot.com",
  messagingSenderId: "1091626033320",
  appId: "1:1091626033320:web:8980c9da8044480a14229d",
  measurementId: "G-CPJMQ4MJ6N"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}