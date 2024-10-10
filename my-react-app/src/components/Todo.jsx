import React, { useState } from 'react'
import {TodoList} from './TodoList'

export const Todo = () => {
    const [text,setText] = useState("");
    const [todo,SetTodo] = useState([]);

    const handleChange = (event)=>{
        setText(event.target.value)
    }

    const handleAddTodo = ()=>{
       const newItem =  {
            title: text,
            status:false,
            id:Date.now()+Math.random()
        }

     const todoAfterItemAddition = [...todo, newItem]
      SetTodo(todoAfterItemAddition);
      setText("");

    }
    console.log("text",text)
    console.log(todo)

    

  return (
    <div>
        <div>
            <input type="text" onChange={handleChange} value={text}/>
            {/* to store into text */}
            <button onClick={handleAddTodo}>Add</button> 
            {/* to store into todo */}
        </div>
        <ul>
            <li>
              <TodoList todo = {todo}/>
            </li>
        </ul>
    </div>
  )
  
}
