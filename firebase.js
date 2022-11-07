const firebaseApp = firebase.initializeApp({ 
  apiKey: "AIzaSyATxMfbgoOSx4unJ6YTzj8Vl7KONXvKpDs",
  authDomain: "vote-cdbd6.firebaseapp.com",
  projectId: "vote-cdbd6",
  storageBucket: "vote-cdbd6.appspot.com",
  messagingSenderId: "339055285733",
  appId: "1:339055285733:web:919eba90b76f2136810b0c"

});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// firebaseApp.initializeApp()

auth. onAuthStateChanged( (user) => {
  if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/firebase.User
  const uid = user.uid;

  // ...
} else {
  if (   !( document.URL.includes("index.html") || document.URL.includes("signIn.html") ) ) {

      location.assign('index.html')

      }
//             if 
//                 (document.URL.indexOf("signIn") > -1) {
// console.log('signin page')
//                 }
          
  }
  });


  
