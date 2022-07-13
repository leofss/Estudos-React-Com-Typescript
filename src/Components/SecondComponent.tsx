import React, { ReactElement } from "react";

interface Props{
    name : string
}

const SecondComp = (props : Props) => {
    return (
        <div>
            <p> Meu segundo componente</p>
            <p>Ele se chama {props.name}</p>       
        </div>
    )
}


export default SecondComp