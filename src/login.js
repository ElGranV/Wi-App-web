let button_connect = document.getElementById("connect");
let input_id = document.getElementsByClassName("inputs")[0];
let input_password  = document.getElementsByClassName("inputs")[1];
button_connect.addEventListener("click", ()=>{
  let id = input_id.nodeValue;
  let pass  =input_password.value;
  console.log(pass);
  //login(id, pass, ()=>{indow.location = "home.html"})
  window.location  = "home.html"
})

window.onload = adjustSizeForMobile;