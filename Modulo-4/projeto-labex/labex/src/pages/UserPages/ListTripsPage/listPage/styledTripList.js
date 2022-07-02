import styled from "styled-components";

export const ContainerTripList = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #bbbbbb;
    overflow: hidden;
    text-align: center;

    .containerButton{
        height: 60px;
       

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
                background-color: #5533ff;
            }
        }

    }

    .containerTrips{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;

    }
`