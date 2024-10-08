import React, { useState } from 'react'

//Example: 1

// export const App = () => {

//   const[count, setCount] = useState(0)   //use state hook will return 2things and destructuring those 2 here 
//   //console.log(count);                 //we will store the state of the value 
//   //setCount is a function which is used to update the count value

//   // function handleClick(){
//   //   setCount(count+1);
//   // }
  
//   return (<button onClick={()=>{setCount(count+1)}}> Clicked {count} times!</button>)
  
// }

//Example:2 : 


// export const App = () => {
//   return (
//     <div>
//       <h1>Individual count will be updated</h1>
//        <MyButton/>
//        <MyButton/>
//     </div>
   
//   )
// }

// export function MyButton(){
//   const [count,setCount] = useState(0)

//   function handleClick(){
//     setCount(count+1)
//   }
//   return (
//     <button onClick={handleClick}>
//       clicked {count} times!
//     </button>
//   )
// }


//Example 3:

export function App(){

  const[count,setCount] = useState(0);
  function handleClick(){
    setCount(count+1)

  }

  //count = {count} is a prop here

  return(
    <div>
      <h1>Counter that update both buttons</h1>
    <MyButton count = {count} handleClick={handleClick}/>  
    <MyButton count = {count} handleClick={handleClick}/>
    </div>
  );
}

function MyButton({count,handleClick}){

  
  return(
    <button onClick={handleClick}>Clicked {count} times</button>
  )
}