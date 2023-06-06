<!DOCTYPE html>
<html lang='fr'>
    <head>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM' crossorigin='anonymous'>        
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js' integrity='sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe' crossorigin='anonymous'></script>        
        <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js' integrity='sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz' crossorigin='anonymous'></script>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">

        <link rel='stylesheet' href='../CSS/accueil.css'>
        <meta charset='utf-8'>
 
        <title> index </title>
    </head>
    <body class="container">
        <h2>TEST</h2>
        <footer class="footer fixed-bottom py-2 bg-light" style='background-color: #6379AE !important;'>
            <div class="container justify-content-center">
            <audio controls autoplay src='../Musiques/Ed_Sheeran_-_Shape_Of_You_Lyrics.mp3' class='container justify-content-center'></audio>
            </div>
        </footer>


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


