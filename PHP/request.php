<?php

class request{

    // Fonctions SELECT
    function getInfoUser($conn){
        $stmt = 'SELECT * from utilisateur';
        $stmt = $conn->query($stmt);
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    // Permet de vérifier les informations de connexion
    function connexionUser($conn, $email, $password) {
        $stmt = $conn->prepare("SELECT mdp FROM utilisateur WHERE mail = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($result) {
            if (password_verify($password, $result['mdp'])) {
                return true;
            }
        }
        return false;
    }
    
    // Permet de récupérer les id des 10 derniers titres écoutés en fonction de l'utilisateur
    function getIDLatestListened($conn, $email) {
        $sql = 'SELECT * FROM ecouter WHERE mail=:email and play=true ORDER BY date DESC LIMIT 10';
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    // Permet de récupérer les informations sur un titre en fonction de son id
    function getInfoTitreID($conn, $id){
        try{
            $stmt = $conn->prepare("SELECT t.idtitre, t.duree, t.lien as lien, ar.nom as artiste, ar.idartiste as idartiste, al.nom as album, al.idalbum as idalbum, t.nom, al.image FROM titre t 
                LEFT JOIN album al ON al.idalbum = t.idalbum 
                JOIN artiste ar ON ar.idartiste = t.idartiste 
                WHERE t.idtitre = :id");
            $stmt->bindParam(':id', $id);
            $stmt->execute();
            $titles = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $titles;
    }
    
    // Permet de récupérer l'id des titres appartenant aux favoris
    function getIDFavoris($conn, $email){
        try {
            $sql = 'SELECT idTitre FROM ecouter WHERE mail=:email and favori=true';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $exception) {
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    function getTitresFavoris($conn, $email){

    }

    // Permet de récupérer les playlists d'un utilisateur
    function getUserPlaylists($conn, $email) {
        try{
            $sql = "SELECT * FROM Playlist WHERE mail = :email";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(":email", $email);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    // Permet de récupérer les informations d'une playlist
    function getInfoPlaylist($conn, $id){
        try {
            $stmt = $conn->prepare("SELECT * FROM playlist WHERE idPlaylist=:id");
            $stmt->bindParam(":id", $id );
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    // Permet de récupérer les informations d'un artiste en fonction de son id 
    function getInfoArtiste($conn, $id){
        try {
            $stmt = $conn->prepare("SELECT * FROM artiste WHERE idartiste=:id");
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }


    // Permet de récupérer les albums d'un artiste
    function getArtistAlbums($conn, $idArtiste) {
        try {
            $sql = "SELECT * FROM album WHERE idartiste = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(":id", $idArtiste);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    // Permet de récupérer toutes les informations sur un album
    function getInfoAlbum($conn, $id){
        try {
            $stmt = $conn->prepare('SELECT * FROM album WHERE idAlbum = :id');
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    // Permet de récupérer tous les titres d'un album
    function getTitresAlbum($conn, $id){
        try{
            $stmt = $conn->prepare('SELECT * FROM titre WHERE idAlbum = :id');
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }

    // Permet de récupérer tous les titres d'une playlist
    function getTitresPlaylist($conn, $id){
        try {
            $stmt = $conn->prepare('SELECT t.idtitre, t.nom, t.duree, t.lien, a.date_ajout FROM appartenir a, titre t WHERE a.idtitre=t.idtitre and a.idPlaylist=:id');
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return $result;
    }
    
    function getAllArtists($conn) {
        $sql = "SELECT idArtiste, nom FROM Artiste";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $artists = array();
            while($row = $result->fetch_assoc()) {
                $artists[] = $row;
            }
            return $artists;
        } else {
            return false;
        }
    }

    // Fonctions INSERT

    // Permet d'insérer dans la base de données les informations d'un nouvel utilisateur
    function registerUser($conn, $email, $nom, $prenom, $date_naissance, $password) {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO Utilisateur (mail, nom, prenom, date_naissance, mdp) VALUES (:mail, :nom, :prenom, :date, :mdp)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":mail", $email);
        $stmt->bindParam(":nom", $nom);
        $stmt->bindParam(":prenom", $prenom);
        $stmt->bindParam(":date", $date_naissance);
        $stmt->bindParam(":mdp", $hashed_password);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }

    // Fonctions UPDATE

    // Permet d'ajouter un titre aux favoris
    function modifFavori($conn, $id, $mail, $fav){
        try {
            $stmt = $conn->prepare('UPDATE ecouter SET favori=:fav where idtitre=:id and mail=:mail');
            $stmt->bindParam(":mail", $mail);
            $stmt->bindParam(":id", $id);
            $stmt->bindParam(":fav", $fav);
            $stmt->execute();
        } catch (PDOException $exception){
            echo 'Connexion échouée : ' . $exception->getMessage();
            return false;
        }
        return true;
    }

    public function getUserInfo($conn, $userEmail) {
        try {
            $sql = 'SELECT mail, nom, prenom, date_naissance FROM Utilisateur WHERE mail = :email';
            $stmt = $conn->prepare($sql);
            $stmt->execute([':email' => $userEmail]);
            $userInfo = $stmt->fetch(PDO::FETCH_ASSOC);

            return $userInfo;
        } catch (PDOException $e) {
            echo "Erreur lors de la récupération des informations de l'utilisateur : " . $e->getMessage();
        }
    }

    //Récupérer toutes les infos d'un titre avec son nom
    function getAllFromTitre($conn, $nom){
        $sql = "SELECT * FROM titre WHERE nom LIKE CONCAT ('%', :nom::text, '%')";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":nom", $nom);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    //Récupérer toutes les infos d'un album avec son nom
    function getAllFromAlbum($conn, $nom){
        $sql = "SELECT * FROM album WHERE nom = :nom";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":nom", $nom);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    //Récupérer toutes les infos d'une playlist avec nom nom
    function getAllFromPlaylist($conn, $nom){
        $sql = "SELECT * FROM playlist WHERE nom = :nom";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(":nom", $nom);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }
}
?>
