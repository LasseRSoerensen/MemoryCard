import { useEffect, useState } from "react";
import Card from "./Card";


function Main(props) {
  {/*TODO -- fix loading of pictures, placeholder shows for a couple of seconds*/}
  const [displayedpool, setDisplayedpool] = useState([]); 

  const generateCards = () => {
    let poolCopy = [...props.pool];
    let test = [];
    
    for (let i = 0; test.length < 8; i++) {
      const card = (poolCopy[Math.floor(Math.random()*poolCopy.length)]);
      test.push(card);
      poolCopy = poolCopy.filter(item => item.file != card.file);
    }

    setDisplayedpool(test);
  }

  useEffect(() => {generateCards();}, []);

const shownCards = displayedpool.map(card => <Card img={card.file} status={card.picked} current={props.current}/>); 
  return (
    <div className="border-2 border-black h-screen flex-wrap flex flex-row content-center justify-center gap-2">  
      {shownCards} 
    </div>
  );
}
    
export default Main;