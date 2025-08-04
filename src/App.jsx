import { useState } from 'react'
import './App.css'
import Results from './Results';
import Searchbox from './Searchbox';
import SongsSelected from './SongsSelected';
import SavedPlaylist from './SavedPlaylist';

// Main App component
function App() {
  // Sample data for search results
  const apiResult = [
    {
      id: 1,
      name: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera"
    },
    {
      id: 2,
      name: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller"
    },
    {
      id: 3,
      name: "Hey Jude",
      artist: "The Beatles",
      album: "The Beatles Again"
    }
  ];
  // Sample data for saved playlists
  const savedPlaylist=[
    {
      playlistName: "Playlist 1",
      playlistTracks: [
        {
          id: 2,
          name: "Billie Jean",
          artist: "Michael Jackson",
          album: "Thriller"
        },
        {
          id: 3,
          name: "Hey Jude",
          artist: "The Beatles",
          album: "The Beatles Again"
        }
      ],
    }
  ];
  // Sample data for selected songs
  const selection = [
    {
      id: 1,
      name: "Bohemian Rhapsody",
      artist: "Queen",
      album: "A Night at the Opera"
    },
    {
      id: 2,
      name: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller"
    },
  ];
  // State for search results
  const [searchResults, setSearchResults]=useState(apiResult);
  // State for playlists
  const [playlists, setPlaylist]=useState(savedPlaylist);
  // State for selected songs
  const [selectedSongsArray, setSelectedSongsArray]=useState(selection);

  function addTrack(trackToBeAdded){
    setSelectedSongsArray((prevSelection)=>{
      if(!prevSelection.some((element)=>element.id===trackToBeAdded.id)){
        return [...prevSelection,
          {
            name: trackToBeAdded.name,
            artist: trackToBeAdded.artist,
            album: trackToBeAdded.album,
            id: trackToBeAdded.id,
          },];
      }
      else return prevSelection;
    });
  }

  return (
    <>
      <h1 id="title">Ja<span>mmm</span>ing</h1>
      <div id="container">
        <div><Searchbox /></div>  
        <div id="itemContainer">
          <Results searchResults={searchResults} addTrackToPlaylist={addTrack} />
          <SongsSelected selection={selectedSongsArray} />
          <SavedPlaylist playlists={playlists}/>
        </div>
      </div>
    </>
  )
}

export default App;
