<?php

class request{
    
    function connexionUser($conn, $email, $password) {
        $stmt = $conn->prepare("SELECT password FROM Utilisateur WHERE mail = :email");
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
        $stmt->bind_param("s", $playlistName);
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
    
    function registerUser($conn, $email, $nom, $prenom, $date_naissance, $password) {
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        $sql = "INSERT INTO Utilisateur (mail, nom, prenom, date_naissance, mdp) VALUES (?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssss", $email, $nom, $prenom, $date_naissance, $hashed_password);
        if ($stmt->execute()) {
            return true;
        } else {
            return false;
        }
    }
    
    
    function getLatestListened($conn, $email) {
        $sql = "SELECT idTitre FROM ecouter WHERE mail = ? ORDER BY numero DESC LIMIT 10";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $tracks = array();
            while ($row = $result->fetch_assoc()) {
                $tracks[] = $row['idTitre'];
            }
            return $tracks;
        } else {
            return false;
        }
    }
    
    function getFavoriteSongs($conn, $email) {
        $sql = "SELECT idTitre FROM preferer WHERE mail = ? AND favoris = 1";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $tracks = array();
            while($row = $result->fetch_assoc()) {
                $tracks[] = $row['idTitre'];
            }
            return $tracks;
        } else {
            return false;
        }
    }

    function getUserPlaylists($conn, $email) {
        $sql = "SELECT nom FROM Playlist WHERE mail = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $playlists = array();
            while($row = $result->fetch_assoc()) {
                $playlists[] = $row['nom'];
            }
            return $playlists;
        } else {
            return false;
        }
    }

    function getArtistAlbums($conn, $idArtiste) {
        $sql = "SELECT a.idAlbum, a.nom, a.date_ajout, a.image, a.style FROM Album a
                JOIN composer c ON a.idAlbum = c.idAlbum
                WHERE c.idArtiste = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $idArtiste);
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

    
}
?>
