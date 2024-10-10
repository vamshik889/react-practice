
import React, { useState } from 'react'

 const Input = () => {
    const[text,setText] = useState("")
    function textFun(event){
        setText(event.target.value);    
    }
   
  return (
    <div>
        <input type="text" onChange = {textFun} />
        <h1>You enetered text as {text}</h1>
        </div>
  )
}

export default Input;