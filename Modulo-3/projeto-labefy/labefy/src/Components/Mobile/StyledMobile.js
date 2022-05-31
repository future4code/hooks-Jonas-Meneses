import styled, { keyframes } from "styled-components";

export const ContainerMobile = styled.div`
    @media(min-width:720px){
        display: none;
    }

    *{
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
    }
    
    background-color: #333333;
    width: 100vw;
    min-height: 100vh;
    text-align: center;
    

    header{
        background-color: #111111;
        width: 100%;
        height:50px ;
        overflow: hidden;

        h2{
            margin: 10px;
            color: #FF5500;
        }
    }

    .container{
        margin: 20px auto;
        margin-top: 24px;

        input{
            width: 80%;
            padding: 5px 5px;
            height: 2.3rem;
            background-color: #eeeeee;
            
        }

        .containerPlayList{
            display: grid;
            overflow-x: scroll;
            grid-template-columns: repeat(${(props) => props.colunas}, 150px) ;
            column-gap: 10px;
            margin: 16px auto 16px auto;
            padding: 5px;
            
            .play{
                border: 1px solid white;
                width: 100%;
                height: 100px;
                margin: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                flex-wrap:wrap;
                color: #dddddd;
                font-weight: bold;
                font-size: 1.5rem;
                background-color: #222222; 
                padding:5px ;
            }
        }
       
    }

    .flutauante{
        color: #FF5500;
        width: 3.5rem;
        height: 3.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
        position: absolute;
        bottom: 2.5rem;
        right: 1rem;
        transition:0.5s;
        transform: ${(props)=>props.show?"rotate(45deg)":"none"} ;
        z-index: 5;
        cursor: pointer;
        pointer-events: visible;
            
    }

    .criar{
        transition: 1s;
        animation: show 2s ease-in normal ;
        display: flex;
        pointer-events:  ${(props)=>props.show?"visible":"none"};
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;
        width: 90vw;
        height: ${(props)=>props.show? "90vh": "0vh" };
        position: absolute;
        left: 1rem;
        right: 1rem;
        bottom: 0rem;
        background-color: #222222;
        
        p{
            color: #dddddd;
            margin-bottom: 3px;
        }
        h3{
            margin: 24px auto 5px auto;
            color: #FF5500;
        }

        input{
            background-color: #eeeeee;
            margin-bottom: 5px;
            height: 2.3rem;
        }

        button{
            padding: 5px;
        }

        .AddMusica{
            width: 95%;
            display: ${(props)=>props.idPlayList?"flex":"none"};
            flex-direction: column;
            justify-content: center;
            margin: 20px auto;

            text-align: center;
            input{
                margin: 5px auto;
                background-color: #eeeeee;
                height: 2.3rem;
            }
            svg{
                width: 40px;
                height: 40px;
                color:#55ff55;
                margin-left: 30px;
            }

           .svgicon{
               color: #ff5555;
               margin: 10px auto;
           }
        }
    }

    .player{
        position: absolute;
        bottom: 0.5rem;
        left: 12%;
    }

    @keyframes show{
      0%{
          .criar{
              height: 0px;
          }
      }
      100%{
          .criar{
              height: 90vh
          }
      }  
}

`
export const CardMusic = styled.div`
border: 1px solid #888888;
padding: 10px;
width: 95%;
height: 120px;
box-sizing: border-box;
background-color: #222222;
border-radius: 10px;

h3,p{
    margin: 10px;
    color: #ffffff;
    word-wrap: break-word;
}

svg{
    width: 3rem;
    height: 2rem;
    color: #55ff55;
}

.del{
    color: #ff5555;
}

.buttons{
    margin: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
}

`

