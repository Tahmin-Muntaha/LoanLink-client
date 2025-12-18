
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBSCl5UnjxBPwiGveDtCQm2K8Araan4AzE",
  authDomain: "loan-link-7e150.firebaseapp.com",
  projectId: "loan-link-7e150",
  storageBucket: "loan-link-7e150.firebasestorage.app",
  messagingSenderId: "948049356944",
  appId: "1:948049356944:web:3aaaf36449fd8035c49015"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);