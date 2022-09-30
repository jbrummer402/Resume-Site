// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  GoogleAuthProvider,
  EmailAuthProvider,
} from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL1SenKW9r6Ml6rM6k09DxHUIkPWEdg5E",
  authDomain: "resumesite-99074.firebaseapp.com",
  projectId: "resumesite-99074",
  storageBucket: "resumesite-99074.appspot.com",
  messagingSenderId: "387126661182",
  appId: "1:387126661182:web:a6af9280a98d537fc9816f",
  measurementId: "G-V216FEQMYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// authorization setup
const auth = getAuth(app)



export default app
export {auth}
