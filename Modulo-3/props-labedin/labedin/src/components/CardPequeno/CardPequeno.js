import React from "react";
import styled from "styled-components";


const ImgCardPequeno = styled.img`
    width: 20px;
    margin: 0px 10px;
`

const StyleCardPequeno = styled.div`
    width: 40vw;
    margin: 0px 10px;
    display: flex;
    border: 1px solid black;
    padding: 20px 10px;
    margin: 0px;
`

const CardPequeno = (props) =>{
   return (

        <StyleCardPequeno>
            <ImgCardPequeno src={props.img} />
            <p><strong>{props.info}:</strong> {props.conteudo} </p>
        </StyleCardPequeno>

    )
}

export default CardPequeno 
