// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYEM4gvCye7UWyCEIXHT_V6ucDDS9LnL0",
  authDomain: "fir-education-251c0.firebaseapp.com",
  projectId: "fir-education-251c0",
  storageBucket: "fir-education-251c0.appspot.com",
  messagingSenderId: "790918790276",
  appId: "1:790918790276:web:7e952450a2bbf32d8216d1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)
