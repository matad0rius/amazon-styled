import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtwCKy64aTq-y6mKuHnAyFLoqkmRf-ZG8",
    authDomain: "fir-b2571.firebaseapp.com",
    projectId: "fir-b2571",
    storageBucket: "fir-b2571.appspot.com",
    messagingSenderId: "832136970258",
    appId: "1:832136970258:web:9b49aa9be0058476d298cb",
    measurementId: "G-DL9JEE08SF"
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }