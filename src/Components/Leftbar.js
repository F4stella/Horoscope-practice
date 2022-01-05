import Checktext from "./Checktext";
import '../Styles/leftbar.css'
import { useState } from "react";

const Leftbar = () => {
    const [color , changer] = useState('#9499C3');
    const [color2 , changer2] = useState('#9499C3');
    const [color3 , changer3] = useState('#9499C3');
    const [color4 , changer4] = useState('#9499C3');
    const [color5 , changer5] = useState('#9499C3');
    const [color6 , changer6] = useState('#9499C3');
    const [color7 , changer7] = useState('#9499C3');

    const [small , smallC] = useState('normal');
    const [small2 , smallC2] = useState('normal');
    const [small3 , smallC3] = useState('normal');
    const [small4 , smallC4] = useState('normal');
    const [small5 , smallC5] = useState('normal');
    const [small6 , smallC6] = useState('normal');
    const [small7 , smallC7] = useState('normal');


    const [hi , hiC] = useState("#9499C3")
    const [hi2 , hiC2] = useState("#9499C3")
    const [hi3 , hiC3] = useState("#9499C3")
    const [hi4 , hiC4] = useState("#9499C3")
    const [hi5 , hiC5] = useState("#9499C3")
    const [hi6 , hiC6] = useState("#9499C3")
    const [hi7 , hiC7] = useState("#9499C3")

    
     return <div className="leftbar">
         <Checktext bigText={"ALL SYSTEMS CHECK"} icon={"https://upload.wikimedia.org/wikipedia/commons/6/69/How_to_use_icon.svg"} smallText={small} changer={changer}color={color}style={{"color":color , }} smallC={smallC}setCo={{"background-color":hi}} hiC={hiC}/>
         <Checktext bigText={"RENDEZVOUS BURN SLOW"} icon={"https://upload.wikimedia.org/wikipedia/commons/6/69/How_to_use_icon.svg"} smallText={small2} changer={changer2}color={color2} style={{"color":color2, }}smallC={smallC2}setCo={{"background-color":hi2}}hiC={hiC2}/>
         <Checktext bigText={"PREPARE RENDEZVOUS BURN"} icon={"https://upload.wikimedia.org/wikipedia/commons/6/69/How_to_use_icon.svg"} smallText={small3} changer={changer3}color={color3} style={{"color":color3,}}smallC={smallC3}setCo={{"background-color":hi3}}hiC={hiC3}/>
         <Checktext bigText={"THERMAL SHIELD"}  changer={changer4}color={color4}style={{"color":color4}} smallText={small4}  setCo={{"background-color":hi4}}icon={"https://upload.wikimedia.org/wikipedia/commons/6/69/How_to_use_icon.svg"}  smallC={smallC4}hiC={hiC4}/>
         <Checktext bigText={"BURN GO/NO-GO"} icon={"https://upload.wikimedia.org/wikipedia/commons/6/69/How_to_use_icon.svg"} smallText={small5} changer={changer5}color={color5}style={{"color":color5, }}smallC={smallC5}setCo={{"background-color":hi5}}hiC={hiC5}/>
         <Checktext bigText={"POWER COMPLETION"} icon={"https://upload.wikimedia.org/wikipedia/commons/6/69/How_to_use_icon.svg"} smallText={small6} changer={changer6}color={color6}style={{"color":color6, }}smallC={smallC6}setCo={{"background-color":hi6}}hiC={hiC6}/>
         <Checktext bigText={"STATION DECK CHECK"} icon={"https://upload.wikimedia.org/wikipedia/commons/6/69/How_to_use_icon.svg"} smallText={small7} changer={changer7}color={color7}style={{"color":color7, }}smallC={smallC7}setCo={{"background-color":hi7}}hiC={hiC7}/>
       
     </div>


}
export default Leftbar 