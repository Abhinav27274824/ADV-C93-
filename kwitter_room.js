const firebaseConfig = {
      apiKey: "AIzaSyDfX27TNbDbZFHT0zlLf07CBmoMSGCILAw",
      authDomain: "kwitterdatabase-d8013.firebaseapp.com",
      databaseURL: "https://kwitterdatabase-d8013-default-rtdb.firebaseio.com",
      projectId: "kwitterdatabase-d8013",
      storageBucket: "kwitterdatabase-d8013.appspot.com",
      messagingSenderId: "465433379864",
      appId: "1:465433379864:web:717b7b514190ed7b72af6d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 
      //End code
      });});}
getData();
