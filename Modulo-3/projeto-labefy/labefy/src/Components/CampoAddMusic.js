import React from "react";
import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io"


const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    

    input{
        margin: 5px;
    }

    svg{
        color:#55ff55;
        width: 40px;
        height: 35px;
        cursor: pointer;
    }
`

class CampoAddMusic extends React.Component {
    render() {
        return (
            <ContainerInputs>
                <input placeholder="Nome da Musica" onChange={this.props.onchangeNome}
                    value={this.props.valueNome} />
                <input placeholder="Artista ou banda" onChange={this.props.onchangeArtista}
                    value={this.props.valueArtista} />
                <input placeholder="link " onChange={this.props.onchangeLink}
                    value={this.props.valueLink} />
                <IoIosAddCircle onClick={this.props.iconAdd} />
            </ContainerInputs>
        )
    }
}

export default CampoAddMusic