import { useState } from "react";
import logo from '../cards/leopard.jpg';
{/* should contain states of the picture, if it has been clicked, if it has been clicked before */}

function Card() {
  const [image, setImage] = useState(""); 


  function handleClick() {
    alert('You clicked me!');
  }
    {/* make the image div clickable and have a function to run when clicked */}

    {/* put here array to keep track of all cards present from the card pool, so the same 
    is not displayed twice. Also keep track of score and user pick */}
      return (
        <div className="bg-green-100 flex border-2 border-red-500 basis-100 self-start basis-40 h-40 ">
          <button className="flex-1 flex"><img className="flex-1 bg-fixed" src={logo} alt="my image" onClick={handleClick} /></button>
        </div>
      );
    }
    
export default Card;