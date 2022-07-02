import styled from "styled-components"

const ContainerError = styled.div`
    box-sizing: border-box;
    overflow: hidden;
    
    width: 100vw;
    height: 100vh;
    background-color: #bbbbbb;

    display: flex;
    justify-content: center;
    align-items: center;

    .title{

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img{
            width: 300px;
        }
    }


`

const ErrorPage = () =>{
    return(
        <ContainerError>
            <div className="title">
                <img src="https://cdn-icons-png.flaticon.com/512/2026/2026506.png" />
                <h1> Erro - Pagina não Encontrada </h1>
            </div>
        </ContainerError>
    )
}

export default ErrorPage