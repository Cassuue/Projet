function getElemConnexion(){
    let mail = document.getElementById('email').value;
    console.log(mail);
    let mdp = document.getElementById('password').value;
    ajaxRequest('GET', './PHP/connexion.php?mail=' + mail + '&mdp=' + mdp, displayFormInscription);
}

function displayFormInscription(){
    let body = document.getElementById('connexion');
    body.innerHTML = "<p> OK</p>";
}

const el = document.querySelector('#BtnInscription');
el.addEventListener("submit", getElemConnexion);

