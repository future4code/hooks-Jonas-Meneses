import React from "react"

class PerguntasFechadas extends React.Component{
    
    renderizaOptions = () =>{
        const array = this.props.options
        return(
            array.map((item, id) =>{
                return(
                    <option key={id} value={item} > {item}</option>
                )
            }
            )
        )
    }

    render(){
       
        return(

            <>
                <p>{this.props.pergunta}</p>
                <select>
                   {this.renderizaOptions()}
                   
                </select>
            </>
        )
    }
}

export default PerguntasFechadas