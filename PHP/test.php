<!DOCTYPE html>
<html lang='fr'>
    <head>
        <link href='file.css' rel='stylesheet'>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM' crossorigin='anonymous'>        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js' integrity='sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe' crossorigin='anonymous'></script>        
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js' integrity='sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz' crossorigin='anonymous'></script>
        <link rel='stylesheet' href='../CSS/accueil.css'>
        <meta charset='utf-8'>

        <script src='../JS/assets.js' defer></script>
 
        <title> index </title>
    </head>
    <body>

        <!-- Button trigger modal -->
        <!-- <button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal'>Launch demo modal</button>

        
        <div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div class='modal-dialog'>
            <div class='modal-content'>
            <div class='modal-header'>
                <h1 class='modal-title fs-5' id='exampleModalLabel'>Modal title</h1>
                <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div class='modal-body'>
                ...
            </div>
            <div class='modal-footer'>
                <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                <button type='button' class='btn btn-primary'>Save changes</button>
            </div>
            </div>
        </div>
        </div> -->
    </body>
</html>

<?php
    include 'request.php';
    include 'database.php';

    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $conn = new DB;
    $conn = $conn->connexionBD();

    $date= date('Y-m-d');

    $test = new request;
    $test = $test->insertTitrePlaylist($conn, 10, 1, $date);

    echo json_encode($test);

?>


