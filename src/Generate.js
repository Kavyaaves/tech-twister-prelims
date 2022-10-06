import React, { useState, useEffect } from 'react'
import "./Generate.css"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
function Generate() {
  const [twistNo, setTwistNo] = useState(0)
    const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [percent, setPercent] = useState(0)
  const twisters = [
    "Charge Recharge Discharge",
    "Swish Swish Sound",
    "Thirty three thousand threshold thrushes entry",
    "Black ground Brown Ground",
    "Soldier sold soldered silver",
    "Nine nice right fuses fluxes rarely",
    "Flip flop flipped on Slopy slope",
    "Fred lead breadboard",
    "Red lead Blue lead",
    "Resistor Capacitor Transistor",
    "Which wrist watches are swiss wrist watches",
    "United states Twin-screw steel cruises",
    "Six sticky skeleton",
    "Auricular vein ventricular vein"
  ]
  const max = twisters?.length;
  const min = 1;
  const handleClick = async () => {
    setSeconds(30);
    setIsActive(false);
    let rand = Math.floor(Math.random() * (max - min + 1)) + min
    setTwistNo(rand)

  }
console.log(twistNo)

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(30);
    setIsActive(false);
  }


  useEffect(() => {
    let interval = null;
    if (isActive) {
        interval = setInterval(() => {
            if (seconds !== 0) {
                setSeconds(seconds => seconds - 1);
            } else {
                setSeconds(30)
                setIsActive(false);
          }
         setPercent((percent + 1) %30)
      }, 1000);
    } else if (!isActive && seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);
  return (
    <div>
          <div style={{display: 'flex', flexDirection: "column",alignItems: 'center', justifyContent: 'space-evenly'}}>
     
      <br/>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
        <button style={{ backgroundColor: 'gold',border:0, color: "#fff",cursor: "pointer", borderRadius: 10, paddingLeft: 20, paddingRight: 20, paddingBottom:10, paddingTop:10, color: "#162252"}} onClick={toggle}>
          <span style={{fontSize:16}}>{isActive ? 'Pause' : 'Start'}</span>
        </button>
         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 150, paddingLeft: 100, paddingRight:100 }}>
        <CircularProgressbar
        value={(seconds/30)*100}
        text={seconds}
          styles={buildStyles(seconds > 5?{
            textColor: "gold",
            textSize:40,
        pathColor: "gold",
            trailColor: "transparent",
            pathTransitionDuration: 0.25,
          } : {
              textColor: "red",
            textSize:40,
        pathColor: "red",
              trailColor: "transparent",
            pathTransitionDuration: 0.5,
          })}
        />
       {/* <h1 style={{backgroundColor: "#FFBF00", borderRadius: "5px", width: "100px", color:"#fff", fontSize: 70}}>{seconds}</h1> */}
      </div>
        <button style={{ backgroundColor: 'white', border: "3px solid #162252", cursor: "pointer", borderRadius: 10, paddingLeft: 20, paddingRight: 20, paddingBottom:10, paddingTop:10, color: "#162252"}} onClick={reset}>
          <span style={{fontSize:16}}>Reset</span>
        </button>
      </div>
    </div>
        <span style={{fontSize:20, fontWeight: 'bold', color: 'gold'}}>Choose your twister 🎁</span>
      <br />
      <br />
      
<button className="button-27"  style={{width: 150,}} onClick={handleClick}><span style={{fontSize:18, color: "#fff"}} >Generate</span></button>
      <div style={{ border: "3px solid #f0f0f0", borderBottom: "10px solid #162252",backgroundColor: '#fff', height: 150, width: "50%", margin: "auto", marginTop:20, textAlign: "center",alignItems: "center", justifyContent: "center",}}>
<h1 style={{color: "#162252"}}>{twisters[twistNo-1]}</h1>
        
      </div>
    </div>
  )
}

export default Generate