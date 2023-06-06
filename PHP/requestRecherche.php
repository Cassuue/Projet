<?php
    session_start();

    include ('database.php');
    include ('request.php');

    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $conn = new DB;
    $conn = $conn->connexionBD();

    $type_request = $_SERVER['REQUEST_METHOD'];

    if($type_request == 'GET' && isset($_GET['search']) && isset($_GET['filtre'])){
            $recherche = $_GET['search'];
            $filtre = $_GET['filtre'];
            // $recherche = "Titre 1";
            // $filtre = "titre";
            $request = new request;
            if($filtre == 'titre'){
                $data = $request->getAllFromTitre($conn, $recherche);
                echo json_encode($data);
            }
            elseif($filtre == 'artiste'){
                $data = $request->getAllFromArtiste($conn, $recherche);
                echo json_encode($data);
            }
            elseif($filtre == 'album'){
                $data = $request->getAllFromAlbum($conn, $recherche);
                echo json_encode($data);
            }
        }
?>