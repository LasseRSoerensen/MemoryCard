
import './App.css';
import React, { useState } from "react";
import Header from './components/Header';
import Main from './components/Main';

import bird1 from './cards/bird1.jpg';
import bird2 from './cards/bird2.jpg';
import bird3 from './cards/bird3.jpg';
import bird4 from './cards/bird4.jpg';
import butter1 from './cards/butter1.jpg';
import cat1 from './cards/cat1.jpg';
import cat2 from './cards/cat2.jpg';
import cow1 from './cards/cow1.jpg';
import dog1 from './cards/dog1.jpg';
import leopard1 from './cards/leopard1.jpg';
import ost1 from './cards/ost1.jpg';
import pinguin1 from './cards/pinguin1.jpg';
import turtle1 from './cards/turtle1.jpg';
  {/*pool of all the pictures*/}
let cardPool = [{file: bird1, active: false, picked: false}, 
{file: bird2, active: false, picked: false}, 
{file: bird3, active: false, picked: false}, 
{file: bird4, active: false, picked: false}, 
{file: butter1, active: false, picked: false}, 
{file: cat1, active: false, picked: false}, 
{file: cat2, active: false, picked: false}, 
{file: cow1, active: false, picked: false}, 
{file: dog1, active: false, picked: false}, 
{file: leopard1, active: false, picked: false}, 
{file: ost1, active: false, picked: false}, 
{file: pinguin1, active: false, picked: false}, 
{file: turtle1, active: false, picked: false}];

function App() {
  const [pool, setPool] = useState(cardPool);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  return (
    <div className="App border-2 border-black">
      <Header current={score} highest={highscore}/>
      <Main pool={pool} setPool={setPool}/>
    </div>
  );
}

export default App;
