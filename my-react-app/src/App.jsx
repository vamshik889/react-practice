import React, { useState } from 'react'
import  Input from './components/Input';
import  Props from './components/Props';
import  {Todo}  from './components/Todo';
import { Counter } from './components/Counter';
import { UseEffect } from './components/UseEffect';

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

// export function App(){

//   const[count,setCount] = useState(0);
//   function handleClick(){
//     setCount(count+1)

//   }

//   //count = {count} is a prop here

//   return(
//     <div>
//       <h1>Counter that update both buttons</h1>
//     <MyButton count = {count} handleClick={handleClick}/>  
//     <MyButton count = {count} handleClick={handleClick}/>
//     <Input />
//     <Props name = "Byounce" img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel = "+123 456 789" email = "b@beyonce.com"/>
    
//     <Props name = "Jack Bauer" img = "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" tel = "+123 456 789" email = "d@yonce.com"/>
//     <Props name = "Chuck Norris" img = "https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png" tel = "+123 456 777" email = "e@bonce.com"/>
//     </div>
//   );
// }

// function MyButton({count,handleClick}){  //{count,handleClick} are props here which are destructured 

  
//   return(
//     <button onClick={handleClick}>Clicked {count} times</button>
//   )
// }



export const App = () => {
  return (
    <div>
      {/* <Todo/> */}
      {/* <Counter/> */}
      <UseEffect/>
    </div>
  )
}
