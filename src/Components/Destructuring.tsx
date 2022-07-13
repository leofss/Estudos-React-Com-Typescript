import React, { ReactElement } from "react";

interface Props{
    title : string
    content : string
    QtdComents : number
    tags : string[]
}

const Destructuring = ({title, content, QtdComents, tags} : Props) => {
    return (
        <div>
           <h2> {title} </h2>
           <p> {content} </p>
           <p> Quantidade comentarios {QtdComents} </p>
           <div>
                {tags.map(tag => (
                    <span>#{tag}</span>
                ))}
           </div>     
        </div>
        
    )
}


export default Destructuring