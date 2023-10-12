import React, {useState, useEffect} from 'react';


import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';


const CLIENT_ID = '8d368dbdace449f5b45f05783d93876f';
const CLIENT_SECRET = 'a5dac327453c4ad5943f63f8bd0bff6f';

function App() {

  const [accessToken, setAccessToken] = useState('');

  const [searchBar, setSearchBar] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]);
  
  useEffect(() => {
    var authParams = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParams)
    .then(result => result.json())
    .then(data => setAccessToken(data.access_token))
  },[])

  async function search() {
    if (!searchBar) {
      return;
    }
    var trackParams = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    var trackID = await fetch('https://api.spotify.com/v1/search?q=' + searchBar + '&type=track', trackParams)
      .then(response => response.json())
      .then(data => setSearchResults(data.tracks.items.map(track => {
        return {
          song: track.name,
          artist: track.artists.map(artist => artist.name).join(', '),
          album: track.album.name,
          uri: track.uri,
          key: track.uri,
          id: track.uri
        };
      })))  
  }
  
  function updatePlaylistName(newName) {
    setPlaylistName(newName);
  }
  
  function addSong(track) {

    if (playlistTracks.find(element => element.id === track.id)) {
      return;
    } else {
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    }
    
  }

  function removeSong(trackToRemove) {
    setPlaylistTracks((prevTracks) => {
      return prevTracks.filter(currentTrack => currentTrack.id !== trackToRemove.id)
    });
  }

  function savePlaylist() {
    const uris = playlistTracks.map(track => track.uri);
    // useEffect(() => {
      //   /* SEND PLAYLIST AND USER INFO TO SPOTIFY API */
    // }
    // , [playlistTracks, playlistName])
  }

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar onSearch={search} searchBar={searchBar} setSearchBar={setSearchBar} />
      <SearchResults tracks={searchResults}
                     onAdd={addSong}/>
      <Playlist playlistName={playlistName} 
                playlistTracks={playlistTracks}
                onNameChange={updatePlaylistName}
                onRemove={removeSong} />
    </div>
  );
}

export default App;
