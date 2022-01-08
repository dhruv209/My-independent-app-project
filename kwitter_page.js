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
  room_name=localStorage.getItem("room_name");
  function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
      });
      document.getElementById("msg").value="";
  }
  function getdata(){
    firebase.database().ref("/"+room_name).on('value', function(snapshot) 
    { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
    { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") 
    { firebase_message_id = childKey; message_data = childData;
    name=message_data['name'];
    message=message_data['message'];
    like=message_data['like'];
    name1="<h4>"+name+"<img src='tick.png' width='20px'</h4>";
    message1="<h4 class='message_h4'>"+message+"</h4>";
    like1="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button>";
    row=name1+message1+like1;
    document.getElementById("output").innerHTML+=row;} }); }); }
    getdata();

    function updatelike(msg){
        console.log("click on the like button-"+msg);
        like2=msg;
        likes=document.getElementById(like2).value;
        updatedlike=Number(likes)+1;
        console.log(updatedlike);

        firebase.database().ref(room_name).child(msg).update({
            like:updatedlike
            
        });
        
        
    }

  
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
  }