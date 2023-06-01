import "./php/musique.php";

function getLastTitle(){
    ajaxRequest('GET', './PHP/accueil.php?type=lastTitle', displayLastTitle);
}


function displayLastTitle(json){
    let body = document.getElementById("").innerHTML = "<h3> Derniers titres écoutés :</h3>" ;
    for (let info of json){
        let id = info['id'];
        let title = info['titre'];
        body.innerHTML += "<p></p>";
    }
}