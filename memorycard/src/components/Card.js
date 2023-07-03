import { useState } from "react";

function Card(props) { 

  function handleClick() {
    if (props.picked === true) {
      alert('THIS HAS ALREADY BEEN CLICKED');
      props.setHighscore(props.score);
      props.setScore(0);

      props.setPool(props.pool.map(item => {

          return {...item, picked: false};
      }));

    } else {
      props.setScore(props.score + 1);
      props.setPool(props.pool.map(item => {
        if (item.file === props.img) {
          return {...item, picked: true};
        } else {
          return item;
        }
      }));
    }
    console.log(props.pool);
  } 

  return (
    <div className="bg-green-100 flex border-2 border-red-500 basis-100 self-start basis-40 h-40 ">
      <button className="flex-1 flex"><img className="flex-1 bg-fixed" src={props.img} alt="my image" onClick={handleClick} /></button>
    </div>
  );
    }
    
export default Card;