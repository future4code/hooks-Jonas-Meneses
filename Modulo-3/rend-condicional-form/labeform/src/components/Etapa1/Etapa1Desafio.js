import React from "react";
import PerguntaAberta from "../Desafio/PerguntaAberta";
import PerguntasFechadas from "../Desafio/PerguntasFechadas";

class Etapa1Desafio extends React.Component{
    
    render(){
        return(
            <>
                <h2> ETAPA 1 - DADOS GERAIS </h2>
                <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
                <PerguntaAberta pergunta={"2. Qual sua idade?"} />
                <PerguntaAberta pergunta={"3. Qual seu email?"} />
                <PerguntasFechadas pergunta={"4. Qual a sua escolaridade?"}
                    options={[
                        "Ensino médio incompleto",
                        "Ensino médio completo",
                        "Ensino superior incompleto",
                        "Ensino superior completo"
                      ]}
                />
                <br />
                
            </ >
        )
    }
}

export default Etapa1Desafio