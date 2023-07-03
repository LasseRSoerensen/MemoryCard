import { useState } from "react";

function Card(props) { 

  function handleClick() {
    if (props.status === true) {
      alert('THIS HAS ALREADY BEEN CLICKED');
    } else {

      props.current[1](props.current[0] + 1);
      for (let i = 0; i < props.cardcollection[0].length; i++) {
        if(props.cardcollection[0][i].file === props.img) {
          props.cardcollection[1]([i].picked = true); 
        }
      } 
    }
  }

  return (
    <div className="bg-green-100 flex border-2 border-red-500 basis-100 self-start basis-40 h-40 ">
      <button className="flex-1 flex"><img className="flex-1 bg-fixed" src={props.img} alt="my image" onClick={handleClick} /></button>
    </div>
  );
    }
    
export default Card;