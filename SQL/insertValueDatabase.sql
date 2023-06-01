DELETE FROM Utilisateur;
DELETE FROM Album;
DELETE FROM Artiste;
DELETE FROM Playlist;
DELETE FROM ecrire;
DELETE FROM ecouter;
DELETE FROM composer;
DELETE FROM appartenir;
DELETE FROM avoir;
DELETE FROM preferer;


INSERT INTO Utilisateur VALUES
('cassie.peridy@mail.com', 'peridy', 'cassie', 20/06/2003, '$2y$10$F9DRoNGCsJSpQrisdVHGLekAoPQ0ESxdLM9xp/IZ5Kc4BMrGMVtMe'),
('antoine.pajdak@mail.com', 'pajdak', 'antoine', 14/05/2002, '$2y$10$F9DRoNGCsJSpQrisdVHGLekAoPQ0ESxdLM9xp/IZ5Kc4BMrGMVtMe'),
('nathan.simon@mail.com', 'simon', 'nathan', 05/04/2003, '$2y$10$F9DRoNGCsJSpQrisdVHGLekAoPQ0ESxdLM9xp/IZ5Kc4BMrGMVtMe');

-- Mot de passe décrypté : mdp

ALTER SEQUENCE Album_idAlbum_seq RESTART;
INSERT INTO Album (nom, date_ajout, image, style)VALUES
('album1', 02/05/2023, '/Image/th.jpeg', 'rock'),
('album2', 19/05/2023, '/Image/th.jpeg', 'pop'),
('album3', 01/06/2023, '/Image/th.jpeg', 'classic');

ALTER SEQUENCE Artiste_idArtiste_seq RESTART;
INSERT INTO artiste (nom) VALUES
('Artiste1'),
('Artiste2');

INSERT INTO playlist VALUES
('playlist1', 01/06/2023),
('playlist2', 01/06/2023);










