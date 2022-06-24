import styled from "styled-components";

 export const ContainerApplication = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: #999999;
    
    section{
        
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
    }
`