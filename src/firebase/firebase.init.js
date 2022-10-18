// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKVgShG-ru6DWpWs0khYCrh3qxBtF8dss",
  authDomain: "my-mama-john-simple.firebaseapp.com",
  projectId: "my-mama-john-simple",
  storageBucket: "my-mama-john-simple.appspot.com",
  messagingSenderId: "514697612792",
  appId: "1:514697612792:web:3a02ac9ec8f9ad48925a0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;