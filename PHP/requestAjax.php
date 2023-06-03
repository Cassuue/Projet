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
            for ($i = count($idFavoris)-1; $i>=0; $i--) {
                $titles = new request;
                $titles = $titles->getInfoTitreID($conn, intVal($idFavoris[$i]['idtitre']));
                array_push($tab, $titles);
            }

            echo json_encode($tab);
        } elseif ($_GET['type'] == 'title' && isset($_GET['id']) && empty($_GET['fav'])) {

            $res = array();
            
            $infoTitre = new request;
            $infoTitre = $infoTitre->getInfoTitreID($conn, intVal($_GET['id']));

            array_push($res, $infoTitre[0]);

            $idFavoris = new request;
            $idFavoris = $idFavoris->getIDFavoris($conn, $_SESSION['mail']);

            array_push($res, $idFavoris);

            echo json_encode($res);



        } elseif($_GET['type'] == 'title' && isset($_GET['id']) && isset($_GET['fav'])){
            
            $id = intVal($_GET['id']);

            $ajoutFavoris = new request;
            $ajoutFavoris = $ajoutFavoris->modifFavori($conn,$id, $_SESSION['mail'], $_GET['fav']);
            echo json_encode($ajoutFavoris);
        }
        else{


        }

    } elseif ($type_request == 'POST') {

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