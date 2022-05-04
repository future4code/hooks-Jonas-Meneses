import React from "react";

class PerguntaAberta extends React.Component{

    render(){
        return(
            <>
                <p>{this.props.pergunta}</p>
                <input type="text" />
            </>
        )
    }
}

export default PerguntaAberta