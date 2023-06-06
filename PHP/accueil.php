<?php
    session_start();
    if($_SESSION['type'] == 'deco'){
        header('Location: connexion.php');
        $mail = $_SESSION['mail'];
    }
?>


<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        
        <!-- Import des bibliothèques bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
        
        <!-- Import des fichiers css -->
        <link rel="stylesheet" href="../CSS/accueil.css">
        
        <!-- Import des fichiers js -->
        <script src="../JS/ajax.js" defer></script>
        <script src="../JS/accueil.js" defer></script>
        <script src="../JS/recherche.js" defer></script>
        <script src="../JS/titre.js" defer></script>
        <script src="../JS/artiste.js" defer></script>
        <script src="../JS/album.js" defer></script>
        <script src="../JS/playlist.js" defer></script>
        <script src="../JS/bibliotheque.js" defer></script>


        <title> Accueil </title>
    </head>

    <body>

        <section id="errors" class="container alert alert-danger" style="display: none"></section>

        <div class="container-fluid sticky-top">
            <nav class="navbar" style="background-color: #6379AE;">
                <div class="container-fluid">
                    <span class="navbar-item">
                        <button class="navbar-toggler border-0 order-1"  style="color: #FFFFFF" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <h4><i class="bi bi-list"></i></h4>
                        </button>
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header" style="background-color: #6379AE;">
                                <h4 class="offcanvas-title" id="offcanvasNavbarLabel" style="color: white;">Menu</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <button type="button" class="btn btn-link" aria-current="page" id="accueil" style="color: black; text-decoration: none;"> <h5><i class="bi bi-house" style="padding-right: 20px;"></i> Accueil</h5> </button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="btn btn-link" id="recherche" style="color: black; text-decoration: none;"> <h5><i class="bi bi-search" style="padding-right: 20px;"></i>  Recherche</h5></button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="btn btn-link" id="bibliotheque" style="color: black; text-decoration: none;"> <h5><i class="bi bi-music-note-list" style="padding-right: 20px;"></i>  Bibliothèque</h5></button>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                        
                        <a href="userinfo.php" class="btn btn-link text-align-center" style='color: white; margin-right: 6px; margin-bottom: 10px; text-decoration: none;'> <i class="bi bi-person" style="color: white;"></i> Profil</a>
                    </span>

                    <h4><i class="bi bi-music-note-beamed" style="color: white;"></i></h4>

                    <span class="navbar-item">
                        <a href="connexion.php" class="btn" style="color: #FFFFFF; margin-right: 20px;">Déconnexion</a>
                    </span>  
                </div>
            </nav>
        </div>

        <footer class="footer fixed-bottom py-1">
            <div class="container justify-content-center"  id='playMusic'>
                <audio controls autoplay src="" class='container justify-content-center'></audio>
            </div>
        </footer>

        <div class="container" id='body' style="margin-bottom: 5%"></div>


    </body>  
</html>