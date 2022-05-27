import React from "react";
import styled from "styled-components";
import {FaSpotify} from "react-icons/fa"

const ContainerInicial = styled.div`
    width: 100vw;
    height: 100vh;
    padding-bottom: 100px;

    background-color: #11111170;
    box-sizing: border-box;
    background-image: url("https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?cs=srgb&dl=pexels-garrett-morrow-1649771.jpg&fm=jpg");
    background-size: contain;
    background-position: center;
    background-blend-mode: color-burn;

    overflow: hidden;
    
    color: #cccccc;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 4rem;
        margin-top: 0px;
    }

    span{
        color: #ff5500;
    }

    svg{
        width: 3.5rem;
        height: 3.5rem;
        color: #ff5500;
    }
    .Nome{
        position: fixed;
        bottom: 35px;

        input{
            height: 30px;
            box-sizing: border-box;

        }

        button{
            height: 30px;
            width: 55px;
            background-color: #55ff55;
            border: none;
            box-sizing: border-box;
            color:#002200;
            font-weight: bold;
            cursor: pointer;
        }
    }
`

class TelaInicial extends React.Component{
    render(){
        return(
            <ContainerInicial>
                
                <FaSpotify />
                <h1>labe<span>fy</span></h1>
                <div className="Nome">
                <input placeholder="Digite seu nome"
                    onChange={this.props.onchange}
                    value={this.props.value}
                />
                <button onClick={this.props.onClick}>Entrar</button>
                </div>
            </ContainerInicial>
        )
    }
}

export default TelaInicial