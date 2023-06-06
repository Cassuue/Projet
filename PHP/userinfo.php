<?php
    session_start();

    if($_SESSION['type'] == 'deco'){
        header('Location: connexion.php');
    }

    include_once('database.php');
    include_once('request.php');

    $userEmail = $_SESSION['mail'];


    $dbInstance = Db::connexionBD();
    $userInfo = [];
    if ($dbInstance) {
        $request = new request();
        $userInfo = $request->getUserInfo($dbInstance, $userEmail);
    }

    $dateOfBirth = new DateTime($userInfo['date_naissance']);
    $today = new DateTime('today');
    $age = $dateOfBirth->diff($today)->y;

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Profil utilisateur</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">


    <!-- CSS -->
    <link rel="stylesheet" href="../CSS/accueil.css">
</head>
    <body>
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
                                        <a href="accueil.php" class="btn btn-link" style="color: black; text-decoration: none;"> <h5><i class="bi bi-house" style="padding-right: 20px;"></i> Accueil</h5> </button>
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
    </nav>
</div>

<div class="container mt-5">
    <h1 class="mb-4" style="padding-bottom: 20px">Profil utilisateur</h1>

    <div class="card" style="border: 0px">
        <div class="card-body" >
            <h5 class="card-title" style="padding-bottom: 20px">Email: <?php echo $userInfo['mail']; ?></h5>
            <h5 class="card-title" style="padding-bottom: 20px">Nom: <?php echo $userInfo['nom']; ?></h5>
            <h5 class="card-title" style="padding-bottom: 20px">Prénom: <?php echo $userInfo['prenom']; ?></h5>
            <h5 class="card-title" style="padding-bottom: 20px">Âge: <?php echo $age; ?></h5>

            <!-- Update profile link -->
            <a href="updateProfile.php" class="btn btn-primary">Mettre à jour le profil</a>

        </div>
    </div>
</div>

</body>
</html>
