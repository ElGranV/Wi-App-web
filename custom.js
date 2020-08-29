var red = "rgb(222,5,0)";
function MyButton(titre, couleur = red, bg = "white")
{
    let bouton = document.createElement("button");
    bouton.className = "button";
    bouton.style.color = couleur;
    bouton.style.backgroundColor = bg;
    bouton.textContent = titre;
    return bouton;
    //
    
}

function MyInput(placeholder = "")
{
    let input = document.createElement("input");
    input.className = "inputs";
    input.placeholder = placeholder;
    input.addEventListener("focus", (event)=>{event.preventDefault()});
    return input;
}