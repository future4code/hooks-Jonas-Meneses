import React from "react";
import "./styled.css"

const CardPequeno = (props) =>{
   return (
    <div className="cardPequeno">
       <img src={props.img} />
        <p><strong>{props.info}:</strong> {props.conteudo} </p>
    </div>
    )
}

export default CardPequeno