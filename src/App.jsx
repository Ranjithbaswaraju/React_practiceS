// import { useState } from 'react'
// import './App.css'
// // import ParentComponent from './Components/Parent'
// import HomePage from './Screens/Home'
// import AboutPage from './Screens/About'

// function App() {
//   const[isHome,setIsHome]=useState(true)
 
//   return(
//     <>
//     <button onClick={()=>setIsHome(true)}>Home</button>
//     <button onClick={()=>setIsHome(false)}>About</button>

//     {
//       isHome ? <HomePage/> : <AboutPage/>
//     }
    
//     </>
//   )
// }

// export default App


import React, { useState } from "react";
import CardComponent from "./Screens/CardComponent";

function App(){
  const[hide,setHide]=useState(true)
    const data={
      Name:"Ranjith",
      Age:24,
      Address:"Cherial",

    }

    return(
      <>
       {hide ? <CardComponent data={data} /> : null}
      {
        <button onClick={()=>setHide(!hide)}>{hide ? "Show Profile" : "Hide Profile"}</button>
      }
      </>
    )
}
export default App;