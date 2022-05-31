import styled from "styled-components";


export const ContainerInicial = styled.div`
    width: 100vw;
    height: 100vh;
    padding-bottom: 100px;

    box-sizing: border-box;
    background-color: #11111170;
    background-image: url("https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?cs=srgb&dl=pexels-garrett-morrow-1649771.jpg&fm=jpg");
    background-size: contain;
    background-position: center;
    background-blend-mode: color-burn;

    overflow: hidden;
    
    color: #cccccc;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 4rem;
        margin-top: 0px;
        animation: teste 2s ease-in-out normal;

    }

    span{
        color: #ff5500;
    }

    svg{
        width: 3.5rem;
        height: 3.5rem;
        color: #ff5500;
        animation: teste 2s ease-in-out normal;

    }
    .Nome{
        position: fixed;
        bottom: 35px;

        input{
            height: 30px;
            box-sizing: border-box;
            background-color: #eeeeee;
        }

        button{
            height: 30px;
            width: 55px;
            background-color: #55ff55;
            border: none;
            box-sizing: border-box;
            color:#002200;
            font-weight: bold;
            cursor: pointer;
        }
    }

    @media(max-width:720px){

        
        background-color: #111111;
        background-image:none; 
        h1{
        font-size: 3.5rem;
        transition: 0.5s;
        animation: teste 2s ease-in-out normal;
    }

    svg{
        width: 3.5rem;
        height: 3.5rem;
        animation: teste 2s ease-in-out normal;

    }

    .Nome{
        bottom: 150px;

        input, button{
            height: 25px;
            height: 2.3rem;
        }
    }


}

@keyframes teste {

    0%{
        opacity: 0;
        transform: translateY(-20px);
    }

    100%{
        opacity: 1;
        transform: translateY(0px);
    }
    
}

`

