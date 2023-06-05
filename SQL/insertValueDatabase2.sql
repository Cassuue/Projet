DELETE FROM Utilisateur;
DELETE FROM Titre;
DELETE FROM Album;
DELETE FROM Artiste;
DELETE FROM Playlist;
DELETE FROM ecouter;
DELETE FROM appartenir;


INSERT INTO Utilisateur VALUES
('cassie.peridy@mail.com', 'peridy', 'cassie', '2003-06-20', '$2y$10$F9DRoNGCsJSpQrisdVHGLekAoPQ0ESxdLM9xp/IZ5Kc4BMrGMVtMe'),
('antoine.pajdak@mail.com', 'pajdak', 'antoine', '2002-05-05', '$2y$10$F9DRoNGCsJSpQrisdVHGLekAoPQ0ESxdLM9xp/IZ5Kc4BMrGMVtMe');

-- Mot de passe décrypté : mdp

ALTER SEQUENCE Artiste_idArtiste_seq RESTART;
INSERT INTO artiste (nom, type) VALUES
('Artiste1', 'Solo'),
('Artiste2', 'Groupe');

ALTER SEQUENCE Album_idAlbum_seq RESTART;
INSERT INTO Album (nom, date_ajout, image, style, idArtiste)VALUES
('album1', '2023-05-05', 'th.jpeg', 'rock', 1),
('album3', '2021-01-02', 'th.jpeg', 'rock',2),
('album2', '2023-02-05', 'th.jpeg', 'pop', 2);

ALTER SEQUENCE Titre_idTitre_seq RESTART;
INSERT INTO Titre (nom, duree, lien, idArtiste, idAlbum) VALUES
('Titre 1', '00:03:20', 'audio.mp3', 1, 1),
('Titre 2', '00:03:20', 'audio.mp3', 1, 1),
('Titre 3', '00:03:20', 'audio.mp3', 1, 1),
('Titre 4', '00:03:20', 'audio.mp3', 1, NULL),
('Titre 5', '00:03:20', 'audio.mp3', 2, NULL),
('Titre 6', '00:03:20', 'audio.mp3', 2, NULL),
('Titre 7', '00:03:20', 'audio.mp3', 2, NULL),
('Titre 8', '00:03:20', 'audio.mp3', 2, NULL),
('Titre 9', '00:03:20', 'audio.mp3', 2, NULL),
('Titre 10', '00:03:20', 'audio.mp3', 2, NULL),
('Titre 11', '00:03:20', 'audio.mp3', 2, NULL),
('Titre 12', '00:03:20', 'audio.mp3', 2, NULL);

ALTER SEQUENCE Playlist_idPlaylist_seq RESTART;
INSERT INTO playlist (nom, date_creation, mail) VALUES
('playlist1', '2023-08-05', 'cassie.peridy@mail.com'),
('playlist2', '2023-03-05', 'antoine.pajdak@mail.com');

INSERT INTO ecouter VALUES
(1, 'cassie.peridy@mail.com', 1, true),
(2, 'cassie.peridy@mail.com', 2, true),
(3, 'cassie.peridy@mail.com', 3, true),
(4, 'cassie.peridy@mail.com', 4, true),
(5, 'cassie.peridy@mail.com', 5, true),
(6, 'cassie.peridy@mail.com', 6, true),
(7, 'cassie.peridy@mail.com', 7, true),
(8, 'cassie.peridy@mail.com', 8, true),
(9, 'cassie.peridy@mail.com', 9, true),
(10, 'cassie.peridy@mail.com', 10, true),
(11, 'cassie.peridy@mail.com', 11, true),
(12, 'cassie.peridy@mail.com', 12, true);

INSERT INTO appartenir VALUES
(1, 1, '2023-06-21'),
(2, 1, '2023-06-21'),
(3, 1, '2023-06-21'),
(4, 2, '2023-06-21');















