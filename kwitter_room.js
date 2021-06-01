
//ADD YOUR FIREBASE LINKS HERE
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
    document.getElementById("user_name").innerHTML="welcome "+user_name+ "!";

    function addroom()
    {
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name" });
     localStorage.setItem("room_name",room_name);
     window.location="kwitter_page.html";

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    //End code

    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}