function getBibliotheque(){
    let body = document.getElementById("body");
    body.innerHTML = "<br><div class='row'><h2 class='col-md-3'> Bibliothèque</h2> <p class='col-md-3 offset-md-3'></p><button id='addPlaylist' class='btn col-md-1 offset-md-1' type='submit' data-bs-toggle='modal' data-bs-target='#exampleModal' style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'><h2><i class='bi bi-plus-lg'></i></h2></button> </div><br>";

    ajaxRequest("GET", '../PHP/requestAjax.php?type=bibliotheque', displayBibliotheque);
}

function getPlaylistFavoris(json){
    let body = document.getElementById("body");
    body.innerHTML = "<br>";
    body.innerHTML += "<div class='row'>"+
            "<div class='col col-md-3'>"+
                "<img src='../Images/playlist.jpeg' class='img-thumbnail' alt='...' style='width: 250px;'>"+
            "</div>"+
            "<div class='col' id='col2'>"+
                "<h2>Favoris</h2>"+
            "</div>"+
        "</div><br><br><div class='row'>"+
            "<table class='table table-hover'>"+
                "<thead>"+
                    "<tr>"+
                        "<th scope='col'>#</th>"+
                        "<th scope='col' class='w-50'>Titre</th>"+
                        "<th scope='col' class='w-15'>Date d'ajout</th>"+
                        "<th scope='col' class='w-15'>Durée</th>"+
                        "<th scope='col' class='w-10'>Options</th>"+
                        "<th scope='col' >Détails</th>"+
                    "</tr>"+
                "</thead>"+
                "<tbody id='table'>"+
                "</tbody>"+
            "</table>"+
        "</div>";

    affichageTitres(json, "favoris", 1);
}

function displayBibliotheque(json){

    let body = document.getElementById("body");
    body.innerHTML += "<div class='row' id='row'><div class='card' style='width: 10rem; margin-left: 2%; margin-top: 2%; '>"+
    "<img class='card-img-top' src='../Images/playlist.jpeg'>"+
    "<div class='card-body'>"+
    "<button type='submit' id='favoris' class='btn card-title'><h5>Favoris</h5></button><br>"+
    "</div></div></div>";


    for(let i = 0; i<json[0].length; i++){

        let idPlaylist = json[0][i]['idplaylist'];
        let nom = json[0][i]['nom'];

        let row = document.getElementById('row');
        row.innerHTML += "<div class='card' style='width: 10rem; margin-left: 2%; margin-top: 2%;'>"+
        "<img class='card-img-top' src=../Images/playlist.jpeg >"+
        "<div class='card-body'>"+
        "<button type='submit' id=playlist"+i+" class='btn card-title' value="+idPlaylist+" ><h5>"+nom+"</h5></button><br>"+
        "</div></div>";

    }

    body.innerHTML += "<div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
    "<div class='modal-dialog'>"+
        "<div class='modal-content'>"+
        "<div class='modal-header'>"+
            "<h1 class='modal-title fs-5' id='exampleModalLabel'>Ajouter une nouvelle playlist</h1>"+
            "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>"+
       " </div>"+
        "<div class='modal-body'>"+
            "<form>"+
                "<label for='nomPlaylist' class='col-form-label'>Entrez le nom de la playlist :</label>"+
                "<input type='text' class='form-control' id='nomPlaylist'>"+
            "</form>"+
        "</div>"+
        "<div class='modal-footer'>"+
            "<button type='submit' class='btn btn-primary' id='enregistrer'>Enregistrer</button>"+
            "<button type='button' class='btn btn-secondary' data-bs-dismiss='modal' id='fermer'>Fermer</button>"+
       " </div>"+
        "</div>"+
    "</div>"+
   " </div>";

    let nomPlaylist = document.querySelector('#nomPlaylist');

    const enregistrer = document.getElementById('enregistrer');
    enregistrer.addEventListener("click", function(){ajaxRequest("POST", "../PHP/requestAjax.php", function(){console.log("")}, "type=bibliotheque&nom="+nomPlaylist.value)});

    const fermer = document.getElementById('fermer');
    fermer.addEventListener("click", getBibliotheque);

    for(let i = 0; i<json[0].length; i++){
        const btn = document.querySelector("#playlist"+i);
        let id = document.getElementById("playlist"+i).value;
        btn.addEventListener("click", function(){getInfoPlaylist(id);});
    }

    const favoris = document.querySelector('#favoris');
    favoris.addEventListener("click", function(){getPlaylistFavoris(json)});

}

const bibliotheque = document.querySelector('#bibliotheque');
bibliotheque.addEventListener("click", getBibliotheque);