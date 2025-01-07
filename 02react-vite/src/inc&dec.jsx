import { useState } from 'react'

function IncDec() {


    let [counter, setCounter]=  useState(15)
     //  let counter = 5
      const addValue = () =>{
       if (counter<20){
       setCounter(counter+1);
       setCounter((prev)=> prev+1)
      }}
   
      const subValue = () =>{
       if (counter>0){
         setCounter(counter-1);
        }
      }
   
     return (
       <>
        <h2>Harsh Agarwal</h2>
        <h3>Increase and decrease</h3>
        <h3>Counter value:{counter}</h3>
        <button
        onClick={addValue}>increase</button>
        <br />
        <button onClick={subValue}>decrease</button>
   
       </>
     )
   }
   
   export default IncDec
   