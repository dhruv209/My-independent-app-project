
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCNTaAw3vRZlBE2YeI4OYrW5zPz5OPfq5k",
      authDomain: "kwitter-6b6f2.firebaseapp.com",
      databaseURL: "https://kwitter-6b6f2-default-rtdb.firebaseio.com",
      projectId: "kwitter-6b6f2",
      storageBucket: "kwitter-6b6f2.appspot.com",
      messagingSenderId: "998678128585",
      appId: "1:998678128585:web:990964c982d59b07a9ea18"
    };
    
    // Initialize Firebase

    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+" !";
    
    function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(" roomname="+Room_names);
row="<div id="+Room_names+"onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
