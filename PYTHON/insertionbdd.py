import json
import psycopg2
from datetime import datetime, time


def truncate_string(value, max_length):
    if value is not None and len(value) > max_length:
        return value[:max_length]
    return value


def default_style(value, default_value):
    return value if value is not None else default_value


def convert_duration(duration):
    minutes, seconds = map(int, duration.split(':'))
    return time(minute=minutes, second=seconds)


with open('spotify_data.json', 'r') as f:
    json_data = json.load(f)

# Connexion à la base de données
conn = psycopg2.connect(
    dbname="projet",
    user="postgres",
    password="postgres",
    host="localhost",
    port="5432"
)

cur = conn.cursor()

# Insérer les données dans la table Artiste
for artist_data in json_data:
    artist = artist_data['artiste']
    nom_artiste = truncate_string(artist['nom'], 25)  # Tronquer à 25 caractères
    cur.execute("INSERT INTO Artiste (nom) VALUES (%s)", (nom_artiste,))

# Insérer les données dans la table Album et Titre
for artist_data in json_data:
    artist = artist_data['artiste']
    for album in artist_data['albums']:
        nom_album = truncate_string(album['nom'], 25)  # Tronquer à 25 caractères
        style_album = truncate_string(album.get('style'), 25)  # Tronquer à 25 caractères
        style_album = default_style(style_album, 'N/A')  # Valeur par défaut pour le style

        # Vérifier si la clé "images" existe et récupérer la première image
        image = album.get('image')

        # Vérifier si la clé "date_ajout" est une date valide
        date_ajout = None
        if album['date_ajout'] and album['date_ajout'].lower() != 'null':
            try:
                date_ajout = datetime.strptime(album['date_ajout'], '%Y-%m-%d').date()
            except ValueError:
                date_ajout = datetime.strptime('1970-01-01', '%Y-%m-%d').date()

        cur.execute(
            "INSERT INTO Album (nom, date_ajout, image, style, idArtiste) VALUES (%s, %s, %s, %s, (SELECT idArtiste FROM Artiste WHERE nom = %s LIMIT 1))",
            (nom_album, date_ajout, image, style_album, artist['nom']))

        for titre in album['titres']:
            nom_titre = truncate_string(titre['nom'], 25)  # Tronquer à 25 caractères

            # Vérifier si la clé "lien" existe
            lien = titre.get('lien')

            cur.execute(
                "INSERT INTO Titre (nom, duree, lien, idArtiste, idAlbum) VALUES (%s, %s, %s, (SELECT idArtiste FROM Artiste WHERE nom = %s LIMIT 1), (SELECT idAlbum FROM Album WHERE nom = %s LIMIT 1))",
                (nom_titre, convert_duration(titre['duree']), lien, artist['nom'], nom_album))

# Valider les modifications et fermer la connexion à la base de données
conn.commit()
cur.close()
conn.close()
