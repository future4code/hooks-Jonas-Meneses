
import styled from "styled-components";

export const ContainerTripListAdmin = styled.div`
    background-color: #bbbbbb;
    min-height: 100vh;
    width: 100vw;
    text-align: center;
    overflow: hidden;

    .containerButton{

        button{
            margin: 10px;
            padding: 8px;
            border: none;
            border-radius: 10px;
            background-color :#8855ff;

            font-weight: bold;
            font-size: 1em;
            color: #dddddd;

            cursor: pointer;
            box-shadow: 2px 2px 5px #00000080;

            &:hover{
                background-color:  #aa55ff;

            }
        }
    }

    .renderedList{
        width: 100%;
        display: flex;
        justify-content: center;

    }
`