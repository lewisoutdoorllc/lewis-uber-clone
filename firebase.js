// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// getAuth to make sure the user is authenticated
// GoogleAuthProvider will allow to make a popup to login with google
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAh98oXv3gbP2NbIJQNDNSzbiagizz1oFc",
    authDomain: "lewis-next-uber-clone.firebaseapp.com",
    projectId: "lewis-next-uber-clone",
    storageBucket: "lewis-next-uber-clone.appspot.com",
    messagingSenderId: "248693449017",
    appId: "1:248693449017:web:f6019c4fd36e4c9fbb48e8",
    measurementId: "G-TJS4JS8KE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { app, auth, provider };