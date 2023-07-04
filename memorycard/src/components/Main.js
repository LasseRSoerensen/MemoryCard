import { useEffect, useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion"


{/* Component that renders the main page which contains the cards and the dialog box*/}
function Main(props) {

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

  useEffect(() => {generateCards();}, [props.pool]);


const shownCards = displayedpool.map(card => < Card setReset={props.setReset} pool={props.pool} setPool={props.setPool} img={card.file} picked={card.picked} score={props.score} setScore={props.setScore} highscore={props.highscore} setHighscore={props.setHighscore}/>); 

return (
    <motion.div 
    className="   flex-wrap flex flex-1 flex-row content-center justify-center gap-4">  
      {shownCards} 
    </motion.div>
  );
}
    
export default Main;