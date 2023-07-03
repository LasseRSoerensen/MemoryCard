import { useState } from "react";

function Header(props) {

      return (
        <div className="bg-green-100 border-2 border-red-500 ">
            CURRENT SCORE: {props.current}
            HIGH SCORE: {props.highest}
        </div>
      );
    }
    
export default Header;