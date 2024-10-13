import React, { useState,useEffect } from 'react'

export const Counter = () => {
    let [count,setCount]=useState(0);
    useEffect(()=>{console.log(count)},[count])
  return (
    <div>
        <button onClick={()=>{setCount(count+=1)}}>Increase+</button>
        <h4>{count}</h4>
        <button onClick={()=>{setCount(count-=1)}}>Decrease-</button>
    </div>
  )
}
