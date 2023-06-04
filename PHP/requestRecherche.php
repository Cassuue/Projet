<?php
    session_start();

    include ('database.php');
    include ('request.php');

    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $conn = new DB;
    $conn = $conn->connexionBD();

    $type_request = $_SERVER['REQUEST_METHOD'];

    if($type_request == 'GET'){
        if ($_GET['type'] == 'request'){
            $recherche = $_GET['recherche'];
            $filtre = $_GET['filtre'];
            $request = new request;
            if($filtre == 'titre'){
                $data = $request->getTitre($conn, $recherche);
                echo json_encode($data);
            }
            elseif($filtre == 'artiste'){
                $data = $request->getArtiste($conn, $recherche);
                echo json_encode($data);
            }
            elseif($filtre == 'album'){
                $data = $request->getAlbum($conn, $recherche);
                echo json_encode($data);
            }
        }
    }