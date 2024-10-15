import React, { useState } from 'react'

export const UpdateButton = ({quantity,setQuantity}) => {
    let [quantity, setQuantity] = useState(1)
  return (
    <div>
        <button button onClick={() => setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0))}>
            -
        </button>
        <span>{quantity}</span>
        <button button onClick={() => setQuantity(prevQuantity => Math.max(prevQuantity + 1))}>
            +
        </button  >
        
    </div>
  )
}
