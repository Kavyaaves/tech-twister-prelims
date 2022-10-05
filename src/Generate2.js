import React, { useState } from 'react'
import "./Generate.css"
function Generate() {
  const [twistNo, setTwistNo] = useState(0)
  const twisters = [
    {
      content:"Black background, brown background"
    }, 
   { 
      content:""
    },
    {
      content:"She sells seashells by the seashore"
    },
    {
      content:"She sells seashells by the seashore"
    },
    {
      content:"How much wood would a woodchuck chuck if a woodchuck could chuck wood?"
    },
     {
      content:"gobbling gargoyles gobbled gobbling goblins"
    },
     {
      content:""
    },  
  ]
  const max = 5;
  const min = 1;
  const handleClick = async () => {
   
    let rand = Math.floor(Math.random() * (max - min + 1)) + min
    setTwistNo(rand)

  }
console.log(twistNo)

  return (
      <div>
          <br/>
        <span style={{fontSize:20, fontWeight: 'bold', color: 'gold', paddingTop: 20}}>Choose your topic 🎁</span>
      <br />
      <br />
      
<button className="button-27"  style={{width: 150,}} onClick={handleClick}><span style={{fontSize:18, color: "#fff"}} >Generate</span></button>
      <div style={{ border: "3px solid #f0f0f0", borderBottom: "10px solid #162252",backgroundColor: '#fff', height: 150, width: "50%", margin: "auto", marginTop:20, textAlign: "center",alignItems: "center", justifyContent: "center",}}>
<h1 style={{color: "#162252"}}>{twisters[twistNo-1]?.content}</h1>
        
      </div>
    </div>
  )
}

export default Generate