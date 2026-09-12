import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Using the same config as the app
const firebaseConfig = {
  apiKey: "AIzaSyB...", // I need to get the real config from main.js or firebase.js
};
