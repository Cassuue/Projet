<?php

class request{

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
  
    function getPlaylistSongs($conn, $playlistName) {
        $sql = "SELECT Titre.nom 
            FROM Titre 
            INNER JOIN appartenir ON Titre.idTitre = appartenir.idTitre 
            WHERE appartenir.nom = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam("s", $playlistName);
        $stmt->execute();
        $result = $stmt->get_result();
        if ($result->num_rows > 0) {
            $titles = [];
            while ($row = $result->fetch_assoc()) {
                $titles[] = $row['nom'];
                }
            return $titles;
        } else {
            return [];
        }
    }
    
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
    
    // Permet de récupérer les id des 10 derniers titres écoutés en fonction de l'utilisateur
    function getIDLatestListened($conn, $email) {
        $sql = 'SELECT idTitre FROM ecouter WHERE mail=:email ORDER BY numero DESC LIMIT 10';
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $email);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    // Permet de récupérer les informations sur un titre en fonction de son id
    function getInfoTitreID($conn, $id){
        try{
            $stmt = $conn->prepare("SELECT t.idtitre as id, t.duree as duree, t.lien as lien, ar.nom as artiste, al.nom as album, t.nom as titre, al.image FROM titre t 
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
            $sql = 'SELECT idTitre FROM ecouter WHERE mail=:email and favori=true LIMIT 10';
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

    // Permet de récupérer les playlists d'un utilisateur
    function getUserPlaylists($conn, $email) {
        try{
            $sql = "SELECT * FROM Playlist WHERE mail = :email LIMIT 10";
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


    function getArtistAlbums($conn, $idArtiste) {
        $sql = "SELECT a.idAlbum, a.nom, a.date_ajout, a.image, a.style FROM Album a
                JOIN composer c ON a.idAlbum = c.idAlbum
                WHERE c.idArtiste = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam("i", $idArtiste);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $albums = array();
            while($row = $result->fetch_assoc()) {
                $albums[] = $row;
            }
            return $albums;
        } else {
            return false;
        }
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

    //Récupérer toutes les infos d'un titre avec son nom
    function getAllFromTitre($conn, $nom){
        $sql = "SELECT * FROM titre WHERE nom = :nom";
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
