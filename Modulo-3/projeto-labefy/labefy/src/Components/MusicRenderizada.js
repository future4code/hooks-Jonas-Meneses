import React from "react";
import styled from "styled-components";

const ContainerMusic = styled.div`
    width: calc(100% - 250px);
    height: 100vh;
    background-color: #333333;
    box-sizing: border-box;
    padding: 10px;


    .musicasRend{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        align-items: center;
        box-sizing: border-box;
        gap: 10px ;

    }
`

const CardMusic = styled.div`
    border: 1px solid #888888;
    padding: 10px;
    width: 95%;
    height: 105px;
    box-sizing: border-box;
    background-color: #222222;
    border-radius: 10px;

    h3,p{
        margin: 5px;
        color: #bbbbbb;
    }

    .buttons{
        margin: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    img{
        width: 20px;
    }
`

class MusicRenderizada extends React.Component {
    render() {
        const listaMusic = this.props.listaMusic
        return (
            <ContainerMusic>
                <div className="addRemove">

                </div>
                <div className="musicasRend">
                    {listaMusic.map(msc => {
                        return (
                            <CardMusic>
                                <h3> {msc.name}</h3>
                                <p>{msc.artist}</p>
                                <div className="buttons">
                                    <img src="https://cdn-icons-png.flaticon.com/512/1069/1069272.png"
                                        onClick={() => this.props.play(msc.id)} />
                                    <img src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
                                        onClick={() => this.props.delete(msc.id)} />
                                </div>
                            </CardMusic>
                        )
                    })}
                </div>

            </ContainerMusic>
        )
    }
}

export default MusicRenderizada