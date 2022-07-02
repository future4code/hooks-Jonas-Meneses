import styled from "styled-components";

export const ContainerTripList = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    .trip{
        margin: 5px;
        width: 350px;
        height: 80px;
        background-color:  #aa77ff;

        display: flex;
        justify-content: space-between;
        align-items: center;

        text-align: left;

        
        
        .title{
            cursor: pointer;
            width: 80%;
            height: 100%;
            display: flex;
            align-items:center ;
            padding: 0px 10px;

            &:hover{
                background-color:  #aa55ff;

            }

            span{
                font-weight: bold;
            }
        }

        .button{
            cursor: pointer;
            width: 20%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover{
                background-color:  #aa55ff;

            }
            svg{
                width: 1.5rem;
                height: 1.5rem;
            }

        }
    }

`