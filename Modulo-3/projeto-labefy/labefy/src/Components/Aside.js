import React from "react";
import styled from "styled-components";

const ContainerAsside = styled.aside`
    width: 250px;
    height: 100vh;
    background-color: #111111;
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    overflow: hidden;

    text-align: center;
    color: #e5e5e5;

    h1{
        font-size: 2.5em;
        margin: 10px;
    }

    span{
        color: #ff5500;
    }

    li{
        font-size: 1em;
        list-style: none;
        margin: 5px;
        cursor: pointer;
    }

    h3{
        margin: 10px;
        border-top: 1px solid #e5e5e5;
        padding: 10px;
    }

    input{
        margin-bottom: 10px;
    }
`

class Aside extends React.Component {

    render() {

        const listaRederizada = this.props.playList

        return (
            <ContainerAsside>
                <h1>
                    Labe<span>fy</span>
                </h1>
                <ul>
                    {listaRederizada.map(list => {
                        return (
                            <li key={list.id}
                                onClick={()=>this.props.onClicklList(list.id)}>
                                {list.name}
                            </li>
                        )
                    })}
                </ul>

                <h3>
                    Criar PlayList
                </h3>
                <input placeholder="Nome da PlayList"
                    onChange={this.props.onChange}
                    value={this.props.value}
                />

                <button onClick={this.props.onClick}>Criar</button>
            </ContainerAsside>
        )
    }
}

export default Aside