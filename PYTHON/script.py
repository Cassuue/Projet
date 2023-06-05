import spotipy
import json
from spotipy.oauth2 import SpotifyClientCredentials

# Remplacez par vos propres identifiants
client_id = '6bd650d33cc641879da76691198435b1'
client_secret = 'be9464b72022403caa2cd3a4bef8e413'

client_credentials_manager = SpotifyClientCredentials(client_id=client_id, client_secret=client_secret)
sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

# Liste des noms d'artistes
artist_names = [
    'Ed Sheeran', 'Taylor Swift', 'Drake', 'Ariana Grande', 'Justin Bieber', 'Beyoncé',
    'The Weeknd', 'Rihanna', 'Bruno Mars', 'Billie Eilish', 'Kanye West', 'Post Malone',
    'Katy Perry', 'Lady Gaga', 'Shawn Mendes', 'Maroon 5', 'Dua Lipa', 'Coldplay',
    'Eminem', 'Adele', 'Imagine Dragons', 'Sam Smith', 'Sia', 'Camila Cabello',
    'Lizzo'
]


data = []

for artist_name in artist_names:
    # Recherche de l'artiste
    result = sp.search(q='artist:' + artist_name, type='artist')
    try:
        artist = result['artists']['items'][0]
        artist_uri = artist['uri']
    except IndexError:
        print(f"Aucun artiste trouvé pour {artist_name}")
        continue

    # Récupération des albums de l'artiste
    albums = sp.artist_albums(artist_uri, album_type='album')

    artist_data = {
        "artiste": {
            "idArtiste": artist['id'],
            "nom": artist['name']
        },
        "albums": []
    }

    # Parcours des albums
    for album in albums['items']:
        # Récupération des pistes de l'album
        tracks = sp.album_tracks(album['id'])

        album_data = {
            "idAlbum": album['id'],
            "nom": album['name'],
            "date_ajout": album['release_date'],
            "image": album['images'][0]['url'] if album['images'] else None,
            "style": artist['genres'][0] if artist['genres'] else None,
            "titres": []
        }

        for track in tracks['items']:
            track_data = {
                "idTitre": track['id'],
                "nom": track['name'],
                "duree": str(int(track['duration_ms'] / 60000)) + ":" + str(int((track['duration_ms'] % 60000) / 1000)).zfill(2),
                "lien": track['external_urls']['spotify']
            }
            album_data['titres'].append(track_data)

        artist_data['albums'].append(album_data)

    data.append(artist_data)

# Écriture des données dans un fichier JSON
with open('spotify_data.json', 'w') as f:
    json.dump(data, f, indent=4)
