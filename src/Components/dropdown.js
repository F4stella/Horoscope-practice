import React from "react";
import "../Styles/drops.css"
 
const Dropdown = ({selectInj}) => {
    return <div> 
         <h1 className="title">Sign</h1>
         <select className="dropdown1" onChange={(e)=>{
             const selectedsign = e.target.value
             selectInj(selectedsign)
          }}>
                <option value="Cancer">Cancer</option>
                <option value="Taurus">Taurus</option>
                <option value="Virgo">Virgo</option>
                <option value="Capricorn">Capricorn</option>
                <option value="Aquarius">Aquarius</option>
                <option value="Libra">Libra</option>
                <option value="Scorpio">Scorpio</option>
                <option value="Pisces">Pisces</option>
                <option value="Gemini">Gemini</option>
                <option value="Leo">Leo</option>
                <option value="Sagittarius">Sagittarius</option>
                <option value="Aries">Aries</option>

            </select>

    </div>
     
}

export default Dropdown