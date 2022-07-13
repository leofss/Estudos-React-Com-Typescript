import React, { useState, ChangeEvent } from "react";


const State = () => {

    const [Text, SetText] = useState<string | null>(null);

    const HandleChange = (e : ChangeEvent<HTMLInputElement>) => {
        SetText(e.target.value); 
    }
    return (
        <div>
            <p>O texto é: {Text}</p>
            <input type = "text" onChange={HandleChange}/>
        </div>
        
    )
}


export default State