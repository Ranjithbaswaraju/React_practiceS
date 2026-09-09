// import React from "react";
// import ChildComponent from "./Child";

import { useState } from "react";
import ChildComponent from "./Child";

// const ParentComponent=({name,age})=>{
//     return(
//         <>
//         <ChildComponent name={name} age={age}/>

//         </>
//     )
// }
// export default ParentComponent

// Child to Parent Props

const ParentComponent=()=>{
    const[data,sendData]=useState("Hello World")

    const handleClick=()=>{
        sendData("Bye World")
    }
    return(
       <>
        <ChildComponent sendData={handleClick}/>
        <p>Data:{data}</p>
       </>
    )
}
export default ParentComponent;