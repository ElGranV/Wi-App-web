const token = "PPlaFk63u4E6";
async function login (id, pass)
{
  let data = new FormData();
  data.append("identifiant", id);
  data.append("pass", pass);
  data.append("token", token);
  /*fetch('http://www.wi-bash.fr/application/login.php', {
  method: 'POST',
  headers: {
    Accept: 'multipart/form-data',
    'Content-Type': "multipart/form-data"
  },
  body: data,
}).then((reponse)=>reponse.text()).then((text)=>console.log(text)).then(
    ()=>{user={id:"Aristote", pseudo:"C18"}; window.location = "./home.html";}).catch(
    (error)=>{console.log(error)});*/
    window.location = "home.js";
};
async function test (id, pass)
{
  let data = new FormData();
  data.append("cou", "chiote");
  fetch('http://www.wi-bash.fr/application/debug.php', {
  method: 'POST',
  headers: {
    Accept: 'multipart/form-data',
    'Content-Type': "multipart/form-data"
  },
  body: data,
}).then((reponse)=>reponse.text()).then((text)=>console.log(text)).catch(
    (error)=>{console.log(error)});
};


/*
export async function changeMyInfo(id, pass, action, new_value)
{
  let data = new FormData();
  data.append("identifiant", id);
  data.append("pass", pass);
  data.append("token", token);
  data.append("action", action);
  data.append("champ", new_value);
  fetch('http://www.wi-bash.fr/application/monCompte.php', {
  method: 'POST',
  headers: {
    Accept: 'multipart/form-data',
    'Content-Type': "multipart/form-data"
  },
  body: data
}).then((reponse)=>reponse.text()).then((text)=>console.log(text)).catch((error)=>{console.log(error)});
};*/