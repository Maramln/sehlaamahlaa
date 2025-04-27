// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics,isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCQlLLZgxJuPm9croNECmsJ1VtivVElvYI",
  authDomain: "sehlaamahlaa.firebaseapp.com",
  projectId: "sehlaamahlaa",
  storageBucket: "sehlaamahlaa.firebasestorage.app",
  messagingSenderId: "964319869834",
  appId: "1:964319869834:web:b0e19def1f7a415bca6673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let analytics;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

