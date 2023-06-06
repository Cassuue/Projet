DELETE FROM Utilisateur;
DELETE FROM Titre;
DELETE FROM Album;
DELETE FROM Artiste;
DELETE FROM Playlist;
DELETE FROM ecouter;
DELETE FROM appartenir;


INSERT INTO Utilisateur VALUES
('cassie.peridy@mail.com', 'peridy', 'cassie', '2003-06-20', '$2y$10$F9DRoNGCsJSpQrisdVHGLekAoPQ0ESxdLM9xp/IZ5Kc4BMrGMVtMe');

-- Mot de passe décrypté : mdp

ALTER SEQUENCE Artiste_idArtiste_seq RESTART;
INSERT INTO artiste (nom, type) VALUES
('Ed Sheeran', 'Solo'),
('Ariana Grande', 'Solo');

ALTER SEQUENCE Album_idAlbum_seq RESTART;
INSERT INTO Album (nom, date_ajout, image, style, idArtiste)VALUES
('thank u, next', '2019-02-07', 'ar.jpg', 'pop', 2),
('/ (Deluxe)', '2017-03-03', 'ed.jpg', 'pop',1);

ALTER SEQUENCE Titre_idTitre_seq RESTART;
INSERT INTO Titre (nom, duree, lien, idArtiste, idAlbum) VALUES
('Castle on The Hill', '00:04:20', 'Ed Sheeran - Castle On The Hill [Official Lyric Video].mp3', 1, 2),
('Eyes closed', '00:03:14', 'Ed Sheeran - Eyes Closed (Official Lyric Video).mp3', 1, 2),
('Shape of you', '00:03:55', 'Ed_Sheeran_-_Shape_Of_You_Lyrics.mp3', 1, 2),
('Shivers', '00:03:27', 'Ed Sheeran - Shivers (Lyrics).mp3', 1, NULL),
('7 rings', '00:02:58', 'Ariana Grande - 7 rings (Lyrics).mp3', 2, 1),
('Break Free', '00:03:34', 'Ariana Grande - Break Free feat. Zedd (Audio).mp3', 2, NULL),
('Imagine', '00:03:33', 'Ariana Grande - imagine (Audio).mp3', 2, 1),
('Needy', '00:02:52', 'Ariana Grande - needy (Audio).mp3', 2, 1),
('One Last Time', '00:03:18', 'Ariana Grande - One Last Time (Lyric Video).mp3', 2, NULL);

ALTER SEQUENCE Playlist_idPlaylist_seq RESTART;
INSERT INTO playlist (nom, date_creation, mail) VALUES
('playlist1', '2023-08-05', 'cassie.peridy@mail.com');

INSERT INTO ecouter VALUES
(1, 'cassie.peridy@mail.com', true, true, '2023-05-06 17:09:00'),
(2, 'cassie.peridy@mail.com', false, true, '2023-05-06 17:08:00'),
(3, 'cassie.peridy@mail.com', true, true, '2023-05-06 17:10:00'),
(4, 'cassie.peridy@mail.com', false, true, '2023-05-06 17:07:00'),
(5, 'cassie.peridy@mail.com', true, true, '2023-05-06 17:15:00'),
(6, 'cassie.peridy@mail.com', true, true, '2023-05-06 17:03:00'),
(7, 'cassie.peridy@mail.com', true, true, '2023-05-06 17:02:00'),
(8, 'cassie.peridy@mail.com', true, true, '2023-05-06 17:01:00');

INSERT INTO appartenir VALUES
(1, 1, '2023-06-21'),
(2, 1, '2023-06-21'),
(3, 1, '2023-06-21');















