import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import results from './results';
import searchbox from './searchbox';
import addedSongs from './addedSongs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 id="title">Ja<span>mmm</span>ing</h1>
      <div id="container">
        <div>{searchbox()}</div>  
        <div id="itemContainer">
          {results()}
          {addedSongs()}
        </div>
      </div>
    </>
  )
}

export default App;
