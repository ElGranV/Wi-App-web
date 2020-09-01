projets = [{nom:"Air bash", description: "Projet qui ne sert à rien puisque le drone ne vole pas et ne volera jamais"
}, {nom: "App", description: "On a essayé de la faire en React-Native mais on manque de devs. Alors go pwa."}]

let div_p = document.getElementById("projets");
for (let p of projets)
{
    div_p.append(MyProjectView(p));
}