// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCziA3uyeBi6kG4-PmrANm6ORxTo-AUAr4",
  authDomain: "adroit-1c7ea.firebaseapp.com",
  projectId: "adroit-1c7ea",
  storageBucket: "adroit-1c7ea.appspot.com",  // ✅ Fixed
  messagingSenderId: "461034211657",
  appId: "1:461034211657:web:b2ea50bb72f7efb9c03298",
  measurementId: "G-WPVCZZD1QB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app;
