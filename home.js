//MyButton et MyInput sont des fonctions définies dans custom.js
let div = document.querySelector('div');
let connect_button = document.getElementById("connect");
let register_button = document.getElementById("register");

let input_id = MyInput("identifiant*");
let input_password = MyInput("Mot de passe*");
let input_confirm = MyInput("Confirmer le mot de passe*");
let input_nom = MyInput("nom*");
let input_prenom = MyInput("Prenom");
let input_mail = MyInput("mail");
input_password.type = "password";

let button_sumbitRegister = MyButton("S'inscrire");
let logo = '<img src="images/logo.png" id = "logo"/>';
logo += '<span id = "wiapp">WI-BASH.App</span>';



//Pour afficher les textinputs de connexion
connect_button.addEventListener("click", ()=>{
    div.innerHTML = logo;
    div.append(input_id);
    div.append(input_password);
})

//champs de création de compte
