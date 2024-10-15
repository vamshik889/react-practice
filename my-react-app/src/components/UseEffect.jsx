import React, { useEffect, useState } from 'react'

export const UseEffect = () => {
    const[count,setCount]  = useState(0);

    useEffect(()=>{  //useEffect will take 2 arguments 1 is function and another is array nothing but dependancy array
        const fetching = async()=>{
            try{
                let response = await fetch("https://jsonplaceholder.typicode.com/posts");
                let data = await response.json();
                console.log(data)
                
            }
            catch(error){
                console.log(error)
            }
        }
        fetching();
    },[])  //[]-->no dependancy, react uses useeffect only in mounting(creation) phasing of the component
            // [count] here we have the count dependency, hence the useeffcat will be called for every change
            //
  return (
    <>
    <div>{count}</div>
    <Button setCount = {setCount} count= {count} />
    </>
  )
}

function Button({count,setCount}){
    return (
        <button onClick={()=>setCount(count+1)}>Inc</button>
    )
}

