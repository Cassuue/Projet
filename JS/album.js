function getAlbum(idAlbum){
    let body = document.getElementById("body");
    body.innerHTML = "<br>";

    ajaxRequest('GET', '../PHP/requestAjax.php?id='+ idAlbum +'&type=album', displayAlbum);
}

function displayAlbum(json){

    let nom = json[0]['nom'];
    let date = json[0]['date_ajout'];
    let style = json[0]['style'];
    let image = json[0]['image'];
    let artiste = json[1]['nom'];

    let duree_totale = json[4]['duree_total'];

    let body = document.getElementById("body");
    body.innerHTML += "<div class='row'>"+
            "<div class='col col-md-3'>"+
                "<img src=../Images/"+image+" class='img-thumbnail ' alt='...' style='width: 250px;'>"+
            "</div>"+
            "<div class='col' id='col2'>"+
                "<h2>"+nom+"</h2><button type='submit' class='btn' id='btnArtiste' style='color: black; --bs-btn-padding-x: 5px'> <i class='bi bi-person-fill' style='padding-right: 10px;'></i>"+artiste+" </button>"+
                "<p><i class='bi bi-info-circle' style='padding-right: 10px; padding-left: 5px;'></i> Date de sortie : "+date+"<br>  Durée totale : "+duree_totale+" <br> Style : "+style+"</p>"+
            "</div>"+
        "</div><br><br><div class='row'>"+
            "<table class='table table-hover'>"+
                "<thead>"+
                    "<tr>"+
                        "<th scope='col'>#</th>"+
                        "<th scope='col' class='w-50'>Titre</th>"+
                        "<th scope='col' >Durée</th>"+
                        "<th scope='col' >Options</th>"+
                        "<th scope='col' >Détails</th>"+
                    "</tr>"+
                "</thead>"+
                "<tbody id='table'>"+
                "</tbody>"+
            "</table>"+
        "</div>";

        affichageTitres(json, "album", 2);
        
        let idArtiste = json[1]['idartiste'];
        let btnArtiste = document.getElementById('btnArtiste');
        btnArtiste.addEventListener("click", function(){getArtiste(idArtiste)});
}

function affichageTitres(json, type, indice){
    let table = document.getElementById('table');

    for(let i = 0; i<json[indice].length; i++){
        let idtitre = json[indice][i]['idtitre'];
        let titre = json[indice][i]['nom'];
        let duree = json[indice][i]['duree'];
        table.innerHTML += "<tr>"+
            "<th scope='row'>"+i+"</th>"+
            "<td id=rowTitre"+i+">"+ titre +"</td>"+
            "<td>"+ duree +"</td>"+
            "<td><button class='btn' type='submit' id=favorite"+i+" value="+idtitre+" style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>"+
            "</button>"+
            "<button class='btn' type='submit' id=play"+i+" style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>"+
                "<h5 style='margin-bottom: 2px;'><i class='bi bi-play-fill'></i></h5>"+
            "</button></td>"+
            "<td><button class='btn' type='submit' id=details"+i+" style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>"+
                "<h5 style='margin-bottom: 2px;'><i class='bi bi-three-dots'></i></h5>"+
            "</button></td>"+
            "</tr>";

        if(type == "playlist"){
            let date = json[indice][i]['date_ajout'];
            let rowTitre = document.getElementById("rowTitre"+i);
            rowTitre.insertAdjacentHTML("afterend", "<td>"+date+"</td>");
        }

        let fav = false;
        for (let j=0; j<json[indice+1].length; j++){
            if(idtitre == json[indice+1][j]['idtitre']){
                fav = true;
            }
        }

        // Création de l'évent pour l'ajout à la liste des favoris
        let btnFavorite = document.getElementById("favorite"+i);

        if(fav){
            btnFavorite.innerHTML += "<h5 style='margin-bottom: 2px;'><i class='bi bi-star-fill'></i></h5>";
        } else{
            btnFavorite.innerHTML += "<h5 style='margin-bottom: 2px;'><i class='bi bi-star'></i></h5>";
        }
    }


    for(let i = 0; i<json[indice].length; i++){
        let fav = false;
        for (let j=0; j<json[indice+1].length; j++){
            if(json[indice][i]['idtitre'] == json[indice+1][j]['idtitre']){
                fav = true;
            }
        }
        let id = json[indice][i]['idtitre'];
        let btnFavorite = document.getElementById('favorite'+i);
        btnFavorite.addEventListener("click", function(){reloadPage(json, id, fav, type)});

        let btnDetails = document.getElementById('details'+i);
        btnDetails.addEventListener('click', function(){getTitle(id)});

        let lien = json[indice][i]['lien'];
        let btnPlay = document.getElementById("play"+i);
        btnPlay.addEventListener("click", function(){playTitre(lien)});
    }
}

function reloadPage(json, id, fav, type){
    if(type == "album"){
        ajaxRequest('POST', "../PHP/requestAjax.php",function(){getAlbum(json[0]['idalbum'])}, "id="+id+"&type=title&fav="+!fav);
    } if(type == "playlist"){
        ajaxRequest('POST', "../PHP/requestAjax.php",function(){getPlaylists(json[0]['idplaylist'])}, "id="+id+"&type=title&fav="+!fav);
    } if (type == "favoris"){
        ajaxRequest('POST', "../PHP/requestAjax.php",function(){getBibliotheque()}, "id="+id+"&type=title&fav="+!fav);
    }
    else{
    }
}