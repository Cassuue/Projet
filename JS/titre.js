
// Envoie de la requête permettant de récupérer toutes les informations concernant le titre
function getTitle(id){
    let body = document.getElementById("body");
    body.innerHTML = "<br>";

    ajaxRequest('GET', '../PHP/requestAjax.php?id=' + id +'&type=title', displayTitle);
}

// Affichage de la page titre
function displayTitle(json) {
    
    let id = json[0]['idtitre'];
    let titre = json[0]['nom'];
    let duree = json[0]['duree'];
    let artiste = json[0]['artiste'];
    let lien = json[0]['lien'];
    let album = json[0]['album'];
    let image = json[0]['image'];

    if (!image){
        image = "playlist.jpeg";
    }

    if (!album){
        album = "";
    }

    let body = document.getElementById("body");
    body.innerHTML += "<div class='row'>"+
            "<div class='col col-md-3'>"+
                "<img src=../Images/"+image+" class='img-thumbnail ' alt='...' style='width: 250px;'>"+
            "</div>"+
            "<div class='col' id='col2'>"+
                "<h2>"+titre+"</h2><button type='submit' class='btn' id='btnArtiste' style='color: black; --bs-btn-padding-x: 5px'> <i class='bi bi-person-fill' style='padding-right: 10px;'></i>"+artiste+" </button><button type='submit' class='btn' id='btnAlbum' style='color: black; --bs-btn-padding-x: 5px'> <i class='bi bi-collection-play-fill' style='padding-right: 10px;'></i>"+album+"</button>"+
            "</div>"+
        "</div>";

    // Ajout d'un album si il existe
    if (!album){
        let btnAlbum = document.getElementById("btnAlbum").disabled = true;
    }

    body.innerHTML += "<br><br>";

    body.innerHTML += "<div class='row'>"+
            "<table class='table table-hover'>"+
                "<tbody>"+
                    "<tr>"+
                        "<th scope='col' class='w-75'><h5>"+titre+"</h5></th>"+
                        "<th scope='col' class='w-10'>"+duree+"</th>"+
                        "<th scope='col' class='w-15'>"+
                            "<button class='btn' type='submit' id='favorite' style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>"+
                            "</button>"+
                            "<button class='btn' type='submit' id='add' style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;' data-bs-toggle='modal' data-bs-target='#exampleModal'>"+
                                "<h5 style='margin-bottom: 2px;'><i class='bi bi-plus-lg'></i></h5>" +
                            "</button>"+
                            "<button class='btn' type='submit' id='play' style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>"+
                                "<h5 style='margin-bottom: 2px;'><i class='bi bi-play-fill'></i></h5>"+
                            "</button>"+
                        "</th>"+
                    "</tr>"+
                "</tbody>"+
            "</table>"+
        "</div>";

    body.innerHTML += "<div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
        "<div class='modal-dialog'>"+
            "<div class='modal-content'>"+
            "<div class='modal-header'>"+
                "<h1 class='modal-title fs-5' id='exampleModalLabel'>Ajouter à une playlist</h1>"+
        " </div>"+
            "<div class='modal-body'>"+
                "<form id='formulaire'>"+
                "</form>"+
            "</div>"+
            "<div class='modal-footer'>"+
                "<button type='submit' class='btn btn-primary' id='enregistrer' >Enregistrer</button>"+
                "<button type='button' class='btn btn-secondary' data-bs-dismiss='modal' id='fermer'>Fermer</button>"+
        " </div>"+
            "</div>"+
        "</div>"+
    " </div>";

    // Test si le titre est favori ou non 
    let fav = false;
    for (let i=0; i<json[1].length; i++){
        if(id == json[1][i]['idtitre']){
            fav = true;
        }
    }

    // Création de l'évent pour l'ajout à la liste des favoris
    let btnFavorite = document.getElementById("favorite");

    if(fav){
        btnFavorite.innerHTML += "<h5 style='margin-bottom: 2px;'><i class='bi bi-star-fill'></i></h5>";
    } else{
        btnFavorite.innerHTML += "<h5 style='margin-bottom: 2px;'><i class='bi bi-star'></i></h5>";
    }

    btnFavorite.addEventListener('click', function(){modifFavoris(id, !fav);});

    let btnAdd = document.getElementById("add");
    btnAdd.addEventListener("click", function(){getPlaylists(id)});

    let idArtiste = json[0]['idartiste'];
    let btnArtiste = document.getElementById('btnArtiste');
    btnArtiste.addEventListener("click", function(){getArtiste(idArtiste)});

    let idAlbum = json[0]['idalbum'];
    let btnAlbum = document.getElementById("btnAlbum");
    btnAlbum.addEventListener("click", function(){getAlbum(idAlbum)});
}

function getPlaylists(id){
    ajaxRequest("GET", "../PHP/requestAjax.php?type=addPlaylist&id="+id, addInPlaylist);
}

function addInPlaylist(json){
    console.log(json[1][0])
    const formulaire = document.getElementById('formulaire');
    formulaire.innerHTML = "";

    let idTitre = json[2];

    for(let i=0; i<json[0].length; i++){
        let idPlaylist = json[0][i]['idplaylist'];
        let nom = json[0][i]['nom'];
        formulaire.innerHTML += "<div class='form-check'>"+
                "<input class='form-check-input' type='checkbox' value="+idPlaylist+" id=checkbox"+i+">"+
                "<label class='form-check-label' for='flexCheckDefault'>"+nom+"</label>"+
            "</div>";
    }

    for(let i=0; i<json[0].length; i++){

        let idPlaylist = json[0][i]['idplaylist'];

        for(let j=0; j<json[1].length; j++){
            for(let t=0; t<json[1][j].length; t++){
                if(idPlaylist == json[1][j][t]['idplaylist'] && idTitre == json[1][j][t]['idtitre']){
                    let check = document.getElementById('checkbox'+i).checked = true;
                }
            }
        }
    }

    const btnEnregistrer = document.getElementById("enregistrer");
    btnEnregistrer.addEventListener("click", function(){addTitre(json)});

    const btnFermer = document.getElementById("fermer");
    btnFermer.addEventListener("click", function(){getTitle(idTitre)});
}


function addTitre(json){
    let idTitre = json[2];

    for(let i=0; i<json[0].length;i++){

        let check = document.getElementById("checkbox"+i);  
        for (let t=0; t<json[1].length; t++){

            if(check.checked == true){
                if(json[1][t].length == 0){
                    ajaxRequest("POST", "../PHP/requestAjax.php", function(){console.log('ADD')}, "type=addTitrePlaylist&idTitre="+idTitre+"&idPlaylist="+check.value);
                } else{
                    for(let j=0; j<json[1][t].length; j++){
                        if(!(check.value == json[1][t][j]['idplaylist'] && idTitre == json[1][t][j]['idtitre'])){
                            ajaxRequest("POST", "../PHP/requestAjax.php", function(){console.log('ADD')}, "type=addTitrePlaylist&idTitre="+idTitre+"&idPlaylist="+check.value);
                        }
                    }
                }
            } 
            else{
                if(json[1][t].length == 0){
                    ajaxRequest("DELETE", "../PHP/requestAjax.php/"+idTitre+"?type=deleteTitrePlaylist&idTitre="+idTitre+"&idPlaylist="+check.value, function(){console.log('DELETE')});
                }
                else{
                    for(let j=0; j<json[1][t].length; j++){
                        if(check.value == json[1][t][j]['idplaylist'] && idTitre == json[1][t][j]['idtitre']){
                            ajaxRequest("DELETE", "../PHP/requestAjax.php/"+idTitre+"?type=deleteTitrePlaylist&idTitre="+idTitre+"&idPlaylist="+check.value, function(){console.log('DELETE')});
                        }
                    }
                }
            }
        } 
    }
}


// Ajout du titre dans les favoris
function modifFavoris(id, fav){
    ajaxRequest('POST', "../PHP/requestAjax.php",function(){getTitle(id)}, "id="+id+"&type=title&fav="+fav);
}

