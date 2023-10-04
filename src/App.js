import React, {useState} from 'react';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  function search(song) {
    /* RETRIEVE ARRAY OF OBJECTS FROM SPOTIFY API */
    setSearchResults([
      {
          id: '1',
          song: 'song11',
          album: 'album1',
          artist: 'person1',
          uri: '100'
      },
      {
          id: '2',
          song: 'song22',
          album: 'album2',
          artist: 'person2',
          uri: '200'
      }
    ]);
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
    useEffect(
      /* SEND PLAYLIST AND USER INFO TO SPOTIFY API */
    
    , [playlistTracks, playlistName])
  }

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar onSearch={search} />
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
