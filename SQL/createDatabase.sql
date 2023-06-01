------------------------------------------------------------
--        Script Postgre 
------------------------------------------------------------

DROP TABLE IF EXISTS Utilisateur CASCADE;
DROP TABLE IF EXISTS Titre CASCADE;
DROP TABLE IF EXISTS Album CASCADE;
DROP TABLE IF EXISTS Artiste CASCADE;
DROP TABLE IF EXISTS Playlist CASCADE;
DROP TABLE IF EXISTS ecrire CASCADE;
DROP TABLE IF EXISTS ecouter CASCADE;
DROP TABLE IF EXISTS composer CASCADE;
DROP TABLE IF EXISTS appartenir CASCADE;
DROP TABLE IF EXISTS avoir CASCADE;


------------------------------------------------------------
-- Table: Utilisateur
------------------------------------------------------------
CREATE TABLE public.Utilisateur(
	mail             VARCHAR (50) NOT NULL ,
	nom              VARCHAR (50) NOT NULL ,
	prenom           VARCHAR (50) NOT NULL ,
	date_naissance   DATE  NOT NULL ,
	mdp              VARCHAR (100) NOT NULL  ,
	CONSTRAINT Utilisateur_PK PRIMARY KEY (mail)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Titre
------------------------------------------------------------
CREATE TABLE public.Titre(
	idTitre   SERIAL NOT NULL ,
	nom       VARCHAR (50) NOT NULL ,
	duree     FLOAT  NOT NULL ,
	lien      VARCHAR (50) NOT NULL  ,
	CONSTRAINT Titre_PK PRIMARY KEY (idTitre)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Album
------------------------------------------------------------
CREATE TABLE public.Album(
	idAlbum      SERIAL NOT NULL ,
	nom          VARCHAR (50) NOT NULL ,
	date_ajout   DATE  NOT NULL ,
	image        VARCHAR (50) NOT NULL ,
	style        VARCHAR (50) NOT NULL  ,
	CONSTRAINT Album_PK PRIMARY KEY (idAlbum)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Artiste
------------------------------------------------------------
CREATE TABLE public.Artiste(
	idArtiste   SERIAL NOT NULL ,
	nom         VARCHAR (50) NOT NULL  ,
	CONSTRAINT Artiste_PK PRIMARY KEY (idArtiste)
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: Playlist
------------------------------------------------------------
CREATE TABLE public.Playlist(
	nom             VARCHAR (50) NOT NULL ,
	date_creation   DATE  NOT NULL ,
	mail            VARCHAR (50) NOT NULL  ,
	CONSTRAINT Playlist_PK PRIMARY KEY (nom)

	,CONSTRAINT Playlist_Utilisateur_FK FOREIGN KEY (mail) REFERENCES public.Utilisateur(mail) ON DELETE CASCADE
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: ecrire
------------------------------------------------------------
CREATE TABLE public.ecrire(
	idTitre     INT  NOT NULL ,
	idArtiste   INT  NOT NULL  ,
	CONSTRAINT ecrire_PK PRIMARY KEY (idTitre,idArtiste)

	,CONSTRAINT ecrire_Titre_FK FOREIGN KEY (idTitre) REFERENCES public.Titre(idTitre) ON DELETE CASCADE
	,CONSTRAINT ecrire_Artiste0_FK FOREIGN KEY (idArtiste) REFERENCES public.Artiste(idArtiste) ON DELETE CASCADE
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: composer
------------------------------------------------------------
CREATE TABLE public.composer(
	idAlbum     INT  NOT NULL ,
	idArtiste   INT  NOT NULL  ,
	CONSTRAINT composer_PK PRIMARY KEY (idAlbum,idArtiste)

	,CONSTRAINT composer_Album_FK FOREIGN KEY (idAlbum) REFERENCES public.Album(idAlbum) ON DELETE CASCADE
	,CONSTRAINT composer_Artiste0_FK FOREIGN KEY (idArtiste) REFERENCES public.Artiste(idArtiste) ON DELETE CASCADE
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: appartenir
------------------------------------------------------------
CREATE TABLE public.appartenir(
	idTitre      INT  NOT NULL ,
	nom          VARCHAR (50) NOT NULL ,
	date_ajout   DATE  NOT NULL  ,
	CONSTRAINT appartenir_PK PRIMARY KEY (idTitre,nom)

	,CONSTRAINT appartenir_Titre_FK FOREIGN KEY (idTitre) REFERENCES public.Titre(idTitre) ON DELETE CASCADE
	,CONSTRAINT appartenir_Playlist0_FK FOREIGN KEY (nom) REFERENCES public.Playlist(nom) ON DELETE CASCADE
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: avoir
------------------------------------------------------------
CREATE TABLE public.avoir(
	idAlbum   INT  NOT NULL ,
	idTitre   INT  NOT NULL  ,
	CONSTRAINT avoir_PK PRIMARY KEY (idAlbum,idTitre)

	,CONSTRAINT avoir_Album_FK FOREIGN KEY (idAlbum) REFERENCES public.Album(idAlbum) ON DELETE CASCADE
	,CONSTRAINT avoir_Titre0_FK FOREIGN KEY (idTitre) REFERENCES public.Titre(idTitre) ON DELETE CASCADE
)WITHOUT OIDS;


------------------------------------------------------------
-- Table: ecouter
------------------------------------------------------------
CREATE TABLE public.ecouter(
	idTitre   INT  NOT NULL ,
	mail      VARCHAR (50) NOT NULL ,
	numero    INT  NOT NULL ,
	favori    BOOL  NOT NULL  ,
	CONSTRAINT ecouter_PK PRIMARY KEY (idTitre,mail)

	,CONSTRAINT ecouter_Titre_FK FOREIGN KEY (idTitre) REFERENCES public.Titre(idTitre) ON DELETE CASCADE
	,CONSTRAINT ecouter_Utilisateur0_FK FOREIGN KEY (mail) REFERENCES public.Utilisateur(mail) ON DELETE CASCADE
)WITHOUT OIDS;
