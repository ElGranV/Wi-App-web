let body = document.querySelector("body");


//variables globales
var user = {}, projets = {}, membres = {};
//
 let connect_button = document.getElementById("connect");
let register_button = document.getElementById("register");

connect_button.addEventListener("click", ()=>{
    window.location = "login.html";
});

register_button.addEventListener("click", ()=>{
        window.location = "register.html"}
    );

    function wibAnimation(){
    let can = document.createElement("canvas");
    //can.style.position = "absolute";
    can.style.width = '300px';
    can.style.height = "300px";
    can.style.position = "absolute";
    Position.toTopLeft(can);
    document.querySelector("body").append(can);
    let ctx = can.getContext('2d');
    drawWib(ctx);
    }

function init()
{
    if (mobile)
    {
        adjustSizeForMobile();
    }
    wibAnimation();
}
window.onload = init;
