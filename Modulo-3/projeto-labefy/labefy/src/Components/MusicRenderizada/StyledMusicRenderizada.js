import styled from "styled-components";


export const ContainerMusic = styled.div`
    width: calc(100% - 250px);
    height: 100vh;
    background-color: #333333;
    box-sizing: border-box;
    padding: 0px;
    display: flex;
    color: #e5e5e5;

    main{
        width: calc(100% - 300px);
        text-align: center;
        color: #cccccc;  

        .musicasRend{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            justify-items: center;
            align-items: center;
            box-sizing: border-box;
            row-gap: 10px ;
            border-top: 1px solid #bbbbbb;
            margin: 0px;
            padding-top: 15px;
        }
        
        audio{
            width: 30%;
            position: fixed;
            right: 38%;
            bottom: 5px;
        }
    }

    .addRemove{
        box-sizing: border-box;
        width: 300px;
        height: 100%;
        padding: 10px;
        overflow: hidden;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #111111;


        .add, .remove{
            box-sizing: border-box;
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .svgicon{
                width: 60px;
                height: 60px;
                color: #55ff55;
                margin: 0px;
                cursor: pointer;
            }

            h3{
                margin:0px;
            }
        }

        .remove{
            .svgicon{
                color: #ff5555;
            }
        }

       
    }

    @media(max-width:720px){
        display: none;
    }
`

export const CardMusic = styled.div`
    border: 1px solid #888888;
    padding: 10px;
    width: 95%;
    height: 105px;
    box-sizing: border-box;
    background-color: #222222;
    border-radius: 10px;

    h3,p{
        margin: 5px;
        color: #bbbbbb;
    }

    .buttons{
        margin: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    img{
        width: 20px;
    }
`