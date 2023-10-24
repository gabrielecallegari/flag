// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHQrdzi9XI48SYL90KpHcdJZQBpLMZZGM",
  authDomain: "guesstheflag-b9575.firebaseapp.com",
  projectId: "guesstheflag-b9575",
  storageBucket: "guesstheflag-b9575.appspot.com",
  messagingSenderId: "842269099073",
  appId: "1:842269099073:web:9b37705607285c4355b2c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export function login(email, password, callback){
    
    signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
            callback(true, "autenticazione avvenuta")
        }
    ).catch(
        (error) => {
            callback(false, error.message)
        }
    )
}