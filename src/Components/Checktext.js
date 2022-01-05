import React, { useState } from "react";
import "../Styles/checktext.css"




const Checktext = ({icon , bigText , smallText , setCo , co , changer , style , color , hiC, smallC}) => {
  const [a , gen] = useState(0)
    const dar = (color) => {
  
      
           
            
            
            if(a==0){
              changer("green")
              smallC("applied")
              hiC("green")
              gen(1)
            }else if(a==1){
              changer("orange")
              smallC("awaiting")
              hiC("orange")
              
              gen(2)
            }else if(a==2){
              changer('#9499C3')
              smallC("normal")
              hiC("#9499C3")
              gen(0)
           
            }
    }

    return <div  className="checktext">
            <div className="icon-container">
            <img style={setCo} className="icon"src={icon} alt={"icon"}/>
            </div>
            <div className="Texts">
                <h1  className="bigText"onClick={() => dar(color)} style={style}>{bigText}</h1>
                <h3 style={co} className="smallText">{smallText}</h3>
            </div>

    </div>
}
export default Checktext;
  


    