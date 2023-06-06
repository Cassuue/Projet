<!DOCTYPE html>
<html lang='fr'>
    <head>
        <link href='file.css' rel='stylesheet'>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM' crossorigin='anonymous'>        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js' integrity='sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe' crossorigin='anonymous'></script>        
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js' integrity='sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz' crossorigin='anonymous'></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

        <link rel='stylesheet' href='../CSS/accueil.css'>
        <meta charset='utf-8'>

        <script src='../JS/assets.js' defer></script>
 
        <title> index </title>
    </head>
    <body>
        <a href="https://open.spotify.com/track/6jemILri7l5LuPhKs2nuXr" class='btn' type='submit' id='play' style='--bs-btn-padding-y: 0rem; --bs-btn-padding-x: 5px;'>
            <h5 style='margin-bottom: 2px;'><i class='bi bi-play-fill'></i></h5>
 <audio controls src="https://open.spotify.com/track/6jemILri7l5LuPhKs2nuXr"></audio>
            <a href="https://open.spotify.com/track/6jemILri7l5LuPhKs2nuXr"></a>
        </a>
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
?>


