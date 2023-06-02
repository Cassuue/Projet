<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>        
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <link rel="stylesheet" href="../CSS/accueil.css">
        <script src="../JS/ajax.js" defer></script>
        <!--<script src="../JS/test.js" defer></script>-->
        <script src="../JS/accueil.js" defer></script>
        <script src="../JS/recherche.js" defer></script>
        <title> Accueil </title>
    </head>

    <body>
        <div class="container-fluid">
            <nav class="navbar" style="background-color: #6379AE;">
                <div class="container-fluid">
                    <span class="navbar-item">
                        <button class="navbar-toggler border-0 order-1"  style="color: #FFFFFF" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span class="material-symbols-outlined">menu</span>
                        </button>
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header" style="background-color: #6379AE;">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel" style="color: white;">Menu</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <button type="button" class="btn align-icon-text" aria-current="page" id="accueil"> <span class="material-symbols-outlined align-icon-text margin-right">home</span>Accueil</button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="btn align-icon-text" id="recherche"><span class="material-symbols-outlined align-icon-text margin-right">search</span>Recherche</button>
                                    </li>
                                    <li class="nav-item">
                                        <button class="btn align-icon-text" id="playlist"><span class="material-symbols-outlined align-icon-text margin-right">library_music</span>Playlists</button>
                                    </li>
                                </ul>
                            </div>
                        </div> 
                        <span class="material-symbols-outlined" style="color: #FFFFFF;" >person</span>
                        <button class="btn btn-link text-align-center" style='color: white; margin-right: 6px; margin-bottom: 10px;'>Profil</button>
                    </span>

                    <span class="material-icons white md-36">music_note</span>           

                    <span class="navbar-item">
                        <a href="connexion.php" class="btn" style="color: #FFFFFF; margin-right: 20px;">Déconnexion</a>
                    </span>  
                </div>
            </nav>
        </div>

        <div class="container" id='body'>
            

        </div>
    </body>  
</html>

<?php

?>
