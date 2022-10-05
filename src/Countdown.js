import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const [percent, setPercent] = useState(0)
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
  );
};

export default Timer;