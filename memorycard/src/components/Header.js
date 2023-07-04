{/* Component that renders the header */}
function Header(props) {
  
      return (
        <div className="bg-red-400 font-bold font-mono text-white text-xl">
            <h1 className="text-yellow-300">HIGH SCORE: {props.highest}</h1>
            <h1>CURRENT SCORE: {props.current}</h1>
            
        </div>
      );
    }
    
export default Header;