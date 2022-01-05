import React from "react";
import '../Styles/body.css'
import Dropdown from "./dropdown";
import Date from "./date";
import Go from "./go";



const Body = ({selectInj , dateinj , gobutton} ) => {
   return <div className="body">
       <h1 className="name">HOROSCOPE</h1>
       <div className="dropuud">
            <Dropdown selectInj={selectInj}/>
            <Date dateinj={dateinj}/>
            <Go gobutton={gobutton}/>
       </div>
       

          </div>
 

    
 
}

export default Body