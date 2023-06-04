function getPlaylists(id){
    let body = document.getElementById("body");
    body.innerHTML = "<br>";

    ajaxRequest('GET', '../PHP/requestAjax.php?id=' + id +'&type=playlist', displayInfoPlaylist);

}

function displayInfoPlaylist(json){

    let nom = json[0]['nom'];
    let date = json[0]['date_creation'];
    let image = "playlist.jpeg";
    

    let duree_totale = 0; // A calculer en php

    let body = document.getElementById("body");
    body.innerHTML += "<div class='row'>"+
            "<div class='col col-md-3'>"+
                "<img src=../Images/"+image+" class='img-thumbnail ' alt='...' style='width: 250px;'>"+
            "</div>"+
            "<div class='col' id='col2'>"+
                "<h2>"+nom+"</h2><button type='submit' class='btn' id='btnArtiste' style='color: black; --bs-btn-padding-x: 5px'> <i class='bi bi-person-fill' style='padding-right: 10px;'></i>"+artiste+" </button>"+
                "<p><i class='bi bi-info-circle' style='padding-right: 10px; padding-left: 5px;'></i>"+date+" / "+duree_totale+" / "+style+"</p>"+
            "</div>"+
        "</div><div class='row'>"+
            "<table class='table table-hover'>"+
                "<thead>"+
                    "<tr>"+
                        "<th scope='col'>#</th>"+
                        "<th scope='col' class='w-75'>Titre</th>"+
                        "<th scope='col' class='w-10'>Durée</th>"+
                        "<th scope='col' class='w-10'>Options</th>"+
                    "</tr>"+
                "</thead>"+
                "<tbody id='table'>"+
                "</tbody>"+
            "</table>"+
        "</div>";


}