import React from "react";

const CardComponent=({data})=>{
    return(
        <>
        <p>Name:{data.name}</p>
        <p>Age:{data.age}</p>
        <p>Address:{data.address}</p>
        
        </>
    )
}
export default CardComponent