import { motion } from "framer-motion"

{/* compoment which renders the card*/}
function Card(props) { 
{/* if the card have been picked before it stops the game, else it keeps track of picked cards*/}
{/* also handles score and highscore count*/}
  function handleClick() {
    if (props.picked === true) {
      props.setReset(true)
      if(props.score > props.highscore) {
        props.setHighscore(props.score);
      }
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
  } 
  
  return (
    <motion.div 
    
    initial={{opacity: 0, translateX: 0, translateY: -500}}
    animate={{opacity: 1, translateX: 0, translateY: 0}}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", bounce: 0, stiffness: 400, damping: 40, duration: 3 }}
    
    className=" rounded-2xl overflow-hidden shadow-2xl flex basis-100 self-start basis-40 h-40 ">
      <button className="flex-1 flex"><img className="flex-1 bg-fixed" src={props.img} alt="my image" onClick={handleClick} /></button>
    </motion.div>
  );
    }
    
export default Card;