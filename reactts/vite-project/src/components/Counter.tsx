import { useState } from "react";

export const Counter=()=>{
    
    const [count,setCounter]=useState<number>(0);
  
    return(
        <div>
        <p>Cups ordered:{count}</p>
        <button onClick={()=>setCounter((prev)=>prev+1)}>Increase count</button>
        </div>
    )
    }
