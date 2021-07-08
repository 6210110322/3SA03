import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';

const word = "Hello";

function App() {
  return (
    <div>
      {
        Array.from(word).map((c, i) => <CharacterCard value={c} key={i}/>)
      }
        <CharacterCard/>
    </div>
  );
}

export default App;
