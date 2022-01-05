import React, { useState } from "react";
import "../Styles/button.css"

const Button = ({button , toggle}) => {
  

  
    
    
    return <button onClick={button} className="button">
        <div className={toggle ? 'system' : 'nosystem'}>Systems</div>
        <div className={toggle ? 'cabin' : 'system'}>Cabin</div>
    </button>
}


export default Button