let div = document.querySelector('div');
let connect_html = "<img src = 'logo.png' id = 'logo'> "
connect_html += '<input type="text" id = "input_identif" class = "inputs"> <input type="password" id = "input_mdp" class = "inputs">';
let connect_button = document.getElementById("connect");
connect_button.addEventListener("click", ()=>{
    div.innerHTML = connect_html;
})
