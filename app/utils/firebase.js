import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwjw2QvBy9PO7hQYYPrYd7L08cFKa-FFs",
  authDomain: "listo-8656b.firebaseapp.com",
  projectId: "listo-8656b",
  storageBucket: "listo-8656b.firebasestorage.app",
  messagingSenderId: "557700412466",
  appId: "1:557700412466:web:ef379e0e0af18dd0d9b82b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);