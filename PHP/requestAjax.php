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

        } elseif ($_GET['type'] == "playlists"){

            $playlists = new request;
            $playlists = $playlists->getUserPlaylists($conn, $_SESSION['mail']);

            echo json_encode($playlists);

        } elseif ($_GET['type'] == "favoris"){

            $idFavoris = new request;
            $idFavoris = $idFavoris->getIDFavoris($conn, $_SESSION['mail']);

            $tab = array();
            foreach ($idFavoris as $value) {
                $titles = new request;
                $titles = $titles->getInfoTitreID($conn, intVal($value['idtitre']));
                array_push($tab, $titles);
            }

            echo json_encode($tab);
        }
        else{


        }

    } elseif ($type_request == 'POST') {

        if ($_POST['type'] == 'title' && isset($_POST['id'])) {
            
            $infoTitre = new request;
            $infoTitre = $infoTitre->getInfoTitreID($conn, intVal($_POST['id']));

            echo json_encode($infoTitre);
        }


    } elseif ($type_request == 'PUT') {


    } elseif($type_request == 'DELETE'){

    }

?>