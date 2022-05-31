import styled from "styled-components";

export const ContainerAsside = styled.aside`
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
        border-bottom:1px solid #e5e5e5;
        padding: 8px;
    }

    span{
        color: #ff5500;
    }

    ul{
        border-top: 1px solid #e5e5e5;
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

    @media (max-width:720px) {
        display: none;
}
`