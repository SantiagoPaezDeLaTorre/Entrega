import {getFirestore} from 'firebase/firestore';
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDTG9AqahbS_y7TX3TE1-9fTgXSFP0hyHI",
    authDomain: "garritas-866f5.firebaseapp.com",
    projectId: "garritas-866f5",
    storageBucket: "garritas-866f5.appspot.com",
    messagingSenderId: "892004641570",
    appId: "1:892004641570:web:a9a786bd63260983ba937b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);