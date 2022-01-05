import logo from './logo.svg';
import "./Styles/App.css";
import Leftbar from './Components/Leftbar';
import Button from './Components/button';
import Rocket from './Components/rocket';
import { useState, useEffect } from 'react';
import Body from './Components/body';
import axios from "axios";
import Go from './Components/go';
import Result from './Components/result';
import Loader from './Components/loader';
import { BoxLoading } from 'react-loadingg';



function App() {
  const button = () => {
    setToggle(!toggle)
  }
  const [toggle, setToggle] = useState(true);
  const [selected, selectInj] = useState("cancer")
  const [selecteddate, dateinj] = useState("Today")
  const [sentence, sentenceinj] = useState("")
  const [color, colorinj] = useState("black")
  const [go, goinj] = useState(true)
  const [luckytime, luckytimeinj] = useState("12pm")

  const [number, numberinj] = useState(1)
  const [mood, moodinj] = useState("cool")
  const [compatibility, compatibilityinj] = useState("ss")
  const [data, datainj] = useState(undefined)
  console.log(selecteddate)
  console.log(selected)




  const gobutton = () => {
    goinj(!go)




    const options = {
      method: 'POST',
      url: 'https://sameer-kumar-aztro-v1.p.rapidapi.com/',
      params: { sign: selected, day: selecteddate },
      headers: {
        'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'x-rapidapi-key': '8c33508dd4msh676ad019c5c042cp1f524ajsn2388a769cd1c'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data, 'asdasdsa');
      sentenceinj(response.data.description)
      colorinj(response.data.color)
      luckytimeinj(response.data.lucky_time)
      compatibilityinj(response.data.compatibility)
      moodinj(response.data.mood)
      numberinj(response.data.lucky_number)
      datainj(response)

    }).catch(function (error) {
      console.error(error);
    });

  }





  return <div className="App">
    <div className="Leftside">
      {toggle ? <Leftbar /> : <Rocket />}
      <Button button={button} toggle={toggle} setToggle={setToggle} />

    </div>


    {go ? <Body gobutton={gobutton} selected={selected} selectInj={selectInj} dateinj={dateinj} selecteddate={selecteddate} /> : data == undefined ? <BoxLoading /> : <Result number={number} mood={mood} compatibility={compatibility} sentence={sentence} luckytime={luckytime} color={color} />}



  </div>
}

export default App;
