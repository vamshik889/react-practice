import React from "react";


export const Props = (props) => {
    console.log(props)
    
  return (
    <div>
    <h1>My Contacts:</h1>

    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>

    
  </div>
  )

}

export default Props;

