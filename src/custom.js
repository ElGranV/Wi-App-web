const red = "rgb(222,5,0)";
const shadow = "0px 3px 3px 4px rgba(0,0,0,0.1)";
function MyButton(titre, command = ()=>{}, couleur = red, bg = "white")
{
    let bouton = document.createElement("button");
    bouton.className = "button";
    bouton.style.color = couleur;
    bouton.style.backgroundColor = bg;
    bouton.textContent = titre;
    bouton.addEventListener("click", command);
    return bouton;s
    
}

function MyInput(placeholder = "")
{
    let input = document.createElement("input");
    input.className = "inputs";
    input.placeholder = placeholder;
    
    return input;
}

function MyAnimatedRect(top, left, largeur, hauteur, couleur = "white", ombre = false)
{
    top = top + "px";
    left = left + "px";
    if (typeof largeur !=="string") largeur = largeur + "px";
    if (typeof hauteur !=="string") hauteur = hauteur + "px";
    let rect = document.createElement("div");
    rect.style.position = "absolute";
    rect.style.backgroundColor = couleur;
    if (ombre) rect.style.boxShadow = shadow;
    rect.style.top = top;
    rect.style.left = left;
    rect.style.width = largeur;
    rect.style.height = hauteur;
    return rect;

}

function toCenter(rect)
{
    rWidth = rect.style.width.slice(0, -2);
    rWidth = parseInt(rWidth);
    rect.style.left = ((window.innerWidth-rWidth)/2) + "px";
}

function toTopRight(rect)
{
    rect.style.top = "15px";
    rWidth = rect.style.width.slice(0, -2);
    rWidth = parseInt(rWidth);
    rect.style.left = ((window.innerWidth-rWidth-30)) + "px";
}

function toTopLeft(rect)
{
    rect.style.top = "15px";
    rWidth = rect.style.width.slice(0, -2);
    rWidth = parseInt(rWidth);
    rect.style.left = "30px";
}
var a = 2;