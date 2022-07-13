import React, { ReactElement } from "react";

interface Props{
    title : string
    content : string
    QtdComents : number
    tags : string[]
    category : Category
}

export enum Category{
    TS = "TypeScript",
    JS = "JavaScript",
    P = "Python",
}

const Destructuring = ({title, content, QtdComents, tags, category} : Props) => {
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
           <h4> Categoria : {category}</h4>     
        </div>
        
    )
}


export default Destructuring