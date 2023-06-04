<?php
    session_start();

    include ('database.php');
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
            for ($i = count($playlists)-1; $i>=0; $i--) {
                array_push($tab, $playlists[$i]);
            }

            echo json_encode($tab);

            // Requête de récupération de 10 favoris et des titres qui correspondent 
        } elseif ($_GET['type'] == "favoris"){

            $idFavoris = new request;
            $idFavoris = $idFavoris->getIDFavoris($conn, $_SESSION['mail']);

            $tab = array();
            for ($i = count($idFavoris)-1; $i>=0; $i--) {
                $titles = new request;
                $titles = $titles->getInfoTitreID($conn, intVal($idFavoris[$i]['idtitre']));
                array_push($tab, $titles);
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

            echo json_encode($res);

            // Requête de récupération des playlists et des titres 
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

    }

?>