import React from "react";
import "../Styles/drops.css"
 
const Date = ({dateinj}) => {
    
    return <div> 
         <h1 className="title">Date</h1>
         <select className="dropdown1" onChange={(e)=> {
             const date = e.target.value;
             dateinj(date)

         }}>
                <option value="Today">Today</option>
                <option value="Yesterday">Yesterday</option>
                <option value="Tomorrow">Tomorrow</option>
                
               

            </select>
            
            

    </div>
     
}

export default Date