import firebase from 'firebase'
import firestore from 'firebase/firestore'
 
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDG016W0G187qcOquXCQCHZGAYgZOxqzZg",
    authDomain: "vue-live-chat-264c6.firebaseapp.com",
    databaseURL: "https://vue-live-chat-264c6.firebaseio.com",
    projectId: "vue-live-chat-264c6",
    storageBucket: "vue-live-chat-264c6.appspot.com",
    messagingSenderId: "960237299917"
  };
  

const firebaseApp = firebase.initializeApp(config);
export default firebaseApp.firestore()
