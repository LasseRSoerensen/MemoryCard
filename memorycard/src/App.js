
import './App.css';
import React, { useState } from "react";
import Header from './components/Header';
import Main from './components/Main';
import Options from './components/Options';
import bird1 from './cards/bird1.jpg';
import bird2 from './cards/bird2.jpg';
import bird3 from './cards/bird3.jpg';
import bird4 from './cards/bird4.jpg';
import bird5 from './cards/bird5.jpg';
import bird6 from './cards/bird6.jpg';
import butter1 from './cards/butter1.jpg';
import cat1 from './cards/cat1.jpg';
import cat2 from './cards/cat2.jpg';
import cat3 from './cards/cat3.jpg';
import cat4 from './cards/cat4.jpg';
import cat5  from './cards/cat5.jpg';
import cow1 from './cards/cow1.jpg';
import dog1 from './cards/dog1.jpg';
import leopard1 from './cards/leopard1.jpg';
import ost1 from './cards/ost1.jpg';
import pinguin1 from './cards/pinguin1.jpg';
import pinguin2 from './cards/pinguin2.jpg';
import turtle1 from './cards/turtle1.jpg';
import fox1 from './cards/fox1.jpg';
import turtle2 from './cards/turtle2.jpg';
import horse1 from './cards/horse1.jpg';
import monkey1 from './cards/monkey1.jpg';
import lion1 from './cards/lion1.jpg';
import tiger1 from './cards/tiger1.jpg';
import camel1 from './cards/camel1.jpg';
import deer1 from './cards/deer1.jpg';
import racoon1 from './cards/racoon1.jpg';
import sheep1 from './cards/sheep1.jpg';
import hamster1 from './cards/hamster1.jpg';



  {/*pool of all the pictures*/}
let cardPool = [{file: bird1, active: false, picked: false}, 
{file: bird2, active: false, picked: false}, 
{file: bird3, active: false, picked: false}, 
{file: bird4, active: false, picked: false}, 
{file: bird5, active: false, picked: false}, 
{file: bird6, active: false, picked: false}, 
{file: butter1, active: false, picked: false}, 
{file: cat1, active: false, picked: false}, 
{file: cat2, active: false, picked: false}, 
{file: cat3, active: false, picked: false}, 
{file: cat4, active: false, picked: false}, 
{file: cat5, active: false, picked: false}, 
{file: cow1, active: false, picked: false}, 
{file: dog1, active: false, picked: false}, 
{file: leopard1, active: false, picked: false}, 
{file: ost1, active: false, picked: false}, 
{file: pinguin1, active: false, picked: false}, 
{file: pinguin2, active: false, picked: false},  
{file: fox1, active: false, picked: false}, 
{file: horse1, active: false, picked: false}, 
{file: monkey1, active: false, picked: false}, 
{file: lion1, active: false, picked: false}, 
{file: tiger1, active: false, picked: false}, 
{file: camel1, active: false, picked: false}, 
{file: deer1, active: false, picked: false}, 
{file: racoon1, active: false, picked: false}, 
{file: sheep1, active: false, picked: false}, 
{file: hamster1, active: false, picked: false},
{file: turtle1, active: false, picked: false},
{file: turtle2, active: false, picked: false}];

function App() {
  const [pool, setPool] = useState(cardPool);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  return (
    <div className="bg-orange-50 App flex flex-col h-screen">
      <Header current={score} highest={highscore}/>
      <Options setScore={setScore} setHighscore={setHighscore} pool={pool} setPool={setPool} cardPool={cardPool}/>
      <Main pool={pool} setPool={setPool} score={score} setScore={setScore} highscore={highscore} setHighscore={setHighscore}/>
    </div>
  );
}

export default App;
