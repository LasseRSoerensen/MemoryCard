import { useState } from "react";

{/* should contain states of the picture, if it has been clicked, if it has been clicked before */}

function Header() {
    const [image, setImage] = useState(""); 

    {/* make the image div clickable and have a function to run when clicked */}

    {/* put here array to keep track of all cards present from the card pool, so the same 
    is not displayed twice. Also keep track of score and user pick */}
      return (
        <div className="bg-green-100 border-2 border-red-500 ">
            HEADER
        </div>
      );
    }
    
export default Header;