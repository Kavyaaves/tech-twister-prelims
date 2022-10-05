import React from 'react'
import "./App.css"
import Generate from './Generate'
import Timer from './Timer'
import logo from "./images/jslogo.png"
import { useState } from 'react'
import Generate2  from './Generate2'
function App() {
  const [prelims, setPrelims] = useState(true)
  console.log(prelims)
  return (
    <div style={{ backgroundColor: "black", margin: 0 }}>
        <div className="container" >
         
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
         <p className="a">
    TECH TWISTER
  </p>

        </div>
       <br/>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <button onClick={()=> setPrelims(true)} style={prelims ? {paddingTop: 5,paddingBottom: 5, backgroundColor: '#000080', borderRadius:0, border: "3px solid #000080", paddingLeft: 25, paddingRight: 25, color: "#fff", fontWeight: "bold"}:{paddingTop: 5,paddingBottom: 5, backgroundColor: 'transparent', borderRadius:0, border: "3px solid #fff", paddingLeft: 25, paddingRight: 25, color: "#fff", fontWeight: "bold"}}>Prelims</button>
          <button onClick={()=>setPrelims(false)} style={!prelims ? { paddingTop: 5, paddingBottom: 5, backgroundColor: '#000080', borderRadius: 0, border: "3px solid #000080", paddingLeft: 25, paddingRight: 25, color: "#fff", fontWeight: "bold" }: 
            { paddingTop: 5, paddingBottom: 5, backgroundColor: 'transparent', borderRadius: 0, border: "3px solid #fff", paddingLeft: 25, paddingRight: 25, color: "#fff", fontWeight: "bold" }}>Block and Tackle</button>
          </div>
        {/* <img src={require("https://drive.google.com/file/d/13edcdjKKJkjQhcwxahR_Kedc4OHyl0V5/view?usp=sharing")} className='js-logo' alt="Logo"/> */}
          <div style={{margin:"auto", textAlign:"center"}}>
                {/* <h1 className='j' style={{ margin: "auto", color: "#FFBF00" }}>TECH TWISTER</h1> */}
          {prelims ?
            <> <Timer />
              <Generate />
            </>
            : <>
              <Generate2 />
            </>}
          </div>
        </div>
      </div>
  )
}

export default App