projets = [{nom:"Air bash", description: "Projet de robotique, électronique et informatique de montage et programmation de drone entièrement fait par les memebres.", image:"https://cdn.futura-sciences.com/buildsv6/images/mediumoriginal/1/6/e/16ec9e966c_68361_album-drone.jpg"
}, {nom: "App", description: "Projet d'application permettant de gérer le fonctionnement interne de l'association."}]

let div_p = document.getElementById("projets");
window.onload  = ()=>
{
    adjustHomePageForMobile();
    for (let p of projets)
{
    div_p.append(MyProjectView(p));
}
}