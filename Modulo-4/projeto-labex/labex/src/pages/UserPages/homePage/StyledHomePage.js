import styled from "styled-components"
import espace from "../../../Images/espace.jpg"
import fontSpace from './spacerangergradital.ttf'

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

        @font-face {
        font-family:'space' ;
        src: url(${fontSpace}) format("truetype") ;
        font-size: normal;
    }

        width: 500px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ffffff90;
        border-radius: 30px;

        h1{
            font-family: 'space';
            font-size: 5rem;
            margin: 20px;
            

            span{
                color:#7744ff;
                font-size: 1.2em;
            }
        }

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