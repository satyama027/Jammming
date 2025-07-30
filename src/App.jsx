import { useState } from 'react'
import './App.css'
import Results from './results';
import Searchbox from './searchbox';
import AddedSongs from './addedSongs';

function App() {
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
  const [searchResults, setSearchResults]=useState(apiResult);

  return (
    <>
      <h1 id="title">Ja<span>mmm</span>ing</h1>
      <div id="container">
        <div><searchbox /></div>  
        <div id="itemContainer">
          <Results searchResults={searchResults} />
          {AddedSongs()}
        </div>
      </div>
    </>
  )
}

export default App;
