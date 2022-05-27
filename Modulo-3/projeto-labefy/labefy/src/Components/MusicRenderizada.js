import React from "react";
import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io"
import CampoAddMusic from "./CampoAddMusic"

const ContainerMusic = styled.div`
    width: calc(100% - 250px);
    height: 100vh;
    background-color: #333333;
    box-sizing: border-box;
    padding: 0px;
    display: flex;
    color: #e5e5e5;

    main{
        width: calc(100% - 300px);
        text-align: center;
        color: #cccccc;

        .musicasRend{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            justify-items: center;
            align-items: center;
            box-sizing: border-box;
            gap: 10px ;
            border-top: 1px solid #bbbbbb;
            margin: 0px;


        }
    }

    .addRemove{
        box-sizing: border-box;
        width: 300px;
        height: 100%;
        padding: 0px;
        margin: 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #111111;


        .add, .remove{
            box-sizing: border-box;
            width: 100%;
            height: 30%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .svgicon{
                width: 60px;
                height: 60px;
                color: #55ff55;
                margin: 0px;
                cursor: pointer;
            }

            h3{
                margin:0px;
            }
        }

        .remove{
            .svgicon{
                color: #ff5555;
            }
        }
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

                <main>
                    <h2>{this.props.nomePlayList}</h2>
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
                </main>
                <div className="addRemove">

                    <div className="add">
                        <h3>Add Music</h3>
                        <CampoAddMusic
                            onchangeNome={this.props.onchangeNome}
                            valueNome={this.props.valueNome}
                            onchangeArtista={this.props.onchangeArtista}
                            valueArtista={this.props.valueArtista}
                            onchangeLink={this.props.onchangeLink}
                            valueLink={this.props.valueLink}
                            iconAdd={this.props.iconAdd}
                        />
                    </div>

                    <div className="remove">
                        <h3>Apagar esta PlayList</h3>
                        <IoIosCloseCircle onClick={this.props.iconRemove} className="svgicon" />
                    </div>

                </div>


            </ContainerMusic>
        )
    }
}

export default MusicRenderizada