<!DOCTYPE html>
<html lang="fr">
    <head>
        <link href="file.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>        
        <link rel="stylesheet" href="../CSS/accueil.css">
        <meta charset="utf-8">
        <title> index </title>
    </head>
    <body>
        <?php
            include 'musique.php';

            $card = new CardMusique("Titre Musique", 1, "../Images/th.jpeg");
            $card->ajouterBoutton(0, "Chanteur");
            $card->ajouterBoutton(1, "Album");

        ?>
    </body>
</html>


