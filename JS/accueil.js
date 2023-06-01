
function getLastTitle(){
    ajaxRequest('GET', '../PHP/requestAjax.php?type=lastTitle', displayLastTitle);
}


function displayLastTitle(json){

    let body = document.getElementById("body");
    body.insertAdjacentHTML("afterbegin", "<h2>Récemment écouté</h2>")

    let lastTitle = document.getElementById("lastTitles");
    let lastTitle2 = document.getElementById("lastTitles2");

    let size = json.length;

    for(let i = 0; i < size; i++){

        let id = json[i][0]['id'];
        let titre = json[i][0]['titre'];
        let artiste = json[i][0]['artiste'];
        let album = json[i][0]['album'];
        let image = json[i][0]['image'];
        if(!image){
            image = "null.jpeg";
        }

        if(i <= size/2){
            lastTitle.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id="+id+" class='btn card-title' ><h5>"+titre+"</h5></button><br>"+
            "<button type='submit' id="+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+artiste+"</button>"
             "</div></div>";
        } else{
            lastTitle2.innerHTML += "<div class='card' style='width: 10rem; margin-right: 2%;'>"+
            "<img class='card-img-top' src=../Images/"+image+">"+
            "<div class='card-body'>"+
            "<button type='submit' id="+id+" class='btn card-title' ><h5>"+titre+"</h5></button><br>"+
            "<button type='submit' id="+id+" class='btn btn-link' style='color: black; margin-right: 6px;'>"+artiste+"</button>"
             "</div></div>"; 
        }

    }



}

getLastTitle();