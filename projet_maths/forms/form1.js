const form1 = document.getElementById("form1");
const usernameInput = document.getElementById("username");

form1.addEventListener("submit", function(event){
  event.preventDefault();

  var nickname = usernameInput.value;

  if(nickname.trim() !== "") {
    localStorage.setItem("username", nickname);
    location.reload();
  } 
});

document.getElementById("resetName").addEventListener("click", function(event) {
  event.preventDefault();

  localStorage.removeItem("username");
  location.reload();
});