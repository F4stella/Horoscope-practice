import React from "react";
import "../Styles/result.css" 
import Circle from "./circle";

const Result = ({sentence , luckytime , color, compatibility, mood , number}) => {
    return <div className="result-container">
         <h1 className="name">HOROSCOPE</h1>
        <div className="cicles">
            <Circle title={"Color"} color={color} text={color}/>
            <Circle title={"lucky time"} color={"lightgreen"}text={luckytime}/>
            <Circle title={"lucky number"}color={"cyan"}text={number}/>
            <Circle title={"mood"} color={"purple"}text={mood}/>
            <Circle title={"compability"} color={"yellow"}text={compatibility}/>
           


        </div>
        <div className="sentence">
            {sentence}

        </div>


    </div>
}

export default Result