import React from "react";

class Etapa2 extends React.Component{
    render(){
        return(
            < >
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input type="text" />
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Nenhum</option>
                    <option>Curso tecnoco</option>
                    <option>Curso de Ingles</option>
                </select>
                <br />
            </ >
        )
    }
}

export default Etapa2