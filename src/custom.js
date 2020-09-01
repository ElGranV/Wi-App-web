const red = "rgb(222,5,0)";
const shadow = "0px 3px 3px 4px rgba(0,0,0,0.1)";
const mobile = window.navigator.platform!=="Win32" && (Math.min(window.outerWidth,window.outerHeight))<=700;

function adjustSizeForMobile()
{
    let body = document.querySelector("body");
        body.style.backgroundSize = "auto 2000px";
        let logo = document.getElementById("logo");
        logo.style.height = "380px";
        logo.style.width = "500px";
        document.getElementById("all").style.marginTop = "150px";
        document.getElementById("wiapp").style.color = "white";
        document.getElementById("wiapp").style.marginBottom = "100px";
        let buttons = document.getElementsByClassName("button");
        for (let b of buttons)
        {
            b.style.width = "70%";
            b.style.height = "70px"
        }
        let inputs = document.querySelectorAll("input");
        for (let i of inputs)
        {
            i.style.width = "70%";
            i.style.height = "70px";
        }
}

function MyButton(titre, command = ()=>{}, couleur = red, bg = "white")
{
    let bouton = document.createElement("button");
    bouton.className = "button";
    bouton.style.color = couleur;
    bouton.style.backgroundColor = bg;
    bouton.textContent = titre;
    bouton.addEventListener("click", command);
    return bouton;
    
}

function MyInput(placeholder = "")
{
    let input = document.createElement("input");
    input.className = "inputs";
    input.placeholder = placeholder;
    
    return input;
}
function MyRect(largeur, hauteur, couleur = "white", ombre = false)
{
    if (typeof largeur !=="string") largeur = largeur + "px";
    if (typeof hauteur !=="string") hauteur = hauteur + "px";
    let rect = document.createElement("div");
    rect.style.backgroundColor = couleur;
    if (ombre) rect.style.boxShadow = shadow;
    rect.style.width = largeur;
    rect.style.height = hauteur;
    return rect;
}
function MyAnimatedRect(top, left, largeur, hauteur, couleur = "white", ombre = false)
{
    top = top + "px";
    left = left + "px";
    let rect = MyRect(largeur, hauteur, couleur, ombre);
    rect.style.position = "absolute";
    rect.style.top = top;
    rect.style.left = left;
    return rect;
    
}
function MyProjectView(projet)
{
    let area = MyRect(window.outerWidth/6, window.outerWidth/6, "white", true);
    let titleSpan = document.createElement("span");
    titleSpan.style.fontWeight = "bold";
    titleSpan.innerHTML = projet.nom+"<br>";
    area.append(titleSpan);
    area.innerHTML += "<hr width='100%'>";
    area.innerHTML += projet.description;
    area.className = "vue_projet";
    area.style.flexDirection = "column";
    return area;

}
//Metaclasse qui sert de gestionnaire de positionnement
class Position
{
static toMiddle(rect)
{
    let rWidth = rect.style.width.slice(0, -2);
    rWidth = parseInt(rWidth);
    rect.style.left = ((window.innerWidth-rWidth)/2) + "px";
}
static toCenter(rect)
{
    let rWidth = rect.style.width.slice(0, -2);
    rWidth = parseInt(rWidth);
    rect.style.left = ((window.innerWidth-rWidth)/2) + "px";

    let rHeight = rect.style.height.slice(0, -2);
    rHeight = parseInt(rHeight);
    rect.style.top = ((window.innerHeight-rHeight)/2) + "px";
}

static toTopRight(rect)
{
    rect.style.top = "15px";
    let rWidth = rect.style.width.slice(0, -2);
    rWidth = parseInt(rWidth);
    rect.style.left = ((window.innerWidth-rWidth-30)) + "px";
}

static toTopLeft(rect)
{
    rect.style.top = "15px";
    let rWidth = rect.style.width.slice(0, -2);
    rWidth = parseInt(rWidth);
    rect.style.left = "30px";
}
static toRight(rect)
{
    Position.toCenter(rect);
    let rWidth = rect.style.width.slice(0, -2);
    rWidth = parseInt(rWidth);
    rect.style.left = ((window.innerWidth-rWidth-30)) + "px";

}
}



let id = -1;
let i = 0;
function drawWib(ctx, x = 10, y = 10,begun = false)
{
    let steps = [60,80,100,129]
    if (!begun) 
    {
        ctx.beginPath();
        ctx.moveTo(10,10);
        ctx.strokeStyle = "black";
        ctx.lineCap = "round";
        ctx.lineWidth = 5;
    }
    
    function uniqueStep()
    {
        ctx.lineTo(x,y);
        ctx.stroke();
    }
    function step(xStep, yStep, time)
    {
        x+=xStep;
        y += yStep;
        uniqueStep();
        return setTimeout(()=>drawWib(ctx,x,y, true), time);

    }
    //Début du W
    if (x <= steps[0])
    {
        clearTimeout(id);    
        id = step(1,1,8)
    }
    if (x> steps[0] && x <= steps[1])
        {
            clearTimeout(id);
            id = step(1,-1.5,10);
        }
        if (x> steps[1] && x <= steps[2])
        {
            clearTimeout(id);
            id = step(1,1.5,10);

        }
        if (x> steps[2] && x <= steps[3])
        {
            ctx.lineCap = "square";
            clearTimeout(id);
            id = step(1,-1.1, 15);
            if (x===steps[3]+1)
            {
                x+=25;
                y+=10;
                ctx.moveTo(x,y);
            }
        }
        //Fin du W
        //Debut du I
        if (x > steps[3] && y <= 65)
        {            
            clearTimeout(id);
            id = step(0,1,10);
        }
        if (x>steps[3] && y >=64)
        {
            
            ctx.lineWidth = 10;
            ctx.stroke();
            clearTimeout(id);
            y=25;
            ctx.beginPath();
            ctx.moveTo(x,y)
            ctx.lineWidth= 1;
            ctx.arc(x, y, 6, 0, 2*Math.PI);
            ctx.fill();
            //Fin du I (avec point)

            ctx.canvas.style.transitionDuration = "2s";
            ctx.beginPath();
            ctx.strokeStyle = "rgba(0,0,0,0)";
            let alpha = 0;
            ctx.lineWidth = 10;
            x+= 30;
            y = 12;
            ctx.moveTo(x,y);
            y+=60;
            ctx.bezierCurveTo(180,10,200,30,180,65);
            ctx.lineWidth = 5;
            ctx.moveTo(170,15);
            ctx.bezierCurveTo(170,15, 280, 20, 185, 40);
            ctx.moveTo(185, 40);
            ctx.bezierCurveTo(185, 40, 280,40,180,65);

            id = setInterval(()=>{
                if (alpha<0.8)
                {alpha+=0.009;
                ctx.strokeStyle = "rgb(0,0,0,"+alpha+")";
                ctx.stroke();
            }
                else {
                    clearInterval(id);
                    ctx.canvas.style.height = "200px";
                    ctx.canvas.style.width = "200px";

                }
            }, 30);


        }
        

    
}
