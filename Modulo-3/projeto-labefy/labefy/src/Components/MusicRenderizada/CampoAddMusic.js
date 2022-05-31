import React from "react";
import styled from "styled-components";
import { IoIosAddCircle } from "react-icons/io"


const ContainerInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 25px;
    box-sizing: border-box;
    overflow: hidden;
    padding-top:10px ;
    height: 400px;

    input{
        margin: 5px;
    }

    svg{
        color:#55ff55;
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    p{
        color: #dddddd;
        margin: 5px;

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
                <p>link para add musica:</p>
                <p>http://spoti4.future4.com.br/2.mp3</p>
            </ContainerInputs>
        )
    }
}

export default CampoAddMusic