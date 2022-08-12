type Consulta ={
    nome:string,
    idade: number,
    dataDaConsulta: number | string
}


let consultas: Consulta[] = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
  ]

  const ordem = (consultas: Consulta[]): void  =>{
    const listaOdenada = consultas.sort( (a:Consulta , b:Consulta): any=>{
        if(a.nome < b.nome) { return -1}else{true}
        } 
        )
        return console.log(listaOdenada)
    }

    ordem(consultas)

    
  