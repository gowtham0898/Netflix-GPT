// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoKbnwP1GaDf664CCIPkqQw4dALlbP9kE",
  authDomain: "netflixgpt-a5d75.firebaseapp.com",
  projectId: "netflixgpt-a5d75",
  storageBucket: "netflixgpt-a5d75.appspot.com",
  messagingSenderId: "1025481101312",
  appId: "1:1025481101312:web:22d9d324d35db1931e48e5",
  measurementId: "G-1B6G2GNJ46"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);





// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD6ECZy-Yplwd3MBXAmzvH6F6ItR6owa14",
//   authDomain: "netflixgpt-b4171.firebaseapp.com",
//   projectId: "netflixgpt-b4171",
//   storageBucket: "netflixgpt-b4171.appspot.com",
//   messagingSenderId: "662641616465",
//   appId: "1:662641616465:web:60cd1524f2dad2adbbba70",
//   measurementId: "G-MB99T5DHTL"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

