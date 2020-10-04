import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyCe2YehhDv3IxuAgXxRLKemrcA5sgi-CTQ",
    authDomain: "websiteresume-8c1f4.firebaseapp.com",
    databaseURL: "https://websiteresume-8c1f4.firebaseio.com",
    projectId: "websiteresume-8c1f4",
    storageBucket: "websiteresume-8c1f4.appspot.com",
    messagingSenderId: "204968631242",
    appId: "1:204968631242:web:efda085f330bd970960d33",
    measurementId: "G-H5E2XQF8ZF"
  
})
var db = firebaseApp.firestore();

export {db};