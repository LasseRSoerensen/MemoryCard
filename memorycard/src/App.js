
import './App.css';
import Card from './components/Card';
import React, { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [pool, setPool] = useState([]);
{/* put here array to keep track of all cards present from the card pool, so the same 
is not displayed twice. Also keep track of score and user pick */}
  return (
    <div className="App flex flex-row">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
  
    </div>
  );
}

export default App;
