import React from 'react'

export const TodoList = ({todo}) => {
  return <>
    
       {todo.map((item)=>{
        return(
          
          <li key ={item.id}>{item.title} - {item.status?"Completed":"Not completed"}</li>
        )
      })} 
    
    </>
  
}
