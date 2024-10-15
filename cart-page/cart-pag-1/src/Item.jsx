import React, { useState } from 'react'
import { ItemName } from './ItemName'
import { UpdateButton } from './UpdateButton'

export const Item = () => {

    const [quantitites,setQuantities]  = useState([1,1,1]) // Initial quantities for the items
    const prices = [20,150,200]  // Prices for Noodles, Biryani, and Ice Cream respectively

    // Calculate the total cart value
    const totalCartValue = quantitites.reduce((total,quantity,index)=> total+total + quantity * prices[index], 0)

    

  return (
    <div> 
        <div>
            <ItemName name = "Noodles" price = "20"/>
            <UpdateButton />
        </div>
        <div>
        <ItemName name = "Biryani" price = "150"/><ItemName />
            <UpdateButton />
        </div>
        <div>
        <ItemName name = "Ice cream" price = "200"/><ItemName />
            <UpdateButton />
        </div>
    </div>
  )
}
