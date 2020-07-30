 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAIgIzHUQOHQW45pgA9IFoAYv-nxKO7p4o",
    authDomain: "claseiushjueves-2176c.firebaseapp.com",
    databaseURL: "https://claseiushjueves-2176c.firebaseio.com",
    projectId: "claseiushjueves-2176c",
    storageBucket: "claseiushjueves-2176c.appspot.com",
    messagingSenderId: "17518102716",
    appId: "1:17518102716:web:98265db3ae962f6839e8b9",
    measurementId: "G-QW38YWD3MM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var ref = firebase.database().ref('/');

  ref.on("value", function(snapshot){
  	var data = snapshot.val();
  	document.getElementById("temperatura").innerHTML = data.Temperatura;
  	document.getElementById("humedad").innerHTML = data.Humedad;
  	document.getElementById("luz").innerHTML = data.Luz;
  	document.getElementById("distancia").innerHTML = data.Distancia;
  	document.getElementById("led").innerHTML = data.LEDStatus;
  });
  
  function encender() {
  	firebase.database().ref('/').child('LEDStatus').set("1");
	}

   function apagar() {
  	firebase.database().ref('/').child('LEDStatus').set("0");
   }
	