// import React from "react";

// const ChildComponent=()=>{
//     const Name="Ranjith"
//     const age=25
//     return(
//         <>
//         <p>{Name}</p>
//         <p>{age}</p>
//         </>
//     )

// }
// export default ChildComponent


// Child to Parent Props

const ChildComponent=({sendData})=>{
    return(
        <>
        <p>Child Component</p>
        <button onClick={sendData}>Change Text</button>
        </>
    )

}
export default ChildComponent