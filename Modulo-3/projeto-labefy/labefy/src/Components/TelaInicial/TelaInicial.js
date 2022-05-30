import React from "react";
import {FaSpotify} from "react-icons/fa"
import {ContainerInicial} from './StyledTelaInicial'


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