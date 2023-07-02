import { useState } from "react";
import Card from "./Card";
import birds from '../cards/birds.jpg';
import cows from '../cards/cow.jpg';
import leopard from '../cards/leopard.jpg';
import pinguin from '../cards/pinguin.jpg';
{/* should contain states of the picture, if it has been clicked, if it has been clicked before */}

function Main() {
    const [image, setImage] = useState(""); 

    {/* make the image div clickable and have a function to run when clicked */}

    {/* put here array to keep track of all cards present from the card pool, so the same 
    is not displayed twice. Also keep track of score and user pick */}
      return (
        <div className="border-2 border-black h-screen flex-wrap flex flex-row content-center justify-center gap-2">
            <Card/>
            <Card img={birds}/>
            <Card img={cows}/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      );
    }
    
export default Main;