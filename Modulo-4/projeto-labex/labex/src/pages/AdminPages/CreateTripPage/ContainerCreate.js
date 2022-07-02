import styled from "styled-components";

export const ContainerCreate = styled.section`
    height: 100vh;
    width: 100vw;
    background-color: #999999;
    text-align: center;
    overflow: hidden;
    
    form{
        
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        height: 350px;

        select, input{
            width: 400px;
            height: 40px;
            border-radius: 10px;
            padding: 5px;
            box-sizing: border-box;
            border: 1px solid gray;
        }

        .conatinerButton{
            display: flex;
            
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
    }

`