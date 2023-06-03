function getArtiste(idArtiste){
    let body = document.getElementById("body");
    body.innerHTML = "<br>";

    ajaxRequest('GET', '../PHP/requestAjax.php?id=' + idArtiste +'&type=artiste', displayArtiste);
}

function displayArtiste(json){
    
    let nom = json[0]['nom'];  
    let type = json[0]['type'];

    let body = document.getElementById("body");
    body.innerHTML += "<div class='row'>"+
                "<div class='col col-md-3'>"+
                    "<img src=../Images/profil.png class='img-thumbnail ' alt='...' style='width: 250px;'>"+
                "</div>"+
                "<div class='col' id='col2'>"+
                    "<h2>"+nom+"</h2><p>"+type+"</p>"+
                "</div>"+
            "</div><br><br><div class='row'>"+
            "<table class='table table-hover'>"+
                "<thead>"+
                    "<tr>"+
                        "<th scope='col'>#</th>"+
                        "<th scope='col' class='w-75'>Titre Album</th>"+
                        "<th scope='col' class='w-10'>Date de sortie</th>"+
                        "<th scope='col' class='w-10'></th>"+
                    "</tr>"+
                "</thead>"+
                "<tbody id='table'>"+
                "</tbody>"+
            "</table>"+
        "</div>";
    
    let table = document.getElementById('table');
    
    for(let i = 0; i<json[1].length; i++){
        let idAlbum = json[1][i]['idalbum'];
        let nomAlbum = json[1][i]['nom'];
        let date = json[1][i]['date_ajout'];
        table.innerHTML += "<tr>"+
            "<th scope='row'>"+i+"</th>"+
            "<td>"+ nomAlbum +"</td>"+
            "<td>"+ date+"</td>"+
            "<td><button class='btn' type='submit' id=play"+i+" value="+idAlbum+" style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>"+
                "<h5 style='margin-bottom: 2px;'><i class='bi bi-play-fill'></i></h5>"+
            "</button></td>"+
            "</tr>";
    }

    for(let i = 0; i<json[1].length; i++){
        const btn = document.getElementById("play"+i);
        btn.addEventListener("click", function(){getAlbum(btn.value);})
    }

}
