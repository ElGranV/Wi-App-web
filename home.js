//variables globales
var user = {}, projets = {}, membres = {};

//fonctions
function animateNav(callback=null)
{
    let rect = MyAnimatedRect(100, 0, 500, 5, "white", true);
    document.querySelector("body").append(rect);
    toCenter(rect);
    let id = setInterval(frame, 7);
    let pos = 0;
    function frame()
    {
        if (parseInt(rect.style.top)+100 >= (window.innerHeight - parseInt(rect.style.height)))
        {
            clearInterval(id);
            document.querySelector("body").removeChild(rect);
            if (callback)callback();
        }else{
            pos+=5;
            rect.style.top = pos + "px";
        }
    }
}

//MyButton et MyInput sont des fonctions définies dans custom.js
let div = document.querySelector('div');
let connect_button = document.getElementById("connect");
let register_button = document.getElementById("register");
let inputs = {};
inputs.id = MyInput("identifiant*");
inputs.password = MyInput("Mot de passe*");
inputs.confirm = MyInput("Confirmer le mot de passe*");
inputs.nom = MyInput("nom*");
inputs.prenom = MyInput("Prenom");
inputs.mail = MyInput("mail");
inputs.password.type = "password";


let button_sumbitRegister = MyButton("S'inscrire");
let button_sumbitConnexion = MyButton("Connexion");
let logo = '<img src="images/logo.png" id = "logo"/>';
logo += '<span id = "wiapp">WI-BASH.App</span>';
const backToHome = MyAnimatedRect(0, 0,50, 50, "white", true);
toTopRight(backToHome);
backToHome.style.justifyContent = "center";
let homeLogo = document.createElement("img");
homeLogo.src = "images/home.png";
homeLogo.style.width = "50px";

backToHome.append(homeLogo);





//Pour afficher les textinputs de connexion
connect_button.addEventListener("click", ()=>{
    inputs.password.style.marginBottom = "5px";
    div.innerHTML = logo;
    
    animateNav(()=>{

    div.append(inputs.id);
    div.append(inputs.password);
    div.append(button_sumbitConnexion);
    document.querySelector("body").append(backToHome)
}
    );
    //div.innerHTML += "<span class = 'advice'> Votre mot de passe doit contenir des majuscules, des minuscules <br/> et des chiffres...</span>";
})

//champs de création de compte
register_button.addEventListener("click", ()=>{
    inputs.password.style.marginBottom = "30px";
    div.innerHTML = logo;
    animateNav(()=>{
    for (const input in inputs)
    {
        div.append(inputs[input]);
    }
    div.append(button_sumbitRegister);});
});

register_button.addEventListener("hover", ()=>{console.log("hover")});


//connexion
//login est défini dans api.js
button_sumbitConnexion.addEventListener("click", ()=>{
    let identif = inputs.id.value;
    let pass = inputs.password.value;
    login(identif, pass);
    
})