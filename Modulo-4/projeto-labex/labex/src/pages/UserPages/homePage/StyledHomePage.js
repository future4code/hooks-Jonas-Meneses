import styled from "styled-components"
import espace from "../../../Images/espace.jpg"

export const ContainerHomePage = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #8855ff20;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${espace}) ;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: color-burn;

    .container{
        width: 400px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: #ffffff90;
        border-radius: 30px;

        section{
            width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;

            button{
                padding: 10px;
                border: none;
                border-radius: 10px;
                background-color:#8855ff ;
                font-weight: bold;
                color: white;
                cursor: pointer;

                &:hover{       
                    outline-offset: -2px;
                    box-shadow: 1px  3px 3px #5522ff inset ;
                }
            }
        }
    }
`