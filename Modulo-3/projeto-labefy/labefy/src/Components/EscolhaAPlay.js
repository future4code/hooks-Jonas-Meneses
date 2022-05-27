import React from "react";
import styled from "styled-components";

const ContainerEscolha = styled.div`
    width: calc(100% - 250px);  
    background-color: #333333;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background-image: url("https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?cs=srgb&dl=pexels-garrett-morrow-1649771.jpg&fm=jpg");
    background-size: contain;
    background-position: center;
    color: #cccccc;
`

class EscolhaAPlay extends React.Component{
    render(){
        return(
            <ContainerEscolha>
                <h1>Escolha uma PlayList</h1>
            </ContainerEscolha>
        )
    }
}

export default EscolhaAPlay