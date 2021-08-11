
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyDWpy05S83plo5uKgjqgW3CdZOkEQCEb3U",
      authDomain: "whatsup-9f853.firebaseapp.com",
      databaseURL: "https://whatsup-9f853-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "whatsup-9f853",
      storageBucket: "whatsup-9f853.appspot.com",
      messagingSenderId: "482693025505",
      appId: "1:482693025505:web:e924a4c27db1678edab1a0",
      measurementId: "G-KEW4XXR1S9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
