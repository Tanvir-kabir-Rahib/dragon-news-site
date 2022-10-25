// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9SqOo1RIYEmL1MC6xGKXb3u1sPBp_Xp4",
  authDomain: "dragon-news-79eaf.firebaseapp.com",
  projectId: "dragon-news-79eaf",
  storageBucket: "dragon-news-79eaf.appspot.com",
  messagingSenderId: "256987058914",
  appId: "1:256987058914:web:1a6543c80c328ade3a84bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;