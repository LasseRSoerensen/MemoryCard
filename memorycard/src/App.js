
import './App.css';
import Card from './components/Card';
import React, { useState } from "react";
import Header from './components/Header';
import Main from './components/Main';
function App() {
  const [cards, setCards] = useState([]);
  const [pool, setPool] = useState([]);
{/* put here array to keep track of all cards present from the card pool, so the same 
is not displayed twice. Also keep track of score and user pick     <div className="App flex flex-wrap gap-4 h-screen flex-row items-center"> */}
  return (
    <div className="App border-2 border-black">
      <Header/>
      <Main/>
  
    </div>
  );
}

export default App;
