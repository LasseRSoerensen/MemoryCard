import { useState } from "react";
import Card from "./Card";
import bird1 from '../cards/bird1.jpg';
import bird2 from '../cards/bird2.jpg';
import bird3 from '../cards/bird3.jpg';
import bird4 from '../cards/bird4.jpg';
import butter1 from '../cards/butter1.jpg';
import cat1 from '../cards/cat1.jpg';
import cat2 from '../cards/cat2.jpg';
import cow1 from '../cards/cow1.jpg';
import dog1 from '../cards/dog1.jpg';
import leopard1 from '../cards/leopard1.jpg';
import ost1 from '../cards/ost1.jpg';
import pinguin1 from '../cards/pinguin1.jpg';
import turtle1 from '../cards/turtle1.jpg';

function Main() {

    {/*pool of all the pictures*/}
    const pool = [{"file": bird1, "active": false, "picked": false}, 
    {"file": bird2, "active": false, "picked": false}, 
    {"file": bird3, "active": false, "picked": false}, 
    {"file": bird4, "active": false, "picked": false}, 
    {"file": butter1, "active": false, "picked": false}, 
    {"file": cat1, "active": false, "picked": false}, 
    {"file": cat2, "active": false, "picked": false}, 
    {"file": cow1, "active": false, "picked": false}, 
    {"file": dog1, "active": false, "picked": false}, 
    {"file": leopard1, "active": false, "picked": false}, 
    {"file": ost1, "active": false, "picked": false}, 
    {"file": pinguin1, "active": false, "picked": false}, 
    {"file": turtle1, "active": false, "picked": false}, ];
    
    {/*TODO -- fix loading of pictures, placeholder shows for a couple of seconds*/}
    {/*function which picks a random picture to display, and insures no duplicates*/}
    const randomCard = () => {
      const inactivePool = pool.filter(card => card.active === false);
      const card = inactivePool[Math.floor(Math.random()*inactivePool.length)];
      
      for (let i = 0; i < pool.length; i++) {
        if(pool[i].file === card.file) {
          pool[i].active = true; 
        }
      } 

      return card;
    }


    {/*Array of displayed cards, and mapping to Card component*/}
    const displayedPool = [randomCard(), randomCard(), randomCard(), randomCard(), randomCard(), randomCard(), randomCard(), randomCard()]
    const shownCards = displayedPool.map(card => <Card img={card.file}/>); 

      return (
        <div className="border-2 border-black h-screen flex-wrap flex flex-row content-center justify-center gap-2">
          {shownCards}
        </div>
      );
    }
    
export default Main;