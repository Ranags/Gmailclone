import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBZ8fUfEe-y_KGYrCfDqpRfSGxJ7BUbiBE",
    authDomain: "clone-yt-e5d56.firebaseapp.com",
    projectId: "clone-yt-e5d56",
    storageBucket: "clone-yt-e5d56.appspot.com",
    messagingSenderId: "580797675037",
    appId: "1:580797675037:web:dad21154192dd110d0f8f4",
    measurementId: "G-H6VCT6Y55V"
  };


// const firebaseApp = firebase.initializeApp( firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// export {db , auth , privider, };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider}