
function getLastTitle(){
    ajaxRequest('GET', '../PHP/requestAjax.php?type=lastTitle', displayLastTitle);
}


function displayLastTitle(json){
    let body = document.getElementById("body").innerHTML = "<h3> Derniers titres écoutés :</h3>" ;
    
    console.log(json)
    let size = json.length;
    for(let i =0 ;i <size ; i++){
        let id = info['id'];
        let title = info['titre'];
        body.innerHTML += "<p></p>";
    }
    // for (let info of json){
    //     let id = info['id'];
    //     let title = info['titre'];
    //     body.innerHTML += "<p></p>";
    // }
}

getLastTitle();