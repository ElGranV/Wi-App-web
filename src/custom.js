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
//Metaclasse qui sert de gestionnaire de positionnement
class Position
{
static toMiddle(rect)
{
    rWidth = rect.style.width.slice(0, -2);
    rWidth = parseInt(rWidth);
    rect.style.left = ((window.innerWidth-rWidth)/2) + "px";
}
static toCenter(rect)
{
    rWidth = rect.style.width.slice(0, -2);
    rWidth = parseInt(rWidth);
    rect.style.left = ((window.innerWidth-rWidth)/2) + "px";

    rHeight = rect.style.height.slice(0, -2);
    rHeight = parseInt(rHeight);
    rect.style.top = ((window.innerHeight-rHeight)/2) + "px";
}

static toTopRight(rect)
{
    rect.style.top = "15px";
    rWidth = rect.style.width.slice(0, -2);
    rWidth = parseInt(rWidth);
    rect.style.left = ((window.innerWidth-rWidth-30)) + "px";
}

static toTopLeft(rect)
{
    rect.style.top = "15px";
    rWidth = rect.style.width.slice(0, -2);
    rWidth = parseInt(rWidth);
    rect.style.left = "30px";
}
static toRight(rect)
{
    Position.toCenter(rect);
    rWidth = rect.style.width.slice(0, -2);
    rWidth = parseInt(rWidth);
    rect.style.left = ((window.innerWidth-rWidth-30)) + "px";

}
}





function drawWib(ctx, x = 10, y = 10, x0 = 10, y0=10)
{
    
    
    if (x!=100)
    {
            x++;
            y+=2;
            ctx.beginPath();
            ctx.moveTo(x0,y0);
            ctx.lineCap = "round";
            ctx.lineWidth = 5;
            ctx.lineTo(x,y);
            ctx.strokeStyle = "black";
            ctx.closePath();
            ctx.stroke();
            x0=x;
                        y0=y;
            setTimeout(()=>drawWib(ctx,x,y,x0,y0), 10);
    
    }
        
}
