import React from 'react'
import "./App.css"
import Generate from './Generate'
import Timer from './Timer'
import logo from "./images/jslogo.png"
import { useState } from 'react'
import Generate2 from './Generate2'
function App() {
  const [prelims, setPrelims] = useState(true)
  console.log(prelims)
  return (
    <div style={{ backgroundColor: "black", margin: 0 }}>
      <div className="container" >

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <p className="a">
            TECH TWISTER - <span style={{ fontSize: 80 }}>Prelims</span>
          </p>
        </div>
        <br />
        <div style={{ margin: "auto", textAlign: "center" }}>
          <Generate />
        </div>
      </div>
    </div>
  )
}

export default App