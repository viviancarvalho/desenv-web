import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGrwY_VuYMa14zwK9AzQGuaLohtMMBXXo",
  authDomain: "projeto-automatize.firebaseapp.com",
  projectId: "projeto-automatize",
  storageBucket: "projeto-automatize.firebasestorage.app",
  messagingSenderId: "19257465669",
  appId: "1:19257465669:web:3d8039ae209b1b89c0bc2c",
  measurementId: "G-S3ZZTF2TYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth, app}