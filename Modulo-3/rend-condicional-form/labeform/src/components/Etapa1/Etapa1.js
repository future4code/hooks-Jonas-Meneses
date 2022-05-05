import React from "react";

class Etapa1 extends React.Component{
    
    render(){
        return(
            <>
                <h2> ETAPA 1 - DADOS GERAIS </h2>
                <p>1. Qual o seu nome?</p>
                <input type="text" />
                <p>2. Qual sua idade?</p>
                <input type="text" />
                <p>3. Qual seu email?</p>
                <input type="text" />
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option>Ensino Medio Completo</option>
                    <option>Ensino Medio Incompleto</option>
                    <option>Ensino Superior Completo</option>
                    <option>Ensino Superior Incompleto</option>
                </select>
                <br />
                
            </ >
        )
    }
}

export default Etapa1