// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHDvr_I-Hwzv7Ifky-Mt6rt2e76n8OFsU",
  authDomain: "mobile-shop-abdbf.firebaseapp.com",
  projectId: "mobile-shop-abdbf",
  storageBucket: "mobile-shop-abdbf.appspot.com",
  messagingSenderId: "1045065495677",
  appId: "1:1045065495677:web:e038351d4972b63101ad14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth