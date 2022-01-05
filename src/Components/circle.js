import React from "react";
import "../Styles/circle.css"

const Circle = ({title, color, text}) => {
    
     return <div className="dur">
                <div className="circle"  >
                    <h3 className="title" >{title}</h3>
                    <h1 className="main"  style={{color: color}} >{text}</h1>

                </div>
            </div>
}

export default Circle