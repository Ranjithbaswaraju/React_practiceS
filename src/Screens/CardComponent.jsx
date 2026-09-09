import React from "react";

const CardComponent=({data})=>{
    return(
        <>
        <p>Name: {data.Name}</p>
        <p>Age: {data.Age}</p>
        <p>Address: {data.Address}</p>
        
        </>
    )
}
export default CardComponent