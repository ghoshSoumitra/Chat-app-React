import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBgwM5BCgo7PP5_8cFw28MUpQKhiXpxTm4",
    authDomain: "mychatreact-953b4.firebaseapp.com",
    projectId: "mychatreact-953b4",
    storageBucket: "mychatreact-953b4.appspot.com",
    messagingSenderId: "161984729978",
    appId: "1:161984729978:web:82f345291b9ce228943cc3"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()