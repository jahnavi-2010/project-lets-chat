//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDpJ6tFntF7B5CXva-z-TU17DIXQWYGxis",
      authDomain: "lets-chat-web-app-12e7d.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-12e7d-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-12e7d",
      storageBucket: "lets-chat-web-app-12e7d.appspot.com",
      messagingSenderId: "376683053282",
      appId: "1:376683053282:web:7a5fedc28050d74eca9ebb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}