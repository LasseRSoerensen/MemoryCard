import { useEffect, useState } from "react";
import Card from "./Card";
import { motion } from "framer-motion"


const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};
function Main(props) {
  {/*TODO -- fix loading of pictures, placeholder shows for a couple of seconds
  Slider og animation til antal felter 
  animationer til resten af siden 
  color coding 
*/}
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


const shownCards = displayedpool.map(card => <Card pool={props.pool} setPool={props.setPool} img={card.file} picked={card.picked} score={props.score} setScore={props.setScore} highscore={props.highscore} setHighscore={props.setHighscore}/>); 
  




return (
    <motion.div 

    className="border-2 border-black h-screen flex-wrap flex flex-row content-center justify-center gap-2">  
      {shownCards} 
    </motion.div>
  );
}
    
export default Main;