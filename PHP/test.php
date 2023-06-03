<!DOCTYPE html>
<html lang="fr">
    <head>
        <link href="file.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../CSS/accueil.css">
        <meta charset="utf-8">
        <title> index </title>
    </head>
    <body>
        <div class="container">
            <div id="carouselExampleControls" class="carousel carousel-dark slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="row offset-md-2">

                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-10" src="../Images/null.jpeg" alt="Second slide">
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true" style="color: black;"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true" style="color: black;"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </body>
</html>

<?php
    /*include 'request.php';
    include 'database.php';

    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $conn = new DB;
    $conn = $conn->connexionBD();

    $test = new request;
    $test = $test->getIDLatestListened($conn, 'cassie.peridy@mail.com');

    $tab = array();
    foreach ($test as $value) {
        $titles = new request;
        $titles = $titles->getLatestListened($conn, intVal($value['idtitre']));
        array_push($tab, $titles);
    }
    print_r($tab);*/

    

?>


