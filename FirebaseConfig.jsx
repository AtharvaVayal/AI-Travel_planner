// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getFirestore} from "firebase/firestore"
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDnjGlrjNM-LUkrxrcMOgtKyieRE9PmRYs",
//   authDomain: "ai-travel-planner-b1617.firebaseapp.com",
//   projectId: "ai-travel-planner-b1617",
//   storageBucket: "ai-travel-planner-b1617.appspot.com",
//   messagingSenderId: "302977584642",
//   appId: "1:302977584642:web:3fdfce3bfe5c3faa85211b",
//   measurementId: "G-VH04NK0Y6B"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const db= getFirestore(app);
// //const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE942uvY1j8J69rDYk7jZRk7zPr08ashY",
  authDomain: "idli-65930.firebaseapp.com",
  projectId: "idli-65930",
  storageBucket: "idli-65930.appspot.com",
  messagingSenderId: "471057322250",
  appId: "1:471057322250:web:edc8a2ea198820e79d6af3",
  measurementId: "G-S7TYGW52NZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
//const analytics = getAnalytics(app);