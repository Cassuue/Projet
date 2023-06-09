<?php
    session_start();

    include 'database.php';
    include 'request.php';


    ini_set('display_errors', 1);
    error_reporting(E_ALL);


    $conn = new DB;
    $conn = $conn->connexionBD();

    $type_request = $_SERVER['REQUEST_METHOD'];


    if ($type_request == 'GET'){

            // Requête de récupération des 10 derniers titres écoutés
        if ($_GET['type'] == "lastTitle"){

            $idLastTitle = new request;
            $idLastTitle = $idLastTitle->getIDLatestListened($conn, $_SESSION['mail']);

            $tab = array();
            foreach ($idLastTitle as $value) {
                $titles = new request;
                $titles = $titles->getInfoTitreID($conn, intVal($value['idtitre']));
                array_push($tab, $titles);
            }

            echo json_encode($tab);

            // Requête de récupération des 10 dernières playlists 
        } elseif ($_GET['type'] == "playlists"){

            $playlists = new request;
            $playlists = $playlists->getUserPlaylists($conn, $_SESSION['mail']);

            $tab = array();

            if(count($playlists) > 10){
                for ($i = 9; $i>=0; $i--) {
                    array_push($tab, $playlists[$i]);
                }
            } else{
                for ($i = count($playlists)-1; $i>=0; $i--) {
                    array_push($tab, $playlists[$i]);
                }
            }


            echo json_encode($tab);

            // Requête de récupération de 10 favoris et des titres qui correspondent 
        } elseif ($_GET['type'] == "favoris"){

            $idFavoris = new request;
            $idFavoris = $idFavoris->getIDFavoris($conn, $_SESSION['mail']);
            
            $tab = array();
            if(count($idFavoris)>10){
                for ($i = 9; $i>=0; $i--) {
                    $titles = new request;
                    $titles = $titles->getInfoTitreID($conn, intVal($idFavoris[$i]['idtitre']));
                    array_push($tab, $titles);
                }
            } else{
                for ($i = count($idFavoris)-1; $i>=0; $i--) {
                    $titles = new request;
                    $titles = $titles->getInfoTitreID($conn, intVal($idFavoris[$i]['idtitre']));
                    array_push($tab, $titles);
                }
            }
            
            echo json_encode($tab);

            // Requête de récupération d'un titre et des favoris
        } elseif ($_GET['type'] == 'title' && isset($_GET['id'])) {

            $res = array();
            
            $infoTitre = new request;
            $infoTitre = $infoTitre->getInfoTitreID($conn, intVal($_GET['id']));

            array_push($res, $infoTitre[0]);

            $idFavoris = new request;
            $idFavoris = $idFavoris->getIDFavoris($conn, $_SESSION['mail']);

            array_push($res, $idFavoris);

            echo json_encode($res);

            // Requête de récupération d'un artiste
        }  elseif ($_GET['type'] == 'artiste' && isset($_GET['id'])) {

            $res = array();

            $infoArtiste = new request;
            $infoArtiste = $infoArtiste->getInfoArtiste($conn, intVal($_GET['id']));

            array_push($res, $infoArtiste[0]);

            $albums = new request;
            $albums = $albums->getArtistAlbums($conn, intVal($_GET['id']));

            array_push($res, $albums);
            
            echo json_encode($res);

            // Requête de récupération album
        } elseif ($_GET['type'] == 'album' && isset($_GET['id'])){

            $res = array();

            $infoAlbum = new request;
            $infoAlbum = $infoAlbum->getInfoAlbum($conn, intVal($_GET['id']));

            array_push($res, $infoAlbum[0]);

            $artiste = new request;
            $artiste = $artiste->getInfoArtiste($conn, $infoAlbum[0]['idartiste']);

            array_push($res, $artiste[0]);

            $titres = new request;
            $titres = $titres->getTitresAlbum($conn, intVal($_GET['id']));

            array_push($res, $titres);

            $idFavoris = new request;
            $idFavoris = $idFavoris->getIDFavoris($conn, $_SESSION['mail']);

            array_push($res, $idFavoris);

            $duree = new request;
            $duree = $duree->getDureeAlbum($conn, intVal($_GET['id']));

            array_push($res, $duree[0]);

            echo json_encode($res);

            // Requête de récupération d'une playlist et des titres 
        }   elseif ($_GET['type'] == 'playlist' && isset($_GET['id'])) {
            
            $res = array();

            $infoPlaylist = new request;
            $infoPlaylist = $infoPlaylist->getInfoPlaylist($conn, intVal($_GET['id']));

            array_push($res, $infoPlaylist[0]);

            $titres = new request;
            $titres = $titres->getTitresPlaylist($conn, intVal($_GET['id']));

            array_push($res, $titres);

            $idFavoris = new request;
            $idFavoris = $idFavoris->getIDFavoris($conn, $_SESSION['mail']);

            array_push($res, $idFavoris);

            $duree = new request;
            $duree = $duree->getDureePlaylist($conn, intVal($_GET['id']));

            array_push($res, $duree[0]);

            echo json_encode($res);

            // ---- Requête de récupération des playlists de l'utilisateur ----
        } elseif($_GET['type'] == 'bibliotheque'){
            
            $res = array();

            // Récupération des playlists
            $playlists = new request;
            $playlists = $playlists->getUserPlaylists($conn, $_SESSION['mail']);

            array_push($res, $playlists);

            // Récupération des id des favoris
            $idFavoris = new request;
            $idFavoris = $idFavoris->getIDFavoris($conn, $_SESSION['mail']);

            // Récupération des info sur les titres favoris
            $tab = array();
            for ($i = 0; $i<count($idFavoris); $i++) {
                $titles = new request;
                $titles = $titles->getInfoTitreID($conn, intVal($idFavoris[$i]['idtitre']));
                array_push($tab, $titles[0]);
            }

            array_push($res, $tab);

            array_push($res, $idFavoris);

            echo json_encode($res);

            // Requête de récupération des playlists pour l'ajout 
        } elseif ($_GET['type'] == 'addPlaylist' && isset($_GET['id'])) {
            
            $res = array();

            // Récupération des playlists
            $playlists = new request;
            $playlists = $playlists->getUserPlaylists($conn, $_SESSION['mail']);

            array_push($res, $playlists);

            $tab = array();
            for ($i = 0; $i < count($playlists); $i++){
                $titresPlaylist = new request;
                $titresPlaylist = $titresPlaylist->IDTitresPlaylist($conn, $playlists[$i]['idplaylist']);
                array_push($tab, $titresPlaylist);
            }

            array_push($res, $tab);

            array_push($res, intVal($_GET['id']));

            echo json_encode($res);
        }
        else{


        }

    } elseif ($type_request == 'POST') {

            // Requête de modification des favoris
        if($_POST['type'] == 'title' && isset($_POST['id'])){

            if(isset($_POST['fav'])){
                $id = intVal($_POST['id']);
                $ajoutFavoris = new request;
                $ajoutFavoris = $ajoutFavoris->modifFavori($conn,$id, $_SESSION['mail'], $_POST['fav']);
                echo json_encode($ajoutFavoris);
            }

        } elseif ($_POST['type'] == 'bibliotheque' && isset($_POST['nom'])) {
            
            $nom = $_POST['nom'];
            $date = date("Y-m-d");

            $ajoutPlaylist = new request;
            $ajoutPlaylist = $ajoutPlaylist->insertPlaylist($conn, $nom, $date, $_SESSION['mail']);
            echo json_encode($ajoutPlaylist);

        } elseif ($_POST['type'] == 'addTitrePlaylist' && isset($_POST['idTitre']) && isset($_POST['idPlaylist'])) {
            
            $idTitre = intVal($_POST['idTitre']);
            $idPlaylist = intVal($_POST['idPlaylist']);
            $date = date("Y-m-d");

            $ajoutTitrePlaylist = new request;
            $ajoutTitrePlaylist = $ajoutTitrePlaylist->insertTitrePlaylist($conn, $idTitre, $idPlaylist, $date);
            echo json_encode($ajoutTitrePlaylist);

        } elseif ($_POST['type'] == 'updatePlay' && isset($_POST['idtitre'])) {
            $date = date('Y-m-d H:i:s');
            $idTitre = intVal($_POST['idtitre']);

            $updatePlay = new request;
            $updatePlay = $updatePlay->modifDernierEcouter($conn, $_SESSION['mail'], $idTitre, $date);
            echo json_encode($updatePlay);
        }

    } elseif ($type_request == 'PUT') {
        parse_str(file_get_contents('php://input'), $_PUT);

        if($_PUT['type'] == 'title' && isset($_PUT['id'])){

            if(isset($_PUT['fav'])){
                $id = intVal($_PUT['id']);
                $ajoutFavoris = new request;
                $ajoutFavoris = $ajoutFavoris->modifFavori($conn,$id, $_SESSION['mail'], $_PUT['fav']);
                echo json_encode($ajoutFavoris);

            }
        }


    } elseif($type_request == 'DELETE'){

        if($_GET['type'] == 'deletePlaylist' && isset($_GET['id'])){
            $id = intVal($_GET['id']);
            $deletePlaylist = new request;
            $deletePlaylist = $deletePlaylist->deletePlaylist($conn, $id);
            echo json_encode($deletePlaylist);
        }

        elseif($_GET['type'] == 'deleteTitrePlaylist' && isset($_GET['idTitre']) && isset($_GET['idPlaylist'])){
            $idTitre = intVal($_GET['idTitre']);
            $idPlaylist = intVal($_GET['idPlaylist']);

            $deleteTitrePlaylist = new request;
            $deleteTitrePlaylist = $deleteTitrePlaylist->deleteTitrePlaylist($conn, $idTitre, $idPlaylist);

            echo json_encode($deleteTitrePlaylist);
        }

    }

?>