<?php
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
        $idLastTitle = $idLastTitle->getIDLatestListened($conn, 'cassie.peridy@mail.com');

        $tab = array();
        foreach ($idLastTitle as $value) {
            $titles = new request;
            $titles = $titles->getInfoTitreID($conn, intVal($value['idtitre']));
            array_push($tab, $titles);
        }

        echo json_encode($tab);
    }
    if ($_GET['type'] == "playlists"){
        $playlists = new request;
        $playlists = $playlists->getUserPlaylists($conn, 'cassie.peridy@mail.com');

        echo json_encode($playlists);
    }
    if ($_GET['type'] == "favoris"){
        $idFavoris = new request;
        $idFavoris = $idFavoris->getIDFavoris($conn, 'cassie.peridy@mail.com');

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


} elseif ($type_request == 'PUT') {


} elseif($type_request == 'DELETE'){

}

?>