import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAygLGXt1loX3Yr1mMBsKqNjqjyckCBxuQ",
    authDomain: "react-myburger-3e53f.firebaseapp.com",
    databaseURL: "https://react-myburger-3e53f-default-rtdb.firebaseio.com",
    projectId: "react-myburger-3e53f",
    storageBucket: "react-myburger-3e53f.appspot.com",
    messagingSenderId: "515433018743",
    appId: "1:515433018743:web:aa999a532ebcd90e3c1d72",
    measurementId: "G-H3TXWVS3D9"
})

export const auth = app.auth();
export default app;