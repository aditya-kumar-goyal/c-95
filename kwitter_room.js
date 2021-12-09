
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA8HrQkFP71Nb8IvuEjNum02WVbCnzZdWM",
    authDomain: "lets-chat-web-app-2-69d64.firebaseapp.com",
    projectId: "lets-chat-web-app-2-69d64",
    storageBucket: "lets-chat-web-app-2-69d64.appspot.com",
    messagingSenderId: "872003262750",
    appId: "1:872003262750:web:5e50ef45481e59e90fd10f"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("username").innerHTML = "Welcome "+ user_name +"!";
  
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name",room_name);
    window.location("kwitter_page.html");
  
  }
  function getData() {firebase.database().ref("/").on('value',function(snapshot) {
    document.getElementById("output").innerHTML ="";
    snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
  //Start code
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    console.log("Room Name" + Room_names);
  //End code
  });});}
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_room.html";
  }
  
  function logout()
  {
      window.location = ("logout.html");
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
  }